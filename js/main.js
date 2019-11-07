	$(document).ready(function () {

		$(".page__button, #open-modal").on("click", function() {
			$(".overlay").show();
			$(".want-button").hide();
		});

		$(".modal-form__close").on("click", function() {
			$(".overlay").hide()
		});

	});