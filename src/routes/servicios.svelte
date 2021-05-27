<script>
  import ortodoncia from "@static/icon-ortodoncia.svg";
  import endodoncia from "@static/icon-endodoncia.svg";
  import periodoncia from "@static/icon-periodoncia.svg";
  import diseno from "@static/icon-diseno.svg";
  import cirugiaOral from "@static/cirugia-oral.svg";
  import rehabilitacion from "@static/rehabilitacion.svg";

  import Service from "@components/Service.svelte";
</script>

<svelte:head>
  <title>Servicios Innovation Dent</title>
  <meta
    name="description"
    content="Somos un grupo de especialistas con más de 15 años de experiencia, en la atención de todas las áreas de la odontología, destacándonos por diagnosticar de manera integral y multidisciplinaria a todos nuestros pacientes, brindando seguridad y confianza en el desarrollo de todos los tratamientos."
  />
  <meta name="robots" content="index, follow" />

  <meta name="og:title" content="Innovation Dent Servicios" />
  <meta
    name="og:description"
    content="Somos un grupo de especialistas con más de 15 años de experiencia, en la atención de todas las áreas de la odontología, destacándonos por diagnosticar de manera integral y multidisciplinaria a todos nuestros pacientes, brindando seguridad y confianza en el desarrollo de todos los tratamientos."
  />
  <meta
    name="og:image"
    content="https://assets-innovation-dent.s3-us-west-1.amazonaws.com/Cover.jpg"
  />
  <meta name="og:url" content="https://innovationdent.com/servicios" />
  <meta name="og:site_name" content="Innovation Dent Oficial" />
  <meta name="og:locale" content="es_ES" />
  <meta name="og:type" content="article" />
  <meta name="fb:app_id" content="InnovationDentOficial" />
</svelte:head>

<section class="content">
  <h1>Nuestros Servicios</h1>
  <div class="wrap">
    <Service service="ortodoncia" slug="ortodoncia" img={ortodoncia} />
    <Service service="endodoncia" slug="endodoncia" img={endodoncia} />
    <Service service="periodoncia" slug="periodoncia" img={periodoncia} />
    <Service
      service="diseño de sonrisa"
      slug="diseno-de-sonrisa"
      img={diseno}
    />
    <Service
      service="cirugía oral y maxilofacial"
      slug="cirugia-oral-y-maxilofacial"
      img={cirugiaOral}
    />
    <Service
      service="rehabilitación"
      slug="rehabilitacion"
      img={rehabilitacion}
    />
  </div>
</section>

<style>
  .wrap {
    text-align: center;
    font-size: var(--size-mintext);
  }

  @media (min-width: 768px) {
    .wrap {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
  }
</style>
