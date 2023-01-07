<script>
    import Navigator from "./public/components/routers/navigator.svelte";
    import Sidebar from "./public/components/sidebar/sidebar.svelte";
    import { user, BASE_URL, ENVIRONMENT } from "./global/global.js";
    import io from "socket.io-client";
    const socket = io("ws://localhost:3000");
    let mail;

    socket.on("hello", (arg) => {
        console.log(arg); // world
    });

    socket.emit("hello", "world");
</script>

<Navigator />

{#if $user}
    <Sidebar />
{/if}
