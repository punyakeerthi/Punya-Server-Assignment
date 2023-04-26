$(document).on('click','.pkautheneticatenonce',function(){
		var pageContext=$("#urlVal").val();
		var encUserId =$(".encUserId").val();
		var encTenderItemId =$(".encTenderItemId").val();
		var encRoleActivityValue =$(".encRoleActivityValue").val();
		var encSiteName =$(".encSiteName").val();
		window.open(pageContext+'pkiAuthenticate/digitaltokenjnlp/'+encUserId+"/"+encTenderItemId+"/"+encRoleActivityValue+"/"+encSiteName);
	});
$(document).on('click','.viewdetailsnonce',function(){
	var pageContext=$("#urlVal").val();
	var enLibDocId = this.id;
	var enBidderId =$(this).closest("tr").find("#enBidderId").val();
	window.open(pageContext+'/fileActivity/viewLibDoc/'+enLibDocId+"/"+enBidderId,'_blank', 'scrollbars=no,top=100,left=400, width=600, height=300');
});

$(document).on('click','.tenderDecryptionnonce',function(){
	var pageContext=$("#urlVal").val();
	var enMode =$(".enMode").val();
	var encTenderItemId =$(".encTenderItemId").val();
	var enTenderCover =$(".enTenderCover").val();
	var enRoleActivityValue =$(".enRoleActivityValue").val();
	window.open(pageContext+'tenderDecryption/tenderOpeningJnlp/'+encTenderItemId+"/"+enMode+"/"+enTenderCover+"/"+enRoleActivityValue);
	
});
$(document).on('click','.bidderlibraryjnlpnonce',function(){
	var pageContext=$("#urlVal").val();
	var enUserId =$("#enUserId").val();
	window.open(pageContext+'bidderLibrary/bidderLibraryJnlp/'+enUserId);
});
$(document).on('click','.pkautheneticatemessage',function(){
	var pageContext=$("#urlVal").val();
	var encUserId =$(".encUserId").val();
	var encTenderItemId =$(".encTenderItemId").val();
	var encRoleActivityValue =$(".encRoleActivityValue").val();
	var encSiteName =$(".encSiteName").val();
	window.open(pageContext+'cancelTender/uploadCancelDocumentJnlp/'+encUserId+"/"+encSiteName+"/"+encTenderItemId+"/"+encRoleActivityValue);
});

/*$(document).on('click','.auctionpkautheneticate',function(){
	alert();
	var pageContext=$("#urlVal").val();
	var encUserId =$(".encUserId").val();
	var encAuctionItemId =$(".encAuctionItemId").val();
	var encRoleActivityValue =$(".encRoleActivityValue").val();
	var encSiteName =$(".encSiteName").val();
	window.open(pageContext+'pkiAuthenticate/digitaltokenjnlp/'+encUserId+"/"+encAuctionItemId+"/"+encRoleActivityValue+"/"+encSiteName);
});*/


$(document).on('click','.lasttoken',function(){
	var pageContext=$("#urlVal").val();
	var enTenderItemId = $("#enTenderItemId").val();
	//alert(enTenderItemId);
	var enBidderId=$("#enBidderId").val();
	window.open(pageContext+'bidderTenderFlowActionPerform/bidacknowledgement/'+enTenderItemId+"/"+enBidderId,'_blank', 'scrollbars=yes,top=100,left=150, width=1050, height=500');
});

$(document).on('click','.verifydigitalsignature',function(){
	var pageContext=$("#urlVal").val();
	var enFlag =$(this).closest("tr").find("#enFlag").val();
	var enBidderDocId =$(this).closest("tr").find("#enBidderDocId").val();
	var enTenderItemId =$(this).closest("tr").find("#enTenderItemId").val();
	var enBidderDocName =$(this).closest("tr").find("#enBidderDocName").val();
	var enBidderId =$(this).closest("tr").find("#enBidderId").val();
	window.open(pageContext+'tenderEncryption/getDigitalSignature/'+enFlag+"/"+enBidderDocId+"/"+enTenderItemId+"/"+enBidderDocName+"/"+enBidderId,'_blank', 'scrollbars=no,top=150,left=250, width=800, height=400');
});

