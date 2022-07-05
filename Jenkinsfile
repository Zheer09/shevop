pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                jiraComment body: 'This comment was sent by jenkins', issueKey: 'SHEV-1'
            }
        }
        stage('Execute JMeter') {
            steps {
            
                sh """
                jmeter -n -t "Test Plans/PetStore-End-to-End-Flow.jmx" -p "Test Plans/data/PetStore_LoadTest.properties" -JTOTAL_THREADS=2 -JTEST_DURATION=60 -l MyRun1.jtl
                """
            
            }
        }
        stage('Publish Report') {
            steps {
            
                perfReport filterRegex: '', sourceDataFiles: '**/*.jtl'
            
            }
        }
    }
}
