pipeline {
  agent any
  stages {
    stage('Staging Environment Deploy') {
      steps {
        sh 'docker-compose -f docker-compose-staging.yml build'
        sh 'docker-compose -f docker-compose-staging.yml down'
        sh 'docker-compose -f docker-compose-staging.yml up -d'
      }
    }
  }
}