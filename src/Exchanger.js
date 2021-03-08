"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exchanger = void 0;
var Exchanger = /** @class */ (function () {
    function Exchanger(gold, silver, copper) {
        this.gold = gold;
        this.silver = silver;
        this.copper = copper;
    }
    Exchanger.prototype.toCopper = function () {
        var goldToCopper = (this.gold * 20) * 12;
        var silverToCopper = this.silver * 12;
        return goldToCopper + silverToCopper + this.copper;
    };
    return Exchanger;
}());
exports.Exchanger = Exchanger;
/* export class Exchanger {
  private gold: number;
  private silver: number;
  private copper: number;

  constructor(gold: number, silver: number, copper: number) {
    this.gold = gold;
    this.silver = silver;
    this.copper = copper;
  }

  public toCopper(): number {
    const goldToCopper = (this.gold * 20) * 12;
    const silverToCopper = this.silver * 12;
    return goldToCopper + silverToCopper + this.copper;
  }
} */ 
