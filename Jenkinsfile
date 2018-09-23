pipeline {
  agent any
  environment {
    PATH = "$PATH:/usr/local/bin"
  }
  stages {
    stage('Production Environment Deploy') {
      steps {
        sh 'sudo docker-compose -f docker-compose-production.yml build'
        sh 'sudo docker-compose -f docker-compose-production.yml down'
        sh 'sudo docker-compose -f docker-compose-production.yml up -d'
      }
    }
  }
}