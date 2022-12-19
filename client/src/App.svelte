<script>
    import Navigator from "./public/components/routers/navigator.svelte";
    import Sidebar from "./public/components/sidebar/sidebar.svelte";
    import PrivateRoute from "./public/components/login/privateRoute.svelte";
    import { user } from "./global/global.js";
</script>

<Navigator />
{#if $user}
    <Sidebar />
{/if}
