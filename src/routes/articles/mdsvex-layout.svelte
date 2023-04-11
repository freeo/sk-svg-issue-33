<script>
export let title;
export let date;
export let author;
export let tags;
</script>

<article>
	<h1>{title}</h1>

	<p>Published: {date}</p>
	<br />

	<p>author: {author}</p>
	<br />

	<p>tags: {tags}</p>
	<br />

	<slot />
</article>
