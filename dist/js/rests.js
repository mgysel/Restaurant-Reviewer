var rests = [
// Data Variable of all the rests.
	{
		name: "Kedai Makan",
		hood: "Capitol Hill",
		type: [
			"Malaysian"
			],
		price: "$",
		address: [
			"1802 Bellevue Ave",
			"Seattle, WA 98122"
		],
		rating: "★ ★ ★ ★ ★",
		hours: {
			Monday: "Closed",
			Tuesday: "Closed",
			Wednesday: "5:00 pm - 11:00 pm",
			Thursday: "5:00 pm - 11:00 pm",
			Friday: "5:00 pm - 11:00 pm",
			Saturday: "5:00 pm - 11:00 pm",
			Sunday: "5:00 pm - 11:00 pm"
		}
	},
	{
		name: "Wandering Goose",
		hood: "Capitol Hill",
		type: [
			"Southern/Soul"
			],
		price: "$$",
		address: [
			"403 15th Ave E",
			"Seattle, WA 98112"
		],
		rating: "★ ★ ★ ★ ☆",
		hours: {
			Monday: "7:00 am - 4:00 pm	",
			Tuesday: "7:00 am - 4:00 pm	",
			Wednesday: "7:00 am - 4:00 pm",
			Thursday: "7:00 am - 4:00 pm",
			Friday: "7:00 am - 4:00 pm",
			Saturday: "7:00 am - 4:00 pm",
			Sunday: "7:00 am - 4:00 pm"
		}
	},
	{
		name: "Witness",
		hood: "Capitol Hill",
		type: [
			"Cocktail Bar",
			"Southern/Soul"
			],
		price: "$$",
		address: [
			"410 Broadway E",
			"Seattle, WA 98102"
		],
		rating: "★ ★ ★ ★ ★",
		hours: {
			Monday: "4:00 pm - 1:00 am",
			Tuesday: "4:00 pm - 1:00 am",
			Wednesday: "4:00 pm - 1:00 am",
			Thursday: "4:00 pm - 1:00 am",
			Friday: "4:00 pm - 2:00 am",
			Saturday: "9:00 am - 2:00 am",
			Sunday: "9:00 am - 1:00 am"
		}
	}
];

var addFilterItems = function() {
// Adds list items to filters
	// array of food styles and neighborhoods
	var foodType = [];
	var hood = [];
	// number of restaurants
	var numRests = rests.length;

	// loop to add all food styles to an array
	for (var i=0; i<numRests; i++) {
		var restStyles = rests[i].type;
		restStylesLength = restStyles.length;
		for (var j=0; j<restStylesLength; j++) {
			foodType.push(rests[i].type[j]);
		}
	}
	// loop to add all food styles to an array
	for (var i=0; i<numRests; i++) {
		hood.push(rests[i].hood);
	}

	// Sort and filter food types array
	var foodTypes = $.unique(foodType).sort();
	foodTypesLen = foodTypes.length;
	for (var i=0; i<foodTypesLen; i++) {
		$("#food-type").append(
	        '<option value="' + foodTypes[i] + '">' + foodTypes[i] + '</option>'
	    );
	}
	// Sort and filter hood array
	var hoods = $.unique(hood).sort();
	var hoodsLen = hoods.length;
	for (var i=0; i<hoodsLen; i++) {
		$("#nhood").append(
	        '<option value="' + hoods[i] + '">' + hoods[i] + '</option>'
	    );
	}
}();

var displayRests = function() {
// Function to display the restaraunts in the data set.
	// number of restaurants
	var numRests = rests.length;
	// Loops through and displays the rests
	for (var i=0; i<numRests; i++) {
		// dummy variables
		var thisRest = rests[i];
		var thisRestName = thisRest.name;
		var thisRestNameShort = thisRest.name.replace(/\s/g, '');
		// Displays for each rest
		var appendRest = '<a href="' + thisRestNameShort + '.html" class="rest centered">' +
				            '<div class="col-md-4 ind-rest" id="' + thisRestNameShort + '">' +
				                '<div class="rest-info center-block">' +
				                    '<span class="rest-input rest-span col-md-12 text-center" style="margin-bottom: 3px">' + thisRestName + '</span>' +
				                    '<span class="rest-input rest-span col-md-12 text-center" style="margin-bottom: 3px">' + thisRest.rating + '</span>' +
				                    '<span class="address rest-span rest-input col-md-12 text-center" style="margin-bottom: 8px">' + thisRest.address[0] + '<br>' + thisRest.address[1] + '</span>' +
				                    '<img src="img/' + thisRestNameShort + '.jpg" alt="' + thisRestName + '" class="rest-photo rest-input full-width center-block" style="margin-bottom: 15px">' +
				                '</div>' +
				            '</div>' +
				        '</a>';
		$(".rest-list").append(appendRest);
		console.log(thisRestNameShort);
	}
}();

// Rating, Price Range, Neighborhood, Food Type
var filterRests = function() {
// Function that Sorts Restaraunts based on filters.
	// When changing the rest filter name.
	$("#rating").change(function() {
		// Rating value variable
		var ratingVal = $("#rating").val();
		// number of restaurants
		var numRests = rests.length;
		// Loop through each rest
		for (var i=0; i<numRests; i++) {
			var thisRest = rests[i];
			var thisId = "#" + thisRest.name.replace(/\s/g, '');
			// Check if the selected rating matches the rest
			// If clicked on Top Choice, display all and return
			if (ratingVal === "") {
				$(thisId).show();
			} else if (thisRest.rating !== ratingVal) {
				$(thisId).hide();
			} else {
				$(thisId).show();
			}
		}
	});
}();