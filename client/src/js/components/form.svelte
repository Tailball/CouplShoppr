<script>
    import { onMount, afterUpdate } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    import Logo from './logo.svelte';


    const dispatch = createEventDispatcher();

    let product = '';
    let quantity = 1;
    let description = '';
    let submit = undefined;


    onMount(() => {
        submit = document.querySelector('#form-submit');
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
    }
</script>


<style>
    label, input {
        font-size: .8rem;
        font-family: inherit;
    }

    label {
        text-align: right;
        margin-right: .5rem;
        display: inline-block;
        width: 6.5rem;
    }

    input {
        width: calc(100% - 6.5rem - .65rem - 5vh - .3rem);
        padding: 0 0 .3rem .3rem;
        border-bottom: 1px solid black;
    }

    button {
        padding: .7rem;
        width: 25rem;
        margin: .7rem auto 0 auto;
    }
</style>


<form class="form"
      on:submit={onSubmitHandler}>

    <Logo partOne="add" partTwo="items" />
    
    <div class="form-group fg-product">
        <label for="formproduct">Product:</label>
        <input id="formproduct" type="text" placeholder="add product" bind:value={product} />
    </div>

    <div class="form-group fg-quantity">
        <label for="formquantity">Quantity:</label>
        <input id="formquantity" type="number" bind:value={quantity} />
    </div>

    <div class="form-group fg-description">
        <label for="formdescription">Description:</label>
        <input id="formdescription" type="text" placeholder="add description" bind:value={description} />
    </div>

    <button id="form-submit"
            class="submit"
            disabled>
        Add
    </button>

</form>