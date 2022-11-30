<script>
    import Navigator from '../components/routers/navigator.svelte';
    import Navbar from './public/components/navbar/navbar.svelte'
    import Sidebar from './public/components/sidebar/sidebar.svelte'
    import Event from './public/components/event/event.svelte';
    </script>
    <Navigator/>
    <Navbar/>
    <Sidebar/>
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
    