pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('build') {
            steps {
                sh 'docker build -t breeze-front .'
            }
        }
        stage('deploy') {
            steps {
                sh 'docker rm breeze-front'
                sh 'docker cp breeze-front:/app/dist /home/lighthouse/nginx/site/breeze'
            }
        }
    }
}
