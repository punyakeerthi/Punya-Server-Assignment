<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 
 <%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

 
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
         
        
        
        
           <input id="uploadBtn" class="btn-login" type = "button"  onclick="location.href='${pageContext.request.contextPath}/loadServerDetailsPage';" value = "Create" >    <br /> <br /> 
            <input id="uploadBtn" class="btn-login" type = "button" onclick="location.href='${pageContext.request.contextPath}/showServerDetails';" value = "Show" /> <br /> <br /> 
               
         
         
                </div>
 
            </div>
        </div>
    </main>
    <footer>
        <div class="footer-contents">
            
        </div>
    </footer>
    
    <script type="text/javascript" >

/* $('#downloadLink').click(function() {
	 alert("Submitted"); 
	 $("#form").submit();

	})
	 */
	 
	 $("#form").on("submit", function(){
		 alert("aaa")
		 $("#uploadBtn").prop('disabled', true);
		 $("#fileBox").prop('disabled', true);
 		   
		 }) 
		 
 
 
</script> 
</body>
</html>