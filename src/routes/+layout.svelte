<script lang="ts">
import '../app.css';
import Footer from '$lib/components/Footer.svelte';
</script>

<!-- <main class="font-light"> -->
<main>
	<div class="mx-auto max-w-md max-w-screen-2xl bg-white">
		<div class="mx-auto max-w-screen-2xl bg-white ">
			<!-- <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2" > -->
			<slot />

			<Footer />
			<!-- <footer class="bg-red-700 text-gray-300">
					 <div class="object-center text-center">
					 <a href="/">Home</a> &nbsp | &nbsp
					 <a href="/impressum">Impressum</a> &nbsp | &nbsp
					 <a href="/datenschutz">Datenschutz</a>
					 </div>
					 </footer> -->
		</div>
	</div>
</main>
