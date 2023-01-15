<script>
    import { user } from "./../../../global/global.js";
    import { Link } from "svelte-navigator";
    import { onMount } from "svelte";
    export let userId;
    let postNr;
    let user_name;
    let user_mail;
    let user_bio;
    let user_roles;

    async function countPosts() {
        let id = {
            id: userId,
        };

        let postInfo = await fetch(`http://localhost:8080/api/countpost`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(id),
        });
        let count = await postInfo.json();
        postNr = count.postAmount;
    }

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
        user_mail = info.info[0].user_mail;
        user_bio = info.info[0].user_bio;
        user_roles = info.info[0].user_roles;
    }
    onMount(userData)
    onMount(countPosts)
</script>

<body>
    <div class="user_info">
        <div class="user_picture">
            <img alt="" />
        </div>
        <div class="info">
            <div class="user_name">
                <h1>{user_name}</h1>
            </div>
            <div class="mail">
                <p>{user_mail}</p>
            </div>
            <div class="user_bio">
                <h1>User Bio</h1>
                {#if user_bio !== null}
                    <p>{user_bio}</p>
                {:else}
                    <p>{""}</p>--
                {/if}
            </div>
            <div class="knap">
                <Link to="/newPost"><button>+ New Post</button></Link>
            </div>
        </div>
        <div class="stats">
            <div class="antal_opslag">
                <h1>Antal opslag</h1>
                <p>{postNr}</p>
            </div>
            <div class="job">
                <h1>Experience</h1>
                <p>Director</p>
                <p>Photographer</p>
            </div>
        </div>
        <div class="user_stats" />
    </div>
</body>

<style>
    .user_info {
        margin: 0 0 0 16.65%;
        border: 1px solid black;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;
        background-color: #f9f9f9;
    }

    .user_info h1 {
        font-size: 20px;
        text-align: left;
        font-family: "Roboto", sans-serif;
    }

    .user_picture {
        height: 225px;
        width: 225px;
        margin: 25px 50px;
        border-radius: 125px;
        border: 1px solid black;
        content: url(./../../../assets/userpic.png);
    }

    .antal_opslag,
    .point,
    .job {
        margin-right: 50px;
        padding: 5px 50px 5px 15px;
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        -webkit-box-shadow: -1px 2px 8px -1px rgba(0, 0, 0, 0.35);
        margin-bottom: 20px;
    }

    .antal_opslag {
        margin-top: 20px;
    }

    button {
        padding: 10px 50px 10px 50px;
        cursor: pointer;
        border: none;
        background-color: #87ab69;
        font-size: 16px;
        border-radius: 3px;
    }

    p {
        font-family: "Roboto", sans-serif;
    }
</style>
