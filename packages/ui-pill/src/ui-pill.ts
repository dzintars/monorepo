import {LitElement, customElement, property, TemplateResult} from 'lit-element';
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

  protected render(): TemplateResult {
    return template.call(this);
  }

  public _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

// customElements.define('ui-pill', UiPill);
