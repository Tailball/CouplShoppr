<script>
    import { createEventDispatcher } from 'svelte';
    
    import ShoppingItem from './shoppingItem.svelte';
    import Logo from './logo.svelte';

    export let data = [];

    const dispatch = createEventDispatcher();


    const shoppingItemDeleteHandler = ({ detail }) => {
        dispatch('shoppinglistcontainer-delete', detail);
    }

    const shoppingItemCheckHandler = ({ detail }) => {
        dispatch('shoppinglistcontainer-check', detail);
    }
</script>


<style>
</style>


<div class="shoppinglistcontainer">

    <Logo partOne="shopping" partTwo="list" />
    
    {#each data as listitem}
        <ShoppingItem {...listitem}
                      on:shoppingitem-delete={shoppingItemDeleteHandler}
                      on:shoppingitem-check={shoppingItemCheckHandler} />
    {/each}

</div>