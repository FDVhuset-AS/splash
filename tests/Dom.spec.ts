// @ts-strict

import { JSDOM } from 'jsdom'
import { beforeEach, describe, expect, it } from 'vitest'
import {
	createElement,
	injectAsFirstChild,
	prepareParentOf,
	cleanSplashParentOf,
	showElement,
	hideElement,
	setSplashHostClass,
	move,
	elementFrom,
	elementIsSplash,
	getRecycledSplash,
} from '../src/ts/core/Dom'
import { Splash } from '../src/ts/core/Splash'
import { Service } from '../src/ts/core/Service'
import { ClassListAction } from '../src/ts/types/Types'

describe('DOMUtilities', () => {
	// Reset the DOM before each test
	beforeEach(() => {
		const dom = new JSDOM()
		// @ts-ignore
		globalThis.window = dom.window
		globalThis.document = dom.window.document
		globalThis.DOMParser = dom.window.DOMParser
		globalThis.Element = dom.window.Element
	})

	it('Should be able to create a Splash component', () => {
		const getClass = (element: Element) => element.classList[0]
		const element = createElement()
		const contentElement = <Element>element.firstElementChild
		const textElement = <Element>contentElement.firstElementChild
		const spinnerElement = <Element>textElement.nextElementSibling

		expect(getClass(element)).toBe('s')
		expect(getClass(contentElement)).toBe('sc')
		expect(getClass(textElement)).toBe('st')
		expect(getClass(spinnerElement)).toBe('ss')
	})

	it('Should be able to inject a Splash component', () => {
		const elementA = createElement()
		const elementB = createElement()
		const destinationElement = document.createElement('div')
		injectAsFirstChild(elementA, destinationElement)
		expect(destinationElement.firstElementChild).toBe(elementA)
		injectAsFirstChild(elementB, destinationElement)
		expect(destinationElement.firstElementChild).toBe(elementB)
	})

	it('Should be able to prepare the parent of a Splash component', () => {
		const s = new Splash()
		const parent = document.createElement('div')
		parent.appendChild(s.getNSElement())
		prepareParentOf(s)
		expect(parent.classList.contains(Splash.SplashHostClass)).toBe(true)
	})

	it('Should be able to clean the parent of a Splash component', () => {
		const s = new Splash()
		const parent = document.createElement('div')
		parent.appendChild(s.getNSElement())
		parent.classList.add(Splash.SplashClass)
		cleanSplashParentOf(s)
		expect(parent.classList.contains(Splash.SplashHostClass)).toBe(false)
	})

	it('Should be able to convert an element reference to an element', () => {
		const element = document.createElement('div')
		document.body.appendChild(element)
		element.id = 'test-id'
		element.classList.add('test-class')
		element.setAttribute('data-test', 'test')
		expect(elementFrom('#test-id')).toBe(element)
		expect(elementFrom('.test-class')).toBe(element)
		expect(elementFrom('div[data-test="test"]')).toBe(element)
		expect(elementFrom(element)).toBe(element)
	})

	it('Should be able to check if an element is a Splash element', () => {
		const elementA = new Splash().getNSElement()
		const elementB = document.createElement('div')
		expect(elementIsSplash(elementA)).toBe(true)
		expect(elementIsSplash(elementB)).toBe(false)
	})

	it('Should be able to recycle a Splash component', () => {
		const destination = document.createElement('div')
		document.body.appendChild(destination)
		const ss = Service.getInstance()
		const id = ss.showInside(destination, 'Hello World!')
		const recycled = getRecycledSplash(destination)
		expect(recycled?.getId()).toBe(id)
	})

	it('Should be able to show an element', () => {
		const element = document.createElement('div')
		showElement(element)
		expect(element.style.display).toBe('flex')
	})

	it('Should be able to hide an element', () => {
		const element = document.createElement('div')
		hideElement(element)
		expect(element.style.display).toBe('none')
	})

	it('Should be able to alter the class of a Splash host', () => {
		const div = document.createElement('div')
		setSplashHostClass(div, ClassListAction.Add)
		expect(div.classList.contains(Splash.SplashHostClass)).toBe(true)
		setSplashHostClass(div, ClassListAction.Remove)
		expect(div.classList.contains(Splash.SplashHostClass)).toBe(false)
	})

	it('Should be able to move a Splash component', () => {
		const s = new Splash()
		const destination = document.createElement('div')
		move(s.getNSElement(), destination)
		expect(destination.firstElementChild).toBe(s.getNSElement())
	})
})
