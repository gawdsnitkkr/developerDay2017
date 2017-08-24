var greeting = document.getElementById('greeting');

var date_obj = new Date();
var hour = date_obj.getHours();
var minutes = date_obj.getMinutes();

if(hour >= 12 && hour <= 17) {
    greeting.innerHTML = 'Good afternoon :)';
}  
else if(hour > 17 && hour <= 21) {
    greeting.innerHTML = 'Good evening ;)';
}
else if(hour > 21 && hour <= 3) {
    greeting.innerHTML = 'Good night -_-';
}
else {
    greeting.innerHTML = 'Good morning :O';
}

var time = (hour) + ' : ' + (minutes);
document.getElementById('time').innerHTML = time;

setInterval(function() {
    var hour = date_obj.getHours();
    var minutes = date_obj.getMinutes();
    var time = (hour) + ' : ' + (minutes);
    document.getElementById('time').innerHTML = time;
}
,60000);


  
  function display() {
    /* displays the weather description given by the requested JSON object */
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=d727cf36965f8e122b4ee4a658725da2',
      function(data) {
        console.dir(data);
        $('#display').text(data.weather[0].description);
        $('#display').text(data.wind.speed);
      }
    );
  }
display();
