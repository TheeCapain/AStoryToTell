<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../../../global/global";

    const navigate = useNavigate();
    const location = useLocation();

    let username;
    let email;
    let password;
    let confirmpassword;

    function handleSubmit() {
        $user = { username, password };
        const from = ($location.state && $location.state.from) || "/profile";
        navigate(from, { replace: true });
    }
</script>

<div class="login-form">
    <h3>Login</h3>
    <form on:submit={handleSubmit}>
        <input
            bind:value={username}
            type="text"
            name="username"
            placeholder="Username"
        />
        <br />
        <input
            bind:value={password}
            type="password"
            name="password"
            placeholder="Password"
        />
        <br />
        <button type="submit">sign up</button>
    </form>
    <button type="submit">not a member?</button>
</div>

<style>
    .login-form {
        margin: auto auto;
        width: 40%;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        -webkit-box-shadow: -1px 2px 8px -1px rgba(0, 0, 0, 0.35);
    }
</style>
