$(document).on('click', '#sendawardletter', function ()
{ 
	auctionawardmodalshow('AWL');
});	
$(document).on('click', '#sendLOI', function ()
{  
			auctionawardmodalshow('LOI');
});	
$(document).on('click', '#sendLOA', function ()
{ 
			auctionawardmodalshow('LOA');
});	

$(document).on('click', '#completeAuthorization', function ()
{ 	
			auctionawardmodalshow('CPA');
});	

$(document).on('click', '.removeawardletter', function ()
{ 
	removedocumentmodalshow('AWL');
});	
$(document).on('click', '#removeLOI', function ()
{  
	removedocumentmodalshow('LOI');
});	
$(document).on('click', '#removeLOA', function ()
{ 
	removedocumentmodalshow('LOA');
});	

$(document).on('click', '.awardAuthorize', function ()
{  
				currentClickEventObj=$(this).closest('tr');
				authorizemodalshow('Q',currentClickEventObj);
});	

$(document).on('click', '.awardReject', function ()
{  
			currentClickEventObj=$(this).closest('tr');
			authorizemodalshow('D',currentClickEventObj);
});

$(document).on('click', '.awardReinstate', function ()
{  
					currentClickEventObj=$(this).closest('tr');
					authorizemodalshow('R',currentClickEventObj);
});

$(document).on('click', '#auctionawardalertcancel', function ()
{    
	$("#auctionawardalertok").removeClass('sendawardletterajax sendLOIajax sendLOAajax completeauthorizationajax completeawardajax');
	$("#auctionawardalertok").removeClass('removeawardletterajax removeLOIajax removeLOAajax');
	$("#auctionawardalertok").removeClass('awardauthorizeajax alertrejectreasonok awardreinstateajax');
});


$(document).on('click', '#rejectreasoncancelbutton', function ()
{    
			$("#rejectreasonokbutton").removeClass('alertrejectreasonok awardrejectajax'); 
});

function auctionawardmodalshow(auctionawardflowsteptag)
{
	
	switch(auctionawardflowsteptag)
	{
		case 'AWL':	$("#auctionawardalertmodalpara").html("Are you sure you want to send award letter ?");
					$("#auctionawardalertok").addClass('sendawardletterajax');
					$("#auctionawardsuccessmodalpara").html("Award letter sent successfully");
					$("#auctionawardfailmodalpara").html("Failed! to send award letter");
					$("#auctionawardalertmodal").modal("show");
					break;
					
		case 'LOI':	$("#auctionawardalertmodalpara").html("Are you sure you want to send LOI ?");
					$("#auctionawardalertok").addClass('sendLOIajax');
					$("#auctionawardsuccessmodalpara").html("LOI sent successfully");
					$("#auctionawardfailmodalpara").html("Failed! to send LOI");
					$("#auctionawardalertmodal").modal("show");
					break;
		
		case 'LOA':	$("#auctionawardalertmodalpara").html("Are you sure you want to send LOA ?");
					$("#auctionawardalertok").addClass('sendLOAajax');
					$("#auctionawardsuccessmodalpara").html("LOA sent successfully");
					$("#auctionawardfailmodalpara").html("Failed! to send LOA letter");
					$("#auctionawardalertmodal").modal("show");
					break;
		
		case 'CPA':	$("#auctionawardalertmodalpara").html("Are you sure you want to complete authorization ?");
					$("#auctionawardalertok").addClass('completeauthorizationajax');
					$("#auctionawardsuccessmodalpara").html("Authorization completed successfully");
					$("#auctionawardfailmodalpara").html("Failed! to complete authorization");
					$("#auctionawardalertmodal").modal("show");
					break;
		
	}	
} 
var encTransactionId;
function authorizemodalshow(authorizeflag,currentClickEventObj)
{
	var transactionName=currentClickEventObj.find(".transactionName").text();
	var bidderName=currentClickEventObj.find(".bidderName").text();
	encTransactionId=currentClickEventObj.find(".encTransactionId").text();
	switch(authorizeflag)
	{
		case 'Q':	$("#auctionawardalertmodalpara").html("Are you sure you want to authorize "+transactionName+" of "+bidderName+"?");
					$("#auctionawardalertok").addClass('awardauthorizeajax');
					$("#auctionawardsuccessmodalpara").html(bidderName+"'s "+transactionName+" authorized successfully");
					$("#auctionawardfailmodalpara").html("Failed! to authorize "+bidderName+"'s "+transactionName);
					$("#auctionawardalertmodal").modal("show");
					break;
					
		case 'D':	$("#auctionawardreasonalertmodalpara").html("Are you sure you want to reject "+transactionName+" of "+bidderName+"?");
				 	$("#auctionawardsuccessmodalpara").html(bidderName+"'s "+transactionName+" rejected successfully");
					$("#auctionawardfailmodalpara").html("Failed! to reject "+bidderName+"'s "+transactionName);
					$("#rejectreasonokbutton").addClass('alertrejectreasonok');
				 	$("#rejectreasonokbutton").removeClass('awardrejectajax');
				 	$(".alertrejectreasonok").prop("disabled",false);
					$(".hideshowmodal").hide();
					$('#disqualifyreason').val("");
					
			 		$("#auctionawardrejectreasonmodal").modal("show")
					break;
		
		case 'R':	$("#auctionawardalertmodalpara").html("Are you sure you want to reinstate "+transactionName+" status of "+bidderName+"?");
					$("#auctionawardalertok").addClass('awardreinstateajax');
					$("#auctionawardsuccessmodalpara").html(bidderName+"'s "+transactionName+" reinstate successfully");
					$("#auctionawardfailmodalpara").html("Failed! to reinstate "+bidderName+"'s "+transactionName);
					$("#auctionawardalertmodal").modal("show");
					break;
		
	}	
}

