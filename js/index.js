"use strict";


var options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#262b2e',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

$('body').on('click','.contact',function(){
	$('.wrapper-discussion').removeClass('d-none');
	$('.discussion-list').html(`
	<div class="row" id="discussion-block">
		<div class="col-lg-12 col-md-12 date-chat">
			<span class="badge">Yesterday</span>	
		</div>
		<div class="col-lg-12 col-md-12 message-chat message-chat-right">
            <div class="message-chat-text">
                <span>You only have to come in order to go with me </span>
            </div>
            <div class="message-chat-meta">
                <span>16:05 pm<i class="fas fa-check"></i></span>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 message-chat message-chat-left">
            <div class="message-chat-text">
                <audio controls="">
                  <source src="media/audio.mp3" type="audio/mpeg">
                </audio>
            </div>
            <div class="message-chat-meta">
                <span>16:13 pm<i class="fas fa-check"></i></span>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 message-chat message-chat-left">
            <div class="message-chat-text">
                <span>
                	It’s my fault for not comming
                	<br>
                	 It’s said that i can come
            	</span>
            </div>
            <div class="message-chat-meta">
                <span>16:25 pm<i class="fas fa-check"></i></span>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 message-chat message-chat-right">
            <div class="message-chat-text">
                <video width="210" controls="">
                  <source src="media/video.mp4" type="video/mp4">
                </video>
                <p>Video.mp4</p>
            </div>
            <div class="message-chat-meta">
                <span>16:34 pm<i class="fas fa-check"></i></span>
            </div>
        </div>
		<div class="col-lg-12 col-md-12 date-chat">
			<span class="badge">Today</span>	
		</div>
		<div class="col-lg-12 col-md-12 message-chat message-chat-right">
            <div class="message-chat-text">
                <img class="pdf-img" src="img/pdf.svg" alt="pdf">
                <div class="pdf-body">
                    <h5><a href="#">Doc.pdf</a></h5>
                    <p>35kb</p>
                </div>
            </div>
            <div class="message-chat-meta">
                <span>16:43 pm<i class="fas fa-check"></i></span>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 message-chat message-chat-left">
            <div class="message-chat-text">
                <img src="img/media_01.png">
                <img src="img/media_02.png">
                <div class="plus-photo">+07</div>
                <p>Photos of product</p>
            </div>
            <div class="message-chat-meta">
                <span>16:45 pm<i class="fas fa-check"></i></span>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 message-chat message-chat-right">
            <div class="message-chat-text">
                <span>What I’m trying to say is if you come then it will be easy</span>
            </div>
            <div class="message-chat-meta">
                <span>16:45 pm<i class="fas fa-check"></i></span>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 message-chat message-chat-left">
            <div class="message-chat-text">
                <span>
                	Okay then
            	</span>
            </div>
            <div class="message-chat-meta">
                <span>16:55 pm<i class="fas fa-check"></i></span>
            </div>
        </div>
	</div>
	`);
});
$('body').on('click','.discussion',function(){
	$('.wrapper-discussion').addClass('d-none');
});
$('body').on('click','.profil-menu',function(){
		$(this).addClass('selected');
  	$('.infos-search').hide();
  	$('.contact-list').hide();
  	$('.contact-profile').fadeIn();	 
  	$('.contact-settings').hide();

  	$('.menu li').removeClass('contact-menu-active');
  	$('.profil-menu').addClass('contact-menu-active');  
});
$('body').on('click','.all-discussions',function(){
		$(this).addClass('selected');
  	$('.infos-search').fadeIn();
  	$('.contact-list').fadeIn();
  	$('.contact-profile').hide();	
  	$('.contact-settings').hide();

  	$('.menu li').removeClass('contact-menu-active');
  	$('.all-discussions').addClass('contact-menu-active');  
});
$('body').on('click','.settings-menu',function(){
		$(this).addClass('selected');
  	$('.infos-search').hide();
  	$('.contact-list').hide();
  	$('.contact-profile').hide();	
  	$('.contact-settings').fadeIn();

  	$('.menu li').removeClass('contact-menu-active');
  	$('.settings-menu').addClass('contact-menu-active');  
});
$('body').on('click','.contact',function(){
	$('.contact').removeClass('active-contact');
	$(this).addClass('active-contact');
});
	
	$('body').on('click','.black , .btn-danger',function(){
	$('.black').hide();
		$('.audio-call').hide();
		$('.video-call').hide();
	});
	$('body').on('click','.to-audio-call',function(){
		$('.black').show();
  		$('.video-call').hide();
  		$('.audio-call').fadeIn();
	});
	$('body').on('click','.to-video-call',function(){
		$('.black').show();
  		$('.audio-call').hide();
  		$('.video-call').fadeIn();
	});	
	if (localStorage.getItem("primayColor") === null) {
	  //...
  	localStorage.setItem("primayColor", "#7d5fff");
  	document.documentElement.style.setProperty('--color-primary', localStorage.getItem("primayColor"));
	}else{
  	document.documentElement.style.setProperty('--color-primary', localStorage.getItem("primayColor"));
	}

$('body').on('click','.box',function(){
	var color = $(this).css('background-color');
	localStorage.setItem("primayColor", color);
	document.documentElement.style.setProperty('--color-primary', color);	  				  			  	
});

$('body').on('click','.fa-paperclip',function(){
	$('#fileToUpload').click();					
});

$('body').on('click','.contact',function(){
	var avatar = $(this).find('img').attr('src');
	var name = $(this).find('.name_of_contact').text();		
	console.log(avatar+"fgvdsg");
	$(".discussion").find('img').attr('src',avatar);
	$(".discussion").find('h3').text(name);
});

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

$('body').on('keyup','.message-block input',function(e){
	if ($(".message-block input").is(":focus") && (e.keyCode == 13) ) {
		var msg = $(this).val();				
		if( msg != "" ){
			$('#discussion-block').append(`
				<div class="col-lg-12 col-md-12 message-chat message-chat-right">
	                <div class="message-chat-text">
	                    <span>`+msg+` </span>
	                </div>
	                <div class="message-chat-meta">
	                    <span>`+formatAMPM(new Date)+`<i class="fas fa-check"></i></span>
	                </div>
	            </div>
			`);
			var d = $('.discussion-list');
			d.animate({ scrollTop: d.prop('scrollHeight') }, 1000);
			$(this).val("");
		}else{
			alert(`Please write a message`);
		}
	}
});

$('body').on('click','.send-msg',function(){
	var msg = $(".message-block input").val();

	if( msg != "" ){
		$('#discussion-block').append(`
			<div class="col-lg-12 col-md-12 message-chat message-chat-right">
	            <div class="message-chat-text">
	                <span>`+msg+` </span>
	            </div>
	            <div class="message-chat-meta">
	                <span>`+formatAMPM(new Date)+`<i class="fas fa-check"></i></span>
	            </div>
	        </div>
		`);
		var d = $('.discussion-list');
		d.animate({ scrollTop: d.prop('scrollHeight') }, 1000);
		$(".message-block input").val("");
	}else{
		alert(`Please write a message`);
	}	
		
});


$("#search").on("keyup", function() {
    var t = $(this).val().toLowerCase();
    $(".contact").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(t) > -1);
    });
});

