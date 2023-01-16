<script>
    import { user, socket } from "../../../global/global";
    import { Link } from "svelte-navigator";
    export let username;
    export let comment;
    export let userId;
    export let commentId;
    export let date;

    function visitProfile() {
        localStorage.clear()
        localStorage.setItem("visit", userId);
    }

    async function deleteComment() {
        const comment = {
            id: commentId,
        };

        socket.emit("deletepostcomment", comment);
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
                    <button on:click={deleteComment}
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="delete-btn"
                            ><path
                                d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                            /></svg
                        >
                    </button>
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

    button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    .delete-btn {
        padding: 5px 12px;
        height: 20px;
        cursor: pointer;
        color: white;
        background-color: #c70000;
        border-radius: 3px;
    }

    .delete-btn :hover {
        padding: 5px 12px;
        height: 20px;
        cursor: pointer;
        color: white;
        background-color: green;
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
        content: url(../../../assets/userpic.png);
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
        background-color: #f9f9f9;
        padding: 10px 10px 0 10px;
        margin: 0 auto;
    }

    .interaction-menu {
        display: block;
        padding: 8px;
    }
</style>
