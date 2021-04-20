<script>
    import foto from '@static/experiences-img.png'
    import comillas from '@static/comillas.png'
    import Carousel from '@beyonk/svelte-carousel'
</script>

<h2 class="title">Experiencias</h2>
<Carousel
    perPage={{ 800: 3, 500: 2}}
    autoplay={3500}
    easing={'cubic-bezier(.1,.44,.77,.5)'}
>
    <article class="experiences-item">
        <img src="{foto}" alt="">
        <div>
            <h2 class="subtitle">Pepito Peréz</h2>
            <p style="background-image: url('{comillas}');">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </article>
    <article class="experiences-item">
        <img src="{foto}" alt="">
        <div>
            <h2 class="subtitle">Pepito Peréz</h2>
            <p style="background-image: url('{comillas}');">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </article>
    <article class="experiences-item">
        <img src="{foto}" alt="">
        <div>
            <h2 class="subtitle">Pepito Peréz</h2>
            <p style="background-image: url('{comillas}');">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </article>
    <article class="experiences-item">
        <img src="{foto}" alt="">
        <div>
            <h2 class="subtitle">Pepito Peréz</h2>
            <p style="background-image: url('{comillas}');">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </article>

</Carousel>

<style>
    .experiences-item {
        display: flex;
        align-items: center;
        gap: var(--gap);
        min-width: 300px;
        max-width: 320px;
        padding: 0 15px;
    }
    .experiences-item > div {
        padding: 20px 0;
    }
    .experiences-item p {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    h2.subtitle {
        font-size: var(--size-subtitle);
    }
    p {
        font-size: var(--size-text);
    }
</style>