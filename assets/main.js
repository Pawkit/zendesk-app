$(document).ready(function(){

//function to grab data with get

function callUserData(ticketLibrary){
	var ticketUrl = "https://gobble.zendesk.com/api/v2/help_center/en-us/articles.json"
	$.ajax({
		url: ticketUrl
		method: "GET",

	}).done(function(response){
		console.log(response)
	});
};

callUserData()

//subject, user id

//generate link

//function to post data into link

//print link into html file


});