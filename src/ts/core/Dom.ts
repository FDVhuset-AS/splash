// @ts-strict

import { Reference, GUIDString, ClassListAction } from '../types/Types'
import { Service } from './Service'
import { Splash } from './Splash'

/**
 * # DOM Utilities
 * A collection of functions that are used by the Splash classes.
 * @see Splash
 * @see Service
 * @author FDVhuset AS <edb@fdvhuset.no>
 */

/**
 * # Create Element
 * Return the main Splash element.
 */
export function createElement(): HTMLDivElement {
	return new DOMParser().parseFromString(
		'<div class=s><div class=sc><div class=st></div><div class=ss><svg viewBox="0 0 50 50"><circle class=path cx=25 cy=25 r=20 fill=none></circle></svg></div></div></div>',
		'text/html'
	).body.firstChild as HTMLDivElement
}

/**
 * # Inject	as First Child
 * Insert element into the target element as its first child.
 * @param element Element to inject.
 * @param targetElement Element in which the first element is to be injected.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/children
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 * @see https://developer.mozilla.org/docs/Web/API/NodeList/item
 */
export function injectAsFirstChild(
	element: Element,
	targetElement: Element
): void {
	const targetHasChild = targetElement.children.length > 0
	if (targetHasChild) {
		targetElement.insertBefore(element, targetElement.children.item(0))
	} else {
		targetElement.append(element)
	}
}

/**
 * # Set NS Host Class
 * Add or remove the `sh` class to the `element`.
 * @param element Element to which the `sh` class will be added or removed.
 * @param action Action to perform ('add' or 'remove').
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
 */
export function setSplashHostClass(
	element: Element | null,
	action: ClassListAction
): void {
	element?.classList[action](Splash.SplashHostClass)
}

/**
 * # Prepare Parent Of
 * Add the `sh` class to the parent of the Splash element.
 * @param ns Splash instance.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/parentElement
 */
export function prepareParentOf(ns: Splash): void {
	setSplashHostClass(ns.getNSElement().parentElement, ClassListAction.Add)
}

/**
 * # Clean Splash Parent Of
 * Remove the `sh` class from the parent of the Splash element.
 * @param s Splash instance.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/parentElement
 */
export function cleanSplashParentOf(s: Splash): void {
	setSplashHostClass(s.getNSElement().parentElement, ClassListAction.Remove)
}

/**
 * # Show Element
 * Set the `display` property of the `element` to `flex`.
 * @param element Element to show.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
 */
export function showElement(element: HTMLElement): void {
	element.style.display = 'flex'
}

/**
 * # Hide Element
 * Set the `display` property of the `element` to `none`.
 * @param element Element to hide.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
 */
export function hideElement(element: HTMLElement): void {
	element.style.display = 'none'
}

/**
 * # Element From
 * Convert the element reference to an element.
 * @param ref Reference to an element.
 * @returns { Element | null } Element or null.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node
 */
export function elementFrom(ref: Reference): Element | null {
	return ref instanceof Element ? ref : document.querySelector(ref || '')
}

/**
 * # Element Is NS
 * Check if the element is a Splash element.
 * This is determined by the presence of the `s` class on the element.
 * @param element Element to check.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains
 */
export function elementIsSplash(element: Element): boolean {
	return element?.classList?.contains(Splash.SplashClass) ?? false
}

/**
 * # Move
 * Move an Element to another Element.
 * @param element Element to move
 * @param targetElement Target element
 */
export function move(element: Element, targetElement: Element): void {
	// Clean the current NS host element.
	setSplashHostClass(element.parentElement, ClassListAction.Remove)
	// Assign new NS host element.
	setSplashHostClass(targetElement, ClassListAction.Add)
	injectAsFirstChild(element, targetElement)
}

/**
 * # Get Recycled NS
 * Return the Splash instance inside the target element if it exists.
 * @param targetElement Element wherein the Splash instance is to reside.
 * @returns { Splash | null } Splash instance or null.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/firstElementChild
 */
export function getRecycledSplash(targetElement: Element): Splash | null {
	const firstChild = targetElement.firstElementChild
	const hasChild = firstChild !== null
	const targetAlreadyHasNS = hasChild && elementIsSplash(firstChild)
	if (targetAlreadyHasNS) {
		const id: GUIDString = firstChild.id
		const nss = Service.getInstance()
		return nss.stack.find((s: Splash) => s.getId() === id) ?? null
	}

	return null
}
