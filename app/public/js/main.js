$(document).ready(function(){
	$(".dropdown-button").dropdown({
		constrainWidth: false,
		hover: true
	});
	$('.slider').slider();
});

function initCards(){
	// for(var i = 0; i < 1; i++) $('div.row').eq(i).remove();
	var socket = io('http://localhost:3000');
	// receives data from socket 'event'
	socket.on('event', function (data){
		if(data.events.length == 0){
			$('#main-header').text('There are currently no events.');
		} else {
			for(var i = 0; i < data.events.length; i++){	// data.events.length
				numOfCol = $('div.col').length;
				numOfRow = $('div.row').length;
				// div.row creator
				if($('div.row').length == 0) $('#main-header').after('<div class="row"></div>');
				else if(numOfCol % 2 == 0) $('div.row').eq(numOfRow - 1).after('<div class="row"></div>');
				else numOfRow = numOfRow - 1;
				// div.col creator
				if(numOfCol % 2 != 0) $('div.col').eq(numOfCol - 1).after('<div class="col s6 m6"></div>');
				else $('div.row').eq(numOfRow).html('<div class="col s6 m6"></div>');
				// card + info creator
				tabNum = numOfCol * 3;
				var html = '<div class="card hoverable small light-green lighten-5"><div class="card-tabs"><ul class="tabs tabs-fixed-width light-green lighten-3"><li class="tab"><a href="#tab'
				+ tabNum + '" class="active">Event</a></li><li class="tab"><a href="#tab'
				+ (tabNum + 1) + '">Date &amp Location</a></li><li class="tab"><a href="#tab'
				+ (tabNum + 2) + '">More Details</a></li></ul></div><div class="card-content grey-text text-darken-4"><div id="tab'
				+ tabNum + '"><span class="card-title activator">'
				+ data.events[i].name + '</span>'
				+ data.events[i].description + '</div><div id="tab'
				+ (tabNum + 1) + '"><span class="card-title activator">Event Duration:</span>'
				+ data.events[i].date_start + ' to '
				+ data.events[i].date_end + '<br>'
				+ data.events[i].time_start + ' - '
				+ data.events[i].time_end + '<br><br><span class="card-title activator">Location:</span>'
				+ data.events[i].location + '</div><div id="tab'
				+ (tabNum + 2) + '"><span class="card-title activator">Contact Us:</span>Mobile/Telephone No.: '
				+ data.events[i].contact_number + '<br>Event Link: <a href="'
				+ data.events[i].link + '">'
				+ data.events[i].link + '</a><br><br><span class="card-title activator">Tags:</span>'
				+ data.events[i].tags + '</div></div></div>';
				$('div.col').eq(numOfCol).html(html);
 				$('ul.tabs').tabs();	// initalizes tabs; makes the tab indicator functional
			}
		}
	});
}