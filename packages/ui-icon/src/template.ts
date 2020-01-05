import {html} from 'lit-element';
import {UiIcon} from './ui-icon';

export default function template(this: UiIcon) {
  return html`
    <h1>Hello, ${this.name}!</h1>
    <button @click=${this._onClick} part="button">
      Click Count: ${this.count}
    </button>
    <slot></slot>
  `;
}
