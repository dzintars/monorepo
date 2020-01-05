import { LitElement, TemplateResult } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class UiIcon extends LitElement {
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
        'ui-icon': UiIcon;
    }
}
