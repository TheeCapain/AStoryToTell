<script>
  import UserInfo from "../components/profile/userInfo.svelte";
  import Post from "../components/post/post.svelte";
  import { user, socket } from "../../global/global";
  export let userId;
  let user_name;
  let posts = [];
  socket.on("update posts", async (data) => {
    getPosts();
  });

  async function userData() {
    let id = {
      id: userId,
    };

    let userInfo = await fetch(`http://localhost:8080/api/users/id`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    });
    let info = await userInfo.json();
    user_name = info.info[0].user_name;
  }

  async function getPosts() {
    let check = localStorage.getItem("visit");
    if (check != null) {
      userId = check;
    }
    let id = {
      id: userId,
    };

    let response = await fetch(`http://localhost:8080/api/posts/id`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    });

    if (response.ok) {
      let userPosts = await response.json();
      posts = userPosts.posts;
      userData();
    }
  }
  getPosts();
</script>

<UserInfo {userId} />
<h1 class="trend">Your contributions</h1>
{#each posts as post}
  <Post
    postDate={post.post_date}
    {userId}
    postId={post.post_id}
    username={user_name}
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
