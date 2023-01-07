<script>
    import Navigator from "./public/components/routers/navigator.svelte";
    import Sidebar from "./public/components/sidebar/sidebar.svelte";
    import { user, BASE_URL, ENVIRONMENT } from "./global/global.js";

    
</script>

<Navigator />

{#if $user}
    <Sidebar />
{/if}
