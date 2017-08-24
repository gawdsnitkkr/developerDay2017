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
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=d727cf36965f8e122b4ee4a658725da2',
    function(data) {
      console.dir(data);
      console.dir(data.weather[0].description);
      $('#display').text("Weather : " + data.weather[0].description + " Wind speed is : " +data.wind.speed);
    }
  );
}
function displayWikipedia(str) {
   $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json&search="+encodeURI(str)+"&callback=?",
    function(data) {
      console.dir(data);
    }
  );
}
function displayQuotes() {
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=?", 
    function(a) {
         console.dir(a);
  }); 
}


display();
displayWikipedia("Narendra Modi");
displayQuotes();
