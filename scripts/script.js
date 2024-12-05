type = "text/javascript" >
    $("#submit").click(function () {
        let name = $("#name").val();
        let str = "Thank you "
            + name
            + " for your email!";
        $("#modal_body").html(str);
    });