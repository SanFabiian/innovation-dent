<script>
    import ortodoncia from '@static/icon-ortodoncia.svg'
    import endodoncia from '@static/icon-endodoncia.svg'
    import periodoncia from '@static/icon-periodoncia.svg'
    import diseno from '@static/icon-diseno.svg'
    import Service from '@components/Service.svelte'
</script>
<section class="content">
    <h1 class="title">Especialidades</h1>
    <div class="wrap">
        <Service service="Ortodoncia" slug="ortodoncia" img={ortodoncia} />
        <Service service="endodoncia" slug="endodoncia" img={endodoncia} />
        <Service service="periodoncia" slug="periodoncia" img={periodoncia} />
        <Service service="Diseño de sonrisa" slug="diseno-de-sonrisa" img={diseno} />
    </div>
</section>

<style>
    .wrap {
        text-align: center;
        font-size: var(--size-mintext);
    }

    @media (min-width: 768px) {
        .wrap {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
    }
</style>