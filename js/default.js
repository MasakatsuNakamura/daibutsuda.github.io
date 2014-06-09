$(function(){
	$("#main a.column").click(
		function () {
			window.open($(this).attr("href"), null, "width=500, height=500, menubar=no, toolbar=no, scrollbars=yes");
			return false;
		}
	);
});
