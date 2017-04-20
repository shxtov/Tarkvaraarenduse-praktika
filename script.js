document.getElementById("innerContainer2").style.visibility = "hidden";

//kuulan mouse clicki ja kui == button id, siis funktsioon tegutseb järgmiselt
document.addEventListener("click", function(e) {
	var click = e.target.id;
	console.log(click);
	
	switch(click) {
		case "mainBtn": 
			document.getElementById("innerContainer1").style.visibility = "hidden";
			document.getElementById("innerContainer2").style.visibility = "visible";
			break;
		case "nextBtn1":
			document.getElementById("contentDiv").innerHTML = "MINGID TEISED KÜSIMUSED, MIDA KASUTAJALT KÜSIDA";
			break;
		//Kui on vaja veel küsimusi küsida kliendilt, siis switchi tuleb lihtsalt uus case juurde teha uue contentiga
		default:
			break;
	}
});