<script>
    import { onMount, afterUpdate } from 'svelte';
    
    import { shopprStore } from '../data/shopprStore';
    import { addItemOnServer } from '../data/connectionUtility';

    import Logo from './logo.svelte';


    let product = '';
    let quantity = 1;
    let description = '';
    let uom = 'qty';
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


    const onSubmitHandler = async(e) => {
        e.preventDefault();
        
        const results = await addItemOnServer({ product, quantity, uom, description });
        
        if(results.success) {
            $shopprStore.items = [{...results.data}, ...$shopprStore.items];
        }
        else {
            console.error(results.reason);
        }
        
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

    <div class="form-group fg-uom">
        
        <label for="formuom">
            UOM
            <i class="fas fa-balance-scale" />
        </label>

        <select id="formuom" bind:value={uom}>
            <option value="qty">quantity</option>
            <option value="gr">gr</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
            <option value="liter">liter</option>
            <option value="2pack">4 pack</option>
            <option value="3pack">4 pack</option>
            <option value="4pack">4 pack</option>
            <option value="6pack">6 pack</option>
            <option value="12pack">12 pack</option>
        </select>
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