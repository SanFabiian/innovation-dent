<script>
  import gallery1 from "@static/editadas/gallery-1.jpg";
  import gallery2 from "@static/editadas/gallery-2.jpg";
  import gallery3 from "@static/editadas/gallery-3.jpg";
  import gallery4 from "@static/editadas/gallery-4.jpg";
  import gallery5 from "@static/editadas/gallery-5.jpg";
  import gallery6 from "@static/editadas/gallery-6.jpg";
</script>

<section class="content">
  <img src={gallery1} alt="" />
  <img src={gallery2} alt="" />
  <img src={gallery3} alt="" />
  <img src={gallery4} alt="" />
  <img src={gallery5} alt="" />
  <img src={gallery6} alt="" />
</section>
<div class="container text-center">
  <a
    data-bs-toggle="modal"
    href="#exampleModalToggle"
    role="button"
    class="btn btn-primary d-inline-block"
  >
    Ver todas
  </a>
</div>
<div
  class="modal fade"
  id="exampleModalToggle"
  aria-hidden="true"
  aria-labelledby="exampleModalToggleLabel"
  tabindex="-1"
>
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={gallery1} alt="" />
          </div>
          <div class="carousel-item">
            <img src={gallery2} alt="" />
          </div>
          <div class="carousel-item">
            <img src={gallery3} alt="" />
          </div>
          <div class="carousel-item">
            <img src={gallery4} alt="" />
          </div>
          <div class="carousel-item">
            <img src={gallery5} alt="" />
          </div>
          <div class="carousel-item">
            <img src={gallery6} alt="" />
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
    </div>
  </div>
</div>

<style>
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 50px;
  }
  .modal-content {
    background: transparent;
  }
  img {
    width: 100%;
  }
</style>
