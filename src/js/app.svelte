<script>
    import Logo from './components/logo.svelte';
    import BaseContainer from './components/baseContainer.svelte';

    let showForm = false;

    const toggleFormHandler = () => {
        showForm = !showForm;
    }
</script>


<style>
    .app-title {
        background-color: rgba(150, 150, 150, .25);
        
        position: fixed;
        width: 100%;
        height: 7.5vh;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.35);
    }

    .app-title-controls {
        z-index: 99;
        position: absolute;
        right: 3vh;
        height: 7.5vh;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .app-title-controls button {
        width: 6.5rem;
        margin: 0 .2rem;
        height: 100%;
    }
</style>


<div class="app-header">
    <div class="app-title">
        <Logo />
    </div>

    <div class="app-title-controls">
        
        <button on:click={toggleFormHandler}>
            {#if showForm}
                hide<br/>items
            {:else}
                add<br/>items
            {/if}
        </button>

        <button>
            new<br/>list
        </button>

    </div>
</div>

<BaseContainer showForm={showForm} />