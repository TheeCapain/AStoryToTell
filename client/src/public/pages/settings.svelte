<script>
    import { user } from "../../global/global";
    let info;
    let name;
    let bio;

    async function userData() {
        let id = {
            id: $user.id,
        };

        let userInfo = await fetch(`http://localhost:8080/api/users/id`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(id),
        });
        info = await userInfo.json();
        name = info.info[0].user_name;
        bio = info.info[0].user_bio;
    }
    userData();

    async function updateUserData() {
        console.log("attempting to update user info");

        let id = {
            id: $user.id,
            userName: name,
            userBio: bio,
        };

        let userInfo = await fetch(`http://localhost:8080/api/users/id`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(id),
        });
        info = await userInfo.json();
    }
</script>

<div class="container">
    <div style="text-align:center">
        <h2>Update public User info</h2>
    </div>
    <div class="row">
        <div class="column">
            <form>
                <label for="fname">Username</label>
                <input
                    bind:value={name}
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder={name}
                />
                <label for="subject">About you</label>
                <textarea
                    bind:value={bio}
                    id="subject"
                    name="subject"
                    placeholder={bio}
                    style="height:170px"
                />
                <button type="button" on:click={updateUserData}>Submit</button>
            </form>
        </div>
        <div class="column">
            <img class="user_picture" alt="" />
        </div>
    </div>
</div>

<style>
    * {
        box-sizing: border-box;
    }

    /* Style inputs */
    input[type="text"],
    textarea {
        width: 100%;
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
        border: none;
        cursor: pointer;
    }

    button[type="button"]:hover {
        background-color: #45a049;
    }

    /* Style the container/contact section */
    .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 10px;
        margin-left: 16%;
    }

    /* Create two columns that float next to eachother */
    .column {
        float: left;
        width: 50%;
        margin-top: 6px;
        padding: 20px;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    .user_picture {
        height: 225px;
        width: 225px;
        margin: 25px 50px;
        border-radius: 125px;
        border: 1px solid black;
        content: url(userpic.png);
    }

    .user_picture:hover {
        color: gray;
    }
</style>
