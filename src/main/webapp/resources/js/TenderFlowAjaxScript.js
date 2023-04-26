var globalActionUrl, globalactionValue, globalRoleActivityValue, globalTenderId, globalTenderNumber, globalActionValueWithLevel, globalItemId, globalTenderItemId, globalBidderId, globalAuthorizationType;
$(document).on('click', 'i', function (){
 	var id= this.id;
 	var isBuyerSummaryIcon=$(this).hasClass("buyersummary");
 	if(isBuyerSummaryIcon)
 	{
 		var tempValUrl = $(".urlVal").val();
 		var url = tempValUrl + '/tenderFlow/tenderFlowAction'+'/'+ id;
 		$.ajax({
 			url : url,
 			method : 'POST',
 			contentType : "application/json",
 			dataType : "json",
 			cache : false,
 			async : false,
 			success : function(data) {
 				$('#ulId' + id).empty();
 				$.each(data, function(index, value) {
 					var activityNameWithUrl = value.activityNameWithUrl;
 					$('#ulId' + id).append(activityNameWithUrl);
 				});
 			},
 			error : function(response) {
 				alert("error");
 			}
 		});
 	}
});
$(document).on('click', '.authorize,.reject,.reinstate,.completeauthorization', function ()
		{ 
			globalBidderId = this.id;
			//console.log("globalBidderId: "+globalBidderId);
			globalTenderItemId = $("#authorizetenderitemid").val();
			//alert("globalTenderItemId: "+globalTenderItemId);
			var bidderName=$("#bidderName"+this.id).val();
			
			var isAuthorizeClass=$(this).hasClass("authorize");
			var isRejectClass=$(this).hasClass("reject");
			
			var isReinstateClass=$(this).hasClass("reinstate");
			var isCompleteClass=$(this).hasClass("completeauthorization");
			var qualifyDisqualifyChar=null;
			qualifyDisqualifyChar=(isAuthorizeClass)?$("#authorize"+this.id).val():(isRejectClass)?$("#reject"+this.id).val():(isReinstateClass)?$("#reinstate"+this.id).val():(isCompleteClass)?$("#complete").val():null;

	switch (qualifyDisqualifyChar) {
	case 'Q':
		globalActionUrl = $(".qualifyUrl").val();
		$("#confirmModalPara").html(
				"Are you sure you want to qualify " + bidderName + "?");
		$("#successModalPara").html(bidderName + " qualified successfully");
		$("#failModalPara").html(bidderName + " failed to qualify ");
		$("#confirmModal").modal("show");
		break;
	case 'FQ':
		globalActionUrl = $(".qualifyUrl").val();
		$("#confirmModalPara").html(
				"Are you sure you want to authorize form fee of " + bidderName
						+ "?");
		$("#successModalPara").html(
				bidderName + "'s form fee authorized successfully");
		$("#failModalPara").html(
				bidderName + "'s form fee  authorization failed");
		$("#confirmModal").modal("show");
		break;
	case 'EQ':
		globalActionUrl = $(".qualifyUrl").val();
		$("#confirmModalPara")
				.html(
						"Are you sure you want to authorize EMD of "
								+ bidderName + "?");
		$("#successModalPara").html(
				bidderName + "'s EMD authorized successfully");
		$("#failModalPara").html(bidderName + "'s EMD authorization failed ");
		$("#confirmModal").modal("show");
		break;
	case 'D':
		globalActionUrl = $(".disqualifyUrl").val();
		$("#tenderrejectreasonmodalpara").html(
				"Are you sure you want to disqualify " + bidderName + "?");
		$("#successModalPara").html(bidderName + " disqualified successfully");
		$("#failModalPara").html(bidderName + " failed to disqualify ");
		$("#tenderReinsateOrDisqualifyreason").val("");
		$("#tenderrejectreasonokbutton").prop("disabled",true);
		$("#tenderrejectreasonmodal").modal("show");
		break;
	case 'FD':
		globalActionUrl = $(".disqualifyUrl").val();
		$("#tenderrejectreasonmodalpara").html(
				"Are you sure you want to reject form fee for " + bidderName
						+ "?");
		$("#successModalPara").html(
				bidderName + "'s form fee rejected successfully");
		$("#failModalPara").html(bidderName + "'s form fee  rejection failed");
		$("#tenderReinsateOrDisqualifyreason").val("");
		$("#tenderrejectreasonokbutton").prop("disabled",true);
		$("#tenderrejectreasonmodal").modal("show");
		break;
	case 'ED':
		globalActionUrl = $(".disqualifyUrl").val();
		$("#tenderrejectreasonmodalpara").html(
				"Are you sure you want to reject EMD for " + bidderName + "?");
		$("#successModalPara").html(
				bidderName + "'s EMD rejected successfully ");
		$("#failModalPara").html(bidderName + "'s EMD rejection failed ");
		$("#tenderReinsateOrDisqualifyreason").val("");
		$("#tenderrejectreasonokbutton").prop("disabled",true);
		$("#tenderrejectreasonmodal").modal("show");
		break;
	case 'R':
		globalActionUrl = $(".reinstateUrl").val();
		globalAuthorizationType = $(".authorizationType").val()
		$("#tenderrejectreasonmodalpara").html(
				"Are you sure you want to reinstate "
						+ globalAuthorizationType.toLowerCase()
						+ " status for " + bidderName + "?");
		$("#successModalPara").html(
				bidderName + "'s " + globalAuthorizationType.toLowerCase()
						+ " status reinstated successfully");
		$("#failModalPara").html(
				bidderName + "'s " + globalAuthorizationType.toLowerCase()
						+ " status reinstate failed ");
		$("#tenderReinsateOrDisqualifyreason").val("");
		$("#tenderrejectreasonokbutton").prop("disabled",true);
		$("#tenderrejectreasonmodal").modal("show");
		break;
	case 'C':
		globalActionUrl = $(".completeUrl").val();
		globalAuthorizationType = $(".authorizationType").val()
		$("#confirmModalPara").html(
				"Are you sure you want to complete "
						+ globalAuthorizationType.toLowerCase()
						+ " qualification ?");
		$("#successModalPara").html(
				globalAuthorizationType
						+ " qualification completed successfully");
		$("#failModalPara").html(
				globalAuthorizationType + " qualification failed to complete ");
		$("#confirmModal").modal("show");
		break;
	case 'FC':
		globalActionUrl = $(".completeUrl").val();
		globalAuthorizationType = $(".authorizationType").val()
		$("#confirmModalPara").html(
				"Are you sure you want to complete "
						+ globalAuthorizationType.toLowerCase()
						+ " authorization ?");
		$("#successModalPara").html(
				globalAuthorizationType
						+ " authorization completed successfully");
		$("#failModalPara").html(
				globalAuthorizationType + " authorization failed to complete ");
		$("#confirmModal").modal("show");
		break;
	case 'EC':
		globalActionUrl = $(".completeUrl").val();
		globalAuthorizationType = $(".authorizationType").val()
		$("#confirmModalPara").html(
				"Are you sure you want to complete "
						+ globalAuthorizationType.toLowerCase()
						+ " authorization ?");
		$("#successModalPara").html(
				globalAuthorizationType
						+ " authorization completed successfully");
		$("#failModalPara").html(
				globalAuthorizationType + " authorization failed to complete ");
		$("#confirmModal").modal("show");
		break;
	}
});
$(document).on('click', '#qualifyDisqualifyAjax,#tenderrejectreasonokbutton', function (){
	
	var disqualifyOrReinsateReason=$('#tenderReinsateOrDisqualifyreason').val();
	var tempValUrl = $(".urlVal").val();
	globalTenderItemId = $("#authorizetenderitemid").val();
	//console.log("globalTenderItemId: "+globalTenderItemId);
	var hrefValue = tempValUrl + globalActionUrl;
	var url;
	if (globalBidderId != '') {	
		//alert("if");
		url = hrefValue + '/' + globalTenderItemId + '/'
				+ globalBidderId;
	} else {
		//alert("else");
		url = hrefValue + '/' + globalTenderItemId;
	} 
	console.log(url);
	$.ajax({
		url : url,
		method : 'POST', 
		data: {'reason':disqualifyOrReinsateReason},
		dataType : "json",
		async : false,
		success : function(data) {
			var booleanValue = data.booleanValue;
			var errorMsg = data.errorMsg;
			
			$("#confirmModal").modal("hide");
			$("#completeModal").modal("hide");
			$("#tenderrejectreasonmodal").modal("hide");
			if (booleanValue == true) {
				$("#successModal").modal("show");
			
			} else {
				
				if(errorMsg!='')
				{
					$("#failModalPara").html(errorMsg);
				}
				
				$("#failModal").modal("show");
			}
		}
	});
});



$(document).ready(function () {
    var table = $('#completeviewtable').DataTable({
    	'searching':false,
    	 'autoWidth': false,
    	'paging':false,
		 'ordering': false,
		'info':false,
		
		 "columnDefs": [
		       
		        { "width": "32%", "targets": 0 },
		        { "width": "32%", "targets": 1 },
		        { "width": "32%", "targets": 2 }
		      ],
    });
    $("#completeModal").on("hidden.bs.modal", function(){
    	$(this).removeData('bs.modal').find("#QualifiedBidderList,#DisqualifiedBidderList,#NotSubmittedBidderList").empty();
    });
    
});
$(document).on('click', '#successmodalok', function(){
	window.location.reload();
});

 
