<script>
    import {
        Dialog,
        Card,
        CardActions,
        CardTitle,
        CardText,
        Row,
        Col,
        Button,
        Switch,
    } from "svelte-materialify/src";
    import settings from "../store/settings";
    import { goto } from "@sapper/app";
    export let active = true;
    if(process.browser){
        settings.useLocalStorage()
    }

</script>

<Dialog fullscreen bind:active>
    <Card>
        <CardTitle>
            <h4>Configurações</h4>
        </CardTitle>
        <CardText>
            <Row>
                <Col cols="6">Tema</Col>
                <Col cols="6">
                    <Switch on:change={settings.changeTheme}>{$settings.theme}</Switch>
                </Col>
            </Row>
        </CardText>
        <CardActions class="justify-end">
            <Button on:click={async () => await  goto('/')} text>Fechar</Button>
        </CardActions>
    </Card>
</Dialog>
