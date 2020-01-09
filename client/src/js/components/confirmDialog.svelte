<script>
    export let onYesClick;
    export let onNoClick;
</script>


<style>
</style>


<div class="confirmdialog">
    <h1>Are you sure?</h1>
    
    <div class="confirmdialog-controls">
        <button class="confirmdialog-controls--yes"
                on:click={onYesClick}>
            
            <i class="far fa-thumbs-up"></i>

        </button>

        <button class="confirmdialog-controls--no"
                on:click={onNoClick}>
            
            <i class="far fa-thumbs-down"></i>
            
        </button>
    </div>

</div>