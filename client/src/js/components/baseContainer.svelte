<script>
    import Logo from './logo.svelte';
    import Form from './form.svelte';
    import ShoppingListContainer from './shoppingListContainer.svelte';

    import { addItem, deleteItem, checkItem } from '../data/connectionUtility';


    export let store;


    const onAddItemHandler = async ({ detail }) => {
        const results = await addItem(detail);
        
        if(results.success) {
            store.activeList = [{...results.data}, ...store.activeList];
        }
        else {
            console.error(results.reason);
        }
    }

    const onDeleteItemHandler = async ({ detail }) => {
        const results = await deleteItem(detail);
        
        if(results.success) {
            store.activeList = store.activeList.filter(itm => itm._id !== results.data._id);
        }
    }

    const onCheckItemHandler = async ({ detail }) => {
        const results = await checkItem(detail);

        if(results.success) {
            const item = store.activeList.find(itm => itm._id === results.data._id);
            item.checked = results.data.checked;

            store.activeList = [...store.activeList];
        }
        else {
            console.error(results.reason);
        }
    }
</script>


<style>
</style>


<div class="basecontainer">
    
    <div class="app-title-filler"></div>

    {#if store.showForm}
        <Form on:form-additem={onAddItemHandler} />
    {/if}

    {#if store.isLoading}
        <div class="wrapper">
            <Logo partOne="now" 
                  partTwo="loading"
                  icon="fas fa-spinner" />
        </div>
    {:else}
        <ShoppingListContainer data={store.activeList}
                               on:shoppinglistcontainer-delete={onDeleteItemHandler}
                               on:shoppinglistcontainer-check={onCheckItemHandler} />
    {/if}

</div>