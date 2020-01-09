<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let _id;
    export let __v;
    export let product;
    export let quantity;
    export let description;
    export let checked;


    const onDeleteClickHandler = () => {
        dispatch('shoppingitem-delete', { _id });
    }

    const onCheckClickHandler = () => {
        dispatch('shoppingitem-check', { _id });
    }
</script>


<style>
</style>


<div class="shoppingitem"
     class:checked={checked}>

    <div class="shoppingitem-quantity">
        <h2>{quantity}x</h2>
    </div>

    <div class="shoppingitem-details">
        <h1>{product}</h1>
        <p>{description}</p>
    </div>

    <div class="shoppingitem-controls">
        
        <button on:click={onDeleteClickHandler}>delete</button>
        <button on:click={onCheckClickHandler}>check</button>

    </div>

</div>