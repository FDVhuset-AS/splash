import Splash from '../core/Service'
import { ServiceInterface } from '../core/ServiceInterface'

export class Service extends Splash.Service {}

declare global {
	export const splash: ServiceInterface
	export interface Window {
		splash: ServiceInterface
	}
	export interface window {
		splash: ServiceInterface
	}
}
