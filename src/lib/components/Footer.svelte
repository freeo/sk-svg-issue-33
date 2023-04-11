<script type="ts">
import Btn_footer from '$lib/assets/Btn-footer.svelte';
import Avocado from '$lib/assets/test1.svg?component';
import BlackFriday from '$lib/assets/blackfriday.svg?component';
</script>

<footer class="sticky bottom-0 z-20 bg-black text-gray-300">
	<div class="flex justify-between">
		<div class="flex">
			<a href="https://www.example.com"
				><Btn_footer class="w-16 p-2" fill="gray" type="linkedin" /></a
			>
			<a href="https://www.example.com"><Btn_footer type="xing" /></a>
			<a href="https://www.example.com"><Btn_footer type="share" /></a>
		</div>
		<div class="flex items-center">
			<a href="https://www.example.com"><Btn_footer type="toc" /></a>
			<a href="https://www.example.com"><Btn_footer type="top" /></a>
			<a href="https://www.example.com"><Btn_footer type="prev" /></a>
			<a href="https://www.example.com"><Btn_footer type="next" /></a>
		</div>
	</div>
</footer>
<div class="bg-black">
	<!-- <Ck_logo_comp fill="gray" /> -->
	<!-- <cklogo /> -->
  <BlackFriday />
  <Avocado />
</div>
