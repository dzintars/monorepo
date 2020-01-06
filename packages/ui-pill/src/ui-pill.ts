import {LitElement, customElement, property, TemplateResult} from 'lit-element';
import style from './style';
import template from './template';
import {Pill, Styling} from './models';

declare global {
  interface HTMLElementTagNameMap {
    'ui-pill': UiPill;
  }
}

@customElement('ui-pill')
export class UiPill extends LitElement {
  public static styles = [style];
  // public static get styles() {
  //   return [
  //     GlobalStyle,
  //     Style
  //   ];
  // }

  @property({type: Object})
  public pill: Pill = {
    text: 'Not set',
  };

  @property({type: Object})
  public styling: Styling = {
    height: '1rem',
    background: '#006AFF',
    color: '#FFFFFF',
  };

  protected render(): TemplateResult {
    return template.call(this);
  }
}

// customElements.define('ui-pill', UiPill);

declare global {
  interface HTMLElementTagNameMap {
    'ui-pill': UiPill;
  }
}
