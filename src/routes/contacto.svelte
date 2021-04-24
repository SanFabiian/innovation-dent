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
	<form
		name="contact"
		method="POST"
		data-netlify="true"
	>
		<h1>Contáctanos</h1>
		<label for="user-name">Nombre</label>
		<input name="user-name" type="text" placeholder="Tu nombre" required/>
		<label for="user-email">Correo</label>
		<input name="user-email" type="email" placeholder="Tu correo" required/>
		<label for="user-message">Mensaje</label>
		<textarea  name="user-message" cols="30" rows="5" placeholder="Cuentanos en que podemos ayudarte" required></textarea>
		<button type="submit" class="btn btn-primary">Enviar</button>
	</form>
</section>

<style>
	.contact {
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
	}
	form {
		display: flex;
		flex-direction: column;
	}
	label {
		font-family: var(--font-maven);
		font-size: var(--size-text);
		margin: 15px 0 5px 0;
	}
	input {
		height: 30px;
		padding-left: 15px;
		border: none;
		border-bottom: solid 1px var(--green);
	}
	input::placeholder,textarea::placeholder {
		font-style: italic;
		color: var(--green);
	}
	textarea {
		border: solid 1px var(--green);
		border-radius: 10px;
		padding: 15px;
	}
</style>