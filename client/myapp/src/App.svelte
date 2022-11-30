<script>
import Home from './components/home/home.svelte'
import Navbar from './components/navbar/navbar.svelte'
import Sidebar from './components/sidebar/sidebar.svelte'
import Event from './components/event/event.svelte';
</script>
<Navbar/>
<Sidebar/>
<br>
<br>
<br>
<br>
<br>
<br>
<br><h1 class="trend">Stories most recently told</h1>
<Event/>
<Event/>

<style>
    .trend{
        
 margin: 0 auto;
        width: 40%;
        top: 20%;
        
    }
</style>
