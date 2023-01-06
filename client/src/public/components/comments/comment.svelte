<script>
    import { user } from "../../../global/global";
    export let userphoto;
    export let username;
    export let comment;
</script>

<div class="content">
    <div class="post-comments">
        <div class="comment-user">
            <img class="user_photo" src={userphoto} alt="" />

            <a href="/profile"><p>{username}</p></a>
        </div>
        <div class="comment">{comment}</div>
    </div>
    
</div>

<style>
    .user_photo {
        height: 50px;
        width: 50px;
        border-radius: 100px;
        border: 1px solid black;
    }
   

    .content {
        margin: 1% auto;
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        -webkit-box-shadow: -1px 2px 8px -1px rgba(0, 0, 0, 0.35);
    }

 
    .post-comments {
        padding: 10px;
        border-radius: 5px;
        box-shadow: -1px 2px 15px -1px rgba(0, 0, 0, 0.46);
        background-color: gray;
    }

    .comment-user {
        display: inline-flex;
    }
</style>
