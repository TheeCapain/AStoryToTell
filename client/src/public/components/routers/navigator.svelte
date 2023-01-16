<script>
  import { Link } from "svelte-navigator";
  import { user } from "../../../global/global";
</script>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<div class="icon-bar">
  <nav id="icon-bar">
    <Link to="/home"><a href="/"><i class="fa fa-home"></i></a></Link>
    <Link to="/home"><a href="/"><i class="fa fa-globe"></i></a></Link>
    <Link to="/filmmaking"><a href="/"><i class="fa fa-camera" /></a></Link>
    <Link to="/bookwriting"><a href="/"><i class="fa fa-book" /></a></Link>
    <Link to="/music"><a href="/"><i class="fa fa-music" /></a></Link>
    {#if !$user}
      <Link to="/login"><a href="/"><i class="fa fa-user" /></a></Link>
    {:else}
      <Link to="/profile"><a href="/"><i class="fa fa-user" /></a></Link>
    {/if}
  </nav>
</div>

<style>
  .icon-bar {
    width: 100%; 
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
