<script>
    //https://api.themoviedb.org/3/list/1?api_key=4a86f1670d0ac4ac719f017669984e10 A movie list of marvel movies
    let headline = "Hello ";
    let description;
    let poster;
</script>
<body>
    <div class="content">
        <div class="user">
            <img class="user_photo" src="" alt="">
             <a href="/profile"><p>Username</p></a>
        </div>
        <h1 class="headline">{headline}Black Widow</h1>
        <img class="image" src="${poster}" alt="poster attribute" />
        <div class="text">
            <p>
                {description}
                Natasha Romanoff, also known as Black Widow, confronts the darker parts
                of her ledger when a dangerous conspiracy with ties to her past arises.
                Pursued by a force that will stop at nothing to bring her down, Natasha
                must deal with her history as a spy and the broken relationships left
                in her wake long before she became an Avenger.
            </p>
        </div>
    </div>  
</body>


<style>
    body {
        margin: 3% 17%;
        width: 70%;
        top: 20%;
    }

    .user{
        display: inline-flex;
    }

    .user_photo{
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
        height: 100px;
        width: 60px;
        background-color: green;
    }
</style>
