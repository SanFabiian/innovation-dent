<script>
	import foto600 from '@static/foto-principal600.jpg'
	import Services from '@components/Services.svelte'
	import CarouselBlog from '@components/CarouselBlog.svelte'
	import Experiences from '../components/Experiences.svelte'
</script>

<style>
	.image img{
		width: 100%;
	}
</style>

<svelte:head>
	<title>Innovation Dent</title>
</svelte:head>

<div class="image">
	<img src="{foto600}" alt="">
</div>
<Services />
<CarouselBlog />
<Experiences />