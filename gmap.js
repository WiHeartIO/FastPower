
			// set default position at Taipei 101 
			var myLatLng = { lat: 25.0339031, lng: 121.5623212 };

			/* 會有點慢，要再思考要不要直接定位，且目前顯示的定位點是做成一個 marker，不是藍點
		  if (navigator.geolocation) {
     		navigator.geolocation.getCurrentPosition((position)=>{
     			console.log(position.coords.latitude, position.coords.longitude)
     			myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
     			initMap();
     		});
	    } else {
	    		console.log("Browser not support GPS");
	    }
	    */

      function initMap() {

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 15	// 預設拉近距離
        });

        // TODO: Ajax to get poit

			  var contentString = 
			  		'<div id="content">'+
			      	'<div id="siteNotice">'+'</div>'+
			      		'<h4>台北 101 (Taipei 101)</h4>'+
			      		'<div id="bodyContent">'+
			      		'<p><b>台北 101</b></p>\n目前可借行動電源數量：0'+
			      		'</div>'+
			      	'</div>' +
			      '</div>';

			  var infowindow = new google.maps.InfoWindow({
			    content: contentString
			  });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });

			  marker.addListener('click', function() {
			    infowindow.open(map, marker);
			  });
      }
