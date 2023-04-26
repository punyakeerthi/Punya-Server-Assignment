$(document).on('click','.language',function(){
	var getLangId= $(this).attr('id');
	if(getLangId == "english"){
		var btn = document.getElementById('english');
		btn.addEventListener('click', language('en'), false);
	}else if(getLangId == "hindi"){
		var btn = document.getElementById('hindi');
		btn.addEventListener('click', language('hi'), false);
		
	}
	function language(langName){
		var baseUrl=$('#urlVal').val();
		var url=baseUrl+"/HomePage/changeLanguage?langName="+langName;
		
		$.ajax({
		       url : url,
		       method : 'GET',
		       async : true,
		       complete : function(data) {
	 				location.reload();
	 		
		       }
		   });
		
	}
	
});
$(document).ready(function(){
var getLangId= $(this).attr('id');
if(getLangId == "hindi"){
	$("#refresh").css("margin-left","-170px");
}
});
/*For Color theme*/
$(document).on('click','.getId',function(){
	var getId= $(this).attr('id');
	if(getId == "blueButton"){
		var btn = document.getElementById('blueButton');
		btn.addEventListener('click', setStyleCss('style'), false);
	}else if(getId == "orangeButton"){
		var btn = document.getElementById('orangeButton');
		btn.addEventListener('click', setStyleCss('orange'), false);
	}else if(getId == "brownButton"){
		var btn = document.getElementById('brownButton');
		btn.addEventListener('click', setStyleCss('brown'), false);
	}else if(getId == "highcontrast"){
		var btn = document.getElementById('highcontrast');
		btn.addEventListener('click', setStyleCss('highcontrast'), false);
	}
	function setStyleCss(styleCssName){
		var baseUrl=$('#urlVal').val();
		var url=baseUrl+"/HomePage/setStyleCss?styleCssName="+styleCssName;
		$.ajax({
		       url : url,
		       method : 'GET',
		       async : true,
		       complete : function(data) {
	 				location.reload();
		       }
		   });

	}
});

/*Captcha*/

document.addEventListener("DOMContentLoaded", function() { 	

let captchaText = document.querySelector('#generatedCaptcha');
	let userText = document.querySelector('#captchainput');
	
	let submitButton = document.querySelector('#button');
	let output = document.querySelector('#captchavalidation');
	$( "#captchainput,.keyboard3" ).keyup(function() {
	if(userText.value === captchaText.innerHTML) {
			$('#msg,#errormsg').html('');
			$('#captchavalidation').removeClass('fa fa-times');
				output.classList.add("greenText");
				output.classList.remove("redText");
				//output.innerHTML = "valid captcha code";
				$('#captchainput').css('border','1px solid green').css('color','green');
				$('#captchavalidation').addClass('fa fa-check-circle ');
				$('#refreshforgot').addClass('disabled');
				$('#button').prop("disabled", false);
				$('#ResetButton').removeClass('disabled');
				
			} else {
				$('#msg,#errormsg').html('Invalid captcha code');
				$('#msg,#errormsg').css('color','red');
				$('#captchavalidation').removeClass('fa fa-check-circle ');
				$('#ResetButton').addClass('disabled');
				output.classList.add("redText");
				output.classList.remove("greenText");
				//output.innerHTML = "Invalid captcha code";
				$('#captchainput').css('border','1px solid red').css('color','red');
				$('#captchavalidation').addClass('fa fa-times-circle');
				$('#button').prop("disabled", true);
				$('#refreshforgot').removeClass('disabled');
			
			}
	});
	

});

$(document).on('click', '.captcharefresh', function (){
	var baseUrl=$('#urlVal').val();
	var url=baseUrl+"/captchaController/getCaptchaString";
	 $.ajax({
	       url : url,
	       method : 'GET',
	       async : true,
	       complete : function(data) {
	    	  // location.reload();
	    	   $('#generatedCaptcha').load(url);
	       }
	   });		
});

/*Marquee and tooltip*/

