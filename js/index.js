// $(function() {
//   $('.submit').on('click', function() {
//     var zip = $('.zip').val();
//
//     localStorage.setItem('zip', zip);
//
//     if (zip == '08807') {
//       $('.stuff').val('yo');
//     } else {
//
//       if (zip != '08807') {
//         $('.stuff').val('no');
//       }
//     }
//
//   });
//
// });

$(function() {
     getEvents();

    function getEvents() {
        $.ajax({
          //  url: "http://api.bandsintown.com/events/on_sale_soon.json?location=use_geoip&radius=25&date=upcoming&app_id=randalthing",
           url: "http://api.bandsintown.com/artists/mbid_a2496a3c-8f42-4b98-b780-6f8d64f56441/events?format=json&app_id=randalthing",
           dataType: 'json',
           type: 'GET',
           success: function (events) {
               doSomething(events);
               console.log(events);
           },

           });
    }
           function doSomething(events) {
               for (var i=0; i<events.length; i++) {
                  var music = events[i];
                  var artists = music.artists;
                  var venues = music.venue;
                  var row = '<div class="row">';
                   //
                  //  for (var j=0; j<artists.length; j++) {
                  //     var artist = artists[j];
                   //
                  //     // row += '<div class="left">' + artist.name + '</div>';
                  //
                   //
                  //   }

                  row += '<div class="left">' + venues.name + '</div>';
                  row += '<ul>';
                  row += '<li class="city">' + venues.city + ', ' + venues.region + '</li>';
                  row += '<li class="date">' + music.datetime + '</li>';
                  row += '</ul>'
                  row += '<div class="right">' + '<a href="' + music.ticket_url + '" target="_blank">Find Tickets</a>' + '</div>';
                  row += '</div>';
                  $('#music').append(row);
                }
            }
   });
