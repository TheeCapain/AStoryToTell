<script>
    import Post from "../components/post/post.svelte";
    let posts = [];
    async function fetchMovies() {
        let response = await fetch(
            "https://api.themoviedb.org/3/trending/all/week?api_key=4a86f1670d0ac4ac719f017669984e10"
        ).then((response) => response.json());
        posts = await response.results;
    }
    fetchMovies();
</script>

<body>
    <div class="content">
        <h1 class="trend">Social Hub and latest hot topics</h1>
        {#each posts as post}
            {#if post.name !== undefined}
                <Post
                    userId={undefined}
                    postId={post.id}
                    username={""}
                    headline={post.name}
                    content={post.overview}
                    backdrop={post.backdrop_path}
                />
            {:else}
                <Post
                    userId={undefined}
                    postId={post.id}
                    username={""}
                    headline={post.title}
                    content={post.overview}
                    backdrop={post.backdrop_path}
                />
            {/if}
        {/each}
    </div>
</body>

<style>
    body {
        margin: auto;
    }
    .content {
        border: solid 2px;
    }
    .trend {
        margin: 0 auto;
        width: 40%;
        top: 20%;
    }
</style>
