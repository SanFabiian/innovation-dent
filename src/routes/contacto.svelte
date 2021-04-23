<svelte:head>
    <title>Contacto Innovation Dent</title>
	<meta name="description" content="Contacta a Innovation Dent para tu valoración">
	<meta name="robots" content="index, follow">

	<meta name="og:title" content="Innovation Dent Oficial" />
	<meta name="og:description" content="Contacta a Innovation Dent para tu valoración" />
	<meta name="og:image" content="https://assets-innovation-dent.s3-us-west-1.amazonaws.com/Cover.jpg" />
	<meta name="og:url" content="https://innovationdent.com/contacto" />
	<meta name="og:site_name" content="Innovation Dent Oficial" />
	<meta name="og:locale" content="es_ES" />
	<meta name="og:type" content="article" />
	<meta name="fb:app_id" content="InnovationDentOficial" />
</svelte:head>

<section class="content contact">
	<form action="" id="form" class="form">
		<h1>Contáctanos</h1>
		<label for="name">Nombre</label>
		<input name="name" type="text" id="name" placeholder="Tu nombre" required/>
		<label for="email">Correo</label>
		<input name="email" type="email" id="email" placeholder="Tu correo" required/>
		<label for="message">Mensaje</label>
		<textarea  name="message" id="message" cols="30" rows="10"></textarea>
		<button type="submit" class="btn btn-primary">Enviar</button>
	</form>
</section>

<style>
	.contact {
		padding: 20px;
	}
	form {
		display: flex;
		flex-direction: column;
	}
	label {
		font-family: var(--font-maven);
		font-size: var(--size-text);
	}
</style>