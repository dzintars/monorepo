import { LitElement, TemplateResult } from 'lit-element';
declare global {
    interface HTMLElementTagNameMap {
        'ui-pill': UiPill;
    }
}
export declare class UiPill extends LitElement {
    static styles: import("lit-element").CSSResult[];
    /**
     * The name to say "Hello" to.
     */
    name: string;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    protected render(): TemplateResult;
    _onClick(): void;
    foo(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'ui-pill': UiPill;
    }
}
