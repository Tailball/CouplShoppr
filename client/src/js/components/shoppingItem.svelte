<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let _id;
    export let __v;
    export let product;
    export let quantity;
    export let description;
    export let checked;
    export let createdOn;


    const onDeleteClickHandler = () => {
        dispatch('delete', { _id });
    }

    const onCheckClickHandler = () => {
        dispatch('check', { _id });
    }
</script>


<style>
</style>


<div class="shoppingitem {checked ? ' checked': ''}">

    <div class="shoppingitem-quantity">
        <h2>{quantity}x</h2>
    </div>

    <div class="shoppingitem-details">
        <h1>{product}</h1>
        <p>{description}</p>
    </div>

    <div class="shoppingitem-controls">
        
        <button class="shoppingitem-controls-delete"
                on:click={onDeleteClickHandler}>

            <i class="far fa-trash-alt" />

        </button>

        <button class="shoppingitem-controls-check"
                on:click={onCheckClickHandler}>

            <i class="far fa-check-square" />

        </button>

    </div>

</div>