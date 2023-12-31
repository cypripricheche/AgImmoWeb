/** =============================================================================================================================
 * Fichier				: picture.js
 * Objectif(s)			: Gestion des images
 * ==============================================================================================================================
 */

/** 
 * Définit la source de certaines images et gère le survol de la souris
 */
function managePicture() {
	// ==========================================================================================================================
	// Le logo de l'onglet
	// ==========================================================================================================================
	window.document.getElementById("tabLogo").setAttribute("href", pictureFolder + "logo/society/icone.png");
	
	// ==========================================================================================================================
	// L'affichage de l'image permettant de retourner en haut de la page
	// ==========================================================================================================================
	window.addEventListener("scroll", function() {
		DOMFooter.lastElementChild.style.bottom = (window.scrollY < 4000 ? "-40px" : "10px");
	});
	
	// ==========================================================================================================================
	// La croix du bloc <debug> au survol de la souris
	// ==========================================================================================================================
	// à implémenter...
	
	// ==========================================================================================================================
	// Les images des blocs <header> et <footer> au survol de la souris : Forum, Nous trouver, Nous contacter, Mon compte, Mentions légales, CGU, Politique de confidentialité, Plan du site, ...
	// ==========================================================================================================================
	// à implémenter ...
	
	// ==========================================================================================================================
	// Les logos du <footer> : Facebook, Twitter, Youtube, ...
	// ==========================================================================================================================
	// à implémenter ...
	
}

