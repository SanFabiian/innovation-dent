<script>
  import foto1900 from "@static/foto-principal1900.jpg";
  import foto1000 from "@static/foto-principal1000.jpg";
  import foto600 from "@static/foto-principal600.jpg";
</script>

<div
  id="carouselExampleControls"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <picture>
        <source media="(min-width: 1200px)" srcset={foto1900} />
        <source media="(min-width: 1000px)" srcset={foto1000} />
        <img src={foto600} alt="" class="w-100" />
      </picture>
    </div>
    <div class="carousel-item">
      <picture>
        <source media="(min-width: 1200px)" srcset={foto1900} />
        <source media="(min-width: 1000px)" srcset={foto1000} />
        <img src={foto600} alt="" class="w-100" />
      </picture>
    </div>
    <div class="carousel-item">
      <picture>
        <source media="(min-width: 1200px)" srcset={foto1900} />
        <source media="(min-width: 1000px)" srcset={foto1000} />
        <img src={foto600} alt="" class="w-100" />
      </picture>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true" />
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true" />
    <span class="visually-hidden">Next</span>
  </button>
</div>
