<script>
    import Logo from './logo.svelte';
    import Form from './form.svelte';
    import ShoppingListContainer from './shoppingListContainer.svelte';

    import { shopprStore } from '../data/shopprStore';
</script>


<style>
</style>


<div class="basecontainer">
    
    <div class="app-title-filler"></div>

    {#if $shopprStore.showForm}
        <Form />
    {/if}

    {#if $shopprStore.isLoading}
        <div class="wrapper">
            <Logo partOne="now" 
                  partTwo="loading"
                  icon="fas fa-spinner" />
        </div>
    {:else}
        <ShoppingListContainer />
    {/if}

</div>