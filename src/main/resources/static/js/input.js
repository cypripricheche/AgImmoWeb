

function manageReinitialiserSelect(menu){
	switch(menu) {
	case menuBiens : 
		document.getElementById("maison").checked = true; 
		document.getElementById("appartement").checked = true;
		document.getElementById("selectBien").textContent = "Bien(s)";
		break;
	case menuLieu:
		document.getElementById("ville").value="";
		document.getElementById("cp").value="";
		document.getElementById("selectLieu").textContent = "Lieu";
		break;
	case menuBudget:
		document.getElementById("budgetmini").value=0;
		document.getElementById("budgetmaxi").value=0;
		document.getElementById("selectBudget").textContent = "Budget";
		break;
	case menuSurface:
		document.getElementById("surfacemini").value=0;
		document.getElementById("surfacemaxi").value=0;
		document.getElementById("selectSurface").textContent = "Surface";
		break;
	case menuPieces:
		document.getElementById("nbpieces_1").checked = false;
		document.getElementById("nbpieces_2").checked = false;
		document.getElementById("nbpieces_3").checked = false;
		document.getElementById("nbpieces_4").checked = false;
		document.getElementById("nbpieces_5").checked = false;
		document.getElementById("nbpieces_6").checked = false;
		document.getElementById("selectPieces").textContent = "Pièces";
		Pièces
		break;
	}
}
function lieuSelected() {
	/** Déclaration et initialisation des variables **/
	var selection5 	= "";
	var codePostal 	= document.getElementById("cp").value;
	var ville 		= document.getElementById("ville").value;
	/** Traitements **/
	if(ville!==""){
		selection5 = ville;
	}
	if(codePostal!==""){
		selection5 += " (" + codePostal + ")";
	}
	if(selection5.length==0){
		selection5 = "Lieu";
	}
	/** Affichage sur la page **/
	document.getElementById("selectLieu").textContent = selection5;	
}
function bienSelected() {
	/** Déclaration et initialisation des variables **/
	var selection1 		= "";
	var chkMaison		= document.getElementById("maison").checked;
	var chkAppartement	= document.getElementById("appartement").checked; 
	/** Contrôle si le choix "maison" est sélectionné **/
	if(chkMaison) {
		selection1	= "une maison";
	} 
	/** Contrôle si le choix "appartement" est sélectionné **/
	if(chkAppartement) {
		/** si la variable selection1 est non vide, on rajoute une virgule**/
		if(selection1!==""){
			selection1 += ", ";
		}
		selection1	+= "un appartement";
	} 
	/** Mise en forme du texte, tout en minuscule et la première lettre en majuscule **/
	selection1  		= selection1.substr(0,1).toUpperCase() + selection1.slice(1).toLowerCase();
	/** Affichage sur la page **/
	document.getElementById("selectBien").textContent = selection1;
}
function budgetSelected() {
	/** Déclaration et initialisation des variables **/
	var selection2 		= "";
	var mntBudgetMini	= document.getElementById("budgetmini").value;
	var mntBudgetMaxi	= document.getElementById("budgetmaxi").value;
	/** Contrôle des montants saisis**/
	if(mntBudgetMini!=0 || mntBudgetMaxi!=0){
		if(mntBudgetMini!=="" && mntBudgetMaxi!==""){
			selection2 += mntBudgetMini + " à " + mntBudgetMaxi;
		} else if(mntBudgetMini!==""){
			selection2 += "minimum " + mntBudgetMini;
		} else {
			selection2 += "maximum " + mntBudgetMaxi;
		}
		selection2 += " €";
		/** Affichage sur la page **/
		document.getElementById("selectBudget").textContent = selection2;
	}
}
function surfaceSelected() {
	/** Déclaration et initialisation des variables **/
	var selection3 		= "";
	var mntSurfaceMini	= document.getElementById("surfacemini").value;
	var mntSurfaceMaxi	= document.getElementById("surfacemaxi").value;
	/** Contrôle des montants saisis**/
	if(mntSurfaceMini!=0 || mntSurfaceMaxi!=0){
		if(mntSurfaceMini!=="" && mntSurfaceMaxi!==""){
			selection3 += mntSurfaceMini + " à " + mntSurfaceMaxi;
		} else if(mntSurfaceMini!==""){
			selection3 += "minimum " + mntSurfaceMini;
		} else {
			selection3 += "maximum " + mntSurfaceMaxi;
		}
		selection3 += " m²";
		/** Affichage sur la page **/
		document.getElementById("selectSurface").textContent = selection3;
	}
}
function piecesSelected() {
	/** Déclaration et initialisation des variables **/
	var selection4 		= "";
	var selection41		= "";
	var selectContinue	= false;
	var changement		= 0;
	let tab				= new Array();
	let tabValues		= new Array();
	var index			= 0;
	var pieceDepart		= 99;
	var pieceFin		= 0;
	var pieces			= "";
	/** Récupération des valeurs si les checkBox sont cochées **/
	tab[0]				= (document.getElementById("nbpieces_1").checked) ? 1 : 0;
	tab[1]				= (document.getElementById("nbpieces_2").checked) ? 1 : 0;
	tab[2]				= (document.getElementById("nbpieces_3").checked) ? 1 : 0;
	tab[3]				= (document.getElementById("nbpieces_4").checked) ? 1 : 0;
	tab[4]				= (document.getElementById("nbpieces_5").checked) ? 1 : 0;
	tab[5]				= (document.getElementById("nbpieces_6").checked) ? 1 : 0;
	/** Récupération des valeurs des checkbox **/
	tabValues[0]		= 1;
	tabValues[1]		= 2;
	tabValues[2]		= 3;
	tabValues[3]		= 4;
	tabValues[4]		= 5;
	tabValues[5]		= 6;
	/** Boucle de lecture **/
	for(index=0;index<tab.length;index++){
		
		/** Initialisation des variables dans le cas où il y aurait continuité **/
		if(tab[index]!="0"){
			if(pieceDepart==99){
				pieceDepart = tabValues[index];
				pieceFin	= tabValues[index];
			} else {
				pieceFin	= tabValues[index];
			}			
		}
		/** Initialisation de la variable dans le cas où il n'y aurait pas de continuité **/
		if(tab[index]!="0"){
			if(selection4!==""){
				selection4 += ",";
			}
			selection4 += tabValues[index];
		}
		/** Définition d'une sélection continue **/
		if(index==0) {
			if(tab[index]!="0") {
				selectContinue 	= true;
				changement++;
			}
		} else {
			if(tab[index-1]!=tab[index]){
				changement++;
				if(tab[index]!="0"){
					selectContinue	= true;
				} 
				if(changement>2){
					selectContinue	= false;
				}
			} else {
				if(tab[index]!="0" && changement<=2){
					selectContinue	= true;
				} 
			}
		}
	}
	/** Définition du texte à afficher **/
	if(selectContinue){
		if(pieceFin==6){
			selection41	= pieceDepart + " pièces et +";
		} else {
			selection41 = pieceDepart + " à " + pieceFin + " pièces";
		}
	} else {
		selection41 = selection4 + " pièces"; 
		if(tab[5]==1){
			selection41 = selection41 + " et +"; 
		} 
	}
	/** Affichage sur la page **/
	document.getElementById("selectPieces").textContent = selection41;
} 