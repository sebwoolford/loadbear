import {html, render} from "lit-html";
import {LbBase} from "./base";

class LbImageCta extends LbBase {

    static get observedAttributes() { return ['brand', 'image-position']; }

    getInputs() {
        return [
            this.getAttribute('brand'),
            this.getAttribute('image-position'),
            this.getChild('h3'),
            this.getChild('article'),
            this.getChild('img'),
            this.getChild('lb-button')
        ];
    }

    getTemplate(brand, imagePosition, h3, article, image, button) {

        console.log('image-cta article', article);

        if (brand && !button.getAttribute('brand')) {
            button.setAttribute('brand', brand);
        }

        const flexRowClass = imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse';

        return html`
            <section class="container-fluid">
                <div class="d-flex ${flexRowClass}">
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
    }

}

customElements.define('lb-image-cta', LbImageCta);