pipeline {
  agent any
    stage('Docker') {
      agent {
        docker {
          image 'docker:latest'
        }

      }

      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerdasoji', passwordVariable: 'DKR_PASSWORD', usernameVariable: 'DKR_USERNAME')])
        {
          sh 'docker build . -t dasoji/webspa'
          sh 'docker login -u $DKR_USERNAME -p $DKR_PASSWORD'
          sh 'docker push dasoji/webspa'
        }
      }

    }
  }
}
