import { __decorate } from "tslib";
import { LitElement, customElement, property } from 'lit-element';
import style from './style';
import template from './template';
let UiIcon = class UiIcon extends LitElement {
    constructor() {
        super(...arguments);
        // public static get styles() {
        //   return [
        //     GlobalStyle,
        //     Style
        //   ];
        // }
        this.name = 'World';
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