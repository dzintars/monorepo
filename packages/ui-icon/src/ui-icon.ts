import {LitElement, customElement, property, TemplateResult} from 'lit-element';
import style from './style';
import template from './template';

@customElement('ui-icon')
export class UiIcon extends LitElement {
  public static styles = [style];
  // public static get styles() {
  //   return [
  //     GlobalStyle,
  //     Style
  //   ];
  // }

  @property()
  name = 'World';

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

declare global {
  interface HTMLElementTagNameMap {
    'ui-icon': UiIcon;
  }
}
