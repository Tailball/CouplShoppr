<script>
    export let partOne;
    export let partTwo;
    export let icon;
</script>


<style>
</style>


<h1 class="logo">
    
    {#if icon}
        <i class="{icon}" />
    {/if}

    {partOne}<span>{partTwo}</span>

</h1>