$(document).on('click','.viewbiddoc',function(){
	var pageContext=$("#urlVal").val();
	var enBidderDocId=this.id;
	window.open(pageContext+'fileActivity/viewOpenedBidDoc/'+enBidderDocId, 'scrollbars=no,top=150,left=250, width=800, height=400');
});
$(document).on('click','.viewbiddocumentfile',function(){
	var pageContext=$("#urlVal").val();
	var enLibDocId=this.id;
	var enBidderId = $("#enBidderId").val();
	window.open(pageContext+'fileActivity/viewLibDoc/'+enLibDocId+"/"+enBidderId, 'scrollbars=no,top=150,left=250, width=800, height=400');
});
$(document).on('click','.viewbiddoc',function(){
	var pageContext=$("#urlVal").val();
	var enBidderDocId=this.id;
	window.open(pageContext+'fileActivity/viewOpenedBidDoc/'+enBidderDocId, 'scrollbars=no,top=150,left=250, width=800, height=400');
});
$(document).on('click','.historyback',function(){
	window.history.back();
});
$(document).on('click','.locationreload',function(){
	window.location.reload();
});
$(document).on('click','.zipDownloadbutton',function(){
	document.getElementById('zipDownload').submit();
});
$(document).on('click','.closeWindow',function(){
	window.close();
});

document.addEventListener("DOMContentLoaded", function() { 	
	$(".rotate").click(function(){
		 $(this).toggleClass("down")  ; 
		})
});
$(document.body).on('click', '[data-toggle=dropdown]', function(){
    var dropmenu = $(this).next('.dropdown-menu');
    var top;
    dropmenu.css({
        visibility: "hidden",
        display: "block"
    });

    // Necessary to remove class each time so we don't unwantedly use dropup's offset top
    dropmenu.parent().removeClass("dropup");

    // Determine whether bottom of menu will be below window at current scroll position
    if (dropmenu.offset().top + dropmenu.outerHeight() > $(window).innerHeight() + $(window).scrollTop()){
        dropmenu.parent().addClass("dropup");
    }

    // Return dropdown menu to fully hidden state
    dropmenu.removeAttr("style");
});

$(document).ready(function() {
	  $(".uploadlinkpopover,.Document").popover({
	        title: '<h4 class="custom-title">&nbsp;&nbsp;&nbsp;Help</h4>',
	        content: '<ul><li>&nbsp;Please insert token containing digital certificates to USB port.<br></li><li>&nbsp;Open the downloaded file to view the digital certificates.<br></li><li>&nbsp;For digital signing select the signing certificate that is mapped to your profile.</li></ul>',
	       html: true,
	       container: 'body'
	    });
			$(document).on('mouseenter', ".overflow", function() {
				var $this = $(this);
				if (this.offsetWidth < this.scrollWidth) {
					$(this).attr("title", $(this).text());
				}
			});
			$(document).on('mouseenter', ".over", function() {
				var $this = $(this);
				if (this.offsetWidth < this.scrollWidth) {
					$(this).attr("title", $(this).text());
				}
			});
			$(document).on('mouseenter', "#desc", function() {
				var $this = $(this);
				if (this.offsetWidth < this.scrollWidth) {
					$(this).attr("title", $(this).text());
				}
			});
			$("#errmsg").hide();
			$("#errmsg").css('color', 'red');
			$("#errmsg").html("Invalid character");
			$(".txt_box").keypress(function(e) {
				var asciiValue = e.keyCode || e.charCode || e.key || e.which;
				if (asciiValue >= 33 && asciiValue <= 47) {
					e.preventDefault();
					$("#errmsg").show();
				} else if (asciiValue >= 58 && asciiValue <= 64) {
					e.preventDefault();
					$("#errmsg").show();
				} else if (asciiValue >= 91 && asciiValue <= 96) {
					e.preventDefault();
					$("#errmsg").show();
				} else if (asciiValue >= 123 && asciiValue <= 126) {
					e.preventDefault();
					$("#errmsg").show();
				} else {
					$("#errmsg").hide();
				}
			});
			$(".emailfield").keypress(
					function(e) {
						if (asciiValue >= 33 && asciiValue <= 47
								&& asciiValue != 37 && asciiValue != 43
								&& asciiValue != 45 && asciiValue != 46) {
							e.preventDefault();
							$("#errmsg").show();
						} else if (asciiValue >= 58 && asciiValue <= 64
								&& asciiValue != 64) {
							e.preventDefault();
							$("#errmsg").show();
						} else if (asciiValue >= 91 && asciiValue <= 96
								&& asciiValue != 95) {
							e.preventDefault();
							$("#errmsg").show();
						} else if (asciiValue >= 123 && asciiValue <= 126) {
							e.preventDefault();
							$("#errmsg").show();
						} else {
							$("#errmsg").hide();
						}
					});
			$(".selectBox").mouseenter(function() {
				$(".dropdown-contentsummary").show();
			});
			$(".dropdown1").mouseleave(function() {
				$(".dropdown-contentsummary").hide();
			});
		});

