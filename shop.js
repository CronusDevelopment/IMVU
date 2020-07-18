$(function(){ $('#BtMale').on('click', function(e){

    $("#M").toggle();
    $(this).toggleClass('Male');
    if ($("#BtFemale").is(":enabled"))
            $("#BtFemale").prop("disabled",true);
             else
            $("#BtFemale").prop("disabled",false); 
            
 		if ($("#BtFurn").is(":enabled"))
            $("#BtFurn").prop("disabled",true);
             else
            $("#BtFurn").prop("disabled",false);

 		if ($("#BtOther").is(":enabled"))
            $("#BtOther").prop("disabled",true);
             else
            $("#BtOther").prop("disabled",false);
});
$('#BtFemale').on('click', function(e){

    $("#F").toggle();
    $(this).toggleClass('Female');
 		if ($("#BtMale").is(":enabled"))
            $("#BtMale").prop("disabled",true);
             else
            $("#BtMale").prop("disabled",false);
 
 		if ($("#BtFurn").is(":enabled"))
            $("#BtFurn").prop("disabled",true);
             else
            $("#BtFurn").prop("disabled",false);

 		if ($("#BtOther").is(":enabled"))
            $("#BtOther").prop("disabled",true);
             else
            $("#BtOther").prop("disabled",false);
   
});
$('#BtFurn').on('click', function(e){

    $("#Rooms").toggle();
    $(this).toggleClass('Rooms');
 		if ($("#BtMale").is(":enabled"))
            $("#BtMale").prop("disabled",true);
             else
            $("#BtMale").prop("disabled",false);

 		if ($("#BtFemale").is(":enabled"))
            $("#BtFemale").prop("disabled",true);
             else
            $("#BtFemale").prop("disabled",false);

 		if ($("#BtOther").is(":enabled"))
            $("#BtOther").prop("disabled",true);
             else
            $("#BtOther").prop("disabled",false);
   
});
$('#BtOther').on('click', function(e){

    $("#Other").toggle();
    $(this).toggleClass('Other');
 		if ($("#BtMale").is(":enabled"))
            $("#BtMale").prop("disabled",true);
             else
            $("#BtMale").prop("disabled",false);

 		if ($("#BtFemale").is(":enabled"))
            $("#BtFemale").prop("disabled",true);
             else
            $("#BtFemale").prop("disabled",false);

 		if ($("#BtFurn").is(":enabled"))
            $("#BtFurn").prop("disabled",true);
             else
            $("#BtFurn").prop("disabled",false);
})
