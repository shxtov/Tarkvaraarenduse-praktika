(function() {
    var app = {
        // routes (i.e. views and their functionality) defined here
        'routes': {
            '1view': {
                'rendered': function() {
                    console.log('Kood mis executib, kui minna 1view');
                }
            },
            '2view': {
                'rendered': function() {
                    console.log('Juhtub siis kui 2view minna');
                    }
             },
			 '3view': {
                'rendered': function() {
                    console.log('juhtub siis kui 3view');
                    }
             }
			 
        },
        //default vaade
        'default': '1view',
        'routeChange': function() {
            app.routeID = location.hash.slice(1);
            app.route = app.routes[app.routeID];
            app.routeElem = document.getElementById(app.routeID);
            app.route.rendered();
        },
        // käivitamisfunktsioon
        'init': function() {
            window.addEventListener('hashchange', function() {
                app.routeChange();
            });
            //kui pole hashi, siis pane see, mis on by default
            if (!window.location.hash) {
                window.location.hash = app.default;
            } else {
                // Esimest korda käivitamine
                app.routeChange();
            }
        }
    };
    window.app = app;
})();

app.init();