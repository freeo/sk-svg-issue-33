<script type="ts">
import Ico_home from '$lib/assets/ico-home.svelte';
import Ico_artikel from '$lib/assets/ico-artikel.svelte';
import Ico_kontakt from '$lib/assets/ico-kontakt.svelte';

export let label;
export let active = false;
let divClass;
let color;
let fill;

if (active) {
	color = 'text-white';
	fill = 'white';
	divClass = `py-2 text-center whitespace-nowrap bg-black ${color}`;
} else {
	color = 'text-gray-400';
	fill = 'gray';
	divClass = `py-2 text-center bg-black whitespace-nowrap hover:bg-gray-600 hover:text-white transition-colors ${color}`;
}

let imgClass = 'inline p-1 w-5 ';
function handleMouseOut(e) {
	if (!active) {
		fill = 'gray';
	}
}
function handleMouseOver(e) {
	fill = 'white';
}
</script>

<div class="{divClass}" on:mouseover="{handleMouseOver}" on:mouseout="{handleMouseOut}">
	{#if label == 'Home'}
		<Ico_home fill="{fill}" class="{imgClass}" />
	{:else if label == 'Artikel'}
		<Ico_artikel fill="{fill}" class="{imgClass}" />
	{:else if label == 'Kontakt'}
		<Ico_kontakt fill="{fill}" class="{imgClass}" />
	{/if}
	{label}
</div>
