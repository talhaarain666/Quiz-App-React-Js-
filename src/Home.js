import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { getData } from './firebaseConfig/firebaseMethods';

function Home() {

	const [data, setData] = useState([]);
	const [optionsDataArray, setOptionsDataArray] = useState([]);
	const [question, setQuestion] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [SelectedOptionIndex, setSelectedOptionIndex] = useState(null);
	const [value, setValue] = useState(null);
	const [score, setScore] = useState(0);

	useEffect(() => {
		getData().then((res) => {
			setData(res)

			const optionsArray = Object.values(res[question])

			setOptionsDataArray(optionsArray.slice(1, 5))

		})
	}, [question])

	// Selected Yellow
	let handleValue = (v, i) => {
		setValue(v)
		setSelectedOptionIndex(i)
	}

	// Continue button
	let continueBtn = () => {
		setSelectedOptionIndex(null)
		setQuestion(question + 1)

		if (value == data[question].rightAnswer) {
			setScore(score + 5)
			setCorrectAnswers(correctAnswers + 1)
		}
		// if (data.length == question + 1) {
		// 	console.log(score)
		// }
	}

	return (<>

		<div className='App'>
			<Box sx={{
				background: "linear-gradient(to top, #200122, #6f0000)"
				, width: "50%", height: "60%", padding: "3%", position: "relative",
				boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", textAlign: "center"
			}}>

				{/* Heading */}
				<Typography variant='h6' className='appHeading' sx={{ position: "absolute", top: -15, left: 0 }}>Quiz App</Typography>
				{/* Question Count */}
				<Typography variant='h5' sx={{ display: data.length == question ? "none" : "block", color: "white", position: "absolute", top: -15, right: -15, borderRadius: "50%", backgroundColor: "#161f26", border: "2px solid red", padding: "0.5em" }}>{data[question] ? question + 1 + "/" : ""}{data[question] ? data.length : ""}</Typography>


				{/* Question */}
				<Typography variant='h4' sx={{ color: "white", paddingBottom: "8%" }}>
					{data[question] ? data[question].question : ""}
				</Typography>

				{/* Options */}
				{data[question] && optionsDataArray.map((e, i) => {
					return <>
						<Box display={"flex"} justifyContent="center" alignItems={"center"}>
							<Button className='btnOptions' sx={{ backgroundColor: "#e0091f", width: "60%", marginY: "2%", color: "white", color: SelectedOptionIndex === i ? 'yellow' : "white" }} onClick={() => handleValue(e, i)} >{e}</Button>
						</Box>
					</>
				})}



				{/* // Score */}

				<Box sx={{ display: question != 0 && question === data.length ? "block" : "none" }}>
					<Typography variant='h3' sx={{ color: "white", paddingBottom: "5%" }}>Your Score: {score}</Typography>
					<Typography variant='h4' sx={{ color: "lightgrey", paddingBottom: "5%", textAlign: "center" }}>Total Questions: {data.length}</Typography>
					<Box display={"flex"} justifyContent="space-around">
						<Typography variant='h5' sx={{ color: "green", paddingBottom: "2%", textAlign: "center" }}>Correct Answers: {correctAnswers}</Typography>
						<Typography variant='h5' sx={{ color: "red", paddingBottom: "2%", textAlign: "center" }}>Wrong Answers: {data.length - correctAnswers}</Typography>
					</Box>
				</Box>



				{/* Continue Button */}

				<Button color='error' variant='contained'
					// disabled={questions.length == question}
					disabled={value === null || !data[question]}
					sx={{ position: "absolute", bottom: 0, right: 0 }} onClick={continueBtn}>Continue</Button>
			</Box >
		</div>


	</>
	)
}

export default Home