window.addEventListener('hashchange', function() {
    var viewID = location.hash.slice(1);
    var viewElem = document.getElementById(viewID);
    
});

(function() {
    var app = {
        
        'routeChange': function() {
            app.routeID = location.hash.slice(1);
            app.route = app.routes[app.routeID];
            app.routeElem = document.getElementById(app.routeID);
            app.route.rendered();
        },
        // stardi funktsioon
        'init': function() {
            window.addEventListener('hashchange', function() {
                app.routeChange();
            });
            
			//kui hashi pole URL-is, siis muudab URLi et includeks default view hash-i
            if (!window.location.hash) {
                window.location.hash = app.default;
            } else {
               
				// routeChange´i läbi tegemine esimest korda
                app.routeChange();
            }
        }
    };
    window.app = app;
})();

app.init();