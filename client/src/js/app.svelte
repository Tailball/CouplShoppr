<script>
    import { onMount } from 'svelte';
    
    import { getListDataFromServer } from './data/connectionUtility';
    import { shopprStore } from './data/shopprStore';

    import Logo from './components/logo.svelte';
    import BaseContainer from './components/baseContainer.svelte';
    import ConfirmClearListDialog from './components/confirmClearListDialog.svelte';
    import ToggleFormButton from './components/toggleFormButton.svelte';
    import NewListButton from './components/newListButton.svelte';


    onMount(() => {
        $shopprStore.isLoading = true;
        loadShoppingList();
        $shopprStore.isLoading = false;
    });


    const loadShoppingList = async () => {
        const shoppingList = await getListDataFromServer();

        if(shoppingList.success) {
            const sortedShoppingList = sortShoppingList(shoppingList.data);
            $shopprStore.items = sortedShoppingList;
        }
        else {
            console.error(shoppingList.reason);
        }

        setTimeout(loadShoppingList, 3500);
    };

    const sortShoppingList = list => {
        return list.sort((a, b) => {
            return new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime();
        });
    };
</script>


<style>
</style>


<div class="app-header">
    
    <div class="app-title">
        <Logo partOne="coupl" 
              partTwo="shoppr" 
              icon="fas fa-clipboard-list" />
    </div>

    
    {#if !$shopprStore.isLoading}
        <div class="app-controls">
            <ToggleFormButton />
            <NewListButton />
        </div>
    {/if}


    {#if $shopprStore.showConfirm}
        <ConfirmClearListDialog />
    {/if} 
    
</div>

<BaseContainer />