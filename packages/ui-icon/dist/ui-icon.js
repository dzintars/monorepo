import { LitElement, customElement, property } from 'lit-element';
import style from './style';
import template from './template';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let UiIcon = class UiIcon extends LitElement {
    constructor() {
        super(...arguments);
        // public static get styles() {
        //   return [
        //     GlobalStyle,
        //     Style
        //   ];
        // }
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    render() {
        return template.call(this);
    }
    _onClick() {
        this.count++;
    }
    foo() {
        return 'foo';
    }
};
UiIcon.styles = [style];
__decorate([
    property()
], UiIcon.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], UiIcon.prototype, "count", void 0);
UiIcon = __decorate([
    customElement('ui-icon')
], UiIcon);
export { UiIcon };
//# sourceMappingURL=ui-icon.js.map