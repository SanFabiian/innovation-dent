<script>
  import linksNav from "@utils/linksNav.js";
  export let segment;
  export let open = false;
  function btnOpen() {
    open = !open;
  }
</script>

<nav class:open>
  <ul>
    {#each linksNav as route}
      <li>
        <a
          aria-current={segment === route.name ? "page" : undefined}
          href={route.route}
          on:click={btnOpen}
        >
          {route.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    text-align: right;
  }
  li {
    list-style: none;
  }
  a {
    display: block;
    width: 100%;
    padding: 10px 20px;
    color: var(--white);
    text-decoration: none;
    font-family: var(--font-maven);
    font-size: var(--size-text);
    text-transform: capitalize;
  }
  nav {
    position: absolute;
    top: 65px;
    width: 100%;
    height: 100vh;
    background: linear-gradient(var(--green), transparent),
      linear-gradient(90deg, #6197be, transparent),
      linear-gradient(-90deg, #61b0be, transparent);
    background-color: white;
    right: -100%;
    transition: right 0.3s ease-in-out;
    z-index: 1;
  }
  .open {
    right: 0;
  }
  @media (min-width: 768px) {
    nav {
      position: initial;
      height: 65px;
      background: var(--green);
      padding: 0 30px;
    }
    nav ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
    }
    ul a {
      padding-right: 0;
    }
  }
</style>
