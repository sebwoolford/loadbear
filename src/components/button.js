import {html} from "lit-html";
import {getInput, getChild, getChildText} from "./dom-utils";
import {render} from "lit-html";

export class LbButton extends HTMLElement {

    static get observedAttributes() { return ['brand', 'color']; }

    connectedCallback() {
        this.doRender();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log('Attributes changed (name, oldValue, newValue)', name, oldValue, newValue);
        this.doRender();
    }

    doRender() {
        setTimeout(() => {
            const brand = getInput(this, 'brand', 'brand1');
            const color = getInput(this, 'color', 'grey');
            const buttonText = getChildText(this, 'button', true);
            const anchor = getChild(this, 'a', true);

            if (anchor) {
                anchor.setAttribute('class', '');
                anchor.classList.add(`lb-${brand}-${color}`);
            } else {
                const template = html`<button class="lb-${brand}-${color}">${buttonText}</button>`;
                render(template, this);
            }
        }, 0);
    }

    getTemplate(brand, color, buttonText, anchor) {

    }

}

customElements.define('lb-button', LbButton);