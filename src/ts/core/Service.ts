// @ts-strict

import { version } from '../../../package.json'
import '../../sass/s.sass'

import { SplashFinder, GUIDString, Reference } from '../types/Types'
import { cleanSplashParentOf, getRecycledSplash, move, elementFrom } from './Dom'
import { ServiceInterface } from './ServiceInterface'
import { Splash } from './Splash'

/**
 * # Service
 * A service class that handles Splash instances.
 * It's a singleton class and its instance resides in the Window object and
 * serves the public API of the Splash library.
 * @see Splash
 * @author FDVhuset AS <edb@fdvhuset.no>
 */
export class Service implements ServiceInterface {
	/**
	 * # Window Accessor Key
	 * Key to access SplashService instance in the Window object.
	 */
	public static readonly WindowAccessorKey = 'splash'

	/**
	 * # Instance
	 * Singleton instance of SplashService.
	 * @private
	 */
	private static instance: Service

	/**
	 * # Version
	 */
	public readonly version: string

	/**
	 * @inheritdoc
	 */
	public readonly stack: Splash[]

	/**
	 * # Constructor
	 * Private constructor to prevent multiple instances.
	 * @private
	 */
	private constructor() {
		this.version = version
		this.stack = []
	}

	/**
	 * # Find Index
	 * Find Splashck index by callback.
	 * @param callback Callback function that returns a boolean.
	 * @returns {number} Index of Splash instance in the stack or -1.
	 * @private
	 */
	private findIndex(callback: SplashFinder): number | -1 {
		return this.stack.findIndex(callback)
	}

	/**
	 * # Find
	 * Find Splash in the stack by callback.
	 * @param callback Callback function that returns a boolean.
	 * @returns {Splash | undefined} Splashefined
	 * @private
	 */
	private find(callback: SplashFinder): Splash | undefined {
		return this.stack.find(callback)
	}

	/**
	 * # Get Instance
	 * Singleton instance accessor
	 * @returns {Service} Splash
	 */
	public static getInstance(): Service {
		if (!Service.instance) {
			Service.instance = new Service()
		}
		return Service.instance
	}

	/**
	 * # Assign To Window
	 * Assign a SplashService instance to the Window object.
	 * The SplashService instance can be accessed in the window object
	 * using the key window accessor key.
	 * @see WindowAccessorKey
	 * @private
	 */
	private static assignToWindow(): void {
		Object.defineProperty(window, Service.WindowAccessorKey, {
			value: Service.getInstance(),
			writable: false,
		})
	}

	/**
	 * # Start
	 * Initialize and attach a Splash Service instance to the Window object.
	 */
	public static start(): void {
		Service.assignToWindow()
		window.addEventListener('load', () => {
			const ss = window[Service.WindowAccessorKey]
			const ssAssigned = ss instanceof Service
			if (!ssAssigned) {
				Service.assignToWindow()
			}
		})
	}

	/**
	 * # Create Splash
	 * Return new Splash instance and push it to the stack.
	 * @param text Text to display.
	 * @returns {Splash} Splash instance.
	 * @private
	 */
	private createNS(text?: string): Splash {
		const s = new Splash()
		s.setText(text || '')
		this.stack.push(s)
		return s
	}

	/**
	 * # Clean And Remove
	 * Remove Splash from DOM and clean its parent.
	 * @param s Splash instance.
	 * @returns {GUIDString} Splash ID.
	 * @private
	 */
	private cleanAndRemove(s: Splash): GUIDString {
		cleanSplashParentOf(s)
		return s.remove().getId()
	}

	/**
	 * # Stack Delete
	 * Remove Splash instance from the stack.
	 * @param s Splash instance.
	 * @returns {GUIDString | null} Splash ID or null if it doesn't exist.
	 * @private
	 */
	private stackDelete(s: Splash): GUIDString | null {
		let index = this.findIndex((o: Splash) => o.getId() === s.getId())
		if (index < 0) return null
		this.stack.splice(index, 1)
		return s.getId()
	}

	/**
	 * # Delete NS
	 * Remove Splash instance from both the stack and the
	 * @param callback Callback function.
	 * @returns {GUIDString | null} Splash ID or null if it doesn't exist.
	 * @private
	 */
	private deleteNS(callback: SplashFinder): GUIDString | null {
		const s = this.find(callback)
		if (s) {
			this.cleanAndRemove(s)
			return this.stackDelete(s)
		}
		return null
	}

	/**
	 * @inheritdoc
	 */
	public show(text?: string): GUIDString {
		let s = getRecycledSplash(document.body)
		if (!s) {
			s = this.createNS()
			move(s.getNSElement(), document.body)
		}
		return s.setText(text || '').getId()
	}

	/**
	 * @inheritdoc
	 */
	public showInside(ref: Reference, text?: string): GUIDString | null {
		const destinationNode: Element | null = elementFrom(ref)
		if (destinationNode) {
			let s = getRecycledSplash(destinationNode)
			if (!s) {
				s = this.createNS()
			}
			move(s.getNSElement(), <Element>destinationNode)
			return s.setText(text || '').getId()
		}

		return null
	}

	/**
	 * @inheritdoc
	 */
	public hide(): GUIDString | null {
		const s = this.stack.pop()
		return s ? this.cleanAndRemove(s) : null
	}

	/**
	 * @inheritdoc
	 */
	public hideAll(): void {
		this.stack.forEach(this.cleanAndRemove)
		this.stack.splice(0, this.stack.length)
	}

	/**
	 * @inheritdoc
	 */
	public hideId(id: GUIDString): GUIDString | null {
		return this.deleteNS((ns: Splash) => ns.getId() === id)
	}

	/**
	 * @inheritdoc
	 */
	public hideInside(ref: Reference): GUIDString | null {
		const node = elementFrom(ref)
		const cb = (ns: Splash) => ns.getNSElement().parentElement === node
		return node ? this.deleteNS(cb) : null
	}
}

export default { Service }
