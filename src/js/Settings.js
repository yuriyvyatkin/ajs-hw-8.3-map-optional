export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.user = new Map();

    this.availableSettings = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);

    this.user.set = (key, value) => {
      let availableValues;
      if (this.availableSettings.has(key)) {
        availableValues = this.availableSettings.get(key);
        if (availableValues.includes(value)) {
          Map.prototype.set.call(this.user, key, value);
        }
      }
    };
  }

  getSettings() {
    return new Map([...this.default, ...this.user]);
  }
}
