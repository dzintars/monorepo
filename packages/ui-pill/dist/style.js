import { css } from 'lit-element';
export default css `
  :host([hidden]) {
    display: none;
  }
  :host {
    display: block;
    border: solid 1px gray;
    padding: 16px;
    max-width: 800px;
  }
`;
//# sourceMappingURL=style.js.map