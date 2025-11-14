// models/UnitStatus.js
class UnitStatus {
  constructor(data) {
    this.heat = data.heat;
    this.armor = data.armor;
    this.unit_status = data.unit_status;
    this.round = data.round;
    this.structure = data.structure;
    this.active_narc = data.active_narc;
    this.active_tag = data.active_tag;
    this.active_water = data.active_water;
    this.active_routed = data.active_routed;
    this.active_bid = data.active_bid;
    this.unit_statusimageurl = data.unit_statusimageurl;
  }
}

module.exports = UnitStatus;
