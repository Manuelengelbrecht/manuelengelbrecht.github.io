//Show Impressum with anchor
$(document).ready(function(){
        $("#ImpressumA").click(function() {
        $("#Impressum").toggle();
        });
    //Hide Impressum with notice
    $("#Impressum_notice").click(function() {
        $("#Impressum").hide();
        });    
    // Hide Impressum notice (only shpown when hovering Impressum)
        $("#Impressum_notice").hide(); // hide the fixed navbar initially

        var topofDiv = $("#Impressum").offset().top; //gets offset of Impressum
        var height = $("#Impressum").outerHeight(); //gets height of Impressum
        var winheight = $( window ).height();

        $(window).scroll(function(){
            if($(window).scrollTop() > (topofDiv + height + winheight)){
               $("#Impressum_notice").show();
            }
            else{
               $("#Impressum_notice").hide();
            }
        });
    //Hide footer & Name when scrolling

        var topofDiv2 = $("#portfolio").offset().top; //gets offset of contact section
        var height2 = $("#footer").outerHeight(); //gets height of section

        $(window).scroll(function(){
            if($(window).scrollTop() > (topofDiv2 - 2*height2)){
               $("#Footer_fix").fadeOut("fast");
                $(".DoubleHeader").fadeOut("fast");
            }
            else{
               $("#Footer_fix").show();
                $(".DoubleHeader").show();
            }
        });
        
});