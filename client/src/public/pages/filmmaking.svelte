<script>
    import Post from "../components/post/post.svelte";

    let allPosts = [];

    async function getPosts() {
        let response = await fetch(
            `http://localhost:8080/api/posts/filmmaking`
        ).then((response) => response.json());
        allPosts = await response.posts;
    }

    getPosts();
</script>

<body>
    <div class="content">
        <h1 class="trend">Technical issues</h1>
        <p class="trend">
            If you are having problems with equipment or editing tool feel free
            to ask for help here.
        </p>

        {#each allPosts as post}
            <Post
                postDate={post.post_date}
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
