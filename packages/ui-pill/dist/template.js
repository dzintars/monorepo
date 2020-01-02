import { html } from 'lit-element';
export default function template() {
    return html `
    <h1>Hello, ${this.name}!</h1>
    <button @click=${this._onClick} part="button">
      Click Count: ${this.count}
    </button>
    <slot></slot>
  `;
}
//# sourceMappingURL=template.js.map