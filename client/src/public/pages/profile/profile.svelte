<script>
  import UserInfo from "../../components/profile/userInfo.svelte";
  import Post from "../../components/post/post.svelte";
  import { user } from "../../../global/global";
  let posts = [];

  async function getPosts() {
    let id = {
      id: $user.id,
    };

    let response = await fetch(`http://localhost:8080/api/posts/id`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    });
    let userPosts = await response.json();
    posts = userPosts.posts;
  }
  getPosts();
</script>

<UserInfo />
<h1 class="trend">Your contributions</h1>
{#each posts as post}
  <Post
    userId = {post.user_id}
    postId={post.post_id}
    userphoto={undefined}
    username={$user.username}
    headline={post.post_title}
    content={post.post_content}
    backdrop={""}
  />
{/each}

<style>
  .trend {
    margin: 0 auto;
    width: 40%;
    top: 20%;
  }
</style>
