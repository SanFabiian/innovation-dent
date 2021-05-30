<script>
  import foto1900 from "@static/foto-principal1900.jpg";
  import foto1000 from "@static/foto-principal1000.jpg";
  import foto600 from "@static/foto-principal600.jpg";
</script>

<figure>
  <picture>
    <source media="(min-width: 1200px)" srcset={foto1900} />
    <source media="(min-width: 1000px)" srcset={foto1000} />
    <img src={foto600} alt="Foto banner principal" width="600" />
  </picture>
</figure>

<style>
  figure {
    max-height: 600px;
    overflow: hidden;
  }
  figure img {
    width: 100%;
  }
</style>
