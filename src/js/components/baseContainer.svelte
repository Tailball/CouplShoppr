<script>
    import { onMount } from 'svelte';
    import { getListDataFromServer } from '../data/connectionUtility';

    import Form from './form.svelte';
    import ShoppingListContainer from './shoppingListContainer.svelte';


    export let showForm;

    let activeList = [];


    onMount(async () => {
        const listData = await getListDataFromServer();
        activeList = [...activeList, ...listData];
    });


    const onAddItemHandler = ({ detail }) => {
        activeList = [...activeList, detail];
    }
</script>


<style>
    .basecontainer {
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
    }

    .app-title-filler {
        width: 100%;
        height: 7.5vh;
    }
</style>


<div class="basecontainer">
    
    <div class="app-title-filler"> </div>

    {#if showForm}
        <Form on:form-additem={onAddItemHandler} />
    {/if}

    <ShoppingListContainer data={activeList} />

</div>