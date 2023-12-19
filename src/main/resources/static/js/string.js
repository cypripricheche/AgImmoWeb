/** =============================================================================================================================
 * Fichier				: string.js
 * Objectif(s)			: Gestion des chaînes de caractères
 * ==============================================================================================================================
 */

/** 
 * Supprime l'extension d'une chaine de caractères.
 * @example removeExtension("40px", "px") -> "40"
 */
function removeExtension(element, extension) {
	return element.substring(0, (element.length - extension.length)); /* Le second indice du substring n'est pas inclus */
}

/** 
 * Reformate la chaîne de caractères passée en paramètre en minuscule avec la première lettre en majuscule
 * @example transform("azERTy") -> "Azerty"
 */
function ucFirst(element) {
	return element.substring(0, 1).toUpperCase() + element.substring(1).toLowerCase();
}
