<script>
    import { deleteItemFromServer, checkItemOnServer } from '../data/connectionUtility';
    import { shopprStore } from '../data/shopprStore';
    
    import ShoppingItem from './shoppingItem.svelte';
    import Logo from './logo.svelte';

    
    const shoppingItemDeleteHandler = async ({ detail }) => {
        const results = await deleteItemFromServer(detail);
        
        if(results.success) {
            $shopprStore.items = $shopprStore.items.filter(itm => itm._id !== results.data._id);
        }
        else {
            console.error(results.reason);
        }
    }


    const shoppingItemCheckHandler = async ({ detail }) => {
        const results = await checkItemOnServer(detail);

        if(results.success) {
            const item = $shopprStore.items.find(itm => itm._id === results.data._id);
            item.checked = results.data.checked;

            $shopprStore.items = [...$shopprStore.items];
        }
        else {
            console.error(results.reason);
        }
    }
</script>


<style>
</style>


<div class="shoppinglistcontainer">

    <Logo partOne="shopping" 
          partTwo="list"
          icon="fas fa-shopping-bag" />
    
    {#each $shopprStore.items as listitem}
        <ShoppingItem {...listitem}
                      on:delete={shoppingItemDeleteHandler}
                      on:check={shoppingItemCheckHandler} />
    {/each}

</div>