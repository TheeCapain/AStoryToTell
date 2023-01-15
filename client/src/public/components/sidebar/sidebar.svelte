<script>
  import { Router, Link } from "svelte-navigator";
  import { user } from "../../../global/global.js";

  function handleLogout() {
    $user = null;
    localStorage.clear()
  }
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<Router>
  <div class="side-bar">
    <Link to="/home"><a href="/"><i class="fa fa-home">Logo</i></a></Link>
    <Link to="/profile"><a href="/">Your profile</a></Link>
    <Link to="/newPost"><a href="/">Add Post</a></Link>
    <Link to="/bookmarks"><a href="/">Bookmarked</a></Link>
    <Link to="/settings"> <a href="/">Settings</a></Link>
    <button on:click={handleLogout}>Logout</button>
  </div>
</Router>

<style>
  .side-bar {
    background-color: #031927;
    width: 16.65%;
    top: 0;
    bottom: 0;
    position: fixed;
  }

  .side-bar a {
    height: 33.5px;
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
    text-decoration: none;;
  }

  .side-bar button {
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
    width: 100%;
    height: auto;
    background-color: #031927;
    border: none;
  }
  .side-bar button:hover {
    background-color: #800000;
    cursor: pointer;
  }

  .side-bar a:hover {
    background-color: #508aa8;
  }
</style>
