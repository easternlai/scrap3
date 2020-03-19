$(function(){

    $(".article-delete").on("click", function(){
        console.log("test js 1");
        var id = $(this).data("id");
        
        $.ajax("/delete/" + id, {
            type:"GET"
        }).then(
            function(){
                console.log("test delete button");
                console.log("deleted article id: " + id);
                location.reload();
            }
        )
    });

    $(".article-comment").on("click", function(){
        console.log("test js 1");
        var id = $(this).data("comment");
        var comment = $(this).val();

        console.log("comment:" + comment);
        
        $.ajax("/comment/" + id, {
            type:"POST"
        }, ).then(
            function(){
                location.reload();
            }
        )
    });



    $(".scrap").on("click", function(){
        $.ajax("/article", {type:"GET"})
        .then(function(){
            console.log("scraped more articles");
            location.reload();
        });

    });

    $(".delete-all").on("click", function(){
        console.log("delete test");
        $.ajax("/deleteall", {type:"GET"})
        .then(function(){
            console.log("deleted all");
            location.reload();
        });

    });

});