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
</script>
<body>
    

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
    <PrivateRoute path="/settings" let:location>
        <Settings />
    </PrivateRoute>
    <PrivateRoute path="/profile" let:location>
        <Profile userId={$user.id} />
    </PrivateRoute>
</Router>
</body>
<style>
    * {
        font-size: 100%;
        font-family: Arial;
    }
</style>
