<script>
    import { user, commentChanges } from "../../../global/global.js";
    export let post_Id;
    let userphoto;
    let comment_Content;
    let allComments = [];

    import io from "socket.io-client";
    const socket = io();

    async function addComment() {
        const new_comment = {
            userId: $user.id,
            postId: post_Id,
            comment: comment_Content,
        };

        let response = await fetch(`http://localhost:8080/api/comments`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(new_comment),
        });
        socket.on("update comments", (data) => {
            console.log("does this do anything?");
            allComments = data.data;
            commentChanges.update((currentCommentsChanges) => {
                return [data, ...currentCommentsChanges];
            });
        });
        console.log("Emitting underneath");

        socket.emit("client asks for comments", { data: allComments });
    }
</script>

<div class="commentfield">
    {#if userphoto !== ""}
        <img class="user_photo" src={userphoto} alt="" />
    {/if}

    <input
        type="text"
        placeholder="Share your thoughts"
        bind:value={comment_Content}
    />

    <button type="button" on:click={addComment}>comment</button>
</div>

<style>
    .commentfield input {
        margin: auto auto;
        width: 75%;
        background-color: white;
    }
    .commentfield button {
        margin: auto auto;
    }
    .commentfield {
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        background-color: lightgray;
        display: flex;
    }
    .user_photo {
        height: 50px;
        width: 50px;
        border-radius: 100px;
        border: 1px solid black;
    }
</style>
