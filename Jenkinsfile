pipeline
{
  agent any
  stages
  {
    stage('Docker')
    {
      agent
      {
        docker
        {
          image 'docker:latest'
        }
      }
      steps
      {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DKR_PASSWORD', usernameVariable: 'DKR_USERNAME')])
        {
          sh 'docker build . -t dasoji/webspa'
          sh 'docker login -u $DKR_USERNAME -p $DKR_PASSWORD'
          sh 'docker push dasoji/webspa'
        }
      }
    }
  }
}
