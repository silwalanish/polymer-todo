import {PolymerElement, html} from '@polymer/polymer';
 
class HelloWorld extends PolymerElement {
  static get properties() { return { mood: String }}
  static get template() {
    return html`
      <style> .mood { color: green; } </style> 
      Web Components are <span class="mood">[[mood]]</span>!
    `;
  }
}

customElements.define('hello-world', HelloWorld);