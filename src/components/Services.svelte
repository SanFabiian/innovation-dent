<script>
    import icon_ortodoncia from '@static/icon-ortodoncia.svg'
    import icon_endodoncia from '@static/icon-endodoncia.svg'
    import icon_periodoncia from '@static/icon-periodoncia.svg'
    import icon_diseno from '@static/icon-diseno.svg'
</script>
<section class="content">
    <h1 class="title">Especialidades</h1>
    <div class="wrap">
        <a href="blog/ortodoncia">
            <img src="{icon_ortodoncia}" alt="">
            <h2>Ortodoncia</h2>
        </a>
        <a href="blog/endodoncia">
            <img src="{icon_endodoncia}" alt="">
            <h2>Endodoncia</h2>
        </a>
        <a href="blog/periodoncia">
            <img src="{icon_periodoncia}" alt="">
            <h2>Periodoncia</h2>
        </a>
        <a href="blog/diseno-de-sonrisa">
            <img src="{icon_diseno}" alt="">
            <h2>Diseño de Sonrisa</h2>
        </a>
    </div>
</section>

<style>
    section {
        padding: 30px ;
    }
    .wrap {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--gap);
        text-align: center;
        font-size: var(--size-mintext);
    }
    a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: var(--blue);
        font-family: var(--font-maven);
        text-decoration: none;
    }
    img {
        width: 130px;
    }
    h2 {
        font-size: var(--size-subtitle);
    }
    @media (min-width: 768px) {
        .wrap {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>