$(document).ready(function(){
	$('[data-toggle="myToolTip"]').mouseenter(function(){
	    var that = $(this)
	    that.tooltip({placement : 'bottom'});
	    that.tooltip('show');
	    setTimeout(function(){
	        that.tooltip('hide');
	    }, 2000);
	});
	
	$(function(){
		$('.marquee1,.renwalmarquee').marquee({
			speed: 70,
			//gap: 50,
			delayBeforeStart: 0,
			direction: 'left',
			//duplicated: true,
			pauseOnHover: true
		});
	});

/*client image*/
	var siteName=$("#siteName").val();
	var siteUrl="https://www.stqc.gov.in/";
	var ItisiteUrl="http://www.itiltd-india.com/";
	var LogositeUrl="https://mhrd.gov.in/";
	var crwcLogoUrl=" http://www.crwc.in/";
	var testjava="javascript:void(0)";
	var tempUrl=$("#urlVal").val();
	var partnerImg=tempUrl+"/resources/assets/img/stqclogo.png";
	var partnerImg1=tempUrl+"/resources/assets/img/ITI_logo.png";
	var partnerImg2=tempUrl+"/resources/assets/img/stqclogo.png";
	
	if(siteName == "crwc" || siteName == "sdcl"){
		$(".appendImg").prop("src",partnerImg1);
		$(".appendImg").addClass("partnerImg1");
		$(".appendImg1").prop("src",partnerImg2);
		$(".appendImg1").addClass("partnerImg2");
	}else{
		$(".appendImg").prop("src",partnerImg);
		$(".appendImg").removeClass("partnerImg1");
		$(".appendImg1").removeClass("partnerImg2");
	}
	
	if(siteName == "eproc"){
		$(".appendImg").remove();
	}
	
	$(".redireUrl").click(function(){
		if(siteName == "mhrd"){
			$(".appendUrl").prop("href",ItisiteUrl);
			$(".appendUrl1").prop("href",siteUrl);
			$(".appendlogoUrl").prop("href",LogositeUrl);
		}else if(siteName == "crwc"){
			$(".appendUrl").prop("href",ItisiteUrl);
			$(".appendUrl1").prop("href",siteUrl);
			$(".appendlogoUrl").prop("href",crwcLogoUrl);
		}else{
			$(".appendUrl").prop("href",siteUrl);
			$(".appendlogoUrl").prop("href",testjava);
			$(".appendlogoUrl").prop("target","_parent");
		}
	});
	
	$(".renwalmarqueeClick").click(function(){
		var renwalmarqueevalue= $(".renwalmarqueevalue").val();
		var tempUrl=$("#urlVal").val();
		window.location.href=tempUrl+'/bidderRegistration/registrationRenewal/'+renwalmarqueevalue
	});

	$("body").css({ 'display' : 'block' });

/*For heading*/
	$('.homeImage').attr('id','mineslogo');
	var site=$("#siteBannerHeading").val();
	if($('#siteBannerHeading').val()){
		var siteLength=$("#siteBannerHeading").val().length;
		var auction="Welcome to e-Auction Portal of Delhi State Industrial & Infrastructure Development Corporation Ltd"
		
	if(siteLength <= 55){ 
		document.getElementById('heading').innerHTML = site;
	}else if(siteLength <= 97){
		document.getElementById('heading').innerHTML = site.replace(/(.{35})/, "$1<br>");
	}
	else if(siteLength = 98 && auction == site){
		document.getElementById('heading').innerHTML = site.replace(/(.{30})/, "$1<br>");
		$("#heading").css({'margin-left': '50px'});
		$("#subheading").css({'margin-left': '80px'});
	}
	else if(siteLength <= 135){
		document.getElementById('heading').innerHTML = site.replace(/(.{35})/, "$1<br>");
		$("#heading").css({'margin-left': '50px'});
		$("#subheading").css({'margin-left': '80px'});
	}
	var imgFullURL = $('.homeImage')[0].src;
	var imagName= imgFullURL.split("/").pop();
	
	if(imagName == "epfologo.png"){
		$("#mineslogo").css("margin-left", "-30px");
	}
	
	if(imagName == "moefcclogo.png"){
		$("#mineslogo").css("margin-top", "5px");
	}
	if(imagName == "moeslogo.png"){
		$("#mineslogo").css("width", "100%");
	}
	if(imagName == "nalandaunivlogo.png"){
		$("#mineslogo").css("width", "50%");
	}
	if(imagName == "neramaclogo.png"){
		$("#mineslogo").css("width", "100%");
	}
	if(imagName == "nhfdclogo.png"){
		 $("#mineslogo").css("margin-left", "-50px");
	}
	if(imagName == "brpllogo.png"){
		 $("#mineslogo").css("width", "121%");
	}
	if(imagName == "sdcllogo.png"){
		 $("#mineslogo").css("margin-top", "5px");
	}
	}
});


