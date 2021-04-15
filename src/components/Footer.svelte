<script>
    import analytics from '@utils/analytics.js'
    import logo from '@static/logo-color.svg'
    import instagram from '@static/instagram.svg'
    import facebook from '@static/facebook.svg'
</script>
<footer>
    <div class="contact">
        <figure>
            <img src="{logo}" alt="Logo innovarion Dent a color">
        </figure>
        <h2 class="subtitle">Contáctanos</h2>
        <ul>
            <li>
                Ak 68 # 23-24 Clínica Colombia
            </li>
            <li>
                <a href="tel:+573012345678">301 234 56 78</a> - <a href="tel:3001234567">300 123 45 67</a>
            </li>
        </ul>
        <div class="redes">
            <a href="https://www.instagram.com/orto_innovation/"target="_blank" on:click={analytics('instagram')}>
                <img src="{instagram}" alt="Logo de Instagram">
            </a>
            <a href="https://www.instagram.com/orto_innovation/" target="_blank" on:click={analytics('facebook')}>
                <img src="{facebook}" alt="Logo de Facebook ">
            </a>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63627.13878919953!2d-74.106221269375!3d4.648176434965087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a51e7ce26b1%3A0x94758a837396047a!2sCl%C3%ADnica%20Universitaria%20Colombia!5e0!3m2!1ses-419!2sco!4v1617390734721!5m2!1ses-419!2sco" allowfullscreen="" loading="lazy" title="Ubicación Consultorio Innovation Dent"></iframe>
</footer>
<div class="copy">
    Con 🤍 de Innovarion Dent para tu sonrisa
</div>
<style>
    footer {
        background: var(--grey-bg);
    }
    .contact {
        padding: 30px 15px;
    }
    .redes {
        display: flex;
        padding-top: 30px;
    }
    li {
        list-style: none;
        font-size: var(--size-text);
    }
    a {
        color: var(--green);
    }
    a img {
        width: 40px;
        margin: 0 5px;
    }
    iframe {
        width: 100%;
        height: 200px;
        border: none;
    }
    .copy {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: var(--green);
        color: var(--white);
        font-family: var(--font-maven);
        font-size: var(--size-mintext);
    }
    @media (min-width: 768px) {
        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
        }
        iframe {
            width: 400px;
        }
    }
</style>