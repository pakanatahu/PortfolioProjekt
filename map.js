function initMap() {
        var uluru = {lat: 59.2542787 ,lng: 15.2470413};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
