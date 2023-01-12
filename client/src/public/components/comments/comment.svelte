<script>
    import { user, socket } from "../../../global/global";
    import { Link } from "svelte-navigator";
    export let username;
    export let comment;
    export let userId;
    export let commentId;
    let date;

    function visitProfile() {
        localStorage.setItem("visit", userId);
    }

    async function deleteComment() {
        const comment = {
            id: commentId,
        };

        let response = await fetch(
            `http://localhost:8080/api/comments/delete`,
            {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(comment),
            }
        ).then((response) => response.json());

        socket.emit("getpostcomments", undefined);
    }
</script>

<div class="content">
    <div class="user_info">
        <img class="user_photo" alt="" />
        <Link to="/profile"
            ><button on:click={visitProfile} class="user_name"
                ><p>{username}</p></button
            ></Link
        >
    </div>
    <div class="comment">
        <div class="date"><p>posted on: {date}</p></div>
        <p>{comment}</p>
        {#if $user}
            {#if $user.id === userId}
                <div class="interaction-menu">
                    <button class="delete-btn" on:click={deleteComment}
                        >Delete</button
                    >
                </div>
            {/if}
        {/if}
    </div>
</div>

<style>
    .content {
        display: flex;
        grid-template-columns: 1fr 1fr;
        margin: 1% auto;
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
    .user_info {
        width: 15%;
        text-align: center;
        padding: 10px 10px 0 10px;
    }

    .user_photo {
        height: 50px;
        width: 50px;
        border-radius: 100px;
        border: 1px solid black;
        content: url(userpic.png);
    }

    .user_name {
        color: blue;
        background: none;
        border: none;
    }

    .user_name:hover {
        color: red;
        cursor: pointer;
    }

    .comment {
        width: 100%;
        display: inline-block;
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        background-color: lightgray;
        padding: 10px 10px 0 10px;
        margin: 0 auto;
    }

    .interaction-menu {
        display: block;
        padding: 8px;
    }
</style>
