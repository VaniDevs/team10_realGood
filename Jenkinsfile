pipeline {
  agent any
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