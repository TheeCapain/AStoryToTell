<script>
  import Navigator from "../routers/navigator.svelte";
  import Navbar from "../navbar/navbar.svelte";
  import Sidebar from "../sidebar/sidebar.svelte";
  import Event from "../event/event.svelte";
</script>

<Navigator/>
<Sidebar />
<br />
<br />
<br />
<br />
<br />
<h1 class="trend">Stories most recently told</h1>
<Event />
<Event />

<style>
  .trend {
    margin: 0 auto;
    width: 40%;
    top: 20%;
  }
</style>
