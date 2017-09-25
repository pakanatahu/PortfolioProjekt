    <!--
// Laddar personliga sidans javascript.
// Henrik
function load_skills_henrik() {
    spawn_skillbar('CSS', '40', 'white')
    spawn_skillbar('JQUERY', '50', 'blue');
    
}

    <!--
// Laddar personliga sidans html.
// Henrik

    <!--
// Skapar en procentbar med vald text och procent till personliga sidan.
function spawn_skillbar(skill, value, bar_color) {

    var skill_wrapper = document.getElementById('personal_skill_bar_wrapper');
    var skill_div = document.createElement('DIV');
    var skill_inner_div = document.createElement('DIV');
    var skill_text = document.createElement('SPAN');
    var skill_percent = document.createElement('SPAN');
    
    skill_div.className = 'SkillBar';
    skill_inner_div.id = 'Skill-' + skill;
    skill_text.className = 'personal_skills_text';
    skill_percent.className = 'personal_skills_percent';

    skill_inner_div.style.borderRadius = "25px";
    skill_inner_div.style.height = "50px";
    skill_inner_div.style.backgroundColor = bar_color;
    skill_inner_div.style.width = value + '%';
    
    skill_text.innerHTML = skill;
    skill_percent.innerHTML = value + '%';

    skill_inner_div.innerHTML += skill_text.outerHTML + skill_percent.outerHTML;
    skill_div.appendChild(skill_inner_div);
    skill_wrapper.appendChild(skill_div);

}

    <!--
// Gör om headern till icon.
function resize_header() {
    var x = document.getElementById("header_menu");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}

    <!--
// Hämtar dagens datum.
function get_todays_date() {
    var todays_date = new Date();
    todays_date.setDate(todays_date.getDate()-7);
    var day = todays_date.getDate();
    var month = todays_date.getMonth()+1;

    if(day < 10) {
	day = '0' + day;
    } 

    if(month < 10) {
	month = '0' + month;
    } 

    return todays_date.getFullYear() + '-' + month + '-' + day;
}

    <!--
// Startar hämtning från github och skapning av tabeller.
function get_top_5_tables() {
    get_top_5_javascript();
    get_top_5_css();

    $("#top_5_div").fadeIn("slow");
}

    <!--
// Hämtar Javascript.
function get_top_5_javascript() {
    var javascript_url = 'https://api.github.com/search/repositories?q=language:javascript+created%3A%3E' + get_todays_date() + '&sort=stars&order=desc';
    var program_language = 'javascript';
    var h2_language = 'Javascript';
    get_top_5(javascript_url, program_language);
}

    <!--
// Hämtar CSS.
function get_top_5_css() {
    var css_url = 'https://api.github.com/search/repositories?q=language:css+created%3A%3E' + get_todays_date() + '&sort=stars&order=desc';
    var program_language = 'css';
    var h2_language = 'CSS';
    get_top_5(css_url, program_language);
}

    <!--
// Hämtar data från github och generar tabeller.
function get_top_5(top_url, program_language) {
    fetch(top_url)
  .then(response => response.json())
	.then(data => {
	    var table_titels = ['Name', 'Owner', 'Stars'];
	    var table = document.createElement('table');
	    table.id = "top_5_table";
	    
	    for (index= 0; index < table_titels.length; index++) {
		th = document.createElement('th');
		th.innerHTML = table_titels[index];
		table.appendChild(th);
	    }

	    for (row = 0; row < 5; row++) {
		tr = document.createElement('tr');
		td = document.createElement('td');
		tr.appendChild(td);
		td.innerHTML = '<a href="'+ JSON.parse(JSON.stringify(data.items[row].owner.html_url)) + '">' + JSON.parse(JSON.stringify(data.items[row].name)) + '</a>';
		td = document.createElement('td');
		tr.appendChild(td);		
		td.innerHTML = '<a href="'+ JSON.parse(JSON.stringify(data.items[row].owner.html_url)) + '">' + JSON.parse(JSON.stringify(data.items[row].owner.login)) + '</a>';
		td = document.createElement('td');
		tr.appendChild(td);
		td.innerHTML = '<i class="fa fa-star-o"></i>' + " " + JSON.parse(JSON.stringify(data.items[row].stargazers_count));
		table.appendChild(tr);
	    }
	    document.getElementById('top_5_div_' + program_language).appendChild(table)

	});
    $(document).ready(function(){
	$('.top_h2').css("visibility", "visible");
	$('#top_5_div_javascript').hide().fadeIn('slow');
	$('#top_5_div_css').hide().fadeIn('slow');
    });
}
/*
var inputfields = ["#name", "#telenr", "email", "#message"];
$(document).ready(function(){

    var nameIsOk = false;

    if(inputfields[0].focus(function(){

      console.log($(this).val().length), 100};)
    ){

    }
    });

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


function startSlider() {
    var width = 620;
    var currentText = 1;
    var currentSlide = 1;

    var slideshow = $('.slideshow');
    var slideContainer = $('.images', slideshow);
    var images = $('.image', slideshow);
    var textshow = $('.textshow');
    var textContainer = $('.texts', textshow);
    var texts = $('.text', textshow);

    var interval;
    
    interval = setInterval(function() {
        textContainer.animate({'margin-left': '-='+width}, 1000, function() {
            if (++currentText === texts.length) {
                currentText = 1;
                
                textContainer.css('margin-left', 0);
            }
        });
        
            

        slideContainer.animate({'margin-left': '-='+width}, 1000, function() {
            if (++currentSlide === images.length) {
                currentSlide = 1;
                slideContainer.css('margin-left', 0);
                textContainer.css('margin-left', 0);
            }
            

        });
    }, 10000);
}

function pauseSlider() {
    clearInterval(interval);
}

slideContainer
    .on('mouseenter', pauseSlider)
    .on('mouseleave', startSlider);
});
