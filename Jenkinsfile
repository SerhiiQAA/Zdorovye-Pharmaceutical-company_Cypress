pipeline {
    agent any

    tools {
        nodejs 'Node' // Ім'я NodeJS установки, яке ви налаштували у Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/SerhiiQAA/Zdorovye-Pharmaceutical-company_Cypress.git'
            }
        }

        stage('Install Cypress') {
            steps {
                sh 'npm install'
                sh 'npx cypress install'
                sh 'npm install --save-dev cypress-mochawesome-reporter'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post { always { 
        archiveArtifacts artifacts: 'mochawesome-report/*.html', allowEmptyArchive: true 
        publishHTML([ 
        allowMissing: false, 
        alwaysLinkToLastBuild: true, 
        keepAll: true, reportDir: 'mochawesome-report', 
        reportFiles: 'mochawesome.html', 
        reportName: 'Cypress Test Report' 
    ]) 
    cleanWs() }
    }
}
