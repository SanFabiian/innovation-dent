<script>
    import ortodoncia from '@static/icon-ortodoncia.svg'
    import endodoncia from '@static/icon-endodoncia.svg'
    import periodoncia from '@static/icon-periodoncia.svg'
    import diseno from '@static/icon-diseno.svg'
    import cirugiaOral from '@static/cirugia-oral.svg'
    import rehabilitacion from '@static/rehabilitacion.svg'

    import Service from '@components/Service.svelte'
</script>

<section class="content">
    <h1>Nuestros Servicios</h1>
    <div class="wrap">
        <Service slug="ortodoncia" img={ortodoncia} />
        <Service slug="endodoncia" img={endodoncia} />
        <Service slug="endodoncia" img={periodoncia} />
        <Service slug="diseno-de-sonrisa" img={diseno} />
        <Service slug="cirugia-oral-y-maxilofacial" img={cirugiaOral} />
        <Service slug="rehabilitacion" img={rehabilitacion} />
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