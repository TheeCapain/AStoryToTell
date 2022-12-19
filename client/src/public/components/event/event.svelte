<script>
    export let headline;
    export let content;
    export let backdrop;
</script>

<div class="content">
    <h1 class="headline">{headline}</h1>
    {#if backdrop !== ""}
    <img
    class="image"
    src="https://image.tmdb.org/t/p/original/{backdrop}"
    alt="poster attribute"
/> 
    {/if}
    
    <div class="text">
        <p>
            {content}
        </p>
    </div>
</div>

<style>
    .content {
        margin: 1% auto;
        width: 40%;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        -webkit-box-shadow: -1px 2px 8px -1px rgba(0, 0, 0, 0.35);
    }

    .image {
        width: 100%;
        background-color: green;
    }
</style>
