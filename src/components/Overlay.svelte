<script>
    import Modal from '@components/Modal.svelte'
</script>

<section class="overlay">
    <Modal />
</section>

<style>
    .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--green);
        z-index: 1;
    }
</style>