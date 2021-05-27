<script>
  import Banner from "@components/Banner.svelte";
  import Services from "@components/Services.svelte";
  import logoDentika from "@static/logo-dentika.jpg";
</script>

<svelte:head>
  <title>Innovation Dent</title>
  <meta
    name="description"
    content="Sitio oficial de Innovation Dent, encontraras toda la info relacionada con el cuidado de tu boca, mejorar tu estetica dental y mucho más"
  />
  <meta name="robots" content="index, follow" />

  <meta name="og:title" content="Innovation Dent Oficial" />
  <meta name="og:description" content="Sitio oficial de Innovation Dent" />
  <meta
    name="og:image"
    content="https://assets-innovation-dent.s3-us-west-1.amazonaws.com/Cover.jpg"
  />
  <meta name="og:url" content="https://innovationdent.com" />
  <meta name="og:site_name" content="Innovation Dent Oficial" />
  <meta name="og:locale" content="es_ES" />
  <meta name="og:type" content="article" />
  <meta name="fb:app_id" content="InnovationDentOficial" />
</svelte:head>

<Banner />
<Services />
<section class="content">
  <h1 class="title">Nuestros aliados</h1>
  <figure>
    <img src={logoDentika} alt="Logo Dentika" />
  </figure>
</section>

<style>
  figure {
    padding: 0 35px;
  }
  img {
    max-width: 250px;
    display: block;
    margin: 0 auto;
  }
</style>
