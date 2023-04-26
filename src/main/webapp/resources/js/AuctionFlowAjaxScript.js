var globalActionUrl, globalActionValue, globalRoleActivityValue, globalAuctionId, globalAuctionNumber, globalActionValueWithLevel, globalAuctionItemName, globalAuctionItemName, globalBidderId, globalApprovalType;
$(document).on('click', 'i', function (){
 	var id= this.id;
 	var isauctionbuyersummaryIcon=$(this).hasClass("auctionbuyersummary");
 	if(isauctionbuyersummaryIcon)
 	{
	var tempValUrl = $(".urlVal").val();
	var url = tempValUrl + '/auctionFlow/auctionFlowAction/'+id
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
			alert("error:Please try to reload page(CTRL+SHIFT+R) if issue exists please contact help desk")
			}
		});
	}
});
  function auctionBidderSideActionShow(auctionItemId) {
 globalAuctionId = auctionItemId;
 $("#confirmModalPara").html(
 "Are you sure you want to mark this auction as interested  ?");
 $("#successModalPara").html(
 "Marked this auction as interested successfully");
 $("#failModalPara").html("failed ! to mark this auction as interested ");
 $("#confirmModal").modal("show");
 }
 function auctionBidderSideAction() {
 var tempValUrl = $(".urlVal").val();
 var hrefValue = tempValUrl
 + "/auctionBidderApprovalFlow/auctionBidderFlowInterestedAuctionActionPerform";
 var url = hrefValue + '?auctionItemId=' + globalAuctionId;
 $.ajax({
 url : url,
 method : 'GET',
 contentType : "application/json",
 dataType : "json",
 success : function(data) {
 var booleanValue = data.booleanValue;
 $("#confirmModal").modal("hide");
 if (booleanValue == true) {
 $("#successModal").modal("show");
 } else {
 $("#failModal").modal("show");
 }
 }
 });
 }

	$(document).on('click', '.auctionauthorize,.auctionreject,.auctionreinstate', function ()
			{ 
				globalBidderId = this.id;
				//console.log("globalBidderId: "+globalBidderId);
				globalAuctionId = $("#authorizeauctionitemid").val();
				//console.log("globalAuctionId: "+globalAuctionId);
				globalApprovalType =$("#approvalType").val();
				//console.log("globalApprovalType: "+globalApprovalType);
				var bidderName=$("#bidderName"+this.id).val();
				//console.log("bidderName: "+bidderName);
				var isAuthorizeClass=$(this).hasClass("auctionauthorize");
				var isRejectClass=$(this).hasClass("auctionreject");
				
				var isReinstateClass=$(this).hasClass("auctionreinstate");
				
				var qualifyDisqualifyChar=null;
				qualifyDisqualifyChar=(isAuthorizeClass)?$("#auctionauthorize"+this.id).val():(isRejectClass)?$("#auctionreject"+this.id).val():(isReinstateClass)?$("#auctionreinstate"+this.id).val():(isCompleteClass)?$("#complete").val():null;
				//console.log("qualifyDisqualifyChar",+qualifyDisqualifyChar);
	
	switch (qualifyDisqualifyChar) {
	case 'Q':
		globalActionUrl = $(".qualifyUrl").val();
		$("#confirmModalPara").html(
				"Are you sure you want to qualify Bidder " + bidderName + "?");
		$("#successModalPara").html(bidderName + " qualified successfully");
		$("#failModalPara").html(bidderName + " failed to qualify ");
		$("#confirmModal").modal("show");
		break;
	case 'D':
		globalActionUrl = $(".disqualifyUrl").val();
		$("#confirmModalPara").html(
				"Are you sure you want to disqualify Bidder " + bidderName
						+ "?");
		$("#successModalPara").html(bidderName + " disqualified successfully");
		$("#failModalPara").html(bidderName + " failed to disqualify ");
		$("#confirmModal").modal("show");
		break;
	case 'R':
		globalActionUrl = $(".reinstateUrl").val();
		$("#confirmModalPara")
				.html(
						"Are you sure you want to reinstate Bidder "
								+ bidderName + "?");
		$("#successModalPara").html(bidderName + " reinstated successfully");
		$("#failModalPara").html(bidderName + " failed to reinstate ");
		$("#confirmModal").modal("show");
		break;
	case 'FFC':
		globalActionUrl = $(".completeUrl").val();
		$("#confirmModalPara").html(
				"Are you sure you want to Complete Form Fee Approval for Bidder "
						+ bidderName + "?");
		$("#successModalPara").html(
				bidderName + " Form Fee Approval Completed successfully");
		$("#failModalPara").html(bidderName + "  Form Fee Approval Failed ! ");
		$("#confirmModal").modal("show");
		break;
	case 'EMDC':
		globalActionUrl = $(".completeUrl").val();
		$("#confirmModalPara").html(
				"Are you sure you want to Complete EMD Approval for Bidder "
						+ bidderName + "?");
		$("#successModalPara").html(
				bidderName + " EMD Approval Completed successfully");
		$("#failModalPara").html(bidderName + "  EMD Approval Failed ! ");
		$("#confirmModal").modal("show");
		break;
	}
});
$(document).on('click', '#auctionQualifyDisqualifyAjax', function (){
	 
	var tempValUrl = $(".urlVal").val();
	//alert(tempValUrl);
	var hrefValue = tempValUrl + globalActionUrl;
	//alert(hrefValue);
	var url = hrefValue + '/' + globalAuctionId
	+ '/' + globalBidderId + '/'+ globalApprovalType;
	//alert(url);
	 	$.ajax({
				url : url,
				method : 'POST',
				contentType : "application/json",
				dataType : "json",
				cache : false,
				async : false,
				success : function(data) {
					console.log(data);
					var booleanValue = data.booleanValue;
					//alert(booleanValue);
					$("#confirmModal").modal("hide");
					if (booleanValue == true) {
						//alert(success);
						$("#successModal").modal("show");
 					} else {
						$("#failModal").modal("show");
					}
				}
			});
});
 