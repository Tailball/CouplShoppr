<script>
    import { onMount, afterUpdate } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    import Logo from './logo.svelte';


    const dispatch = createEventDispatcher();

    let product = '';
    let quantity = 1;
    let description = '';
    let submit = undefined;
    let productelement = undefined;


    onMount(() => {
        submit = document.querySelector('#form-submit');
        productelement = document.querySelector('#formproduct');

        productelement.focus();
    });

    afterUpdate(() => {
        let shouldEnable = true;

        if(!product || product.length <= 3) shouldEnable = false;
        if(!quantity || quantity <= 0) shouldEnable = false;

        if(submit) {
            submit.disabled = !shouldEnable;
        }
    });


    const onSubmitHandler = e => {
        e.preventDefault();
        
        dispatch('form-additem', { product, quantity, description });
        
        product = '';
        quantity = 1;
        description = '';

        if(productelement) {
            productelement.focus();
        }
    }
</script>


<style>
</style>


<form class="form"
      on:submit={onSubmitHandler}>

    <Logo partOne="add" 
          partTwo="items"
          icon="fas fa-cart-plus" />
    
    <div class="form-group fg-product">
        
        <label for="formproduct">
            Product
            <i class="fas fa-drumstick-bite" />
        </label>

        <input id="formproduct" type="text" placeholder="add product" bind:value={product} />
    </div>

    <div class="form-group fg-quantity">
        
        <label for="formquantity">
            Quantity
            <i class="fab fa-slack-hash" />
        </label>

        <input id="formquantity" type="number" bind:value={quantity} />
    </div>

    <div class="form-group fg-description">

        <label for="formdescription">
            Description
            <i class="fas fa-comment" />
        </label>
        <input id="formdescription" type="text" placeholder="add description" bind:value={description} />
    </div>

    <button id="form-submit"
            class="submit"
            disabled>

        <i class="far fa-plus-square" />
        &nbsp;
        Add

    </button>

</form>