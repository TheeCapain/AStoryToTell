<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "../../pages/home/home.svelte";
  import Profile from "../../pages/profile/profile.svelte";
  import { user } from "./../../../global/global.js";
  import Login from "../../pages/login/login.svelte";
  import PrivateRoute from "../login/privateRoute.svelte";

  function handleLogout() {
    $user = null;
  }
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<div class="icon-bar">
  <Router>
    <nav id="icon-bar">
      <Link to="/home"><a href="/"><i class="fa fa-home">Logo</i></a></Link>
      <Link to="/home"><a href="/"><i class="fa fa-home" /></a></Link>
      <Link to="/filmmaking"><a href="/"><i class="fa fa-camera" /></a></Link>
      <Link to="/bookWriting"><a href="/"><i class="fa fa-book" /></a></Link>
      <Link to="/about"><a href="/"><i class="fa fa-music" /></a></Link>
      <Link to="/profile"><a href="/"><i class="fa fa-user" /></a></Link>
    </nav>

    <main>
      <Route path="login">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/filmmaking" />
      <Route path="/bookwriting" />
      <Route path="/music" />
      <PrivateRoute path="/profile" let:location>

        <Profile/>
        <h3>Welcome {$user.username}</h3>
        <button on:click={handleLogout}>Logout</button>
      </PrivateRoute>
    </main>
  </Router>
</div>

<style>
  .icon-bar {
    width: 100%; /* Full-width */
    position: sticky;
    top: 0;
  }

  .icon-bar a {
    float: left; /* Float links side by side */
    text-align: center; /* Center-align text */
    width: 16.665%; /* Equal width (5 icons with 20% width each = 100%) */
    padding: 12px 0; /* Some top and bottom padding */
    transition: all 0.3s ease; /* Add transition for hover effects */
    color: white; /* White text color */
    background-color: #031927;
    font-size: 36px; /* Increased font size */
  }

  .icon-bar a:hover {
    background-color: #508aa8; /* Add a hover color */
  }
</style>
