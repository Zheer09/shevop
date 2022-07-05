pipeline {
    agent any 
    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-cred-raja')
	}
    tools {nodejs "nodejs" Docker "docker"}
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
        stage('Docker build') {
            steps {
                sh 'docker build -t shevop/questionApp:latest .'
            }
        }
        stage('Docker login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Docker push') {
            steps {
                sh 'docker push shevop/questionApp:latest'
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
    post {
		always {
			sh 'docker logout'
		}
	}
}
