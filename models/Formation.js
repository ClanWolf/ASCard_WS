// models/Formation.js
class Formation {
    constructor(data) {
        this.formationid = data.formationid;
        this.formationshort = data.formationshort;
        this.formationname = data.formationname;
        this.formationtype = data.formationtype;
    }
}

module.exports = Formation;
