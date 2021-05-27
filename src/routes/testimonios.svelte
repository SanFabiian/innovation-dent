<script>
    import testimonyJong from '@static/experiencia-joven-tratamiento-dental.mp4'
    import testimonyAdult from '@static/experiencia-adulto-tratamiento-dental.mp4'
</script>

<svelte:head>
  <title>Testimonios Innovation Dent</title>
  <meta
    name="description"
    content="Somos un grupo de especialistas con más de 15 años de experiencia, en la atención de todas las áreas de la odontología, destacándonos por diagnosticar de manera integral y multidisciplinaria a todos nuestros pacientes, brindando seguridad y confianza en el desarrollo de todos los tratamientos."
  />
  <meta name="robots" content="index, follow" />

  <meta name="og:title" content="Innovation Dent Testimonios" />
  <meta
    name="og:description"
    content="Somos un grupo de especialistas con más de 15 años de experiencia, en la atención de todas las áreas de la odontología, destacándonos por diagnosticar de manera integral y multidisciplinaria a todos nuestros pacientes, brindando seguridad y confianza en el desarrollo de todos los tratamientos."
  />
  <meta
    name="og:image"
    content="https://assets-innovation-dent.s3-us-west-1.amazonaws.com/Cover.jpg"
  />
  <meta name="og:url" content="https://innovationdent.com/testimonios" />
  <meta name="og:site_name" content="Innovation Dent Oficial" />
  <meta name="og:locale" content="es_ES" />
  <meta name="og:type" content="article" />
  <meta name="fb:app_id" content="InnovationDentOficial" />
</svelte:head>

<section class="content">
    <h1>Nuestros pacientes</h1>
    <p>Acontinuación te mostramos algunas experiencias de nuestros pacientes.</p>
    <div class="testimony-wrap">
        <video src={testimonyJong} poster="" controls>
            <track default
           kind="captions"
           srclang="es"
           src={testimonyJong} />
            Tu navegador no admite el elemento <code>video</code>.
        </video>
        <video src={testimonyAdult} poster="" controls>
            <track default
           kind="captions"
           srclang="es"
           src={testimonyAdult} />
            Tu navegador no admite el elemento <code>video</code>.
        </video>
    </div>
</section>

<style>
    .testimony-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0 20px;
    }
    video {
        width: 100%;
        max-width: 300px;
    }
</style>