import { __decorate } from "tslib";
import { LitElement, customElement, property } from 'lit-element';
import style from './style';
import template from './template';
let UiPill = class UiPill extends LitElement {
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
UiPill.styles = [style];
__decorate([
    property()
], UiPill.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], UiPill.prototype, "count", void 0);
UiPill = __decorate([
    customElement('ui-pill')
], UiPill);
export { UiPill };
//# sourceMappingURL=ui-pill.js.map