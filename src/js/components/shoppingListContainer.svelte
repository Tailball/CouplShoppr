<script>
    import ShoppingItem from './shoppingItem.svelte';

    export let data = [];
</script>


<style>
</style>


<div class="shoppinglistcontainer">
    <h1>containerrrrr</h1>

    {#each data as listitem}
        <ShoppingItem {...listitem} />
    {/each}
</div>