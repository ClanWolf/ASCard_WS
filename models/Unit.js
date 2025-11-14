// models/Unit.js

const UnitStatus = require("./UnitStatus");
const Pilot = require("./Pilot");
const Formation = require("./Formation");

class Unit {
  constructor(data) {
    this.unitId = data.unitid;
    this.unit_name = data.unit_name;
    this.type = data.as_tp;
    this.pilot = new Pilot(data); // 1zu1
    this.formation = new Formation(data);
    this.unit_status = []; //1zu1
  }

  addStatus(row) {
    // nur hinzufügen, wenn tatsächlich Statusdaten vorhanden sind
    if (row.armor !== null || row.heat !== null) {
      const status = new UnitStatus(row);
      this.unit_status.push(status);
    }
  }
}

module.exports = Unit;
