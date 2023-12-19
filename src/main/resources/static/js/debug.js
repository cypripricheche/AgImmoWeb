/** =============================================================================================================================
 * Fichier				: debug.js
 * Objectif(s)			: Affichage des événements et des propriétés dans le bloc de débogage afin d'aider à comprendre le rôle de certaines propriétés
 * ==============================================================================================================================
 */

/** 
 * Gère le débogage
 */
function manageDebug() {
	if (debuggingManagement) {
		initializeDebug();
		createDebugTrigger();
		
		// ======================================================================================================================
		// Gestion de l'affichage du bloc debugTrigger
		// ======================================================================================================================
		window.addEventListener("mousemove", function() {
			// On teste si on survole le bloc debugTrigger (largeur de 10 pixels s'il n'est pas visible)
			let defaultWidth = 10;
			// On rend visible le bloc debugTrigger
			if ((event.clientX < (DOMDebugTrigger.style.left == "-40px" ? defaultWidth : parseInt(removeExtension(DOMDebugTrigger.style.width, "px"), 10)))
				&& ((event.clientY >= parseInt(removeExtension(DOMDebugTrigger.style.top, "px"), 10)) && (event.clientY <= parseInt(removeExtension(DOMDebugTrigger.style.top, "px"), 10) + parseInt(removeExtension(DOMDebugTrigger.style.height, "px"), 10)))) {
				DOMDebugTrigger.style.left = "0";
				DOMDebugTrigger.style.cursor = "pointer";
			
			// On rend invisible le bloc debugTrigger
			}else {
				DOMDebugTrigger.style.left = "-40px";
				DOMDebugTrigger.style.cursor = "default";
			}
		});
		
		// ======================================================================================================================
		// Gestion du clic sur le bloc debugTrigger permettant d'"ouvrir" / "fermer" le bloc de débogage
		// ======================================================================================================================
		DOMDebugTrigger.addEventListener("click",	function() {
			if (DOMDebug.style.right === "-220px" || DOMDebug.style.right === "") {
				DOMDebug.style.right = "0";
				updateDebug();
				window.addEventListener("scroll",		updateDebug);
				window.addEventListener("resize",		updateDebug);
				window.addEventListener("mousemove",	updateDebug);
			}else {
				DOMDebug.style.right = "-220px";
				window.removeEventListener("scroll",	updateDebug);
				window.removeEventListener("resize",	updateDebug);
				window.removeEventListener("mousemove",	updateDebug);
			}
		});
	}
}

/** 
 * Initialise le bloc de débogage
 */
function initializeDebug() {
	// ==========================================================================================================================
	// Gestion du clic sur la croix
	// ==========================================================================================================================
	DOMDebug.firstElementChild.addEventListener("click", function() {
		DOMDebug.style.right = "-220px";
		window.removeEventListener("scroll",	updateDebug);
		window.removeEventListener("resize",	updateDebug);
		window.removeEventListener("mousemove",	updateDebug);
	});
	
	// ==========================================================================================================================
	// Contenu du premier bloc <div> (à gauche)
	// ==========================================================================================================================
	DOMDebug.children[1].innerHTML = "event.type :<br/>"
								  + "screen.width :<br/>"
								  + "screen.height :<br/>"
								  + "screenX :<br/>"
								  + "screenY :<br/>"
								  + "innerWidth :<br/>"
								  + "innerHeight :<br/>"
								  + "scrollY :<br/>"
								  + "scrollHeight :<br/>"
								  + "event.clientX :<br/>"
								  + "event.clientY :";
}

/** 
 * Création du bloc debugTrigger qui permet de déclencher l'affichage du bloc debug
 */
function createDebugTrigger() {
	// ==========================================================================================================================
	// Création du bloc debugTrigger
	// ==========================================================================================================================
	let newDiv = window.document.createElement("div");
	newDiv.setAttribute("id", "debugTrigger");
	let newSpan = window.document.createElement("span");
	newSpan.appendChild(document.createTextNode("Débogage"));
	newDiv.appendChild(newSpan);
	
	// ==========================================================================================================================
	// Ajout du nouveau bloc debugTrigger AVANT ou APRES le bloc debug
	// ==========================================================================================================================
	//debug.parentNode.insertBefore(newDiv, debug);
	insertAfter(newDiv, DOMDebug);
	
	// ==========================================================================================================================
	// Mise en forme du nouveau bloc debugTrigger
	// ==========================================================================================================================
	DOMDebugTrigger = window.document.getElementById("debugTrigger");
	
	DOMDebugTrigger.style.position						= "fixed";
	DOMDebugTrigger.style.top							= "162px";
	DOMDebugTrigger.style.left							= "-40px";		/* modifié dynamiquement en javascript */
	DOMDebugTrigger.style.height						= "110px";
	DOMDebugTrigger.style.width							= "40px";
	DOMDebugTrigger.style.borderRadius					= "0 15px 15px 0";
	DOMDebugTrigger.style.backgroundColor				= "var(--selectedColor08)";
	DOMDebugTrigger.style.fontSize						= "calc(var(--fontSize) + 3px)";
	DOMDebugTrigger.style.writingMode					= "vertical-rl";
	DOMDebugTrigger.style.textOrientation				= "mixed";
	DOMDebugTrigger.style.transition					= "left ease-in 0.4s";
	DOMDebugTrigger.style.cursor						= "default";	/* modifié dynamiquement en javascript */
	DOMDebugTrigger.style.zIndex						= "2";
		
	DOMDebugTrigger.firstElementChild.style.position	= "absolute";
	DOMDebugTrigger.firstElementChild.style.top			= "0";
	DOMDebugTrigger.firstElementChild.style.left		= "11px";
	DOMDebugTrigger.firstElementChild.style.height		= "110px";
	DOMDebugTrigger.firstElementChild.style.width		= "19px";
	DOMDebugTrigger.firstElementChild.style.color		= "var(--selectedFlashColor)";
	DOMDebugTrigger.firstElementChild.style.textAlign	= "center";
}

/** 
 * Mise à jour du second bloc <div> (à droite) du bloc de débogage
 */
function updateDebug() {
	DOMDebug.children[2].innerHTML = event.type + "<br/>"
								   + window.screen.width + " px<br/>"
								   + window.screen.height + " px<br/>"
								   + window.screenX + " px<br/>"
								   + window.screenY + " px<br/>"
								   + window.innerWidth + " px<br/>"
								   + window.innerHeight + " px<br/>"
								   + Math.round(window.scrollY)+ " px<br/>"
								   + window.document.body.scrollHeight + " px<br/>"
								   + (event.clientX === undefined ? "non défini" : event.clientX + " px") + "<br/>"
								   + (event.clientY === undefined ? "non défini" : event.clientY + " px");
}