function removedocumentmodalshow(auctionawardflowsteptag)
{
	
	switch(auctionawardflowsteptag)
	{
		case 'AWL':	$("#auctionawardalertmodalpara").html("Are you sure you want to remove award letter ?");
					$("#auctionawardalertok").addClass('removeawardletterajax');
					$("#auctionawardsuccessmodalpara").html("Award letter removed successfully");
					$("#auctionawardfailmodalpara").html("Failed! to remove award letter ");
					$("#auctionawardalertmodal").modal("show");
					break;
					
		case 'LOI':	$("#auctionawardalertmodalpara").html("Are you sure you want to remove LOI ?");
					$("#auctionawardalertok").addClass('removeLOIajax');
					$("#auctionawardsuccessmodalpara").html("LOI removed successfully");
					$("#auctionawardfailmodalpara").html("Failed! to removed LOI ");
					$("#auctionawardalertmodal").modal("show");
					break;
		
		case 'LOA':	$("#auctionawardalertmodalpara").html("Are you sure you want to remove LOA ?");
					$("#auctionawardalertok").addClass('removeLOAajax');
					$("#auctionawardsuccessmodalpara").html("LOA removed successfully");
					$("#auctionawardfailmodalpara").html("Failed! to remove LOA ");
					$("#auctionawardalertmodal").modal("show");
					break;
		
	}	
}
 

$(document).on('click', '.sendawardletterajax,.sendLOIajax,.sendLOAajax,.completeauthorizationajax', function ()
		{ 
				var hrefValue = baseUrl
						+ "/auctionAwardFlow/sendDetails/"+encAwardDetailId +"/"+encAuctionAwardStepFlag;
				var url = hrefValue;

				$.ajax({
					url : url,
					method : 'POST',
					contentType : "application/json",
					dataType : "json",
					async : false,
					success : function(data) {
						var booleanValue = data.booleanValue;
						var errorMsg=data.errorMsg;
						$("#auctionawardalertmodal").modal("hide");
						if (booleanValue == true) {
							$("#auctionawardsuccessmodal").modal("show");
							
						} else {

							if(errorMsg!='')
								{
							$("#auctionawardfailmodalpara").html(errorMsg);
								}
							$("#auctionawardfailmodal").modal("show");
						}
					}
				});

});



$(document).on('click', '.awardauthorizeajax', function ()
{ 
				var hrefValue = baseUrl
						+ "/auctionAwardFlow/qualifyAwardBidderPayment/"+encAwardDetailId +"/"+encTransactionId;
				var url = hrefValue;

				$.ajax({
					url : url,
					method : 'POST',
					contentType : "application/json",
					dataType : "json",
					async : false,
					success : function(data) {
						var booleanValue = data.booleanValue;
						var errorMsg=data.errorMsg;
						$("#auctionawardalertmodal").modal("hide");
						if (booleanValue == true) {
							$("#auctionawardsuccessmodal").modal("show");
							
						} else {

							if(errorMsg!='')
								{
							$("#auctionawardfailmodalpara").html(errorMsg);
								}
							$("#auctionawardfailmodal").modal("show");
						}
					}
				});

});

