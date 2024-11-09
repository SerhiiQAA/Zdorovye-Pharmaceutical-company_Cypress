pipeline {
    agent any

    tools {
        nodejs 'Node' // Ім'я NodeJS установки, яке ви налаштували у Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SerhiiQAA/Zdorovye-Pharmaceutical-company_Cypress.git'
            }
        }

        stage('Install Cypress') {
            steps {
                sh 'npm install'
                sh 'npx cypress install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
