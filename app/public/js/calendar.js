$(document).ready(function(){
	$(".dropdown-button").dropdown({
		constrainWidth: false,
		hover: true
	});
	$('.slider').slider();
	$('#calendar').fullCalendar({
        // put your options and callbacks here
        header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listWeek'
			},
			defaultDate: '2017-04-12',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true,
			events: [
				{
					title: 'Organic Finds',
					start: '2017-04-01'
				},
				{
					title: 'Veggie Bazaar',
					start: '2017-04-07',
					end: '2017-04-12T12:30:00'
				},
				{
					id: 999,
					title: 'Weekly Market',
					start: '2017-04-23T10:00:00'
				}
			]
    })
    $('#calendars').fullCalendar({
        // put your options and callbacks here
        header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listWeek'
			},
			defaultDate: '2017-04-12',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true,
			events: [
				{
					title: 'Organic Finds',
					start: '2017-04-01'
				}
			]
    })
})
