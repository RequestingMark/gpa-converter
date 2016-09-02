# gpa-converter
jQuery plugin that adds a form that converts GPAs from the 3 - 10 scale to a 4.0 scale

### Basic Install
add the following in your <head>

	<link rel="stylesheet" href="css/gpa-converter.css">

then add the following right before your closing </body> tag

	<script src="js/vendor/jquery.js"></script>
	<script src="js/gpa-converter.js"></script>

finally add the following right before your closing </body> tag

	<script>
		$(document).ready(function() {
			$("#converter").gpaConverter();
		});
	</script>

### Options
	plugin.settings = $.extend({
		//DEFAULTS
		convert_to_scale: null,
		layout: 'verticle',
		theme: "card"
	}, options);

convert_to_scale: currently only null available as an option

layout: currently only vertical works (horizontal expected soon)

theme: currently has card theme or default theme for no theme styling

### Possible Future Additions
-add ability to convert to other GPA scales
