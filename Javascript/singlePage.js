(function() {
	var app = {
		// funktsioonid, mis käivituvad alati, kui hash muutub, console.log hetkel.
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
             }
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