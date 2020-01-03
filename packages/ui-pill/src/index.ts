/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, customElement, property} from 'lit-element';
import style from './style';
import template from './template';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('ui-pill')
export class UiPill extends LitElement {
  public static styles = [style];
  // public static get styles() {
  //   return [
  //     GlobalStyle,
  //     Style
  //   ];
  // }

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  protected render() {
    return template.call(this);
  }

  public _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  type NewType = UiPill;

  interface HTMLElementTagNameMap {
    'ui-pill': NewType;
  }
}
