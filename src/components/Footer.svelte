<script>
    import logo from '@static/logo-color.svg'
</script>
<footer>
    <div class="contact">
        <img src="{logo}" alt="">
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
            <i>
                <svg x="0px" y="0px" viewBox="0 0 512 512">
                    <path style="fill:#1976D2;" d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h384c35.296,0,64-28.704,64-64V64 C512,28.704,483.296,0,448,0z"/>
                    <path style="fill:#FAFAFA;" d="M432,256h-80v-64c0-17.664,14.336-16,32-16h32V96h-64l0,0c-53.024,0-96,42.976-96,96v64h-64v80h64 v176h96V336h48L432,256z"/>
                </svg>
            </i>
            <i>
                <svg x="0px" y="0px" viewBox="0 0 512 512">
                    <path style="fill:#1976D2;" d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h384c35.296,0,64-28.704,64-64V64 C512,28.704,483.296,0,448,0z"/>
                    <path style="fill:#FAFAFA;" d="M432,256h-80v-64c0-17.664,14.336-16,32-16h32V96h-64l0,0c-53.024,0-96,42.976-96,96v64h-64v80h64 v176h96V336h48L432,256z"/>
                </svg>
            </i>
            <i>
                <svg x="0px" y="0px" viewBox="0 0 512 512">
                    <path style="fill:#1976D2;" d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h384c35.296,0,64-28.704,64-64V64 C512,28.704,483.296,0,448,0z"/>
                    <path style="fill:#FAFAFA;" d="M432,256h-80v-64c0-17.664,14.336-16,32-16h32V96h-64l0,0c-53.024,0-96,42.976-96,96v64h-64v80h64 v176h96V336h48L432,256z"/>
                </svg>
            </i>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63627.13878919953!2d-74.106221269375!3d4.648176434965087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a51e7ce26b1%3A0x94758a837396047a!2sCl%C3%ADnica%20Universitaria%20Colombia!5e0!3m2!1ses-419!2sco!4v1617390734721!5m2!1ses-419!2sco" allowfullscreen="" loading="lazy" title="Ubicación Consultorio Innovation Dent"></iframe>
    <div class="copy">
        Con 🤍 de Innovarion Dent para tu sonrisa
    </div>
</footer>
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
    i {
        margin-right: var(--gap);
    }
    i svg {
        width: 40px;
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
</style>