$(document).on('click', '.awardrejectajax,.alertokajax', function ()
{   
					var reason=$('#disqualifyreason').val();
					 	var hrefValue = baseUrl
								+ "/auctionAwardFlow/disQualifyAwardBidderPayment/"+encAwardDetailId +"/"+encTransactionId;
					 	var url = hrefValue;

						$.ajax({
							url : url,
							method : 'POST',
							data: {'reason':reason},
							dataType : "json",
						 	cache : false,
							async : false, 
							success : function(data) {
								var booleanValue = data.booleanValue;
							 	var errorMsg=data.errorMsg; 
								$("#auctionawardrejectreasonmodal").modal("hide");
								if (booleanValue == true) {
									$("#auctionawardsuccessmodal").modal("show");
									
								} else {

									if(errorMsg!='')
										{
									$("#auctionawardfailmodalpara").html(errorMsg);
										}
									$("#auctionawardfailmodal").modal("show");
								}
							}
						});

});

$(document).on('click', '.awardreinstateajax', function ()
		{ 
								var hrefValue = baseUrl
										+ "/auctionAwardFlow/reinstateAwardBidderPayment/"+encAwardDetailId +"/"+encTransactionId;
								var url = hrefValue;

								$.ajax({
									url : url,
									method : 'POST',
									contentType : "application/json",
									dataType : "json",
									async : false,
									success : function(data) {
										var booleanValue = data.booleanValue;
										var errorMsg=data.errorMsg;
										$("#auctionawardalertmodal").modal("hide");
										if (booleanValue == true) {
											$("#auctionawardsuccessmodal").modal("show");
											
										} else {

											if(errorMsg!='')
												{
											$("#auctionawardfailmodalpara").html(errorMsg);
												}
											$("#auctionawardfailmodal").modal("show");
										}
									}
								});

});

$(document).on('click', '#completeaward', function ()
{ 
	$("#auctionawardalertmodalpara").html("Are you sure you want to complete award process ?");
	$("#auctionawardalertok").addClass('completeawardajax');
	$("#auctionawardsuccessmodalpara").html("Bidder awarded process completed successfully");
	$("#auctionawardfailmodalpara").html("Failed! to complete award process ");
	$("#auctionawardalertmodal").modal("show");
	
});
$(document).on('click', '.completeawardajax', function ()
{
	var hrefValue = baseUrl
	+ "/auctionAwardFlow/completeAuctionAwardProcess/"+encAwardDetailId;
var url = hrefValue;

$.ajax({
url : url,
method : 'POST',
contentType : "application/json",
dataType : "json",
async : false,
success : function(data) {
	var booleanValue = data.booleanValue;
 	$("#auctionawardalertmodal").modal("hide");
	if (booleanValue == true) {
		$("#auctionawardsuccessmodal").modal("show");
		
	} else {
		$("#auctionawardfailmodal").modal("show");
	}
}
});

});
$(document).on('click', '.removeawardletterajax,.removeLOIajax,.removeLOAajax', function ()
		{ 
				var hrefValue = baseUrl
						+ "/auctionAwardFlow/removeDocument/"+encAwardDetailId +"/"+encAuctionAwardStepFlag;
				var url = hrefValue;

				$.ajax({
					url : url,
					method : 'POST',
					contentType : "application/json",
					dataType : "json",
					async : false,
					success : function(data) {
						var booleanValue = data.booleanValue;
						$("#auctionawardalertmodal").modal("hide");
						if (booleanValue == true) {
							$("#auctionawardsuccessmodal").modal("show");
							
						} else {
							$("#auctionawardfailmodal").modal("show");
						}
					}
				});

		});

$(document).on('click', '#auctionawardsuccessmodalok,#auctionawardfailmodalclose', function(){
	window.location.reload();
});



$(".datetimepicker1").datetimepicker({
	minDate : 0,
	changeMonth : true,
	changeYear : true,
	dateFormat : 'dd-mm-yy',
	
});


$("#download").click(function(e){
	$("#loadingicon").show(); 
	$("#download").addClass("disabled",true);
	$("#submitSave").attr("disabled",true);
	$('#download').css({'pointer-events':'none','cursor':'default'});
	$('#download').prop('tabindex', '1');
  var myInterval= window.setInterval(function(){
   	var xhttp = new XMLHttpRequest();
   	//xhttp.timeout = 40000;
   	xhttp.onreadystatechange = function(){
   		if (xhttp.readyState == 4) {
   	         if(xhttp.responseText != '' && xhttp.responseText != null )
   	        	{	 
   	        	 	document.getElementById("finalResponse").value = xhttp.responseText;
       	        	 $('#loadingicon').hide();
       	        	  var uploadedfile=$("#finalResponse").val();

       	        	  if(uploadedfile[1] !==','){
       	        		 var fileName = uploadedfile.split(',');
       	        		 var b=fileName[1];
       	        		
       	        		if(b!= null)
       	        		{
       	        			 $("#submitSave").attr("disabled",false);
       	        			document.getElementById('fileName').innerHTML = 'The file '+b+' is signed and attached, please click on submit button to upload the file.';		 
       	        		}
       	        		 
       	        		 
       	        		}
   	    	         clearInterval(myInterval);
   	        	}
   	    }
   		
   	};
   
   	var req = document.getElementById("requestUrl").value;
   	var signSerialNumberFromDB = document.getElementById("signSerialNumberFromDB").value;
   	var url = "http://localhost:8070/";
   	var params ="requestUrl="+req+"&signSerialNumberFromDB="+signSerialNumberFromDB;
   	xhttp.open("POST",url+"?"+params,true);
   	xhttp.send();
}, 10000);
});


