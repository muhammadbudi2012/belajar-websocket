$(document).ready(function(){

var socket = io.connect('http://localhost:3000');

var feedback = 

//emit events
$("#send").click(function() 
{
	//query dom
	var message = $("#message").val();	
	var handle = $("#handle").val();

	socket.emit('chat',
	{
		message:message,
		handle:handle
	});

});

$("#message").keypress(function(event) 
{
 	socket.emit('typing',$("#message").val());

});

//listen for events
socket.on('chat',function(data)
{
	$("#output").append(data.handle+" "+data.message+"<br>");
});

//listen for events
socket.on('typing',function(data)
{
	
		$("#output").html("typing message....");
});


});