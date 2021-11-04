<script>
  import analytics from "@utils/analytics.js";
  import logo from "@static/logo-color.svg";
  import instagram from "@static/instagram.svg";
  import facebook from "@static/facebook.svg";
  import call from "@static/call.svg";
</script>

<footer>
  <section class="content">
    <section class="contact">
      <figure>
        <img src={logo} width="130" alt="Logo innovarion Dent a color" />
      </figure>
      <h2 class="subtitle">Contáctanos</h2>
      <div class="redes">
        <a href="tel:573125070279" class="icon"
          ><img src={call} width="30" alt="icono de llamada" /></a
        >
        <a
          href="https://www.instagram.com/orto_innovation/"
          target="_blank"
          rel="noopener"
          on:click={analytics("instagram")}
        >
          <img src={instagram} width="30" alt="Logo de Instagram" />
        </a>
        <a
          href="https://www.facebook.com/InnovationDentOficial"
          target="_blank"
          rel="noopener"
          on:click={analytics("facebook")}
        >
          <img src={facebook} width="30" alt="Logo de Facebook " />
        </a>
      </div>
    </section>
    <section class="locate">
      <h2 class="subtitle">Nuestra Sede</h2>
      <ul>
        <li>Calle 99 # 49-38</li>
        <li>Centum Business</li>
        <li>Consultorio 1504</li>
        <li>Barrio La castellana</li>
        <li>Bogotá, Colombia</li>
      </ul>
    </section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.888016215044!2d-74.0615667!3d4.6877335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22fdc2caa1bf8c0e!2sCENTUM%20BUSINESS%20BUILDING!5e0!3m2!1ses-419!2sco!4v1632276967571!5m2!1ses-419!2sco"
      title="Mapa del Edicicio Centum Busines"
      allowfullscreen=""
      loading="lazy"
    />
  </section>
</footer>
<div class="copy">Innovation Dent, con el 🤍 para tu sonrisa.</div>

<style>
  footer {
    background: var(--grey-bg);
  }
  .subtitle {
    font-size: 1.8rem;
  }
  .locate,
  .contact {
    padding: 30px;
  }
  .redes {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  .redes a {
    margin-right: 10px;
  }
  a img {
    width: 30px;
    margin: 0 5px;
  }
  iframe {
    width: 100%;
    height: 200px;
    border: none;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: var(--green);
    border-radius: 20px;
  }
  .icon img {
    width: 18px;
  }
  .copy {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 10px;
    background: var(--dark-green);
    color: var(--white);
    font-family: var(--font-maven);
    font-size: var(--size-mintext);
  }
  figure img {
    width: 130px;
  }
  li::marker {
    color: var(--yellow);
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  @media (min-width: 600px) {
    .content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 768px) {
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    iframe {
      width: 400px;
    }
  }
</style>
