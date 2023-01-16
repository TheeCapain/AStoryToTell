<script>
    import Toastr from "toastr";
    import { user } from "../../../global/global.js";
    let post_title;
    let post_content;
    let post_category;

    const date = new Date();

    async function addPost() {
        if (post_content === undefined || post_title === undefined) {
            Toastr.warning("Error: Posts must have a title and Content");
        } else {
            const new_post = {
                userid: $user.id,
                userName: $user.username,
                title: post_title,
                content: post_content,
                category: post_category,
                date: date.toLocaleDateString("en-UK"),
            };
            let response = await fetch(`http://localhost:8080/api/posts`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(new_post),
            });

            if(response.ok){
                Toastr.success("Post created in " + post_category);
            }
        
        }
    }
</script>

<div class="signup">
    <h3>Create a new post</h3>
    <form>
        <p>Title*</p>
        <input
            bind:value={post_title}
            id="title"
            type="text"
            placeholder="Title"
        />
        <br />
        <br />
        <label for="category">Choose a Category:</label>
        <select name="category" id="category" bind:value={post_category}>
            <option value="filmmaking">filmmaking</option>
            <option value="writing">Writing</option>
            <option value="music">Music</option>
            <option value="social">Social</option>
        </select>
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

    input[type="text"],
    textarea {
        width: 90%;
        padding: 12px;
        border: 1px solid #ccc;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    select {
        width: 93%;
        padding: 12px;
        border: 1px solid #ccc;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    button[type="button"] {
        background-color: #04aa6d;
        color: white;
        padding: 12px 20px;
        cursor: pointer;
    }
</style>
