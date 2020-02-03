import {html, render} from "lit-html";
import {getInput, getChild} from "./dom-utils";

export class LbImageCta extends HTMLElement {

    static get observedAttributes() { return ['brand', 'image-position']; }

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
            let imagePosition = getInput(this, 'image-position');
            const h3 = getChild(this, 'h3');
            const article = getChild(this, 'article');
            const image = getChild(this, 'img');
            const button = getChild(this, 'lb-button');

            // Default the image position to the left for Brand1
            if (brand && !imagePosition && brand === 'brand1') {
                imagePosition = 'left';
            }

            // Default the image position to the right for Brand2
            if (brand && !imagePosition && brand === 'brand2') {
                imagePosition = 'right';
            }

            // Cascade the brand set on image-cta to the nested button component, if not set there
            if (brand && !button.getAttribute('brand')) {
                button.setAttribute('brand', brand);
            }

            const template = html`
                <section class="container-fluid">
                    <div class="d-flex ${imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'}">
                        <div class="col-6">
                            ${h3}
                            ${article}
                            ${button}
                        </div>
                        <div class="col-6">
                            ${image}
                        </div>
                    </div>
                </section>`;
            render(template, this);
        }, 0);
    }


}

customElements.define('lb-image-cta', LbImageCta);