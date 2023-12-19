/** =============================================================================================================================
 * Fichier				: node.js
 * Objectif(s)			: Gestion des noeuds
 * ==============================================================================================================================
 */

/** 
 * Insère un noeud après un élément
 */
function insertAfter(newElement, targetElement) {
	let parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else {
		parent.insertBefore(newElement, targetElement.nextElementSibling);
	}
}

/** 
 * Supprime tous les éléments d'un noeud
 */
function deleteAllChild(node) {
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
}

/** 
 * Modifie la visibilité d'un élément
 * @param l'élément ou l'identifiant de cet élément
 */
function toggleVisibility(element) {
	if (typeof element == "string") {
		element = document.getElementById(element);
	}
	if (element.style.visibility == "hidden") {
		element.style.visibility = "visible";
	}else {
		element.style.visibility = "hidden";
	}
}
