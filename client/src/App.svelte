<script>
    import Toastr from "toastr";
    import "../node_modules/toastr/build/toastr.css";
    import Navigator from "./public/components/routers/navigator.svelte";
    import Sidebar from "./public/components/sidebar/sidebar.svelte";
    import { user } from "./global/global.js";

   //Toastr.warning("test");
</script>

<Navigator />

{#if $user}
    <Sidebar />
{/if}
