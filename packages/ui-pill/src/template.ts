import {html} from 'lit-element';
import {MyElement} from './index';

export default function template(this: MyElement) {
  return html`
    <h1>Hello, ${this.name}!</h1>
    <button @click=${this._onClick} part="button">
      Click Count: ${this.count}
    </button>
    <slot></slot>
  `;
}
