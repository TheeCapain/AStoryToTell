<script>
    import { Link } from "svelte-navigator";
</script>

<div class="content">
    <div class="knap">
        <Link to="/newPost"><button>+ New Post</button></Link>
    </div>
</div>

<style>
    .content {
        width: 70%;
    }
    button {
        padding: 10px 50px 10px 50px;
        cursor: pointer;
        border: none;
        background-color: #87ab69;
        font-size: 16px;
        border-radius: 3px;
    }
</style>
