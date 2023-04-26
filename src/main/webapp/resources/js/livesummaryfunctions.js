$(document).ready(function() {
	//Initially Hierarchy label and select box are hidden
	$("#LevelOneHierarchylabel,#LevelTwoHierarchylabel,#LevelThreeHierarchylabel,#LevelFourHierarchylabel,#LevelFiveHierarchylabel").hide();
	$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").hide();
	
	$('#departmentIdSelect').on('change', function (e) {
	    var optionSelected = $("option:selected", this);
	    var departmentId = this.value;
		var baseUrl=$('#urlVal').val();
		var url=baseUrl+"/liveTenderSummary/getHierachyByDepartmentId"
	  	if(departmentId!='')
			{
				$.ajax({
		       url : url,
		       method : 'POST',
		       	data:{'departmentId':departmentId},
			 	cache : false,
				async : false,
				timeout: 30000,
				success: function(data) {
					$("#LevelOneHierarchylabel,#LevelTwoHierarchylabel,#LevelThreeHierarchylabel,#LevelFourHierarchylabel,#LevelFiveHierarchylabel").hide();
					$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").hide();
					 $("#secretariatId").attr('disabled','disabled');
		    	   var levelSize=Object.keys(data['departmentHierarchyMap']).length;
		    	    switch(levelSize)
		    	   {
		    	   

		    	   case 1:
		    		   		$("#LevelOneHierarchylabel,#secretariatId").show()
		    		   		$("#secretariatId").removeAttr('disabled');
 
							break;
		    	   case 2: 
		    		   		$("#secretariatId").removeAttr('disabled');
		    		   		$("#LevelOneHierarchylabel,#LevelTwoHierarchylabel").show();
							$("#secretariatId,#zoneId").show();
 
							break;
		    	   case 3: 
		    		   		$("#secretariatId").removeAttr('disabled');
		    		   		$("#LevelOneHierarchylabel,#LevelTwoHierarchylabel,#LevelThreeHierarchylabel").show();
							$("#secretariatId,#zoneId,#circleId").show();
							break;
		    	   case 4: 
		    		   		$("#secretariatId").removeAttr('disabled');
		    		   		$("#LevelOneHierarchylabel,#LevelTwoHierarchylabel,#LevelThreeHierarchylabel,#LevelFourHierarchylabel").show();
							$("#secretariatId,#zoneId,#circleId,#divisionId").show();
							break;
		    	   
		    	   case 5:  $("#secretariatId").removeAttr('disabled'); 
		    		   		$("#LevelOneHierarchylabel,#LevelTwoHierarchylabel,#LevelThreeHierarchylabel,#LevelFourHierarchylabel,#LevelFiveHierarchylabel").show();
							$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").show();
		    	   			break;
		    	   	
		    	   			
		    	   			
		    	   }
		    	     

		      	  	$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").empty(); 
		      	  	$("#zoneId,#circleId,#divisionId,#subdivisionId").attr('disabled','disabled');
		      	  	$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").append('<option value="">Select</option>');
		            var levelOneHierarchyMap = data['levelOneHierarchyMap'];
		            $.each(levelOneHierarchyMap, function (levelOneHierarchyId, levelOneHierarchyName) {
		                 	 $('#secretariatId').append('<option value="' + levelOneHierarchyId + '">' + levelOneHierarchyName + '</option>');
		             });
		                
		    	    
		       },
		       	error : function(response) {
					alert("error:Please try to reload page(CTRL+SHIFT+R) if issue exists please contact help desk")
					$("#LevelOneHierarchylabel,#LevelTwoHierarchylabel,#LevelThreeHierarchylabel,#LevelFourHierarchylabel,#LevelFiveHierarchylabel").hide();
					$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").hide();
		      	  	$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").empty(); 
		      	  	$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").attr('disabled','disabled');
		      	  	$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").append('<option value="">Select</option>');
				}
		   });
		 
		}
		else
			
		{ 
			$("#LevelOneHierarchylabel,#LevelTwoHierarchylabel,#LevelThreeHierarchylabel,#LevelFourHierarchylabel,#LevelFiveHierarchylabel").hide();
			$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").hide();
      	  	$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").empty(); 
      	  	$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").attr('disabled','disabled');
      	  	$("#secretariatId,#zoneId,#circleId,#divisionId,#subdivisionId").append('<option value="">Select</option>');
			
		}
	 	
	 	


	});
	
	//Live Homepage summary Filter table code
	//isChanged is used to check any changes made after page load in filter
	var isChanged=sessionStorage.getItem("isChanged");
	if(isChanged==null)
	{
		sessionStorage.setItem("isChanged",false);
	}
	 
	//on the basis of .livehidecol class name first we get ids of checkboxes 
	//in filter table and put checked checkboxes id to sessionStorage
	$(".livehidecol").each(function() {
	 	id1 = this.id;
		var splitid = id1.split("_");
		var colno = parseInt(splitid[1]);
		$('.homepagesummarytable th:nth-child(' +  colno + ')').hide();
		$('.homepagesummarytable td:nth-child(' + (colno + 1) + ')').hide();
		if(!isChanged){
		hideCol(this.id);
		}

	});
	
	function hideCol(id)
	{ 
		var b=$('#'+id).is(":checked");
	 
		
				if ($('#'+id).is(":checked")) {
					sessionStorage.setItem(id,id);
		}  
	
	
	}
		
	//when checkbox in filter table is clicked we get the id of that check box and split it as number
	//which is used as column number to hide or show.On the basis of id if checkbox is checked we put id to sessionStorage and show the column
	//else remove that id from session storage  and hide the column
	$(".livehidecol").click(function() {
		sessionStorage.setItem("isChanged",true);
		id1 = this.id;
		var splitid = id1.split("_");
		var colno = parseInt(splitid[1]);
		var checked = true;
		if ($(this).is(":checked")) {
			checked = true;

			sessionStorage.setItem(this.id, this.id);
		} else {
			sessionStorage.removeItem(this.id)
			checked = false;
		}
		setTimeout(function() {
			if (checked) {	
				$('.homepagesummarytable th:nth-child(' + colno + ')').show();
				$('.homepagesummarytable td:nth-child(' + (colno+1) + ')').show();
			} else { 
			
				$('.homepagesummarytable th:nth-child(' + colno + ')').hide();
				$('.homepagesummarytable td:nth-child(' + (colno+1) + ')').hide();
			}
		}, 200);
	});
	
	//when page loads we check keys from sessionStoarage and convert them as ids and show that columns
	var col = [], keys = Object.keys(sessionStorage), i = 0, key;
	keys.sort();
	for (; key = keys[i]; i++) {
		if(key!='isChanged')
			{
				col.push('#' + sessionStorage.getItem(key));
			}
	}
	col.sort();
	$.each(col, function(index, value) {
		var attr=$(value).attr('checked');
		if (value != '#null') { 
		 		$(value).prop('checked', true);
		 		 
			}
		
	});
	$.each(col, function(index, value) {
		if (value != null) {
	 		var splitid = value.split("_");
			var colno = parseInt(splitid[1]);
			var checked = true;
			
			var val=($(value).is(":checked"));
		 	if ($(value).is(":checked")) {
				checked = true;
			} else {
				checked = false;
			}
			
			if (checked) {	
				$('.homepagesummarytable th:nth-child(' + colno + ')').show();
				$('.homepagesummarytable td:nth-child(' + (colno+1) + ')').show();
			} else { 
			 
				$('.homepagesummarytable th:nth-child(' + colno + ')').hide();
				$('.homepagesummarytable td:nth-child(' + (colno+1) + ')').hide();
			}
		}
	});
});