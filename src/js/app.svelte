<script>
    import { onMount } from 'svelte';
    import { getListDataFromServer } from './data/connectionUtility';

    import Logo from './components/logo.svelte';
    import BaseContainer from './components/baseContainer.svelte';


    let store = {
        showForm: false,
        isLoading: false,
        activeList: []
    };


    onMount(async () => {
        store.isLoading = true;
        
        const shoppingList = await getListDataFromServer();
        store.activeList = shoppingList;

        store.isLoading = false;
    });


    const toggleFormHandler = () => {
        store.showForm = !store.showForm;
    }

    const newListHandler = () => {
        store.activeList = [];
    }
</script>


<style>
    button {
        width: 6.5rem;
        margin: 0 .2rem;
        height: 100%;
    }
</style>


<div class="app-header">
    <div class="app-title">
        <Logo partOne="coupl" partTwo="shoppr" />
    </div>

    <div class="app-title-controls">
        
        <button on:click={toggleFormHandler}>
            {#if store.showForm}
                hide<br/>items
            {:else}
                add<br/>items
            {/if}
        </button>

        <button on:click={newListHandler}>
            new<br/>list
        </button>

    </div>
</div>

<BaseContainer store={store} />