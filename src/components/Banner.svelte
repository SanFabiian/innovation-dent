<script>
  import { onMount } from "svelte";
  import dataBanners from "@utils/dataBanners.js";

  let banner;
  onMount(() => {
    const nd = banner.querySelector("#carouselExampleControls");
    const carousel = new bootstrap.Carousel(nd, {
      interval: 3500,
      wrap: true,
      keyboard: true,
      touch: false,
      ride: true,
      pause: false,
    });
  });
</script>

<div bind:this={banner}>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      {#each dataBanners as { name, alt }, i}
        <div class={i === 1 ? "carousel-item active" : "carousel-item"}>
          <picture>
            <source
              media="(min-width: 1200px)"
              srcset={`https://assets-innovation-dent.s3.us-west-1.amazonaws.com/banners/1900/${name}`}
            />
            <source
              media="(min-width: 1000px)"
              srcset={`https://assets-innovation-dent.s3.us-west-1.amazonaws.com/banners/1000/${name}`}
            />
            <img
              src={`https://assets-innovation-dent.s3.us-west-1.amazonaws.com/banners/600/${name}`}
              {alt}
              class="w-100"
            />
          </picture>
        </div>
        <span class="d-none">{i++}</span>
      {/each}
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
