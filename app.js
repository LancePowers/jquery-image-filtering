$(document).ready(function() {
	console.log("The document is ready!");

	function newCabin (cabinImage,dataPrice, listPrice) {
		var $newHome = $('<article></article>')
		$newHome.append($('<img>').attr('src', cabinImage))
		$newHome.append($('<h4></h4>').html(listPrice))
		$newHome.addClass('home')
		$newHome.attr('data-price', dataPrice)
		$('.image-container').append($newHome);
	}

	newCabin('http://www.active.com/Assets/Outdoors/Cabin.jpg', 100000, "100,000");
	newCabin('http://breckheritage.com/wp-content/uploads/2013/03/klack_cabin_complete_004-150x150.jpg', 1000000, "1,000,000");
	newCabin('http://rusticozarklogcabins.com/wp-content/uploads/2011/12/P1020381_350h-150x150.jpg', 120000, "120,000");

	$('.textures').append('<span class="forest"></span>')

	$('.dark').on('click', function(event){
		$('body').css('background', '#000 url(img/dark_wood.png) repeat')
	})
	$('.light').on('click', function(event){
		$('body').css('background', '#000 url(img/tileable_wood_texture.png) repeat')
	})
	$('.forest').on('click', function(event){
		$('body').css({'background': '#000 url(img/forest.jpg) repeat','background-size': 'cover'})
	})

	$('.low').on('click',function(event){
		event.preventDefault();
		$(".image-container article").sort(sort_article) // sort elements
		                  .appendTo('.image-container'); // append again to the list;
	});
	$('.high').on('click',function(){
		$(".image-container article").sort(sort_article_high) // sort elements
											.appendTo('.image-container');
	});
	// clear container and add back in.
})


// sort function callback

function sort_article(a, b){
    return ($(b).data('price')) < ($(a).data('price')) ? 1 : -1;
}


function sort_article_high(b, a){
    return ($(b).data('price')) < ($(a).data('price')) ? 1 : -1;
}

// if($(b).data('price')) < ($(a).data('price')){ 1 } else{ -1 };
//
// function clearContainer(){
// 	$('.image-container').empty();
// };
// function populateContainer(){
// 		$('.image-container').append(sortHigh());
// }
//
// function sortHigh(){
// 	var prices = $(".home").map( function(){return $(this).attr("data-price");} );
// 	var sorted = prices.sort(function(a,b){return b-a});
// 	return sorted;
// }
//
// function sortLow(){
// 	var prices = $(".home").map( function(){return $(this).attr("data-price");} );
// 	var sorted = prices.sort(function(a,b){return a-b});
// 	return sorted;
// }
//
//
//
//
//
//
//
// // function arrToNum(arr){
// // 	var numArr = [];
// // 	for (var i = 0; i < arr.length; i++) {
// // 		numArr.push(parseInt(arr[i]));
// // 	}
// // 	return numArr;
// // }
//
//
// 	// var currentHigh = 0;
// // for (var i = 0; i < prices.length; i++) {
// // 	if(parseInt(prices[i]) > currentHigh){
// // 		currentHigh = parseInt(prices[i]);
// // 	}
// // } return currentHigh;
