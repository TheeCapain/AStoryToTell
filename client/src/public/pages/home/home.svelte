<script>
    import Event from "../../components/event/event.svelte";
    import AddButton from "../../components/addPost/addButton.svelte";
</script>

<body>
    <div class="content">
        <h1 class="trend">Stories most recently told</h1>
        <AddButton />
        <Event />
    </div>
</body>

<style>
    body {
        margin: auto;
    }
    .content {
        border: solid 2px;
    }
    .trend {
        margin: 0 auto;
        width: 40%;
        top: 20%;
    }
</style>
