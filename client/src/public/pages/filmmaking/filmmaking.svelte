<script>
    import Post from "../../components/post/post.svelte";

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
        {#each allPosts as post}
            <Post
                userId={post.user_id}
                postId={post.post_id}
                userphoto={undefined}
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
