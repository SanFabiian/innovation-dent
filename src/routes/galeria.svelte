<script>
  import { onMount } from "svelte";
  import dataGallery from "@utils/dataGallery.js";
  let galleryContent;
  onMount(() => {
    galleryContent.addEventListener("click", function (e) {
      if (e.target.classList.contains("gallery-img")) {
        const src = e.target.getAttribute("src");
        galleryContent.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal();
        myModal.show();
      }
    });
  });
</script>

<section class="content" bind:this={galleryContent}>
  {#each dataGallery as { name, alt }}
    <a data-bs-toggle="modal" href="#exampleModalToggle" role="button">
      <img
        src={`https://assets-innovation-dent.s3.us-west-1.amazonaws.com/gallery/${name}`}
        {alt}
        class="gallery-img"
      />
    </a>
  {/each}
  <div
    class="modal fade"
    id="exampleModalToggle"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <img src="" alt="" class="modal-img" />
      </div>
    </div>
  </div>
</section>

<style>
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
    gap: 15px;
    padding: 20px;
  }
  .modal-content {
    background: transparent;
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 90vh;
    object-fit: cover;
  }
  img.modal-img {
    object-fit: contain;
  }
  .modal-content {
    border: none;
    width: auto;
  }
  .modal-dialog {
    justify-content: center;
  }
  @media (min-width: 768px) {
    .content {
      padding: 50px;
    }
  }
</style>
