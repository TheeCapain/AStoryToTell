<script>
    import { user, socket } from "../../../global/global";
    import Comment from "../comments/comment.svelte";
    import AddComment from "../comments/addComment.svelte";
    export let postId;
    export let userId;
    export let username;
    export let headline;
    export let content;
    export let backdrop;
    let allComments = [];
    let newComment;
    let postComments = [];

    socket.on("update comments", async (data) => {
        newComment = await data;
        postComments.push(newComment);
        getComments();
    });

    async function getComments() {
        const post = {
            id: postId,
        };

        let response = await fetch(`http://localhost:8080/api/comments/id`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        }).then((response) => response.json());

        allComments = await response.comments;
    }

    async function deletePost() {
        const post = {
            id: postId,
        };

        let response = await fetch(`http://localhost:8080/api/posts/delete`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        }).then((response) => response.json());
    }

    async function bookmarkPost() {
        const bookmark = {
            postId: postId,
            userId: $user.id,
        };

        let response = await fetch(`http://localhost:8080/api/bookmarks`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookmark),
        }).then((response) => response.json());
    }

    getComments();
</script>

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<div class="content">
    <div class="user">
        <img class="user_photo" alt="" />

        {#if username !== ""}
            <br />
            <a href="/profile"><p>{username}</p></a>
        {/if}
    </div>
    <h1 class="headline">{headline}</h1>
    <p>post id: {postId}</p>
    {#if backdrop !== ""}
        <img
            class="image"
            src="https://image.tmdb.org/t/p/original/{backdrop}"
            alt="poster attribute"
        />
    {/if}

    <div class="text">
        <p>
            {content}
        </p>
    </div>
    {#if $user}
        <div class="interaction-menu">
            <button class="save-btn" on:click={bookmarkPost}>Save</button>
            {#if $user.id === userId}
                <button class="delete-btn" on:click={deletePost}>Delete</button>
            {/if}
        </div>
    {/if}

    {#each allComments as comment}
        <Comment
            userId={comment.fk_user_id}
            commentId={comment.comment_id}
            username={comment.user_name}
            comment={comment.comment_content}
        />
    {/each}

    {#if $user}
        <AddComment post_Id={postId} />
    {/if}
</div>

<style>
    .user {
        display: inline-flex;
    }
    .user_photo {
        height: 50px;
        width: 50px;
        border-radius: 100px;
        border: 1px solid black;
        content: url(userpic.png);
    }

    .content {
        margin: 1% auto;
        width: 40%;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        -webkit-box-shadow: -1px 2px 8px -1px rgba(0, 0, 0, 0.35);
    }
    .delete-btn {
        padding: 2px 10px 2px 10px;
        cursor: pointer;
        border: none;
        background-color: #c70000;
        font-size: 16px;
        border-radius: 3px;
    }

    .save-btn {
        padding: 2px 10px 2px 10px;
        cursor: pointer;
        border: none;
        background-color: blue;
        font-size: 16px;
        border-radius: 3px;
        text-decoration: none;
    }

    .image {
        width: 100%;
        background-color: green;
    }
</style>
