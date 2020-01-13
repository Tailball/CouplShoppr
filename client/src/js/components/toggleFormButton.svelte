<script>
    import { shopprStore } from '../data/shopprStore';


    const toggleFormHandler = () => {
        $shopprStore.showForm = !$shopprStore.showForm;
    }
</script>


<style>
</style>


<button on:click={toggleFormHandler}>

    {#if $shopprStore.showForm}

        <i class="far fa-minus-square" />
        &nbsp;
        hide items

    {:else}
        
        <i class="far fa-plus-square" />
        &nbsp;
        add items
        
    {/if}

</button>