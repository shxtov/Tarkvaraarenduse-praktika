// määran muutujad
var innerContainer1 = document.getElementById("innerContainer1");
var innerContainer2 = document.getElementById("innerContainer2");
var shadowBox = document.getElementById("shadowBox");
var backBtn1 = document.getElementById("backBtn1");
var contentDiv = document.getElementById("contentDiv");



// hide elemendid, mida pole alguses vaja näidata kasutajale
innerContainer2.style.visibility = "hidden";
shadowBox.style.visibility = "hidden";


//kuulan mouse clicki ja kui == button id, siis funktsioon tegutseb järgmiselt
document.addEventListener("click", function(e) {
	var click = e.target.id;
	console.log(click);
	//kontrollib, mis buttoniga on tegu ja tegutseb sellele vastavalt
	switch(click) {
		case "mainBtn": 
			//peidab esimese containeri ära ning toob teise nähtavale ja lisab varju ekraanile
			innerContainer1.style.visibility = "hidden";
			innerContainer2.style.visibility = "visible";
			shadowBox.style.visibility = "visible";
			if(backBtn1.innerHTML == "Tagasi"){
				backBtn1.innerHTML = "Sulge";
			}
			break;
			
		case "nextBtn1":
			//kui inimene vajutab "nextBtn1", siis järelikult on ta esimeste küsimuste jooksul ja on vaja edasi liikuda
			contentDiv.innerHTML = "MINGID TEISED KÜSIMUSED, MIDA KASUTAJALT KÜSIDA";
			// Vaatab mis on vasakpoolse buttoni väärtus, kui see on "sulge", siis muudab selle "tagasi", vaata browseris kuidas visuaalselt töötab, siis saad aru
			if(backBtn1.innerHTML == "Sulge"){
				backBtn1.innerHTML = "Tagasi";
			}
			break;
			
		case "backBtn1":
			//Kontrollib, et milline on vasakpoolse buttoni väärtus, kui on "sulge", siis vahetub divi sisu ära ja shadow kaob ära
			if(backBtn1.innerHTML == "Sulge"){
				innerContainer1.style.visibility = "visible";
				innerContainer2.style.visibility = "hidden";
				shadowBox.style.visibility = "hidden";
			} else {
				//kui vasakpoolne nupp pole "sulge", siis muudab selle "sulge" ja muudab contenti tagasi nii nagu oli enne
				backBtn1.innerHTML = "Sulge";
				contentDiv.innerHTML = "<p>MINGID ESIMESED KÜSIMUSED MIDA ME KASUTAJALT KÜSIME ENNE KAARDI KASUTAMIST VAADE1</p>";
			}
			break;
			
		//Kui on vaja veel küsimusi küsida kliendilt, siis switchi tuleb lihtsalt uus case juurde teha uue contentiga
		default:
			break;
	}
});