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
$(document).on(
		'click',
		'.viewtenderitem',
		function() {
			var encTenderItemId = $(this).closest("tr").find("#encTenderItemId").val();
			var encIsLiveTenderSummary = $(this).closest("tr").find("#encIsLiveTenderSummary").val();
			var pageContext = $("#urlVal").val();
			window.open(pageContext + 'tenderCreation/viewTenderItemDetails/'
					+ encTenderItemId + "/" + encIsLiveTenderSummary, '_blank',
					'scrollbars=yes,top=150,left=200, width=1000, height=400');

		});
$(document).on(
		'click',
		'.viewtenderdocument',
		function() {
			var encTenderItemId = $(this).closest("tr").find("#encTenderItemId").val();
			var encIsLiveTenderSummary = $(this).closest("tr").find("#encIsLiveTenderSummary").val();
			var pageContext = $("#urlVal").val();
			window.open(pageContext + 'tenderCreation/viewTenderDocuments/'
					+ encTenderItemId + "/" + encIsLiveTenderSummary, '_blank',
					'scrollbars=yes,top=150,left=200, width=1000, height=400');

		});
$(document).on(
		'click',
		'.viewawarddetails',
		function() {
			var encTenderItemId = $(this).closest("tr").find("#encTenderItemId").val();
			var pageContext = $("#urlVal").val();
			window.open(
					pageContext + 'award/getAllAwardDetails/' + encTenderItemId,
					'_blank',
					'scrollbars=yes,top=150,left=200, width=1000, height=400');
		});
$(document).on(
		'click',
		'.viewauctionitems',
		function() {
			var encAuctionItemId = $(this).closest("tr").find("#encAuctionItemId").val();
			var pageContext = $("#urlVal").val();
			window.open(pageContext + 'auctionFreeView/freeViewAuctionItemDetails/'
					+ encAuctionItemId, '_blank',
					'scrollbars=yes,top=150,left=200, width=1000, height=400');
		});
$(document).on(
		'click',
		'.viewauctiondocuments',
		function() { 
			var encAuctionItemId = $(this).closest("tr").find("#encAuctionItemId").val();
			var pageContext = $("#urlVal").val();
			window.open(pageContext + 'auctionFreeView/freeviewdocs/'
					+ encAuctionItemId, '_blank',
					'scrollbars=yes,top=150,left=200, width=1000, height=300');
		});

$(document).on(
		'click',
		'.viewauctionawarddetails',
		function() {
			var encParam = $(this).closest("tr").find("#paramVal").val();
			var pageContext = $("#urlVal").val();
			window.open(pageContext + 'auctionAwardFlow/viewAuctionAwardedBidders/'
					+ encParam, '_blank',
					'scrollbars=yes,top=150,left=200, width=1000, height=300');
		});

$(document)
		.on(
				'click',
				'.fa-hand-o-up',
				function() {
					var id = this.id;
					var pageContext = $("#urlVal").val();
					var withdrawnresicon = $(this).hasClass("withdrawnres");
					if (withdrawnresicon) {
						window
								.open(pageContext
										+ 'bidderSummary/showWithdrawReason/'
										+ id, "_blank",
										"scrollbars=no,top=200,left=500, width=360, height=250");
					}
				});
