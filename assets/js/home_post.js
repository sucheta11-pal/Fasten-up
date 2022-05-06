{
    // method to submit form data for new post using AJAX
    let createPost = function()
    {
        let newPostForm = $('#new-post-form');

        // We don't want this form to be submitted naturally
        newPostForm.submit(function(e)
        {
            // e is the event which we are going to disable
            
            e.preventDefault();
            loopFunction();
            $.ajax({
                type:'post',
                url:'/post/create-post',
                // converts to json
                data: newPostForm.serialize(),
                success:function(data)
                {
                    console.log(data);
                    let newPost = newPostDom(data.data.post);
                    
                    $('#view-posts>ul').prepend(newPost);
                    // del class inside newpost
                    deletePost($(' .del-post-btn',newPost));

                    message('Post created successfully')
                    newPostForm[0].reset();
                },
                error:function(error)
                {
                    console.log(error.responseText);
                }
            })
        })
    }

    // method to create post in DOM
    let newPostDom = function(post)
    {
        console.log(post);
        return $(`<li style="border: 2px solid palevioletred;" id="post-${post._id}">
            <small>
                <a href="/post/destroy/${post._id}" class="del-post-btn">Delete Post</a>
            </small>
            <p>${post.content}</p>
            <p>${post.user.name}</p>
        </li>
        <div class="post-comments">
            
                <form action="/comments/create" method="post">
                    <input type="text" name="content" placeholder="Type your comment..." required> 
                    <input type="hidden" name="post" value="${post._id}">
                    <input type="submit" value="Add comment">
                </form>
            
        </div>
        <div class="post-comments-list">
        <ul id="post-comments-${post._id}">
        
        </ul>
        </div>`)
    }

    // method to delete a post from dom
    let deletePost = function(deleteLink)
    {
        $(deleteLink).click(function(e){
            console.log(e);
            e.preventDefault();

            $.ajax({
                type:'get',
                url:$(deleteLink).prop('href'),
                success:function(data)
                {
                    $(`#post-${data.data.post_id}`).remove()
                },error:function(err)
                {
                    console.log(err.responseText);
                }
            })
        })
    }
    // method to notify
    let message = function(display)
    {
        new Noty({
            theme: "relax",
            text:display,
            type: 'success',
            layout:'topRight',
            timeout:1500
            }).show();
    }

    let loopFunction = function()
    {
        let listItems = $('#view-posts>ul>li');
        listItems.each(function(){
            console.log($('#view-posts>ul>li'));
        })
    }
    createPost();
}