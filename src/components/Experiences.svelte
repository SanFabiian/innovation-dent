<script>
    import foto from '@static/experiences-img.png'
    import comillas from '@static/comillas.png'
</script>

<h2 class="title">Experiencias</h2>
<section class="experiences-wrap">
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
</section>

<style>
    .experiences-wrap {
        display: flex;
        gap: var(--gap);
        padding: 15px;
        overflow-x: scroll;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
        scroll-snap-type: x proximity;
    }
    .experiences-item {
        scroll-snap-align: center;
        display: flex;
        align-items: center;
        gap: var(--gap);
        min-width: 90%;
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