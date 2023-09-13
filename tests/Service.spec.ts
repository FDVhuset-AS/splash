// @ts-strict

import { JSDOM } from 'jsdom'
import { beforeEach, expect, describe, it } from 'vitest'
import { getRecycledSplash } from '../src/ts/core/Dom'
import { Service } from '../src/ts/core/Service'
import { Splash } from '../src/ts/core/Splash'

describe('SplashService', () => {
	const ss = Service.getInstance()
	const getById = (id: string): Splash | undefined =>
		ss.stack.find((s: Splash) => s.getId() === id)

	// Reset the DOM before each test
	beforeEach(() => {
		const dom = new JSDOM()
		// @ts-ignore
		globalThis.window = dom.window
		globalThis.document = dom.window.document
		globalThis.DOMParser = dom.window.DOMParser
		globalThis.Node = dom.window.Node
		globalThis.Element = dom.window.Element
	})

	it('Should be able to create an instance', () => {
		expect(ss).toBeInstanceOf(Service)
	})

	it('Should be able to get the same singleton instance', () => {
		const ss1 = Service.getInstance()
		const ss2 = Service.getInstance()
		expect(ss1).toBe(ss2)
	})

	it('Should be able to start the service', () => {
		Service.start()
		expect(ss).toBeInstanceOf(Service)
	})

	it('Should be able to retrieve an existing Splash instance from a destination node', () => {
		const destinationNode = document.createElement('div')
		document.body.appendChild(destinationNode)
		destinationNode.id = 'test-id'
		const s1 = getRecycledSplash(destinationNode) as Splash
		expect(s1).toBeNull()
		let nsId = ss.showInside('erroneous-selector', 'Hello World!')
		expect(nsId).toBeNull()
		nsId = ss.showInside('div[id="test-id"]', 'Hello World!')
		const s2 = getRecycledSplash(destinationNode)
		expect(s2).toBeInstanceOf(Splash)
		expect(s2?.getId()).toBe(nsId)
	})

	it('Should be able to show a Splash in the browser window', () => {
		const text = 'Hello World!'
		const is = ss.show(text)
		const element = document.getElementById(is)
		const s = getById(is)
		const nsText = s?.getNSTextElement().innerText
		expect(element).toBe(s?.getNSElement())
		expect(nsText).toBe(text)
	})

	it('Should be able to show a Splash over a given element', () => {
		const text = 'Hello World!'
		const destination = document.createElement('div')
		destination.id = 'test-id'
		document.body.appendChild(destination)
		const id = <string>ss.showInside('#test-id', text)
		const element = document.getElementById(id)
		const s = getById(id)
		const splashText = s?.getNSTextElement().innerText
		expect(element).toBe(s?.getNSElement())
		expect(splashText).toBe(text)
	})

	it('Should be able to hide a Splash', () => {
		const nsId = ss.show()
		ss.hide()
		const ns = getById(nsId)
		expect(ns?.getNSElement()).toBeUndefined()
	})

	it('Should be able to hide all Splashes', () => {
		const div = (id: string) => {
			const d = document.createElement('div')
			d.id = id
			return d
		}
		document.body.append(div('a'), div('b'), div('c'))
		ss.hideAll()
		expect(ss.stack.length).toBe(0)
		ss.showInside('#a', 'A')
		ss.showInside('#b', 'B')
		ss.showInside('#c', 'C')
		expect(ss.stack.length).toBe(3)
		ss.hideAll()
		expect(ss.stack.length).toBe(0)
	})

	it('Should be able to hide a Splash based on its ID', () => {
		const id = ss.show()
		ss.hideId(id)
		const ns = getById(id)
		expect(ns?.getNSElement()).toBeUndefined()
	})

	it('Should be able to hide a Splash residing inside a given element', () => {
		const destination = document.createElement('div')
		destination.id = 'test-id'
		document.body.appendChild(destination)
		let id = ss.showInside('#test-id')
		id = ss.hideInside('erroneous-selector')
		expect(id).toBeNull()
		id = <string>ss.hideInside('#test-id')
		const ns = getById(id)
		expect(ns?.getNSElement()).toBeUndefined()
	})
})
