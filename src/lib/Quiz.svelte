<script lang="ts">
	import { questions } from '$lib/qu';
	let _questions = [
		{
			question: 'What is the capital of France?',
			options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
			answer: 2
		},
		{
			question: 'What is 2⁴ + 4²?',
			options: ['34', '42', '32', '44'],
			answer: 2
		},
		{
			question: 'Who developed Svelte?',
			options: ['Rich Harris', 'Evan You', 'Dan Abramov', 'Ryan Dahl'],
			answer: 0
		}
	];

	let currentQuestionIndex = $state(0);
	let selectedOption: null | number = $state(null);
	let score = $state(0);
	let quizCompleted = $state(false);
	let selected: (number | null)[] = $state([]);
	function checkAnswer() {
		selected.push(selectedOption);
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
		selected = [];
	}
</script>

<main class="w-full">
	{#if !quizCompleted}
		<p class="mb-4 inline">
			Selected:
			{#each selected as s, i}
				{i + 1}.<span class="rounded-full border p-1">{s + 1}</span> &nbsp; &nbsp;
			{/each}
		</p>
		<h2 class="mb-4 text-2xl">
			{currentQuestionIndex + 1} )&nbsp;{questions[currentQuestionIndex].question}
		</h2>

		{#each questions[currentQuestionIndex].options as option, index}
			<label
				class="left mb-0 inline-block w-full rounded-sm border border-gray-300 p-2 has-checked:border has-checked:bg-gray-900/30"
			>
				<input
					type="radio"
					class="peer w-0 accent-blue-500 not-checked:w-0"
					bind:group={selectedOption}
					name="answer"
					value={index}
				/>
				<span class="left w-full text-lg peer-checked:text-gray-900">{option} </span>
			</label>
		{/each}

		<button
			class="w-full rounded-sm border bg-gray-900 text-gray-50 disabled:bg-gray-300"
			onclick={checkAnswer}
			disabled={selectedOption === null}
		>
			Next
		</button>
	{:else}
		<div class="prose w-full rounded-md border border-gray-300 p-4 [p]:text-[18px]">
			<p class="text-xl">Your score: {score} / {questions.length}</p>
			<h3 class="text-3xl font-bold">{((score / questions.length) * 100).toFixed(2)}</h3>
			{#if score >= questions.length / 2}
				<p>Good job</p>
			{:else if score === 0}
				<p>Nice try</p>
			{/if}
			<div class="mb-4 inline">
				Result:
				<br />
				{#each selected as s, i}
					<p class="left-align left text-xl">{i + 1 + ') ' + questions[i].question}.</p>
					<br />
					<span
						data-correct={s === questions[i].answer}
						class="m-2 mt-6 rounded-sm border bg-red-300 p-1 data-[correct=true]:bg-teal-400"
					>
						&nbsp;{'' + questions[i].options[s]}</span
					>
					{#if s !== questions[i].answer}
						<br />
						<span class="bg-teal-300"
							>Correct answer: &nbsp;{questions[i].options[questions[i].answer]}
						</span>
					{/if}
					&nbsp; &nbsp; <br />
					<br />
				{/each}
			</div>
			<button
				class="center block rounded-sm border p-2 text-3xl active:text-red-400"
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

	button {
		margin-top: 20px;
		padding: 10px 20px;
		font-size: 16px;
	}
	input[type='radio']:checked {
		background-color: red;
	}
</style>
