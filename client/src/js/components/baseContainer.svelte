<script>
    import Logo from './logo.svelte';
    import Form from './form.svelte';
    import ShoppingListContainer from './shoppingListContainer.svelte';


    export let store;


    const onAddItemHandler = ({ detail }) => {
        store.activeList = [
            {
                ...detail, 
                checked: false
            }, 
            ...store.activeList
        ];
    }

    const onDeleteItemHandler = ({ detail }) => {
        store.activeList = store.activeList.filter(itm => itm.product !== detail.product);
    }

    const onCheckItemHandler = ({ detail }) => {
        const item = store.activeList.find(itm => itm.product === detail.product);
        item.checked = !item.checked;

        store.activeList = [...store.activeList];
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
            <Logo partOne="now" partTwo="loading" />
        </div>
    {:else}
        <ShoppingListContainer data={store.activeList}
                               on:shoppinglistcontainer-delete={onDeleteItemHandler}
                               on:shoppinglistcontainer-check={onCheckItemHandler} />
    {/if}

</div>