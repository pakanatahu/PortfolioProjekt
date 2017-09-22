function resize_header() {
    var x = document.getElementById("header_menu");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}

var inputfields = ["#name", "#telenr", "email", "#message"];
$(document).ready(function(){

    var nameIsOk = false;

    if(inputfields[0].focus(function(){

      console.log($(this).val().length), 100};)
    ){

    }
    });



/*
var m_name = $('#name').val();
var m_number = $('#telenr').val();
var m_email = $('#email').val();
var m_text = $('#message').val();
        if (m_name == "" | m_name == "" | m_name == "" | m_name == "") {
            alert("empty");
        }
        if (/\S+@\S+\.\S+/.test(m_email) == true) {
            alert("yes");
        } else {
            alert("no");
        }
*/
