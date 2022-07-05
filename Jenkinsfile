pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                jiraComment body: 'This comment was sent by jenkins1', issueKey: 'SHEV-1'
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
        stage('Publish Report') {
            steps {
            
                perfReport filterRegex: '', sourceDataFiles: 'TestPlans/MyRun1.jtl'
            
            }
        }
    }
}
