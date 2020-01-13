<script>
    import { shopprStore } from '../data/shopprStore';


    const newListHandler = () => {
        $shopprStore.showConfirm = true;
    }
</script>


<style>
</style>


<button on:click={newListHandler}>
    <i class="far fa-file" />
    &nbsp;
    new list
</button>