import Field from './field';

export default class Game {
  constructor(fieldElem, scoreElem) {
    this.field = new Field(fieldElem);
    this.score = scoreElem;
    this.points = 0;
    this.goblinIdx = this.getNewPosition(-1);
    this.init(fieldElem);
    this.renderGoblin(this.goblinIdx);
  }

  init(fieldElem) {
    fieldElem.addEventListener('click', (e) => {
      if (e.target.classList.contains('goblin')) {
        this.points++;
        this.score.textContent = `Score: ${this.points}`;
        e.target.classList.remove('goblin');
      }
    });
  }

  renderGoblin(idx) {
    this.field.cells[idx].classList.add('goblin');
  }

  move() {
    if (this.goblinIdx > -1) {
      this.field.cells[this.goblinIdx].classList.remove('goblin');
    }

    this.goblinIdx = this.getNewPosition(this.goblinIdx);
    this.renderGoblin(this.goblinIdx);
  }

  getNewPosition(goblinIdx) {
    const randIdx = Math.floor(Math.random() * this.field.cells.length);
    if (goblinIdx === randIdx) {
      return this.getNewPosition(goblinIdx);
    }
    return randIdx;
  }
}
