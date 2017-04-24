(function() {
	var app = {
		// funktsioonid, mis käivituvad alati, kui lehte refreshitakse
		'routes': {
			'1view': {
				'rendered': function() {
					console.log('See on esimene leht');
				}
			},
			'2view': {
				'rendered': function() {
					console.log('See on teine leht');
				}
			},
			'3view': {
				'rendered': function() {
					console.log('See on kolmas leht');
				}
			},
		},
		
		'default': '1view',
		'routeChange': function() {
			app.routeID = location.hash.slice(1);
			app.route = app.routes[app.routeID];
			app.routeElem = document.getElementById(app.routeID);
			app.route.rendered();
		},
		// Funktsioon käivitamiseks
		'init': function() {
			window.addEventListener('hashchange', function() {
				//funktsioon, mis kuulab hash´i muutust
				switch(location.hash.slice(1)){
					case "1view":
						
						break;
					case "2view":
						
						break;
					case "3view":
						
						break;
				}
			});
			
			// Kui seda hashi pole URL-is, siis muudab URL´i.
			// Kaasab default view´i hash´i.
			if (!window.location.hash) {
				window.location.hash = app.default;
			} else {
				// Käivitab routeChange() esimest korda.
				app.routeChange();
			}
        }
    };
    window.app = app;
})();

app.init();