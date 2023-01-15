<script>
    import { user, socket } from "../../../global/global.js";
    import Toastr from "toastr";
    export let post_Id;
    let userphoto;
    let comment_Content;
    const date = new Date();

    
    async function addComment() {
        if (comment_Content === undefined) {
            Toastr.warning("Comments must have a message");
        } else {
            const new_comment = {
                userId: $user.id,
                user_name: $user.user_name,
                postId: post_Id,
                comment: comment_Content,
                date: date.toLocaleDateString("en-UK"),
            };

            comment_Content = "";
            socket.emit("insertComment", new_comment);
        }
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

    input[type="text"] {
        padding: 12px;
        border: 1px solid #ccc;
        margin-top: 6px;
        resize: vertical;
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

    button[type="button"] {
        background-color: #04aa6d;
        color: white;
        padding: 12px 20px;
        cursor: pointer;
    }
    .user_photo {
        height: 50px;
        width: 50px;
        border-radius: 100px;
        border: 1px solid black;
        content: url(../../../assets/userpic.png);
    }
</style>
