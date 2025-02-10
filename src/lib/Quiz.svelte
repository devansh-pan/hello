<script lang="ts">
	let questions = [
		{
			question: 'What is the capital of France?',
			options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
			answer: 2
		},
		{
			question: 'What is 2 + 2?',
			options: ['3', '4', '5', '6'],
			answer: 1
		},
		{
			question: 'Who developed Svelte?',
			options: ['Rich Harris', 'Evan You', 'Dan Abramov', 'Ryan Dahl'],
			answer: 0
		}
	];

	let currentQuestionIndex = $state(0);
	let selectedOption: null = $state(null);
	let score = $state(0);
	let quizCompleted = $state(false);

	function checkAnswer() {
		if (selectedOption === questions[currentQuestionIndex].answer) {
			score++;
		}
		if (currentQuestionIndex < questions.length - 1) {
			currentQuestionIndex++;
			selectedOption = null;
		} else {
			quizCompleted = true;
		}
	}

	function restartQuiz() {
		currentQuestionIndex = 0;
		selectedOption = null;
		score = 0;
		quizCompleted = false;
	}
</script>

<main class="w-full">
	{#if !quizCompleted}
		<h2 class="mb-2 text-2xl">{questions[currentQuestionIndex].question}</h2>

		{#each questions[currentQuestionIndex].options as option, index}
			<label
				class="mb-1 inline-block w-full rounded-md border left border-gray-400 p-2 has-checked:border-[2px] has-checked:border-teal-700"
			>
				<input
					type="radio"
					class="peer w-0 accent-blue-50/0"
					bind:group={selectedOption}
					name="answer"
					value={index}
				/>
				<span class="w-full text-lg peer-checked:text-teal-800 left">{option} </span>
			</label>
		{/each}

		<button
			class="w-75 rounded-sm border bg-teal-500 disabled:bg-gray-300"
			onclick={checkAnswer}
			disabled={selectedOption === null}
		>
			Next
		</button>
	{:else}
		<div class="prose w-full rounded-md border border-gray-300 p-4 [p]:text-[18px]">
			<h2 class="mb-2 text-3xl">Quiz Completed!</h2>
			<p>Your score: {score} / {questions.length}</p>
			{#if score >= questions.length / 2}
				<p>Good work</p>
			{:else if score === 0}
				<p>You lost</p>
			{/if}
			<button
				class="rounded-sm border border-gray-300 p-4 text-xl active:text-teal-200"
				onclick={restartQuiz}>Restart</button
			>
		</div>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 2rem;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		margin: 10px 0;
	}
	button {
		margin-top: 20px;
		padding: 10px 20px;
		font-size: 16px;
	}
	input[type='radio']:checked {
		background-color: red;
	}
</style>
