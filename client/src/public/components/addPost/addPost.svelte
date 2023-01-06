<script>
    import { user } from "../../../global/global.js";
    let post_title;
    let post_content;

    async function addPost() {
        const new_post = {
            userid: $user.id,
            title: post_title,
            content: post_content,
        };
        let response = await fetch(`http://localhost:8080/api/posts`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(new_post),
        });
        //Skal laves logik for at ændre siden
    }
</script>

<div class="signup">
    <h3>Create a new post</h3>
    <form>
        <p>Title*</p>
        <input bind:value={post_title} id="title" placeholder="Title" />
        <br />
        <p>Content</p>
        <textarea bind:value={post_content} name="" id="" cols="80" rows="10" />
        <br />
        <button type="button" on:click={addPost}>Post</button>
    </form>
</div>

<style>
    .signup {
        margin: auto auto;
        width: 40%;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        -webkit-box-shadow: -1px 2px 8px -1px rgba(0, 0, 0, 0.35);
    }
</style>
