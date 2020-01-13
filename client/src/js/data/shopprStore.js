import { writable } from 'svelte/store';

export const shopprStore = writable({
    showConfirm: false,
    showForm: false,
    isLoading: false,
    items: []
});