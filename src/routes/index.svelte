<script context="module">
    import busLines from "../store/buslines";
    export async function preload(page) {
        const res = await this.fetch(`api/v1/buslines`);
        const lines = await res.json();
        busLines.setLines(lines);
    }
</script>

<script>
    import {
        Divider,
        Icon,
        Overlay,
        TextField,
        ListItem,
    } from "svelte-materialify/src";
    import NavDrawer from "../components/NavDrawer.svelte";
    import { mdiMenu, mdiBus } from "@mdi/js";
    import Options from "./options.svelte";

    import { goto } from "@sapper/app";
    import buslines from "../store/buslines";

    //props

    export let theme = "light";

    //vars
    let active = false;
    let openOptions = false;
    let paramBusca = "";

    $: linhas = $buslines.filter(
        (line) =>
            line.codigo.toLowerCase().includes(paramBusca) || line.nome.toLowerCase().includes(paramBusca)
    );

    function toggleMenu() {
        active = !active;
    }

    function onSettings() {
        active = false;
        openOptions = true;
    }

    async function selectLine(line) {
        await goto(`/line/${line.codigo}`);
    }
</script>

<div class="slide">
    <TextField
        class="{theme === 'dark' ? 'secondary-text' : ''} pa-3"
        dense
        solo
        bind:value={paramBusca}
    >
        <div slot="prepend" on:click={toggleMenu}>
            <Icon path={mdiMenu} />
        </div>
        Linha de ônibus</TextField
    >
    <Options active={openOptions} on:close={() => (openOptions = false)} />
    <NavDrawer {active} on:settings={onSettings} />
    <Overlay index={1} {active} on:click={toggleMenu} absolute />
    <div class="d-flex justify-center mb-2 ">
        <div class="bus-list">
            {#each linhas as line, i}
                <ListItem on:click={selectLine(line)}>
                    <span slot="prepend">
                        <Icon path={mdiBus} />
                    </span>
                    {line.codigo} - {line.nome}</ListItem
                >
                <Divider />
            {/each}
        </div>
    </div>
</div>

<style>
    :global(.bus-list) {
        height: 92.6vh;
        width: 100%;
        overflow-y: auto;
    }
</style>
