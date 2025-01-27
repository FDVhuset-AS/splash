// @ts-strict

import { GUIDString, Reference } from '../types/Types'
import { Splash } from './Splash'

export interface ServiceInterface {
	/**
	 * # Splash Stack
	 * For each Splash instance created, it's pushed to the stack.
	 * When a Splash instance is removed, it's removed from the stack.
	 * @see Splash
	 */
	readonly stack: Splash[]

	/**
	 * # Show
	 * Present a Splash in the browser window displaying the given text.
	 * @param text Text to display.
	 * @returns {GUIDString} Splash ID.
	 */
	show(text?: string): GUIDString

	/**
	 * # Show Inside
	 * Present a Splash over the given element displaying the given text.
	 * @param ref Reference an element.
	 * @param text Text to display.
	 * @returns {GUIDString | null} Splash ID or null if it doesn't exist.
	 */
	showInside(ref: Reference, text?: string): GUIDString | null

	/**
	 * # Hide
	 * Hide the last created Splash.
	 * @returns {GUIDString | null} Splash ID or null if it doesn't exist.
	 */
	hide(): GUIDString | null

	/**
	 * # Hide All
	 * Hide all Splashes.
	 */
	hideAll(): void

	/**
	 * # Hide ID
	 * Hide Splash by its ID.
	 * @param id Splash ID.
	 * @returns {GUIDString | null} Splash ID or null if it doesn't exist.
	 */
	hideId(id: GUIDString): GUIDString | null

	/**
	 * # Hide Inside
	 * Hide Splash inside the given element if it exists.
	 * @param ref Reference an element.
	 * @returns {GUIDString | null} Splash ID or null if it doesn't exist.
	 */
	hideInside(ref: Reference): GUIDString | null
}
