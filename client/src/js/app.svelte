<script>
    import { onMount } from 'svelte';
    import { getListDataFromServer, clearList } from './data/connectionUtility';

    import Logo from './components/logo.svelte';
    import BaseContainer from './components/baseContainer.svelte';
    import ConfirmDialog from './components/confirmDialog.svelte';


    let store = {
        showForm: false,
        showConfirm: false,
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

    const newListHandler = () => {
        store.showConfirm = true;
    }

    const loadShoppingList = async () => {
        const shoppingList = await getListDataFromServer();

        if(shoppingList.success) {
            const sortedShoppingList = shoppingList.data.sort((a, b) => {
                return new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime();
            });

            store.activeList = sortedShoppingList;
        }
        else {
            console.error(shoppingList.reason);
        }

        setTimeout(loadShoppingList, 3000);
    }

    const onConfirmYesHandler = async () => {
        store.showConfirm = false;
        
        const results = await clearList();

        if(results.success) {
            store.activeList = [];
        }
        else {
            console.error(results.reason);
        }
    }

    const onConfirmNoHandler = () => {
        store.showConfirm = false;
        console.log('clicked no');
    }
</script>


<style>
</style>


<div class="app-header">
    <div class="app-title">
        <Logo partOne="coupl" 
              partTwo="shoppr" 
              icon="fas fa-clipboard-list" />
    </div>

    
    {#if !store.isLoading}
        <div class="app-controls">
            
            <button on:click={toggleFormHandler}>
                {#if store.showForm}
                    <i class="far fa-minus-square" />
                    &nbsp;
                    hide items
                {:else}
                    <i class="far fa-plus-square" />
                    &nbsp;
                    add items
                {/if}
            </button>

            <button on:click={newListHandler}>
                <i class="far fa-file" />
                &nbsp;
                new list
            </button>

        </div>
    {/if}

    {#if store.showConfirm}
        <ConfirmDialog onYesClick={onConfirmYesHandler}
                       onNoClick={onConfirmNoHandler} />
    {/if} 
</div>

<BaseContainer store={store} />