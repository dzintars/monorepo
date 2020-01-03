import {html} from 'lit-element';
import {UiPill} from './ui-pill';

export default function template(this: UiPill) {
  return html`
    <h1>Hello, ${this.name}!</h1>
    <button @click=${this._onClick} part="button">
      Click Count: ${this.count}
    </button>
    <slot></slot>
  `;
}
