/** =============================================================================================================================
 * Fichier				: configuration.js
 * Objectif(s)			: Configuration générale : déclaration des variables globales, appel des fonctions, ...
 * ==============================================================================================================================
 */

// ==============================================================================================================================
// Déclaration des variables globales relatives aux blocs
// ==============================================================================================================================
var DOMBody;
var DOMLogo;
var DOMDesktopMenu;
var DOMTopContent;
var DOMContent;
var DOMDebugTrigger;			/* Le bloc qui permet de lancer l'affichage du bloc de débogage. Ce bloc est créé dynamiquement seulement si on gère le débogage */
var DOMDebug;					/* Le bloc de débogage */
var DOMFooter;

// ==============================================================================================================================
// Déclaration des variables globales relatives au paramétrage des pages
// ==============================================================================================================================
var pictureFolder			= "/picture/";					// le dossier des images
var pictureVersion			= "2";							// la version des images
var debuggingManagement		= true;							// Gère (true) ou ne gère pas (false) le bloc de débogage
var menuBiens				= 1;							// Menu de sélection des biens							
var menuLieu				= 2;							// Menu de sélection des lieux							
var menuBudget				= 3;							// Menu de choix des plages de loyers							
var menuSurface				= 4;							// Menu de choix des plages de surface habitable								
var menuPieces				= 5;							// Menu de sélection du nombre de pièces							

// ==============================================================================================================================
// Initialisations / traitements après que le DOM ait été complètement chargé
// ==============================================================================================================================
document.addEventListener("DOMContentLoaded", function() {
	
	// ==========================================================================================================================
	// Initialisation des variables globales représentant les différents blocs des pages
	// ==========================================================================================================================
	initializeGeneral();

	// ==========================================================================================================================
	// Reformatage (majuscule - minuscule) des items du sous-menu desktop (fichier desktopMenu.js)
	// ==========================================================================================================================
	reformatDesktopMenu();

	// ==========================================================================================================================
	// Gère le positionnement du bloc topContent lors du redimensionnement de la page (événement resize) (fichier topContent.js)
	// ==========================================================================================================================
	manageTopContent();
	window.addEventListener("resize", manageTopContent);

	// ==========================================================================================================================
	// Définit dynamiquement la classe clearfix pour les blocs template1, la classe gridx (x valant 1, 2, 3 ou 4) pour les blocs template2 (grille avec des items de longueur variable) et la classe fixeGridx (x valant 1, 2, 3 ou 4) pour les blocs template3 (grille avec des items de longueur fixe) (fichier content.js)
	// ==========================================================================================================================
	manageTemplateBlock();

	// ==========================================================================================================================
	// Création dynamique des liens du pied de page (footer) (fichier footer.js)
	// ==========================================================================================================================
	createFooter();
	
	// ==========================================================================================================================
	// Gère le débogage (fichier debug.js)
	// ==========================================================================================================================
	//manageDebug();

	// ==========================================================================================================================
	// Gère les images - Définit la source de certaines images et gère le survol de la souris (fichier picture.js)
	// ==========================================================================================================================
	managePicture();
	
	// ==========================================================================================================================
	// Déclaration des gestionnaires d'événements
	// ==========================================================================================================================
	// logo - redirection vers la page d'accueil du site lors du clic sur le logo
//	DOMLogo.addEventListener("click", function() {
//		window.location.href = "./index.php";
//	});
});

function initializeGeneral() {
	DOMBody							= window.document.getElementsByTagName("body")[0];
	DOMLogo							= window.document.getElementById("logo");
	DOMDesktopMenu					= window.document.getElementById("desktopMenu");
	DOMTopContent					= window.document.getElementById("topContent");
	DOMContent						= window.document.getElementById("content");
	DOMDebugTrigger					= window.document.getElementById("debugTrigger");
	DOMDebug						= window.document.getElementById("debug");
	DOMFooter						= window.document.getElementsByTagName("footer")[0];
}
