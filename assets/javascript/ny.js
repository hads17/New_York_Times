var key = "&api_key=329f416fc6404a47ab5313b6ce6fafe3";
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + key;

$("#search").on('click', function(){

	$.ajax({
		url: queryUrl,
		method: 'GET'
	}).done(function(response){
		console.log(response);
	})
})

