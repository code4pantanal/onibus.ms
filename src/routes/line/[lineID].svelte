<script context="module">
    // the (optional) preload function takes a
    // `{ path, params, query }` object and turns it into
    // the data we need to render the page
    export async function preload(page) {
        // the `slug` parameter is available because this file
        // is called [slug].svelte
        const { lineID } = page.params;

        return { lineID };
    }
</script>

<script>
    import {
        AppBar,
        Icon,
        Button,
        Select,
        Row,
        Col,
        Tabs,
        Tab,
        TabContent,
        ListItem,
        Divider,
    } from "svelte-materialify/src";
    import { mdiArrowLeft } from "@mdi/js";
    import busLines from "../../store/buslines";
    import { goto } from "@sapper/app";

    export let lineID;

    const TIPOS_DIAS = [
        0, //dia útil
        1, // sabados
        2, // dominigos e feriados
    ];

    const line = $busLines.find((l) => l.codigo === lineID);
    let pontoSelecionado;

    $: pontos = !!line.pontos
        ? line.pontos
              .map((p) => {
                  const { nome, sentido, ...otherProps } = p;
                  return {
                      name: `${nome} - sentido ${sentido}`,
                      value: { nome, sentido, ...otherProps },
                  };
              })
              .filter((p) => p.value.horarios.length > 0)
        : [];

    async function back() {
        pontoSelecionado = undefined;
        await goto('/')
    }

    function horariosPorPonto(ponto, tipo_dia) {
        return !!ponto && !!ponto.horarios
            ? ponto.horarios.filter((h) => h.tipo_dia == tipo_dia)
            : [];
    }
</script>

<div class="slide">
    <AppBar>
        <div slot="icon">
            <Button fab depressed on:click={back}>
                <Icon path={mdiArrowLeft} />
            </Button>
        </div>
        <span slot="title">{line.codigo} - {line.nome} </span>
    </AppBar>
    <div>
        <Row noGutters>
            <Col>
                <Select
                    style="width:100%"
                    class="pa-2 "
                    items={pontos}
                    solo
                    placeholder="Selecione o ponto"
                    bind:value={pontoSelecionado}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <Tabs grow>
                    <div slot="tabs">
                        <Tab>D. Úteis</Tab>
                        <Tab>Sáb</Tab>
                        <Tab>Dom. e feriados</Tab>
                    </div>
                    {#each TIPOS_DIAS as tipoDia}
                        <TabContent>
                            {#if horariosPorPonto(pontoSelecionado, tipoDia).length > 0}
                                <div class="d-flex justify-center mb-2 ">
                                    <div class="schedule-list">
                                        {#each horariosPorPonto(pontoSelecionado, tipoDia) as horario}
                                            <ListItem
                                                >{horario.hora_saida}

                                                <span slot="subtitle">
                                                    {!!horario.observacao
                                                        ? horario.observacao
                                                        : ""}
                                                </span>
                                            </ListItem>
                                            <Divider />
                                        {/each}
                                    </div>
                                </div>
                            {:else}
                                Nenhum horário cadastrado.
                            {/if}
                        </TabContent>
                    {/each}
                </Tabs>
            </Col>
        </Row>
    </div>
</div>

<style>
    .bus-line-info {
        height: 89vh;
        width: 100%;
        overflow: auto;
    }
    .schedule-list {
        height: 100%;
        width: 100%;
        overflow-y: auto;
    }
</style>