var $selectcost = $('.select'),
$entercost = $('.costfield');
$selectcost.change(function() {
if ($selectcost.val() == 'select') {
	$entercost.attr('disabled', 'disabled').val('');
} else {
	$entercost.removeAttr('disabled');
   
}
}).trigger('change');


var $select = $('.selected'),
$fielddate = $('.date');
$select.change(function() {
if ($select.val() == 'selectdate') {
	$fielddate.attr('disabled', 'disabled').val('');
} else {
	$fielddate.removeAttr('disabled');
   
}
}).trigger('change'); 

$(document).ready(function() {
	$(".datepicker1").datepicker({
		numberOfMonths : 1,
		dateFormat : 'dd-mm-yy',
		onSelect : function(selected) {
			$(".datepicker2").datepicker("option", "minDate", selected)
		}
	});
	$(".datepicker2").datepicker({
		numberOfMonths : 1,
		dateFormat : 'dd-mm-yy',
		onSelect : function(selected) {
			$(". datepicker1").datepicker("option", "maxDate", selected)
		}
	});
	$(".datepicker3").datepicker({
		changeMonth : true,
		changeYear : true,
		stepMonths : false,
		numberOfMonths : 1,
		dateFormat : 'dd-mm-yy',
		onSelect : function(selected) {
			$(".datepicker4").datepicker("option", "minDate", selected)
			$(".ui-datepicker-prev, .ui-datepicker-next").remove();
		}
	});
	$(".datepicker4").datepicker({
		changeMonth : true,
		changeYear : true,
		stepMonths : false,
		numberOfMonths : 1,
		dateFormat : 'dd-mm-yy',
		onSelect : function(selected) {
			$(".datepicker3").datepicker("option", "maxDate", selected)
		}
	});
	var date = new Date(2018, 9 - 3, 7 - 9 - 2018);
	$(".datepicker5").datepicker({
		changeMonth : true,
		changeYear : true,
		stepMonths : false,
		numberOfMonths : 1,
		dateFormat : 'dd-mm-yy',
		minDate : '-3M',
		maxDate : '0',
		onSelect : function(selected) {
			$(".datepicker4").datepicker("option", "minDate", selected)
			$(".ui-datepicker-prev, .ui-datepicker-next").remove();
		}
	});
});
$(document).ready(function() {
	$("#s").show();
	$("#showmehideme").hide();
	$("#h").hide();
	$("#s").click(function() {
		$("#showmehideme").slideDown(1000);
		$("#h").show();
		$("#s").hide();
	})
	$("#h").click(function() {
		$("#showmehideme").slideUp(1000);
		$("#s").show();
		$("#h").hide();
	})
	$("#se").hide();
	$("#showmehideme1").show();
	$("#hi").show();
	$("#se").click(function() {
		$("#showmehideme1").slideDown(1000);
		$("#hi").show();
		$("#se").hide();
	})
	$("#hi").click(function() {
		$("#showmehideme1").slideUp(1000);
		$("#se").show();
		$("#hi").hide();
	})
});

