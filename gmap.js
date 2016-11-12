
			// set default position at Xintien Temple (for better view of zoom 11)
			var myLatLng = { lat: 25.0630771, lng: 121.5338999 };

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
          zoom: 11	// 預設拉近距離
        });

        sites.forEach((s)=>{
					var contentString = 
								  		'<div id="content">'+
								      	'<div id="siteNotice">' + '</div>' + 
								      		'<h4>'+ s.name + '</h4>' + 
								      '</div>';

				  var infowindow = new google.maps.InfoWindow({
				    content: contentString
				  });

	        // Create a marker and set its position.
	        var marker = new google.maps.Marker({
	          map: map,
	          position: { lat: s.lat, lng: s.lng },
	          title: s.name
	        });

	        // 因為目前無法讓前一個 marker 關起來
				  // marker.addListener('click', function() {
				  //   infowindow.open(map, marker);
				  //   // infowindow.close();
				  // });
        })				  	 
      }
