<script>
    import Navigator from "./public/components/routers/navigator.svelte";
    import Sidebar from "./public/components/sidebar/sidebar.svelte";
    import { user } from "./global/global";

    function handleLogout() {
        $user = null;
    }
</script>

<Navigator />
<Sidebar />
