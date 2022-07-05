pipeline {
    agent any 
    tools {nodejs "nodejs"}
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Deploy') {
            steps {
                sh ''
            }
        }
        stage('Update jira Issue') {
            steps {
                jiraComment body: 'This comment was sent by jenkins', issueKey: 'SHEV-1'
            }
        }
        stage('Execute JMeter') {
            steps {
                
            sh '''
               #!/bin/bash -c cd /opt/apache-jmeter-5.5/bin
               #!/bin/bash -c ./jmeter -n -t TestPlans/PetStore-End-to-End-Flow.jmx -p TestPlans/data/PetStore_LoadTest.properties -JTOTAL_THREADS=1 -JTEST_DURATION=60 -l MyRun1.jtl
               '''
            }
        }
        stage('Publish JMeter Report') {
            steps {
            
                perfReport filterRegex: '', sourceDataFiles: 'TestPlans/MyRun1.jtl'
            
            }
        }
    }
}
