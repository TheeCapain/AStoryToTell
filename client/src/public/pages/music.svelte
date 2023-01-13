<script>
    import { onMount } from "svelte";
    import Post from "../components/post/post.svelte";

    let allPosts = [];

    async function getPosts() {
        let response = await fetch(
            `http://localhost:8080/api/posts/music`
        ).then((response) => response.json());
        allPosts = await response.posts;
    }

    onMount(getPosts)

</script>

<body>
    <div class="content">
        <h1 class="trend">Share your music</h1>
        <p class="trend">Welcome to a story to tell, in this category you can make social posts and look for fellow filmmakers</p>
        {#each allPosts as post}
            <Post
                userId={post.user_id}
                postId={post.post_id}
                username={post.user_name}
                headline={post.post_title}
                content={post.post_content}
                backdrop={""}
            />
        {/each}
    </div>
</body>

<style>
    body {
        margin: auto;
    }
    .trend {
        margin: 0 auto;
        width: 40%;
        top: 20%;
    }
</style>
