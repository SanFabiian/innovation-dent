<script>
    import iconWpp from '@static/whatsapp.svg'
</script>

<a
    href="https://api.whatsapp.com/send?phone=573125070279&text=Necesito%20una%20cita"
    target="_blank"
    class="meeting"
>
    <i>
        <img src="{iconWpp}" alt="Icono de whatsapp">
    </i>
    <span>Pide una cita</span>
</a>

<style>
    .meeting {
        position: sticky;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        background: #449296;
        color: white;
        font-size: var(--size-text);
        text-decoration: none;
        z-index: 2;
    }
    i {
        position: absolute;
        top: -25px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: #449296;
        color: white;
        border-radius: 50%;
    }
    img {
        width: 30px;
    }
    span {
        z-index: 3;
    }
</style>