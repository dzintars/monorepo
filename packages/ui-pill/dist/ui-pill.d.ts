import { LitElement, TemplateResult } from 'lit-element';
import { Pill, Styling } from './models';
declare global {
    interface HTMLElementTagNameMap {
        'ui-pill': UiPill;
    }
}
export declare class UiPill extends LitElement {
    static styles: import("lit-element").CSSResult[];
    pill: Pill;
    styling: Styling;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-pill': UiPill;
    }
}
