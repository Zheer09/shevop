import React, { useState } from 'react';
import Data from "./answers.json";

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: Data.at(0).text, isCorrect: Data.at(0).answer },
				{ answerText: Data.at(1).text, isCorrect: Data.at(1).answer },
				{ answerText: Data.at(2).text, isCorrect: Data.at(2).answer },
				{ answerText: Data.at(3).text, isCorrect: Data.at(3).answer },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: Data.at(4).text, isCorrect: Data.at(4).answer },
				{ answerText: Data.at(5).text, isCorrect: Data.at(5).answer },
				{ answerText: Data.at(6).text, isCorrect: Data.at(6).answer },
				{ answerText: Data.at(7).text, isCorrect: Data.at(7).answer },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: Data.at(8).text, isCorrect: Data.at(8).answer },
				{ answerText: Data.at(9).text, isCorrect: Data.at(9).answer },
				{ answerText: Data.at(10).text, isCorrect: Data.at(10).answer },
				{ answerText: Data.at(11).text, isCorrect: Data.at(11).answer },
			],
		},
		{
			questionText: 'What is the airspeed velocity of an unladen swallow?',
			answerOptions: [
				{ answerText: Data.at(12).text, isCorrect: Data.at(12).answer },
				{ answerText: Data.at(13).text, isCorrect: Data.at(13).answer },
				{ answerText: Data.at(14).text, isCorrect: Data.at(14).answer },
				{ answerText: Data.at(15).text, isCorrect: Data.at(15).answer },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	function refreshPage(){ 
		window.location.reload(); 
	}
	return (
		<div className='app'>
			{showScore ? (
				<div>
					<br/><br/><br/>
				<div className='score-section'>
					You scored {score} out of {questions.length}  
					<br/>
				</div>
				
				
				<button type="button" onClick={ refreshPage }> <span>Try Again</span> </button> 
			
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
