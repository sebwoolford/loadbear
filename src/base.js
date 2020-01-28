import {render} from "lit-html";

export class LbBase extends HTMLElement {

    connectedCallback() {
        this.doRender();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log('Attributes changed (name, oldValue, newValue)', name, oldValue, newValue);
        this.doRender();
    }

    doRender() {
        // console.log('doRender()', this.getInputs());

        if(typeof this.getTemplate === 'undefined') {
            console.error('getTemplate must be set for component');
            return;
        }
        if(typeof this.getInputs === 'undefined') {
            console.error('getTemplate must be set for component');
            return;
        }

        const template = this.getTemplate(...this.getInputs());

        if (template) {
            render(template , this );
        }
    }

    getInput(name, defaultValue = '') {
        return this.getAttribute(name) || defaultValue;
    }

    getChild(tagName, optional = false, multiple = false) {
        let elements;
        if (multiple) {
            elements = this.querySelectorAll(tagName);
        } else {
            elements = this.querySelector(tagName);
        }
        if (!elements) {
            if (!optional) {
                console.error('Child tag or tags not found: ' + tagName);
            }
            return null;
        }
        return elements;
    }

    getChildText(tagName, optional = false) {
        const element = this.getChild(tagName, optional);

        if (!element) {
            return '';
        }
        return element.textContent;
    }
}