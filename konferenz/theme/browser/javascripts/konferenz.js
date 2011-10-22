jq(document).ready(function() {

	// helper script for the registration formula

	jq("#fruehbucher-eintritt").click(function() {
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
		jq("#student-50-euro").attr('checked', false);
	});

	jq("#regulaerer-eintritt").click(function() {
		jq("#fruehbucher-eintritt").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
		jq("#student-50-euro").attr('checked', false);
	});

	jq("#student-hochschule-muenchen").click(function() {
		jq("#fruehbucher-eintritt").attr('checked', false);
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-50-euro").attr('checked', false);
	});
	
    jq("#student-50-euro").click(function() {
		jq("#fruehbucher-eintritt").attr('checked', false);
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
	});
	
});
