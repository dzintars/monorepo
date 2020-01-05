import { LitElement, TemplateResult } from 'lit-element';
export declare class UiIcon extends LitElement {
    static styles: import("lit-element").CSSResult[];
    name: string;
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
