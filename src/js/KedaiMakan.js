var rests = [
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

var ViewModel = function() {
	var self = this;
	// Create an array to hold visible objects, all initial objects and
	// all objects that match the search name. This is an observable array
	// so that any changes will be updated throughout the project.
	// var kedaiMakan = rests[0].name.replace(/\s/g, '');
	var rests[0].name.replace(/\s/g, '') = rests[0].name;
	self.kedaiMakan = ko.observable(kedaiMakan);
};

ko.applyBindings(new ViewModel());