<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
 
<%@ include file="taglibrary.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head> 
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/style.css">
   
<style type="text/css">
.buttonwrapper {
	display: flex;
	justify-content: center;
	position: absolute;
	left: 45%;
	top: 90%;
}

.mytdclassred {
	color: white;
	background-color: red;
}

.mytdclassgreen {
	color: white;
	background-color: green;
}

.overflow {
	max-width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
 
</head>
<body>
	<main>



		<div class="container">
			<div class="rowtable">

				<table class="table table-bordered  table-sm  table-hover layout"
					id="datatable">
					<thead class="table-primary">
						<tr>
							<th>ACTION</th>
							<th >ID</th>
							<th >NAME</th>
							<th >LANGUAGE</th>
							<th >FRAMEWORK</th>
							 
	 					</tr>
					</thead>
					<c:forEach var="serverDetailObject" items="${lServerDetail}">
						<tr>
							<td  > <input id="${serverDetailObject.id}" class="delete" name="delete"  type = "Button" value = "Delete" /></td>
							<td >${serverDetailObject.id}</td>
							<td >${serverDetailObject.name}</td>
							<td >${serverDetailObject.language}</td>
							<td >${serverDetailObject.framework}</td>
						 						 
						</tr>
					</c:forEach>
				</table>






			</div>
			 
					<
					 
			 
		</div>

	</main>
	<footer>
		<div class="footer-contents">
			 
		</div>
	</footer>
	<script>
    $(document).ready(function () {  
     $('#datatable').dataTable( {
     	 "searching": false,
     	"ordering": false
    	  
    	} );
     
     $('.delete').click(function(event){
    	 var id=this.id;
    	 
         if(!confirm('Are you sure you want delete ')){
             event.preventDefault();
         }
         else
        	 {
        	 
               
               
            var xhr = new XMLHttpRequest(); 
              
   	        
   	        xhr.open('DELETE','http://localhost:9002/deleteServerDetails/'+id)
   	        xhr.setRequestHeader("Content-Type", "application/json");
   	         
   	     xhr.send();
   	       
   	       
   	        xhr.onreadystatechange = function() {
   	            if (xhr.readyState == XMLHttpRequest.DONE) {
                    alert("The server with id : "+ id +" is deleted successfully");
                    location.reload();
   	            }
   	        }
   	        //Fail the onsubmit to avoid page refresh.
   	        return false;
        
        	 }
    })
});
    </script>

</body>
</html>