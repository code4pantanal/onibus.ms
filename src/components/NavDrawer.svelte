<script>
    import { mdiCog, mdiInformation } from "@mdi/js";
    import { NavigationDrawer, List, ListItem, Icon } from "svelte-materialify";
    import { goto } from "@sapper/app";
    export let active = false;
</script>

<NavigationDrawer absolute {active}>
    <List>
        <ListItem on:click={async () => await goto("/options")}>
            <span slot="prepend">
                <Icon path={mdiCog} />
            </span>
            Configurações
        </ListItem>
        <ListItem on:click={async () => await goto("/about")}>
            <span slot="prepend">
                <Icon path={mdiInformation} />
            </span>
            Sobre
        </ListItem>
    </List>
</NavigationDrawer>
