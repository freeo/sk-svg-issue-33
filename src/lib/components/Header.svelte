<script>
import Head_btn from './Head-btn.svelte';
</script>

<header class="sticky top-0 z-20">
	<div class="flex justify-center bg-black ">
		<div class="grid grid-cols-4 sm:w-5/12 ">
			<Head_btn label="Home" active="true" />
			<Head_btn label="Artikel" />
			<Head_btn label="Kontakt" />
		</div>
	</div>
</header>
