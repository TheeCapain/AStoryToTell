<script>
    let posts = [];

    async function fetchMovies() {
        let response = await fetch(
            "https://api.themoviedb.org/3/trending/all/week?api_key=4a86f1670d0ac4ac719f017669984e10"
        ).then((response) => response.json());
        posts = await response.results;
        console.log(posts);
    }
    fetchMovies();
    //https://api.themoviedb.org/3/list/1?api_key=4a86f1670d0ac4ac719f017669984e10 A movie list of marvel movies
</script>

<head>
    <script
        src="https://kit.fontawesome.com/1a9ff76d50.js"
        crossorigin="anonymous"
    ></script>
</head>
{#each posts as post}
    <div class="content">
        <div class="user">
            <img class="user_photo" src="" alt="" />
            <a href="/profile"><p>Username</p></a>
        </div>
        {#if post.title === undefined}
            <h1 class="headline">{post.name}</h1>
        {:else}
            <h1 class="headline">{post.title}</h1>
        {/if}

        <img
            class="image"
            src="https://image.tmdb.org/t/p/original/{post.backdrop_path}"
            alt="poster attribute"
        />
        <div class="text">
            <p>
                {post.overview}
            </p>
        </div>
        <div class="user-interaction">
            <i class="fa fa-heart" />
        </div>
    </div>
{/each}

<style>
    .user {
        display: inline-flex;
    }

    .user_photo {
        height: 50px;
        width: 50px;
        border-radius: 100px;
        border: 1px solid black;
    }
    .content {
        margin: 1% auto;
        width: 40%;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        -webkit-box-shadow: -1px 2px 8px -1px rgba(0, 0, 0, 0.35);
    }

    .image {
        width: 100%;
        background-color: green;
    }

    .user-interaction i{
        width: 50px;
    }
</style>
