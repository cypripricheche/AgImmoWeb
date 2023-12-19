/** =============================================================================================================================
 * Fichier				: desktopMenu.js
 * Objectif(s)			: Gestion du menu desktop
 * ==============================================================================================================================
 */

// ==============================================================================================================================
// Reformatage du texte du sous-menu desktop (en minuscule avec la première lettre en majuscule)
// ==============================================================================================================================
/** 
 * Reformatage du texte du sous-menu desktop (en minuscule avec la première lettre en majuscule)
 */
function reformatDesktopMenu() {
	for (const elt1 of DOMDesktopMenu.children) {
		for (const elt2 of elt1.lastElementChild.firstElementChild.children) {
			for (const elt3 of elt2.children) {
				elt3.innerHTML = ucFirst(elt3.innerHTML);
			}
		}
	}
}

