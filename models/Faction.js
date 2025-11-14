// models/Faction.js
class Faction {
  constructor(data) {
    this.factionname = data.factionname;
    this.factionshort = data.factionshort;
    this.factiontype = data.factiontype;
    this.factionimage = data.factionimage;
  }
}

module.exports = Faction;
