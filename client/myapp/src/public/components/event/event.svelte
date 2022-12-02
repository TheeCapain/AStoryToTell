<script>
    //https://api.themoviedb.org/3/list/1?api_key=4a86f1670d0ac4ac719f017669984e10 A movie list of marvel movies
    let headline;
    let description;
    let poster;
</script>

<div class="content">
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

<style>
    .content {
        margin: 1% auto;
        width: 40%;
        height: auto;
        border: 3px solid black;
        padding: 10px;
    }

    .image {
        height: 100px;
        width: 60px;
        background-color: green;
    }
</style>
