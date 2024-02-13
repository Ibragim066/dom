/* eslint-disable linebreak-style */
export default class Field {
  constructor(element) {
    this.cellls = [];

    for (let i = 0; i < 16; i++) {
      const item = document.createElement('div');
      item.classList.add('cell');
      this.cellls.push(item);
      element.insertBefore(item, null);
    }
  }
}