/*Error Message and Tabs*/
	$(document).ready(function(){
        $("#hometabs").tabs();
        $("#hometabs1").tabs();

		var errormessage = localStorage.getItem("errorMSg");
		if(errormessage !== null){
			$("#loginfailuremsg").text(errormessage);
			localStorage.removeItem("errorMSg");
		}else{
			$("#loginfailuremsg").text("");
		}
	})


	
/* one way hash script */

		function SHA256(s) {
			var chrsz = 8;
			var hexcase = 0;

			function safe_add(x, y) {
				var lsw = (x & 0xFFFF) + (y & 0xFFFF);
				var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
				return (msw << 16) | (lsw & 0xFFFF);
			}

			function S(X, n) {
				return (X >>> n) | (X << (32 - n));
			}
			function R(X, n) {
				return (X >>> n);
			}
			function Ch(x, y, z) {
				return ((x & y) ^ ((~x) & z));
			}
			function Maj(x, y, z) {
				return ((x & y) ^ (x & z) ^ (y & z));
			}
			function Sigma0256(x) {
				return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
			}
			function Sigma1256(x) {
				return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
			}
			function Gamma0256(x) {
				return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
			}
			function Gamma1256(x) {
				return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
			}

			function core_sha256(m, l) {
				var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF,
						0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4,
						0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE,
						0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7,
						0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6,
						0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC,
						0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8,
						0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351,
						0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC,
						0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E,
						0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70,
						0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,
						0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C,
						0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F,
						0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814,
						0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7,
						0xC67178F2);
				var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372,
						0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB,
						0x5BE0CD19);
				var W = new Array(64);
				var a, b, c, d, e, f, g, h, i, j;
				var T1, T2;

				m[l >> 5] |= 0x80 << (24 - l % 32);
				m[((l + 64 >> 9) << 4) + 15] = l;

				for (var i = 0; i < m.length; i += 16) {
					a = HASH[0];
					b = HASH[1];
					c = HASH[2];
					d = HASH[3];
					e = HASH[4];
					f = HASH[5];
					g = HASH[6];
					h = HASH[7];

					for (var j = 0; j < 64; j++) {
						if (j < 16)
							W[j] = m[j + i];
						else
							W[j] = safe_add(safe_add(safe_add(
									Gamma1256(W[j - 2]), W[j - 7]),
									Gamma0256(W[j - 15])), W[j - 16]);

						T1 = safe_add(safe_add(safe_add(safe_add(h,
								Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
						T2 = safe_add(Sigma0256(a), Maj(a, b, c));

						h = g;
						g = f;
						f = e;
						e = safe_add(d, T1);
						d = c;
						c = b;
						b = a;
						a = safe_add(T1, T2);
					}

					HASH[0] = safe_add(a, HASH[0]);
					HASH[1] = safe_add(b, HASH[1]);
					HASH[2] = safe_add(c, HASH[2]);
					HASH[3] = safe_add(d, HASH[3]);
					HASH[4] = safe_add(e, HASH[4]);
					HASH[5] = safe_add(f, HASH[5]);
					HASH[6] = safe_add(g, HASH[6]);
					HASH[7] = safe_add(h, HASH[7]);
				}
				return HASH;
			}

			function str2binb(str) {
				var bin = Array();
				var mask = (1 << chrsz) - 1;
				for (var i = 0; i < str.length * chrsz; i += chrsz) {
					bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
				}
				return bin;
			}

			function Utf8Encode(string) {
				string = string.replace(/\r\n/g, "\n");
				var utftext = "";

				for (var n = 0; n < string.length; n++) {

					var c = string.charCodeAt(n);

					if (c < 128) {
						utftext += String.fromCharCode(c);
					} else if ((c > 127) && (c < 2048)) {
						utftext += String.fromCharCode((c >> 6) | 192);
						utftext += String.fromCharCode((c & 63) | 128);
					} else {
						utftext += String.fromCharCode((c >> 12) | 224);
						utftext += String.fromCharCode(((c >> 6) & 63) | 128);
						utftext += String.fromCharCode((c & 63) | 128);
					}

				}

				return utftext;
			}

			function binb2hex(binarray) {
				var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
				var str = "";
				for (var i = 0; i < binarray.length * 4; i++) {
					str += hex_tab
							.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF)
							+ hex_tab
									.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
				}
				return str;
			}

			s = Utf8Encode(s);
			return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
		}

		// register onclick events for Encrypt button
		//document.getElementById("button").onclick = function() {
		$(document).on('click','#button',function(){
			if($('#password').val()){ 
				var txt_string = document.getElementById('password').value; // gets data from input text

				// encrypts data and adds it in #strcrypt element
				document.getElementById('password').value = SHA256(txt_string);
				return true;
			}
			
		});
		
		$("#changeKey").focusout(function(){
			var inputOne=$("#firstInput").text();
			var inputTwo=$("#secondInput").text();
	 		var sumoftwonumber = Number(a) + Number(b); // 5
			var capValue=document.getElementById("changeKey").value;
	 	 if (capValue == sumoftwonumber) {
				$('.submit__generated').removeClass('unvalid').addClass('valid');
				$('.submit').removeClass('overlay');
				$('.submit__overlay').fadeOut('fast');
				$('.submit__error').addClass('hide');
				$('.submit__error--empty').addClass('hide');
			} else {
				$('.submit__generated').removeClass('valid').addClass('unvalid');
				$('.submit').addClass('overlay');
				$('.submit__overlay').fadeIn('fast');
			}  
			}) ;

/*download bidder registration manual*/
$(document).on('click','.downloadbidderregistrationpdf',function(){
	var bidderregLink =$('.bidderregLink').val();
    var testjava="javascript:void(0)";
    fileName = bidderregLink.split("/").pop();
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', bidderregLink, false);
    xhr.send();

    if (xhr.status == "404") {
        return false;
    } else {
        $(".downDoc").prop("href",bidderregLink);
        $(".downDoc").prop("download",fileName);
        setInterval(function(){
            $(".downDoc").prop("href",testjava);
        }, 100);
        return true;
    }
});


/*for old homepageheader*/
function setStyleCss(styleCssName){
	var baseUrl=$('#urlVal').val();
	var url=baseUrl+"/HomePage/setStyleCss?styleCssName="+styleCssName;
	$.ajax({
	       url : url,
	       method : 'GET',
	       async : true,
	       complete : function(data) {
 				location.reload();
	       }
	   });

}

/*For Pagination*/
$(document).on('click', '.nextbutton', function() {
	$("#next").submit();
});

$(document).on('click', '.lastbutton', function() {
	$("#lastpage").submit();
});
$(document).on('click', '.firstbutton', function() {
	$("#firstpage").submit();
});
$(document).on('click', '.prevbutton', function() {
	$("#prev").submit();
});
$(document).on('click', '.Loopvalue', function() {
	var Loopvalue = this.id;
	$("#" + this.id).submit();
});