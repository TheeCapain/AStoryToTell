<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import toastr from "toastr";
    import { user } from "../../../global/global.js";

    const navigate = useNavigate();
    const location = useLocation();

    let login_email;
    let login_password;

    async function handleSignIn() {
        const login_user = {
            email: login_email,
            password: login_password,
        };

        let response = await fetch(`http://localhost:8080/api/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(login_user),
        });

        if (response.ok) {
            let data = await response.json();
            let username = data.username;
            let id = data.userid;
            $user = { username, id };
            localStorage.setItem("loggedIn", JSON.stringify($user));
            const from = ($location.state && $location.state.from) || "/home";
            navigate(from, { replace: true });
        } else{
            toastr.warning("Wrong mail or password")
        }
    }
</script>

<div class="login-form">
    <h3>Login</h3>
    <form>
        <input
            bind:value={login_email}
            type="text"
            name="email"
            placeholder="Email"
        />
        <br />
        <input
            bind:value={login_password}
            type="password"
            name="password"
            placeholder="Password"
        />
        <br />
        <button type="button" on:click={handleSignIn}>Login</button>
    </form>
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
