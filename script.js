function resize_header() {
    var x = document.getElementById("header_menu");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}

$(document).ready(function(){
    $("#message_button").click(function(){
        var m_name = $('#message_name').val();
        var m_number = $('#message_number').val();
        var m_email = $('#message_email').val();
        var m_text = $('#message_text').val();

        if (m_name == "" | m_name == "" | m_name == "" | m_name == "") {
            alert("empty");
        }
        if (/\S+@\S+\.\S+/.test(m_email) == true) {
            alert("yes");
        } else {
            alert("no");
        }
	
    });
});
