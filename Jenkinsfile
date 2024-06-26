pipeline {
    agent any
    environment {
        MYSQL_URL = credentials("MYSQL_URL")
        MYSQL_USER = credentials("MYSQL_USER")
        MYSQL_PASS = credentials("MYSQL_PASS")
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'composer install'
            }
        }
        stage('Build') {
            steps {
                sh 'php bin/console cache:clear --env=prod'
            }
        }
        stage('Deploy') {
            steps {
                sh 'symfony server:start'
            }
        }
    }
    post {
        always {
            script {
                // Configuración del remitente y destinatarios
                emailext (
                    subject: "Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: """<p>Build ${env.JOB_NAME} #${env.BUILD_NUMBER} finished with status: ${currentBuild.currentResult}</p>
                             <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
                    to: 'nancyfer.280302@gmail.com',
                    from: 'nancyfer.280302@gmail.com',
                )
            }
        }
        success {
            script {
                // Notificación en caso de éxito
                emailext (
                    subject: "SUCCESS: Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: """<p>Build ${env.JOB_NAME} #${env.BUILD_NUMBER} finished successfully.</p>
                             <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
                    to: 'nancyfer.280302@gmail.com',
                    from: 'nancyfer.280302@gmail.com',
                )
            }
        }
        failure {
            script {
                // Notificación en caso de fallo
                emailext (
                    subject: "FAILURE: Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: """<p>Build ${env.JOB_NAME} #${env.BUILD_NUMBER} failed.</p>
                             <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
                    to: 'nancyfer.280302@gmail.com',
                    from: 'nancyfer.280302@gmail.com',
                )
            }
        }
    }
}
