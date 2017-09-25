var inputfields = ["#name", "#telenr", "email", "#message"];
var nameok = false;
var emailok = false;
var telenrok = false;
var messageok = false;

$(document).ready(function(){
    var $regexname=/^([a-zA-Z]{2,16})$/;
    $('#name').on('keypress keydown keyup',function(){
             if (!$(this).val().replace(/\s/g, '').match($regexname)) {
              // there is a mismatch, hence show the error message
                 $(this).css("border", "solid 2px red");
                 nameok = false;
             }
           else{
                // else, do not display message
                $(this).css("border", "solid 2px green");
                nameok = true;
              }
            console.log(nameok.toString());
         });

    $('#telenr').on('keypress keydown keyup',function(){
              if ($(this).val().toString().length < 8 ){
               // there is a mismatch, hence show the error message
                  $(this).css("border", "solid 2px red");
                  telenrok = false;
              }
              else{
                     // else, do not display message
                  $(this).css("border", "solid 2px green");
                  telenrok = true;
              }
              console.log(telenr.toString());
              });
    var $regexEmail = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3})$/;
    $('#email').on('keypress keydown keyup',function(){
                if (!$(this).val().match($regexEmail)){
                         // there is a mismatch, hence show the error message
                    $(this).css("border", "solid 2px red");
                    emailok = false;
              }
              else{
                     // else, do not display message
                  $(this).css("border", "solid 2px green");
                  emailok = true;
              }
              console.log(emailok.toString());
        });

    $('#message').on('keypress keydown keyup',function(){
                if ($(this).val().toString().length < 8 || $(this).val().toString().length > 255 ){
                   // there is a mismatch, hence show the error message
                    $(this).css("border", "solid 2px red");
                    messageok = false;
              }
                else{
                         // else, do not display message
                    $(this).css("border", "solid 2px green");
                    messageok = true;
              }
              console.log(messageok.toString());
        });
   $('button').click(function() {
     if(nameok == true && emailok == true && telenrok == true && messageok == true){
       alert("Meddelande skickat till Henke!");
     }
     else {
       alert("Gör om gör rätt!");
    }
   })
});
