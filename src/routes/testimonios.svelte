<script>
    import testimonyJong from '@static/experiencia-joven-tratamiento-dental.mp4'
    import testimonyAdult from '@static/experiencia-adulto-tratamiento-dental.mp4'
</script>
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