$(document)
		.on(
				'keyup',
				'.txtarea',
				function() {
					var textareaChars = document
							.getElementById("textareaChars").value;
					var regexPattern = /^[ A-Za-z0-9-.,/#]*$/
							.test(textareaChars);
					if (regexPattern == false) {

						$("#msg")
								.text(
										"Please match the requested format(Alphabets,numbers and special charcters(#-/.,))");
					} else {
						$("#msg").text("");
					}
				});
function checkForm() {
	var textareaChars = document.getElementById("textareaChars").value;
	var regexPattern = /^[ A-Za-z0-9-.,/#]*$/.test(textareaChars);
	if (regexPattern == false) {

		$("#msg")
				.text(
						"Please match the requested format(Alphabets,numbers and special charcters(#-/.,))");
		$("#save").attr("disabled", true);
	} else {
		$("#save").attr("disabled", false);
		$("#msg").text("");
	}

}
$('#textareaChars').bind('keypress', function(e) {
	if ($('#textareaChars').val().length == 0) {
		var k = e.which;
		var ok = k >= 65 && k <= 90 || // A-Z
		k >= 97 && k <= 122 || // a-z
		k >= 48 && k <= 57; // 0-9
		if (!ok) {
			e.preventDefault();
		}
	}
});

$(".details-control").click(function(e) {
	e.preventDefault();
	evID = $(this).closest('tr').attr("id");
	clasName = $(this).closest('tr').attr("class");
	name = clasName.toString();
	if (name.search('shown') != -1) {

		$("#" + evID).removeClass('shown')
	} else {
		$("#" + evID).addClass('shown')

	}

	$('.desname' + $(this).attr('data-id')).toggle();

});

$(document).ready(
		function() {

			var elements = [];

			$("tr[id^='des_']").each(function() {
				elements.push(this.id);
				$(this).show();

			});
			$('td.maxcols, th.maxcols').each(function(i, o) {
				$t = $($(o).parents('table')[0]);
				$(o).attr('colspan', getMaxColCount($t));
			});
			function getMaxColCount($table) {
				var maxCol = 0;

				$table.find('tr').each(
						function(i, o) {
							var colCount = 0;
							$(o).find('td:not(.maxcols),th:not(.maxcols)')
									.each(function(i, oo) {
										var cc = Number($(oo).attr('colspan'));
										if (cc) {
											colCount += cc;
										} else {
											colCount += 1;
										}
									});
							if (colCount > maxCol) {
								maxCol = colCount
							}
							;
						});

				return maxCol;

			}
		});
var table = $('#viewtable').DataTable({
	'searching' : false,
	'autoWidth' : false,
	'paging' : false,
	'ordering' : false,
	'info' : false,

});
$(document).on('change', '#costselect', function() {
	document.getElementById("costfield").setAttribute("disabled", "disabled");
	if (this.value == 'Between')
		document.getElementById("costfield").removeAttribute("disabled");
});
var $selectcost = $('.select'), $entercost = $('.costfield');
$selectcost.change(function() {
	if ($selectcost.val() == 'select') {
		$entercost.attr('disabled', 'disabled').val('');
	} else {
		$entercost.removeAttr('disabled');

	}
}).trigger('change');

var $select = $('.selected'), $fielddate = $('.date');
$select.change(function() {
	if ($select.val() == 'selectdate') {
		$fielddate.attr('disabled', 'disabled').val('');
	} else {
		$fielddate.removeAttr('disabled');

	}
}).trigger('change');
$(document).on(
		'click',
		'.viewcorrigendum',
		function() {
			var encTenderItemId = $(this).closest("tr").find("#encTenderItemId").val();
			var encIsLiveTenderSummary = $(this).closest("tr").find("#encIsLiveTenderSummary").val();
			var pageContext = $("#urlVal").val();
			window.open(pageContext + 'tenderCreation/corrigendumSummary/'
					+ encTenderItemId + "/" + encIsLiveTenderSummary, '_blank',
					'scrollbars=yes,top=150,left=200, width=1000, height=400');

		});
$(document).on(
		'click',
		'.viewaddendum',
		function() {
			var encTenderItemId = $(this).closest("tr").find("#encTenderItemId").val();
			var encIsLiveTenderSummary = $(this).closest("tr").find("#encIsLiveTenderSummary").val();
			var pageContext = $("#urlVal").val();
			window.open(pageContext + 'addendum/loadAddendumSummary/'
					+ encTenderItemId + "/" + encIsLiveTenderSummary, '_blank',
					'scrollbars=yes,top=150,left=200, width=1000, height=400');

		});