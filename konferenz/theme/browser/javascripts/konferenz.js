jq(document).ready(function() {

	// scrolling infobox stuff
	jq(".scrollable").scrollable({ circular: true, speed: 1000 }).autoscroll(10000);

	// helper script for the registration formula
	jq("#fruehbucher-eintritt").click(function() {
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
		jq("#student-50-euro").attr('checked', false);
	});

	// expand talk description on click
	jq('.expandLink').click(function () {
		jq(this).parent().find('.expandLink').css({'display': 'none'});
		jq(this).parent().find('.tileText').fadeIn('slow');
		return false;
		})

    // user overlay to show talk details
    jq('.schedule a').prepOverlay(
        {
            subtype: 'ajax',
            filter: common_content_filter,
            noform: function(el) {return $.plonepopups.noformerrorshow(el, 'close');}
        }
    );

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
