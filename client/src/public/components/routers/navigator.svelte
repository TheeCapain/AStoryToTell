<script>
  import { Router, Route, Link } from "svelte-navigator";
  import { user } from "../../../global/global";
  import Home from "../../pages/home.svelte";
  import Profile from "../../pages/profile.svelte";
  import Login from "../../pages/login.svelte";
  import PrivateRoute from "../login/privateRoute.svelte";
  import NewPost from "../../pages/newPost.svelte";
  import Filmmaking from "../../pages/filmmaking.svelte";
  import Writing from "../../pages/writing.svelte";
  import Bookmarks from "../../pages/bookmarks.svelte";
  import Music from "../../pages/music.svelte";
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
      <Link to="/bookwriting"><a href="/"><i class="fa fa-book" /></a></Link>
      <Link to="/music"><a href="/"><i class="fa fa-music" /></a></Link>
      {#if !$user}
        <Link to="/login"><a href="/"><i class="fa fa-user" /></a></Link>
      {:else}
        <Link to="/profile"><a href="/"><i class="fa fa-user" /></a></Link>
      {/if}
    </nav>

    <main>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="login">
        <Login />
      </Route>
      <PrivateRoute path="/newPost" let:location>
        <NewPost />
      </PrivateRoute>
      <Route path="/bookmarks">
        <Bookmarks />
      </Route>
      <Route path="/filmmaking">
        <Filmmaking />
      </Route>
      <Route path="/bookwriting">
        <Writing />
      </Route>
      <Route path="/music">
        <Music />
      </Route>
      <Route path="/profile">
        {#if $user}
          <Profile userId={$user.id} />
        {:else}
          <Login />
        {/if}
      </Route>
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
