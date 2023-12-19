/** =============================================================================================================================
 * Fichier				: topContent.js
 * Objectif(s)			: Gestion du bloc topContent
 * ==============================================================================================================================
 */

/** 
 * Gère le positionnement du bloc topContent lors du redimensionnement de la page (événement resize).
 */
function manageTopContent() {
	// ==========================================================================================================================
	// Mode smartphone
	// ==========================================================================================================================
	if (window.innerWidth <= 680) {
		DOMTopContent.style.marginTop	= "var(--standardBlockHeight)";
		DOMTopContent.style.height		= "var(--standardBlockHeight)";
		//window.document.getElementById("breadCrumbTrail").style.visibility	= "hidden";
		window.document.getElementById("version").style.visibility			= "hidden";

	// ==========================================================================================================================
	// Mode desktop
	// ==========================================================================================================================
	}else {
		DOMTopContent.style.marginTop	= "calc(2 * var(--standardBlockHeight))";
		DOMTopContent.style.height		= "var(--standardBlockHeight)";
		//window.document.getElementById("breadCrumbTrail").style.visibility	= "visible";
		window.document.getElementById("version").style.visibility			= "visible";
	}
}

