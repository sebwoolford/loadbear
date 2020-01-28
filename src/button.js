import {html, render} from "lit-html";
import {LbBase} from "./base";

class LbButton extends LbBase {

    static get observedAttributes() { return ['brand', 'color']; }

    getTemplate(brand, color, buttonText, anchor) {
        if (anchor) {
            anchor.setAttribute('class', '');
            anchor.classList.add(`lb-${brand}-${color}`);
        } else {
            return html`<button class="lb-${brand}-${color}">${buttonText}</button>`;
        }
    }

    getInputs() {
        return [
            this.getInput('brand', 'brand1'),
            this.getInput('color', 'grey'),
            this.getChildText('button', true),
            this.getChild('a', true)
        ];
    }

}

customElements.define('lb-button', LbButton);