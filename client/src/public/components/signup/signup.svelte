<script>
    import { user, BASE_URL } from "./../../../global/global.js";

    let signup_username;
    let signup_email;
    let signup_password;
    let confirmpw;

    async function handleSignup() {
        console.log("We are now in the signup function");

        if (signup_password === confirmpw) {
            console.log("matching passwords");

            alert(signup_username + signup_email)

            const user = {
                // @ts-ignore
                username: signup_username,
                // @ts-ignore
                email: signup_email,
                // @ts-ignore
                password: signup_password,
            };

            let response = await fetch(`http://localhost:8080/api/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(user),
            });
            
            if (response.ok) {
                alert("Response is good" + response);
            }
        }
    }
</script>

<div class="signup">
    <h3>Or create a new account</h3>
    <h3>Signup</h3>
    <form on:submit={handleSignup}>
        <input
            bind:value={signup_username}
            id="username"
            type="text"
            name="username"
            placeholder="Username"
        />
        <br />
        <input
            bind:value={signup_email}
            id="email"
            type="text"
            name="email"
            placeholder="email"
        />
        <br />
        <input
            bind:value={signup_password}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
        />
        <br />
        <input
            bind:value={confirmpw}
            type="password"
            name="confirm password"
            placeholder="confirm password"
        />
        <br />
        <button type="submit">signup</button>
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
