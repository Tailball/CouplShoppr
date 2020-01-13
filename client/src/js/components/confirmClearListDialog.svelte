<script>
    import { shopprStore } from '../data/shopprStore';
    import { clearListOnServer } from '../data/connectionUtility';


    const onConfirmHandler = async () => {
        $shopprStore.showConfirm = false;

        const results = await clearListOnServer();

        if(results.success) {
            $shopprStore.items = [];
        }
        else {
            console.error(results.reason);
        }
    }

    const onCancelHandler = () => {
        $shopprStore.showConfirm = false;
    }
</script>


<style>
</style>


<div class="confirmdialog">
    <h1>Are you sure?</h1>
    
    <div class="confirmdialog-controls">
        <button class="confirmdialog-controls--yes"
                on:click={onConfirmHandler}>
            
            <i class="far fa-thumbs-up"></i>

        </button>

        <button class="confirmdialog-controls--no"
                on:click={onCancelHandler}>
            
            <i class="far fa-thumbs-down"></i>
            
        </button>
    </div>

</div>