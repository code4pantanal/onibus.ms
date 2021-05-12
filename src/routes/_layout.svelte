<script>
	import { MaterialApp } from "svelte-materialify/src";
	import settings from "../store/settings";
	import PageTransition from "../components/PageTransition.svelte";
	export let segment;
</script>

<MaterialApp class="app d-flex" theme={$settings.theme}>
	<PageTransition refresh={segment}>
		<slot />
	</PageTransition>
</MaterialApp>

<style global>
	.app{
		min-height: 100vh !important;
	}
</style>
