pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "$HOME/.cache/Cypress"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/SerhiiQAA/Zdorovye-Pharmaceutical-company_Cypress.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npx cypress run'
                    } else {
                        bat 'npx cypress run'
                    }
                }
            }
        }

        stage('Archive Results') {
            steps {
                archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
                junit 'cypress/results/*.xml'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
