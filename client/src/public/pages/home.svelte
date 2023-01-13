<script>
    import { onMount } from "svelte";
    import Post from "../components/post/post.svelte";
    let posts = [];
    let reviews = [];
    async function fetchMovies() {
        let response = await fetch(
            "https://api.themoviedb.org/3/trending/all/week?api_key=4a86f1670d0ac4ac719f017669984e10"
        ).then((response) => response.json());
        posts = await response.results;
        console.log(posts);
        /*
        for (let i in posts) {
            let postid = posts[i].id;
            let newReview = await fetchReview(postid);
            reviews.push(newReview);
        }
        
        console.log(reviews);
    */
    }

    async function fetchReview(id) {
        let response = await fetch(
            "https://api.themoviedb.org/3/movie/" +
                id +
                "/reviews?api_key=4a86f1670d0ac4ac719f017669984e10"
        ).then((response) => response.json());
        let review = await response.results;
        if (review !== undefined) {
            return review[0];
        }
    }

    onMount(fetchMovies);
</script>

<body>
    <div class="content">
        <h1 class="trend">Social Hub and latest hot topics</h1>
        <p class="trend">Welcome to a story to tell, in this category you can make social posts and look for fellow filmmakers</p>
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
