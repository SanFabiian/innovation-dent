<script>
  export let open = false;
  function btnOpen() {
    open = !open;
  }
</script>

<button type="button" class:open on:click={btnOpen} aria-label="Botón del menu">
  <svg width="28" height="24">
    <line id="top" x1="0" y1="2" x2="32" y2="2" />
    <line id="middle" x1="0" y1="12" x2="24" y2="12" />
    <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
  </svg>
</button>

<style>
  svg {
    min-height: 24px;
    transition: transform 0.3s ease-in-out;
    color: var(--dark-green);
  }
  svg line {
    stroke: currentColor;
    stroke-width: 3;
    transition: transform 0.3s ease-in-out;
  }
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    padding: 5px;
    border: none;
    background: rgb(255 255 255 / 0);
    z-index: 1;
  }
  .open svg {
    transform: scale(0.7);
  }
  .open #top {
    transform: translate(6px, 0px) rotate(45deg);
  }
  .open #middle {
    opacity: 0;
  }
  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }
  @media (min-width: 768px) {
    button {
      display: none;
    }
  }
</style>
