<script>
    import toastr from "toastr"
    import Post from "../components/post/post.svelte";
    import { user } from "../../global/global";
    let allPosts = [];


    console.log($user)

    async function getPosts() {

        const post = {
            id: $user.id,
        };

        let response = await fetch(`http://localhost:8080/api/bookmarks/id`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        }).then((response) => response.json());
        allPosts = await response.data;
        console.log(allPosts)
    }

    getPosts();
</script>

<body>
    <div class="content">
        <h1 class="trend">Bookmarks</h1>
        <p class="trend">
            Here are all your bookmarked posts
        </p>

        {#each allPosts as post}
            <Post
                postDate = {post.postDate}
                userId={post.user_id}
                postId={post.post_id}
                username={$user.username}
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
