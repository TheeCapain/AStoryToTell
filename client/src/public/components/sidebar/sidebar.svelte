<script>
  import Home from "../../pages/home/home.svelte";
  import Profile from "../../pages/profile/profile.svelte";
  import Login from "../../pages/login/login.svelte";
  import { Router, Route, Link } from "svelte-navigator";
  import PrivateRoute from "../login/privateRoute.svelte";
  import { user } from "../../../global/global.js";

  function handleLogout() {
    $user = null;
  }
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<Router>
  <div class="side-bar">
    <a href="/"><i class="fa fa-home">Logo</i></a>
    <Link to="/profile"><a href="/">Your profile</a></Link>
    <a href="/">Saved Posts</a>
    <button on:click={handleLogout}>Logout</button>
  </div>
</Router>

<style>
  .side-bar {
    width: 10%; /* Set a specific width */
    background-color: #031927; /* Dark-grey background */
    width: 16.65%;
    top: 0;
    bottom: 0;
    position: fixed;
  }

  .side-bar a {
    height: 33.5px;
    display: block; /* Make the links appear below each other instead of side-by-side */
    text-align: center; /* Center-align text */
    padding: 16px; /* Add some padding */
    transition: all 0.3s ease; /* Add transition for hover effects */
    color: white; /* White text color */
    font-size: 20px; /* Increased font-size */
  }

  .side-bar button {
    padding: 16px; /* Add some padding */
    transition: all 0.3s ease; /* Add transition for hover effects */
    color: white; /* White text color */
    font-size: 20px; /* Increased font-size */
    width: 100%;
    height: auto;
    background-color: #031927;
    border: none;
  }
  .side-bar button:hover {
    background-color: #800000; /* Add a hover color */
    cursor: pointer;
  }

  .side-bar a:hover {
    background-color: #508aa8; /* Add a hover color */
  }
</style>
