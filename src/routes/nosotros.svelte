<script>
  import fotoMonica from "@static/foto-doctora-monica.jpg";
  import fotoAlex from "@static/foto-doctor-alex.jpg";
</script>

<svelte:head>
  <title>Nosotros Innovation Dent</title>
  <meta
    name="description"
    content="Somos un grupo de especialistas con más de 15 años de experiencia, en la atención de todas las áreas de la odontología, destacándonos por diagnosticar de manera integral y multidisciplinaria a todos nuestros pacientes, brindando seguridad y confianza en el desarrollo de todos los tratamientos."
  />
  <meta name="robots" content="index, follow" />

  <meta name="og:title" content="Innovation Dent Nosotros" />
  <meta
    name="og:description"
    content="Somos un grupo de especialistas con más de 15 años de experiencia, en la atención de todas las áreas de la odontología, destacándonos por diagnosticar de manera integral y multidisciplinaria a todos nuestros pacientes, brindando seguridad y confianza en el desarrollo de todos los tratamientos."
  />
  <meta
    name="og:image"
    content="https://assets-innovation-dent.s3-us-west-1.amazonaws.com/Cover.jpg"
  />
  <meta name="og:url" content="https://innovationdent.com/nosotros" />
  <meta name="og:site_name" content="Innovation Dent Oficial" />
  <meta name="og:locale" content="es_ES" />
  <meta name="og:type" content="article" />
  <meta name="fb:app_id" content="InnovationDentOficial" />
</svelte:head>

<section class="content">
  <div class="nosotros-desc">
    <h1>Nosotros</h1>
    <p>
      Somos un grupo de especialistas con más de 15 años de experiencia, en la
      atención de todas las áreas de la odontología, destacándonos por
      diagnosticar de manera integral y multidisciplinaria a todos nuestros
      pacientes, brindando seguridad y confianza en el desarrollo de todos los
      tratamientos.
    </p>
  </div>
  <ul class="specialists">
    <li class="specialist">
      <figure>
        <picture>
          <img src={fotoMonica} alt="Foto de Dra. Mónica Fonseca" />
        </picture>
      </figure>
      <div class="specialist-desc">
        <h2>Dra. Mónica Fonseca Cano</h2>
        <p>
          Ortodoncista con más de 10 años de experiencia en la atención de casos
          complejos, Ortoquirurgicos, paciente con recidivas, raíces cortas y
          periodonto disminuido.
        </p>
        <p>Más de 1000 casos exitosos respaldan nuestra
          experiencia.</p>
        <h3>Estudios</h3>
        <ul>
          <li>Odontóloga del Colegio Odontológico Colombiano</li>
          <li>Ortodoncista Universidad Militar Nueva Granada C.I.E.O</li>
          <li>
            Especialista de la Universidad el Rosario en Gerencia de seguridad y
            salud en el trabajo
          </li>
          <li>
            Certificación en Invisalign doctor, Smartee, Mini Tornillos,
            Autoligado Pitts 21, Damon System, filosofía MEAW, planeación
            digital DSD.
          </li>
        </ul>
      </div>
    </li>
    <li class="specialist">
      <figure>
        <picture>
          <img src={fotoAlex} alt="Foto de Dr. Alex Bayona Marin" />
        </picture>
      </figure>
      <div class="specialist-desc">
        <h2>Dr. Alex Bayona Marin</h2>
        <p>
          Ortodoncista con más de 10 años de experiencia en la atención de casos
          complejos, Ortoquirurgicos, paciente con recidivas, raíces cortas y
          periodonto disminuido.
        </p>
        <p>Más de 1000 casos exitosos respaldan nuestra
          experiencia.</p>
        <h3>Estudios</h3>
        <ul>
          <li>Odontólogo de la Pontificia Universidad Javeriana</li>
          <li>Ortodoncista Universidad Militar Nueva Granada C.I.E.O</li>
          <li>
            Diplomado en estética dental Federación Odontológica Colombiana
          </li>
          <li>
            Certificación en Invisalign doctor, Smartee, Mini Tornillos,
            Autoligado Pitts 21, Damon System, filosofía MEAW, planeación
            digital DSD.
          </li>
        </ul>
      </div>
    </li>
  </ul>
</section>

<style>
  .nosotros-desc {
    margin-bottom: 30px;
    padding: 0 20px;
  }
  p {
    text-align: justify;
  }
  .specialists {
    margin: 0;
  }
  .specialist {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-bottom: 30px;
  }
  .specialist img {
    display: block;
    width: 250px;
    margin: 0 auto;
  }
  .specialist-desc h2,
  .specialist-desc h3 {
    text-align: center;
	  color: var(--green);
  }
  .specialist-desc h2 {
    font-size: var(--size-subtitle);
  }
  .specialist-desc h3 {
	text-align: left;
  }
  .specialist-desc ul {
    padding: 0;
  }
  .specialist-desc li {
    margin-bottom: 20px;
	list-style: initial;
	font-size: var(--size-text);
  }
  .specialist-desc li::marker {
	font-size: var(--size-subtitle);
	color: var(--yellow);
  }
  @media (min-width: 768px) {
    .specialist {
      flex-direction: row;
    }
	.specialist-desc {
		margin-left: 30px;
	}
	.specialist-desc li {
    	margin-bottom: 10px;
	}
  }
</style>
