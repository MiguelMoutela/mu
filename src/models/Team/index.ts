import { Document, Schema, Model, model } from "mongoose";
import { ObjectID } from "mongodb";

import { TeamType } from "./types";

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

interface TeamModel extends TeamType, Document {}

const TeamSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: "Player"
    }]
});

const Team: Model<TeamModel> = model<TeamModel>("Team", TeamSchema);

export default Team;