<script>
    import { onMount } from 'svelte';
    import { getListDataFromServer, clearList } from './data/connectionUtility';

    import Logo from './components/logo.svelte';
    import BaseContainer from './components/baseContainer.svelte';


    let store = {
        showForm: false,
        isLoading: false,
        activeList: []
    };


    onMount(() => {
        store.isLoading = true;
        
        loadShoppingList();

        store.isLoading = false;
    });


    const toggleFormHandler = () => {
        store.showForm = !store.showForm;
    }

    const newListHandler = async () => {
        const results = await clearList();

        if(results.success) {
            store.activeList = [];
        }
        else {
            console.error(results.reason);
        }
    }

    const loadShoppingList = async () => {
        const shoppingList = await getListDataFromServer();

        if(shoppingList.success) {
            store.activeList = shoppingList.data;
        }
        else {
            console.error(shoppingList.reason);
        }

        setTimeout(loadShoppingList, 3000);
    }
</script>


<style>
</style>


<div class="app-header">
    <div class="app-title">
        <Logo partOne="coupl" partTwo="shoppr" />
    </div>

    <div class="app-controls">
        
        <button on:click={toggleFormHandler}>
            {#if store.showForm}
                hide items
            {:else}
                add items
            {/if}
        </button>

        <button on:click={newListHandler}>
            new list
        </button>

    </div>
</div>

<BaseContainer store={store} />