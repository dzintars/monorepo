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
  h1 {
    margin: 0;
  }
`;
//# sourceMappingURL=style.js.map