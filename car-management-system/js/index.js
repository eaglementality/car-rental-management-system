$(function(e){
    e.preventDefault();
    $("#firstbook").click((e) => {
            e.preventDefault();
            var pageURL=$(this).attr('href');
                history.pushState(null," ",pageURL);
            $("#benz").show();
            $("#rangerover").hide();
            $("#maseratti").hide();
            $("#cheverolet").hide();
        })
})
