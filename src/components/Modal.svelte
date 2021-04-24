<script>
    export let segment
</script>

<div class="modal">
    <h3>¡Gracias por contactarnos!</h3>
    <p>Te estaremos contactanto en breve.</p>
    <a
        rel=prefetch
        aria-current="{segment === 'blog' ? 'page': undefined}
        "href="/blog"
        class="btn btn-primary"
    >Lee nuestro blog</a>
</div>

<style>
    .modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        max-width: 350px;
        padding: 20px;
        background: var(--white);
        border-radius: 15px;
    }
    h3 {
        color: var(--yellow);
        font-family: var(--font-yellowtail);
        font-size: 40px;
        font-weight: normal;
        line-height: 34px;
        text-align: center;
    }
    p {
        font-size: var(--size-subtitle);
        text-align: center;
        margin-top: 10px;
    }
</style>