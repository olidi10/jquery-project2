$(function () {

    $("#TEAMS").first().prepend("<p>Click on a Team to get more information.</p>");

    $("button").click(function () {
        $("#TEAMS").hide();
        $("button").click(function () {

            $("#TEAMS").show()
        });
    });


    $("#TEAMS h3").on("click", function () {
        $("#TEAMS h3").siblings().hide();
        $(this).siblings().show();
    });

    $("#TEAMS h3").siblings().hide();
    $("#TEAMS h3").first().siblings().show();

    $(function () {

        var content = "";
        $.getJSON("p2.json")
            .done(function (data) {





                $("container").append('<ul>' + "best-players" + '</ul>');


                for (var i = 0; i < data.Teams.length; i++) {

                    content += '<h3>' + data.Teams[i].Name + '</h3>';
                    content += '<img src = "' + data.Teams[i].logo + '"/>';
                    content += '<p>' + data.menu[i].History + '</p>';
                    document.getElementById("#TEAMS").innerHTML = content;
                    //.show(content);
                }

            });
    });
});