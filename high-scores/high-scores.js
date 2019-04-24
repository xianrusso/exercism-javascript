export class HighScores {
  constructor(input) {
    this.scores = input;
  }

  get latest() {
    return this.scores.slice(-1)[0];
  }

  get personalBest() {
    return this.scores.sort()[0];
  }

  get personalTopThree() {
    return this.scores.sort((a, b) => b - a).slice(0, 3);
  }
}