<script type="ts">
import Btn_SHARE from '$lib/assets/btn_SHARE.svg?component';
import Btn_TOC from '$lib/assets/btn_TOC.svg?component';
import Btn_TOP from '$lib/assets/btn_TOP.svg?component';
import Btn_PREV from '$lib/assets/btn_PREV.svg?component';
import Btn_NEXT from '$lib/assets/btn_NEXT.svg?component';

export let type = 'top';
let divClass;
let fill;
// let className;
// export { className as class };

fill = 'gray';
divClass = 'py-2 bg-black whitespace-nowrap hover:text-white transition-colors';

let imgClass = 'inline p-2 w-11 ';
let imgClassTOP = 'inline p-2 w-10 ';
function handleMouseOut(e) {
	fill = 'gray';
}
function handleMouseOver(e) {
	fill = 'white';
}
</script>

<div class="{divClass}" on:mouseover="{handleMouseOver}" on:mouseout="{handleMouseOut}">
	{#if type == 'share'}
		<Btn_SHARE fill="{fill}" class="{imgClass}" />
	{:else if type == 'toc'}
		<Btn_TOC fill="{fill}" class="{imgClass}" />
	{:else if type == 'top'}
		<Btn_TOP fill="{fill}" class="{imgClassTOP}" />
	{:else if type == 'prev'}
		<Btn_PREV fill="{fill}" class="{imgClass}" />
	{:else if type == 'next'}
		<Btn_NEXT fill="{fill}" class="{imgClass}" />
	{/if}
</div>
