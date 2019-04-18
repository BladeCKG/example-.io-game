const Constants = require('../shared/constants');

class Player {
  constructor(username, x, y) {
    this.username = username;
    this.hp = Constants.PLAYER_MAX_HP;
    this.x = x;
    this.y = y;
    this.direction = Math.random() * 2 * Math.PI; // 0 is north
  }

  update(dt) {
    this.x += dt * Constants.PLAYER_SPEED * Math.sin(this.direction);
    this.y -= dt * Constants.PLAYER_SPEED * Math.cos(this.direction);

    // Make sure the player stays in bounds
    this.x = Math.max(0, Math.min(Constants.MAP_SIZE, this.x));
    this.y = Math.max(0, Math.min(Constants.MAP_SIZE, this.y));
  }

  setDirection(dir) {
    this.direction = dir;
  }

  distanceTo(object) {
    const dx = this.x - object.x;
    const dy = this.y - object.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  serializeForUpdate() {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction,
    };
  }
}

module.exports = Player;
