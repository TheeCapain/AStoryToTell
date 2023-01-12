<script>
    import Toastr from "toastr";
    import { Router, Route, Link } from "svelte-navigator";
    import "../node_modules/toastr/build/toastr.css";
    import Navigator from "./public/components/routers/navigator.svelte";
    import Sidebar from "./public/components/sidebar/sidebar.svelte";
    import { user } from "./global/global.js";
    import Home from "./public/pages/home.svelte";
    import Profile from "./public/pages/profile.svelte";
    import Login from "./public/pages/login.svelte";
    import PrivateRoute from "./public/components/login/privateRoute.svelte";
    import NewPost from "./public/pages/newPost.svelte";
    import Filmmaking from "./public/pages/filmmaking.svelte";
    import Writing from "./public/pages/writing.svelte";
    import Bookmarks from "./public/pages/bookmarks.svelte";
    import Music from "./public/pages/music.svelte";
    import Settings from "./public/pages/settings.svelte";
    //Toastr.warning("test");
</script>

<Router>
    <Navigator />
    {#if $user}
        <Sidebar />
    {/if}
    <Route path="/home">
        <Home />
    </Route>
    <Route path="login">
        <Login />
    </Route>
    <PrivateRoute path="/newPost" let:location>
        <NewPost />
    </PrivateRoute>
    <Route path="/bookmarks">
        <Bookmarks />
    </Route>
    <Route path="/filmmaking">
        <Filmmaking />
    </Route>
    <Route path="/bookwriting">
        <Writing />
    </Route>
    <Route path="/music">
        <Music />
    </Route>
    <Route path="/settings">
        <Settings />
    </Route>
    <Route path="/profile">
        {#if $user}
            <Profile userId={$user.id} />
        {:else}
            <Login />
        {/if}
    </Route>
</Router>
