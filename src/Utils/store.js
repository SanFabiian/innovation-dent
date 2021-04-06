import { writable } from 'svelte/store'

export let loading = writable(false)
export let posts = writable([])