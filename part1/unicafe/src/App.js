import React, { useState } from "react";

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<NewButton text="good" handler={() => setGood(good + 1)} />
			<NewButton
				text="neutral"
				handler={() => setNeutral(neutral + 1)}
			/>
			<NewButton text="bad" handler={() => setBad(bad + 1)} />
			<h1>statistics</h1>
			<Statistics nums={{ good: good, neutral: neutral, bad: bad }} />
		</div>
	);
};


const Statistics = ({ nums }) => {
	const { good, neutral, bad } = nums;
	if (good === 0 && neutral === 0 && bad === 0)
		return <p>No feedback given</p>;
	return (
		<table>
			<tbody>
				<BeautifyLine text="good" num={good} />
				<BeautifyLine text="neutral" num={neutral} />
				<BeautifyLine text="bad" num={bad} />
				<BeautifyLine text="average" num={(good-bad)/(good+bad+neutral)}/>
				<BeautifyLine
					text="positive"
					num={(good/(good + bad + neutral))*100}
					afterText="%"
				/>
			</tbody>
		</table>
	);
};

const NewButton = ({ text, handler }) => (
	<button onClick={handler}>{text}</button>
);

const BeautifyLine = ({ text, num, afterText }) => (
	<tr>
		<td>{text}</td>
		<td>
			{num}
			{afterText}
		</td>
	</tr>
);



export default App;