var addReview = function() {
// ADD A REVIEW
	// Useful Variables
	var reviewToggle = $("#review-toggle");
	var addReview = $("#add-review");
	var cancelReview = $("#cancel-review");
	var postReview = $("#post-review");

	// Click Add Review
	var addCustomerReview = function() {
		addReview.click(function() {
			if (reviewToggle.css("display") == "none") {
				reviewToggle.show();
				addReview.hide();
			}
		});
	}();

	// Click Cancel
	var cancelCustomerReview = function() {
		cancelReview.click(function() {
			addReview.show();
			reviewToggle.hide();
			// Clear inputs
			$("#rating").val("");
			$("#name-input").val("");
			$("#review-input").val("");
			$("#name-input-validation").hide();
			$("#rating-input-validation").hide();

		});
	}();

	// Click Post Review
	var postCustomerReview = function() {
		postReview.click(function() {
			// Helpful variables
			var nameInput = $("#name-input").val();
			var reviewInput = $("#review-input").val();
			var ratingInput = $('#rating').val();
			var date = Date();
			var reviewDate = date.substring(4,10) + "," + date.substring(10,15);
			var appendReview = '<li class="comment centered">'+
				            '<div class="col-md-12 comment-date">'+
				                '<p>' + reviewDate + '</p>'+
				            '</div>'+
				            '<div class="col-md-12 comment-info">'+
				                '<div class="col-md-2 comment-time">'+
				                    '<p class="comment-name">' + nameInput +'</p>'+
				                '</div>'+
				                '<div class="col-md-10 comment-review">'+
				                    '<p class="star">' + ratingInput + '</p>'+
				                    '<p class="review">' + reviewInput + '</p>'+
				                '</div>'+
				            '</div>'+
				        '</li>';
			var appendReview = function() {
				if (nameInput !== "" && ratingInput !== "") {
				    $(".comment-list").prepend(appendReview);
				}
			}();
			var validateReview = function() {
				var nameInputValidation = $("#name-input-validation");
				var ratingInputValidation = $("#rating-input-validation");
				if (nameInput === "") {
					nameInputValidation.show();
				} else {
					nameInputValidation.hide();
				}
				if (ratingInput === "") {
					ratingInputValidation.show();
				} else {
					ratingInputValidation.hide();
				}
			}();
		});
	}();
}();