<script>
    import Toastr from "toastr";
    import { user, socket } from "../../../global/global";
    import Comment from "../comments/comment.svelte";
    import AddComment from "../comments/addComment.svelte";
    export let postDate;
    export let postId;
    export let userId;
    export let username;
    export let headline;
    export let content;
    export let backdrop;
    let allComments = [];
    let newComment;

    socket.on("update comments", async (data) => {
        newComment = await data;
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
        Toastr.success("Post bookmarked");
        if (response.ok) {
        }
    }

    getComments();
</script>

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<div class="content">
    <div class="user">
        {#if backdrop == ""}
            <img class="user_photo" alt="" />
        {/if}
        {#if username !== ""}
            <br />
            <a href="/profile"><p>{username}</p></a>
        {/if}
    </div>
    <p>posted on {postDate}</p>
    <h1 class="headline">{headline}</h1>
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
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="save-btn"
                on:click={bookmarkPost}
                viewBox="0 0 512 512"
                ><path
                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                /></svg
            >
            {#if $user.id === userId}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    on:click={deletePost}
                    class="delete-btn"
                    viewBox="0 0 512 512"
                    ><path
                        d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                    /></svg
                >
            {/if}
        </div>
    {/if}

    {#each allComments as comment}
        <Comment
            date={comment.comment_date}
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
        padding: 5px 12px;
        height: 20px;
        cursor: pointer;
        color: white;
        background-color: #c70000;
        border-radius: 3px;
    }

    .save-btn {
        padding: 5px 12px;
        height: 20px;
        cursor: pointer;
        border: none;
        color: white;
        background-color: green;
        font-size: 16px;
        border-radius: 3px;
        text-decoration: none;
    }

    .image {
        width: 100%;
        background-color: green;
    }
</style>
