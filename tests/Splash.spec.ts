// @ts-strict

import { describe, it, expect, beforeEach } from 'vitest'
import { JSDOM } from 'jsdom'
import { Splash } from '../src/ts/core/Splash'

describe('Splash', () => {
	// Reset the DOM before each test
	beforeEach(() => {
		const dom = new JSDOM()
		// @ts-ignore
		globalThis.window = dom.window
		globalThis.document = dom.window.document
		globalThis.DOMParser = dom.window.DOMParser
	})

	it('Should be a valid Splash', () => {
		const s = new Splash()
		const element = s.getNSElement()

		expect(element).not.toBeUndefined()
		expect(element.id).toBe(s.getId())
		expect(element.classList.contains(Splash.SplashClass)).toBe(true)

		const contentElement = s.getNSContentElement()
		expect(contentElement).not.toBeUndefined()

		const textElement = s.getNSTextElement()
		expect(textElement).not.toBeUndefined()

		const spinnerElement = <HTMLElement>textElement.nextElementSibling
		expect(spinnerElement).not.toBeUndefined()

		const spinnerSVGElement = <HTMLElement>spinnerElement.firstElementChild
		expect(spinnerSVGElement).not.toBeUndefined()
	})

	it('Should be able to set text', () => {
		const s = new Splash()
		const text = 'Hello World!'
		s.setText(text)
		expect(s.getNSTextElement().innerText).toBe(text)
	})

	it('Should be able to hide text', () => {
		const s= new Splash()
		s.hideText()
		expect(s.getNSTextElement().style.display).toBe('none')
	})

	it('Should be able to show text', () => {
		const s = new Splash()
		s.setText('Hello World!')
		s.hideText()
		s.showText()
		expect(s.getNSTextElement().style.display).toBe('flex')
	})

	it('Should be able to remove itself from DOM', () => {
		const s = new Splash()
		s.remove()
		expect(s.getNSElement()).toBeUndefined()
	})
})
