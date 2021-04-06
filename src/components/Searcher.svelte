<script>
    import { loading, posts } from '@utils/store.js'
    import listPosts from '@post/_posts.js'
    let text = ''
    let alertMessage = ''
    let searchInput
    function searchValue(val) {
        let response = listPosts.filter(post => post.tag.toLowerCase() === val)
        console.log(response)
    }
    function handleSubmit(e) {
        e.preventDefault()
        searchValue(text)
    }
    function clearSearch() {
        text = ''
        posts.set([])
        searchInput.focus()
    }
</script>
<div class="Searcher">
    <form action="" on:click={handleSubmit}>
        <input
            type="text"
            placeholder="Busca por título o tema"
            bind:value={text}
            bind:this={searchInput}
        >
        <button type="submit" class="btn-primary">Search</button>
    </form>
    <button class="btn-secondary" on:click={clearSearch}>Clear</button>
</div>