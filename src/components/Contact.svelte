
<section class="content contact">
	<form
		name="contact"
		method="POST"
		data-netlify="true"
		action="/gracias"
	>
		<h1>Contáctanos</h1>
		<label for="name">Nombre</label>
		<input name="name" type="text" placeholder="Tu nombre" required/>
		<label for="email">Correo</label>
		<input name="email" type="email" placeholder="Tu correo" required/>
		<label for="message">Mensaje</label>
		<textarea  name="message" cols="30" rows="5" placeholder="Cuentanos en que podemos ayudarte" required></textarea>
		<button type="submit" class="btn btn-secondary">Enviar</button>
	</form>
</section>

<style>
	.contact {
		width: 100%;
		margin: 0 auto;
		padding: 20px;
		background: linear-gradient(var(--green), transparent), linear-gradient(90deg, #6197be, transparent), linear-gradient(-90deg, #61b0be, transparent );
	}
	form {
		display: flex;
		flex-direction: column;
		max-width: 400px;
	}
	label {
		font-family: var(--font-maven);
		font-size: var(--size-text);
		margin: 15px 0 5px 0;
		color: var(--white);
	}
	input {
		height: 30px;
		padding-left: 15px;
		border-radius: 15px;
		border: none;
	}
	input::placeholder,textarea::placeholder {
		font-style: italic;
		color: var(--green);
	}
	textarea {
		border: solid 1px var(--green);
		border-radius: 10px;
		padding: 15px;
	} h1 {
		color: white;
		font-weight: normal;
	}
</style>