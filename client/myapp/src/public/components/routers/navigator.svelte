<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Filmmaking from "../../pages/filmmaking.svelte";
  import Home from "../../pages/home.svelte";
  import { user } from "./../../../global/global.js";

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
    <nav>
      <Link to="/home"><a href="/"><i class="fa fa-home">Logo</i></a></Link>
      <Link to="/home"><a href="/"><i class="fa fa-home" /></a></Link>
      <Link to="/filmmaking"><a href="/"><i class="fa fa-camera" /></a></Link>
      <Link to="/bookWriting"><a href="/"><i class="fa fa-book" /></a></Link>
      <Link to="/music"><a href="/"><i class="fa fa-music" /></a></Link>
      <Link to="/profile"><a href="/"><i class="fa fa-user" /></a></Link>
    </nav>

    <main>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/filmmaking">
        <Filmmaking />
      </Route>
      <Route path="/bookwriting" />
      <Route path="/music" />
      <Route path="/profile" />
    </main>
  </Router>
</div>

<style>
  .icon-bar {
    width: 100%; /* Full-width */
    background-color: #031927; /* Dark-grey background */
    overflow: auto; /* Overflow due to float */
    position: fixed;
    top: 0;
  }

  .icon-bar a {
    float: left; /* Float links side by side */
    text-align: center; /* Center-align text */
    width: 16.65%; /* Equal width (5 icons with 20% width each = 100%) */
    padding: 12px 0; /* Some top and bottom padding */
    transition: all 0.3s ease; /* Add transition for hover effects */
    color: white; /* White text color */
    font-size: 36px; /* Increased font size */
  }

  .icon-bar a:hover {
    background-color: #508aa8; /* Add a hover color */
  }
</style>
