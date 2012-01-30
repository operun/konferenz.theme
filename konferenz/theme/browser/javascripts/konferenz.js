jq(document).ready(function() {

	// scrolling infobox stuff
	jq(".scrollable").scrollable({ circular: true, speed: 1000 }).autoscroll(10000);

	// enable tabs for tabbed content collections
	jq("ul.tabs").tabs("div.panes > div");

	// expand talk description on click
	jq('.expandLink').click(function () {
		jq(this).parent().find('.expandLink').css({'display': 'none'});
		jq(this).parent().find('.tileText').fadeIn('fast');
		jq(this).parent().find('.closeLink').css({'display': 'block'});
		return false;
		})

	// close talk description on click
	jq('.closeLink').click(function () {
		jq(this).parent().find('.closeLink').css({'display': 'none'});
		jq(this).parent().find('.tileText').fadeOut('fast');
		jq(this).parent().find('.expandLink').css({'display': 'block'});
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

	// helper script for the registration formula
	jq("#fruehbucher-eintritt").click(function() {
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
		jq("#student-50-euro").attr('checked', false);
	    jq("#mittwoch-22ster-februar").attr('checked', false);
        jq("#donnerstag-23ster-februar").attr('checked', false);
        jq("#freitag-24ster-februar").attr('checked', false);
    });

	jq("#regulaerer-eintritt").click(function() {
		jq("#fruehbucher-eintritt").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
		 jq("#student-50-euro").attr('checked', false);
	    jq("#mittwoch-22ster-februar").attr('checked', false);
        jq("#donnerstag-23ster-februar").attr('checked', false);
        jq("#freitag-24ster-februar").attr('checked', false);
    });

	jq("#student-hochschule-muenchen").click(function() {
		jq("#fruehbucher-eintritt").attr('checked', false);
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-50-euro").attr('checked', false);
	    jq("#mittwoch-22ster-februar").attr('checked', false);
        jq("#donnerstag-23ster-februar").attr('checked', false);
        jq("#freitag-24ster-februar").attr('checked', false);
    });
	
    jq("#student-50-euro").click(function() {
		jq("#fruehbucher-eintritt").attr('checked', false);
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
        jq("#mittwoch-22ster-februar").attr('checked', false);
        jq("#donnerstag-23ster-februar").attr('checked', false);
        jq("#freitag-24ster-februar").attr('checked', false);
	});

    jq("#mittwoch-22ster-februar").click(function() {
		jq("#student-50-euro").attr('checked', false);
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
	});

    jq("#donnerstag-23ster-februar").click(function() {
		jq("#student-50-euro").attr('checked', false);
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
	});

    jq("#freitag-24ster-februar").click(function() {
		jq("#regulaerer-eintritt").attr('checked', false);
		jq("#student-50-euro").attr('checked', false);
		jq("#student-hochschule-muenchen").attr('checked', false);
	});



});
