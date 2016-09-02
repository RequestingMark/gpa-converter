/**
 * GPA Converter
 * http://anigraphiccreations.com/gpa-converter
 *
 * Copyright 2016, Mark McMurray - http://anigraphiccreations.com/
 */

(function($){
	
	var plugin = {};
	
	$.fn.gpaConverter = function(options) {
		
		if (this.length === 0) {
			return this;
		}
		
		if (this.length > 1) {
			this.each(function(){
				$(this).gpaConverter(options);
			});

			return this;
		}

		plugin.el = this;
		
		// FUNCTION: Initialize
		var init = function() {
			plugin.settings = $.extend({
				//DEFAULTS
				convert_to_scale: null,
				layout: 'verticle',
				template: "default"
			}, options);
			
			initConverter();
		};
		
		// FUNCTION: Initialize Converter
		var initConverter = function() {
			$(plugin.el).addClass('gpa-converter gpa-converter--' + plugin.settings.layout + ' gpa-converter--default');

			plugin.el.form = $('<form class="gpa-converter__form""></form>');
			plugin.el.currentGpa = $('<input class="gpa-converter__current-gpa" type="text" placeholder="Current GPA" autofocus />');
			plugin.el.currentScale = $('<select class="gpa-converter__current-scale"><option value="" selected disabled>Current Scale</option></select>');
			plugin.el.scaleOptions = $('<option value="3" selected="selected">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>');
			plugin.el.calculatedContainer = $('<div class="gpa-converter__calculated-container"></div>');
			plugin.el.calculatedGpa = $('<span class="gpa-converter__calculated-gpa"></span>');
			plugin.el.submitContainer = $('<div class="gpa-converter__submit-container"></div>');
			plugin.el.submitButton = $('<button type="submit" class="gpa-converter__submit">Calculate</button>');

			$(plugin.el)
				.append(plugin.el.form
					.append(plugin.el.currentGpa)
					.append(plugin.el.currentScale
						.append(plugin.el.scaleOptions)
					)
					.append(plugin.el.calculatedContainer
						.append(plugin.el.calculatedGpa)
					)
					.append(plugin.el.submitContainer
						.append(plugin.el.submitButton))
				);

			$(".gpa-converter__form").on('submit', function (e) {
			   checkForm();
			   e.preventDefault();
			});
		};
		
		// FUNCTION: Initialize Error
		var initError = function(errorTitle, errorDescription) {
			$(plugin.el).prepend('<div class="gpa-converter__error"><h2 class="gpa-converter__error-title">' + errorTitle + '</h2><p class="gpa-converter__error-description">' + errorDescription + '</p></div>');
		};

		// FUNCTION: Calculate GPA
		var calcGpa = function() {
			var temp;

		    temp = eval(plugin.el.currentGpa.val())/(eval(plugin.el.currentScale.val()));
		    temp = parseFloat(Math.round((temp * 4) * 100) / 100).toFixed(2);

		    $('.gpa-converter__calculated-gpa').html(temp);
		};

		// FUNCTION: Check Form for Errors
		var checkForm = function() {
			$('.gpa-converter__error').remove();

			if ((plugin.el.currentGpa.val() == null || plugin.el.currentGpa.val() == 0 || plugin.el.currentGpa.val() < 0 || plugin.el.currentGpa.val() > plugin.el.currentScale.val())) {
		    	initError('Invalid Entry', 'You have entered an invalid number. Please try again.');
		    	return;
		    }

		    calcGpa();
		};
		
		init();
		
		return this;
	};

})(jQuery);