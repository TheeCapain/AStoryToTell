<script>
    import { user } from "./../../../global/global.js";
    import { useNavigate, useLocation } from "svelte-navigator";
    let signup_username;
    let signup_email;
    let signup_password;
    let confirmpw;
</script>

<div class="signup">
    <h3>Create a new post</h3>
    <form>
        <p>Title*</p>
        <input
            id="title"
            placeholder="Title"
        />
        <br />
        <p>Content</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <button type="button" >Post</button>
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
