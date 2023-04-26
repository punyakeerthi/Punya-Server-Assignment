<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 
 <%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ include file="taglibrary.jsp"%>
 
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
     <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/style.css">
    <style type="text/css">
    
</style>

<
</head>
<body >
    <main>
        <div class="row">
           
            <div class="colm-form">
             <div class="colm-logo"> 
             </div>
                <div class="form-container">
         
        
        
                <form role="form" id="form" action ="#"    >
                         ID : 
         <input  type = "number"  name = "id" value = "" required="required"   />  <br />
                 Name: 
         <input  type = "text"  name = "name" value = "" required="required"  />   <br />
                 Language : 
         <input  type = "text" name = "language" value = "" required="required"  />   <br />
         
              Framework
         <input  type = "text"  name = "framework" value = "" required="required"  /> <br />
        <br /> <br />
       
       
          <input id="uploadBtn" class="btn-login" type = "submit" value = "Save" /> <br /> <br /> 
        
                   
                   </form>
 
                </div>
 
            </div>
        </div>
    </main>
    <footer>
        <div class="footer-contents">
             
        </div>
    </footer>
    
    <script type="text/javascript" >

/* $('#uploadBtn').click(function() {
	 alert("Submitted"); 
	 $("#form1").submit();

	}) */
	 
	 
	 $("#form").on("submit", function(){
		  
		  var xhr = new XMLHttpRequest();
	        var formData = new FormData(form);
	        
	        xhr.open('PUT','http://localhost:9002/putServerDetails')
	        xhr.setRequestHeader("Content-Type", "application/json");
	       // ${pageContext.request.contextPath}/putServerDetails
	        
	        xhr.send(JSON.stringify(Object.fromEntries(formData)));
	       
	        xhr.onreadystatechange = function() {
	            if (xhr.readyState == XMLHttpRequest.DONE) {
	            	alert("data saved successfully")
	                form.reset(); 
	            	location.href='http://localhost:9002/showServerDetails'
	            	//reset form after AJAX success or do something else
	                	
	            }
	        }
	        //Fail the onsubmit to avoid page refresh.
	        return false;
	      
		 }) 
		 
		 
  
 
 
</script> 
</body>
</html>