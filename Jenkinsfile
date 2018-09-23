pipeline {
  agent any
  environment {
    PATH = "$PATH:/usr/local/bin"
    DOCKER_HOST = "127.0.0.1"
  }
  stages {
    stage('Production Environment Deploy') {
      steps {
        sh 'docker-compose -f docker-compose-production.yml build'
        sh 'docker-compose -f docker-compose-production.yml down'
        sh 'docker-compose -f docker-compose-production.yml up -d'
      }
    }
  }
}