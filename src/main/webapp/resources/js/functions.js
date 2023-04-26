$(document).ready(function() {
	$('.userType').change(function() {
		if ($('#C').is(':checked')) {
			$('#departmentName').attr("placeholder", "Enter company name");
			$('#labelName').text("Company Name");
			$(".newValue").attr("data-title", 'Company Details')
		} else if ($('#I').is(':checked')) {
			$('#departmentName').attr("placeholder", "Enter individual name");
			$('#labelName').text("Individual Name");
			$(".newValue").attr("data-title", 'Individual Details')
		}
	});
});



$(document).ready(function() {
	$("#txtConfirmPassword").keyup(validate);
});
function validate() {
	var password1 = $("#password").val();
	var password2 = $("#txtConfirmPassword").val();
	if (password1 == password2) {
		$("#CheckPasswordMatch").text("");
		$('#Save').attr('disabled', false);
	} else {
		$("#CheckPasswordMatch").text("Passwords do not match!");
		$('#Save').attr('disabled', true);
	}
}