$(document).ready(function() {
    var len = 0;
    var maxchar = 500;
    $(document).on('keyup','.txtarea',function(){
   
      len = this.value.length
      if(len > maxchar){
          return false;
      }
      else if (len > 0) {
          $( "#remainingC" ).html( "Remaining characters: " +( maxchar - len ) );
      }
      else {
          $( "#remainingC" ).html( "Remaining characters: " +( maxchar ) );
      }
    });
  


});


$(document).on('keyup','.txtarea',function(){
	

	
	var textareaChars=document.getElementById("my-input").value;
	//alert(textareaChars);
	var regexPattern=/^[a-zA-Z0-9 .,?]*$/.test(textareaChars);
	
	 
	//alert(regexPattern);
	if(regexPattern==false){
		$("#descriperrormsg").text("Please match the requested format(Alphabets,numbers and space,comma,? only)");
		$("#download").addClass("disabled");
		$('#submitSave').attr('disabled',true);
	}else{
 
		$("#descriperrormsg").text(""); 
		$("#download").removeClass("disabled");
		//If it is update so enable submit save
		if($('#submitSave').text()!="Save")
		{			
			$('#submitSave').attr('disabled',false);
		}
	}
	
 
});

$(document).ready(function(){

	 $('[data-toggle="myToolTip"]').tooltip({placement:'bottom'});  
		$('#loadingicon').hide(); 
		$('#submitSave').attr('disabled',true); 
		$("#download").addClass("disabled",true);
		
		try{
		if(isBalanceFeeEnabled)
		{
			calculateBalanceFee();

			$(document).on('keyup','.auctionSecurityDeposit',function(){
	 		
				calculateBalanceFee();
			});
		
	    }
		}
		catch(e)
		{
			
		}
		 
});




$(document).ready(function() {
	
	$("#s").hide();
	$("#showmehide").show();
	$("#h").show();

	$("#s").click(function() {
		$("#showmehide").slideDown(1000);
		$("#h").show();
		$("#s").hide();
	})
	
	$("#h").click(function() {
		$("#showmehide").slideUp(1000);
		$("#s").show();
		$("#h").hide();

	})

});



function calculateBalanceFee()
{
	//alert(balanceFeeSetupId);
	
	var tempAuctionEMD = new BigNumber(auctionEMD);
	//alert("tempAuctionEMD: "+tempAuctionEMD);
	var tempAuctionBidAmount = new BigNumber(auctionBidAmount);
	var initialVal=0;
	var balanceFee = new BigNumber(initialVal);
	//alert(balanceFee);
	var auctionSecurityDeposit=$(".auctionSecurityDeposit").val();
	
	var tempAuctionSecurityDeposit=new BigNumber(auctionSecurityDeposit);
	var isSecurityDepositNAN=(tempAuctionSecurityDeposit.isNaN());
	//alert("isSecurityDepositNAN: "+isSecurityDepositNAN);
	tempAuctionSecurityDeposit=(tempAuctionSecurityDeposit.isNaN())?0:tempAuctionSecurityDeposit;
	//alert(auctionSecurityDeposit);
	//alert("tempAuctionBidAmount: "+tempAuctionBidAmount);
		switch(balanceFeeSetupId)
		{
			case '1':balanceFee=tempAuctionBidAmount;
					break;
			case '2':balanceFee=(tempAuctionBidAmount.minus(tempAuctionEMD));
					break;
			case '3':balanceFee=(isSecurityDepositNAN==false)?(tempAuctionBidAmount.minus(tempAuctionSecurityDeposit)):new BigNumber(initialVal);
					break;
			case '4':balanceFee=(isSecurityDepositNAN==false)?(tempAuctionBidAmount.minus(tempAuctionEMD.plus(tempAuctionSecurityDeposit))):new BigNumber(initialVal);
					break;
		}
		//alert("balanceFee 2: "+balanceFee); 
		if(balanceFee.isGreaterThanOrEqualTo(0))
		{
			$(".auctionBalanceFee").val(balanceFee);
		}
		else
		{
			$(".auctionBalanceFee").val(0);
		}
		 
}





