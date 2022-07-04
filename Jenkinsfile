pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                jiraComment body: 'This comment was sent by jenkins', issueKey: 'SHEV-1'
            }
        }
    }
}
