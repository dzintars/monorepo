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
        this.pill = {
            text: 'Not set',
        };
        this.styling = {
            height: '1rem',
            background: '#006AFF',
            color: '#FFFFFF',
        };
    }
    render() {
        return template.call(this);
    }
};
UiPill.styles = [style];
__decorate([
    property({ type: Object })
], UiPill.prototype, "pill", void 0);
__decorate([
    property({ type: Object })
], UiPill.prototype, "styling", void 0);
UiPill = __decorate([
    customElement('ui-pill')
], UiPill);
export { UiPill };
//# sourceMappingURL=ui-pill.js.map