var safeLinks = [ '.m', '.d' ];
function promptBeforeClose() {
	return 'Are you sure you want to leave?';
}
$(document).on('click', safeLinks.join(', '), function(e) {
	sessionStorage.clear();
});
/*var expanded = false;
$(document).on('click', '#showCheckboxes', function (){
	var checkboxes = document.getElementById("checkboxes");
	if (!expanded) {
		checkboxes.style.display = "block";
		expanded = true;
	} else {
		checkboxes.style.display = "none";
		expanded = false;
	}
}*/
$(document).ready(function() {
	$(document).on('click', '.hidecol', function (){
		id1 = this.id;
		var splitid = id1.split("_");
		var colno = parseInt(splitid[1]);
		var checked = true;
		if ($(this).is(":checked")) {
			checked = true;
			sessionStorage.removeItem(this.id)
		} else {
			sessionStorage.setItem(this.id, this.id);
			checked = false;
		}
		setTimeout(function() {
			if (checked) {
				$('.emp_table th:nth-child(' + colno + ')').show();
				$('.emp_table td:nth-child(' + colno + ')').show();
				$('.emp_table1 th:nth-child(' + colno + ')').show();
				$('.emp_table1 td:nth-child(' + (colno + 1) + ')').show();
				$('.empty').hide();
			} else {
				$('.emp_table th:nth-child(' + colno + ')').hide();
				$('.emp_table td:nth-child(' + colno + ')').hide();
				$('.emp_table1 th:nth-child(' + colno + ')').hide();
				$('.emp_table1 td:nth-child(' + (colno + 1) + ')').hide();
				$('.empty').hide();
			}
		}, 200);
	});
});
$(document).ready(function() {
	var col = [], keys = Object.keys(sessionStorage), i = 0, key;
	for (; key = keys[i]; i++) {
		col.push('#' + sessionStorage.getItem(key));
	}
	$.each(col, function(index, value) {
		if (value != '#null') {
			if ($(value).is(":checked")) {
				$(value).prop('checked', false);
			} else {
				$(value).prop('checked', true);
			}
		}
	});
	$.each(col, function(index, value) {
		if (value != null) {
			var splitid = value.split("_");
			var colno = parseInt(splitid[1]);
			var checked = true;
			if ($(value).is(":checked")) {
				checked = true;
			} else {
				checked = false;
			}
			if (checked) {
				$('.emp_table th:nth-child(' + colno + ')').show();
				$('.emp_table td:nth-child(' + colno + ')').show();
				$('.emp_table1 th:nth-child(' + colno + ')').show();
				$('.emp_table1 td:nth-child(' + (colno + 1) + ')').show();
			} else {
				$('.emp_table th:nth-child(' + colno + ')').hide();
				$('.emp_table td:nth-child(' + colno + ')').hide();
				$('.emp_table1 th:nth-child(' + colno + ')').hide();
				$('.emp_table1 td:nth-child(' + (colno + 1) + ')').hide();
			}
		}
	});
});
function validateChecks() {
	var chks = document.getElementsByName('tenderStatus');
	var checkCount = 0;
	for (var i = 0; i < chks.length; i++) {
		if (chks[i].checked) {
			checkCount++;
		}
	}
	if (checkCount < 1) {
		return false;
	}
	return true;
}
function validateSelectTenderCategory() {
	$("#tenderCategory").change(function(event) {
		return true;
	});
}
function validateCost() {
	var a = $("#price-from").val();
	var b = $("#costfield").val();
	if ($('#price-from').is(':disabled')) {
		return '6';
	} else {
		if ($("#costselect").val() == 'Between') {
			if (a != "" && b != "") {
				if (parseInt(a) < parseInt(b)) {
					return '10';
				} else {
					return '5';
				}
			} else if (a != "" || b != "") {
				return '7'
			} else {
				return '2'
			}
		} else {
			if (a == "") {
				return '3'
			} else {
				return '4'
			}
		}
	}
}
$(document).on('click', '.searchformsubmit', function (){
	var dateType = $("#dateType").val();
	if (dateType != 'selectdate') {
		var fromDate = $("#fromDate").val();
		var toDate = $("#toDate").val();
		if (fromDate == "" && toDate == "") {
			document.getElementById("msg").innerHTML = "Select atleast one date";
			document.getElementById("msg").style.color = "red";
			event.preventDefault();
		}
	}
	switch (validateCost()) {
	case '1':
		document.getElementById("msg").innerHTML = "From cost value must be lesser than to cost";
		document.getElementById("msg").style.color = "red";
		event.preventDefault();
		break;
	case '2':
		document.getElementById("msg").innerHTML = "Please enter atleast one field";
		document.getElementById("msg").style.color = "red";
		event.preventDefault();
		break;
	case '3':
		document.getElementById("msg").innerHTML = "Please enter value in estimated cost";
		document.getElementById("msg").style.color = "red";
		event.preventDefault();
		break;
	case '5':
		document.getElementById("msg").innerHTML = "From cost value must be lesser than to cost";
		document.getElementById("msg").style.color = "red";
		event.preventDefault();
		break;
	case '7':
		document.getElementById("msg").innerHTML = "Please enter value in both from and to estimated cost";
		document.getElementById("msg").style.color = "red";
		event.preventDefault();
		break;
	}
	
});
$(document).ready(function() {	
	$("select#secretariatId").change(function() {
	        
	        var val=$("#secretariatId").val();
	        var tempValUrl=$('#urlVal').val();
	        var url=tempValUrl+'/ManageDepartmentHierarchy/getZone?';
	        if(val!='')
	        	{
	        $.post(url,
	         	  	{
	        			secretariatId:val,
	         		},
	       
	         		function(data,status){
	                  $("#zoneId").empty(); 
	                  $("#zoneId").removeAttr('disabled');
	                  $('#zoneId').append('<option value="">Select</option>');
	                  if(data != null && data == 'false'){
	    		    		alert("Error");
	    		    	}
	                    else{
	                    	var a = JSON.parse(data);
	                    	$.each(a, function (index, value) {
	                        $('#zoneId').append('<option value="' + value.ID + '">' + value.Name + '</option>');
	                    });
	                   }
	               }); 
	        	}
	        else
	        	{
	        	  $("#zoneId,#circleId,#divisionId,#subdivisionId").empty(); 
	        	  $("#zoneId,#circleId,#divisionId,#subdivisionId").attr('disabled','disabled');
	        	  $("#zoneId,#circleId,#divisionId,#subdivisionId").append('<option value="">Select</option>');
                  
	        	
	        	}
	   		});
	   
	$("select#zoneId").change(function() {
	    
	    var val=$("#zoneId").val();
	    var tempValUrl=$('#urlVal').val();
	    var url=tempValUrl+'/ManageDepartmentHierarchy/getCircle?';
	    if(val!='')
	    	{
	    $.post(url,
	     	  {
	    		zoneId:val,
	     	}, 
	     	function(data,status){
	              $("#circleId").empty(); 
	              $("#circleId").removeAttr('disabled');
	              $('#circleId').append('<option value=""> Select </option>');
	              if(data != null && data == 'false'){
			    		alert("Error");
			    		}
	                else{
	              	  var a = JSON.parse(data);
	              	 $.each(a, function (index, value) {
	                    $('#circleId').append('<option value="' + value.ID + '">' + value.Name + '</option>');
	                });
	               }
	           }); 
	    
	    	}
	    
	    else
	    	{
        	  $("#circleId,#divisionId,#subdivisionId").empty(); 
        	  $("#circleId,#divisionId,#subdivisionId").attr('disabled','disabled');
        	  $("#circleId,#divisionId,#subdivisionId").append('<option value="">Select</option>');
	    	
	    	}
		});

	$("select#circleId").change(function() {
	    
	    var val=$("#circleId").val();
	    var tempValUrl=$('#urlVal').val();
	    var url=tempValUrl+'/ManageDepartmentHierarchy/getDivision?';
	    if(val!='')
	    	{
	    $.post(url,
	     	  	{
	    			circleId:val,
	     		},
	   
	    		function(data,status){
	              $("#divisionId").empty(); 
	              $("#divisionId").removeAttr('disabled');
	              $('#divisionId').append('<option value=""> Select </option>');
	              if(data != null && data == 'false'){
			    		alert("Error");
			    		}
	                else{
	              	  var a = JSON.parse(data);
	              	 	 $.each(a, function (index, value) {
	                   	 $('#divisionId').append('<option value="' + value.ID + '">' + value.Name + '</option>');
	                	});
	                  }
	            }); 
	    
	    	}
	    else
	    	{
	    	
        	  $("#divisionId,#subdivisionId").empty(); 
        	  $("#divisionId,#subdivisionId").attr('disabled','disabled');
        	  $("#divisionId,#subdivisionId").append('<option value="">Select</option>');
	    	}
			});
	
	
	
	$("select#divisionId").change(function() {
	    
	    var val=$("#divisionId").val();
	    var tempValUrl=$('#urlVal').val();
	    var url=tempValUrl+'/ManageDepartmentHierarchy/getSubDivision?';
	    if(val!='')
	   {
	    $.post(url,
	     	  	{
	    				divisionId:val,
	     		},
	   
	    		function(data,status){
	              $("#subdivisionId").empty(); 
	              $("#subdivisionId").removeAttr('disabled');
	              $("#subdivisionId").append('<option value=""> Select </option>');
	              if(data != null && data == 'false'){
			    		alert("Error");
			    		}
	                else{
	              	  var a = JSON.parse(data);
	              	 	 $.each(a, function (index, value) {
	              	 		$("#subdivisionId").append('<option value="' + value.ID + '">' + value.Name + '</option>');
	                	});
	                  }
	            }); 
		
	
	}
	else
		{
		
    	  $("#subdivisionId").empty(); 
    	  $("#subdivisionId").attr('disabled','disabled');
    	  $("#subdivisionId").append('<option value="">Select</option>');
		}
					
	});			

});
