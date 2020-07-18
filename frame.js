  var btree = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    decode: function(e) {
      var t = "";
      var n, r, i;
      var s, o, u, a;
      var f = 0;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (f < e.length) {
        s = this._keyStr.indexOf(e.charAt(f++));
        o = this._keyStr.indexOf(e.charAt(f++));
        u = this._keyStr.indexOf(e.charAt(f++));
        a = this._keyStr.indexOf(e.charAt(f++));
        n = (s << 2) | (o >> 4);
        r = ((o & 15) << 4) | (u >> 2);
        i = ((u & 3) << 6) | a;
        t = t + String.fromCharCode(n);
        if (u != 64) {
          t = t + String.fromCharCode(r);
        }
        if (a != 64) {
          t = t + String.fromCharCode(i);
        }
      }
      t = btree._utf8_decode(t);
      return t;
    },
    _utf8_decode: function(e) {
      var t = "";
      var n = 0;
      var r = (c1 = c2 = 0);
      while (n < e.length) {
        r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
          n++;
        } else if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
          n += 2;
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += String.fromCharCode(
            ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
          );
          n += 3;
        }
      }
      return t;
    }
  };

  function changeframe(choice, id) {
    $("#" + id).fadeOut("fast", function() {
      $("#" + id).html($("#" + choice).html());
      $("#" + id).fadeIn("fast");
    });
  }
$('#BtMale').on('click', function(e){

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
   
});
