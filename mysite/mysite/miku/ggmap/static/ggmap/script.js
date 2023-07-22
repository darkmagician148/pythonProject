function createMap(lat,lng){
			  const map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 20.32156, lng: 105.98611},
				zoom: 14,
			  });
			  new google.maps.Marker({
			  	position: {lat: lat , lng: lng},
				map,
			  });
			  const infowindow = new google.maps.InfoWindow({
				content: "<p>Marker Location:" + marker.getPosition() + "</p>",
			  });
			  google.maps.event.addListener(marker, "click", () => {
				infowindow.open(map, marker);
			  });
			}

