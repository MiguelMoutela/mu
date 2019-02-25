import { Document, Schema, Model, model } from "mongoose";
import { ObjectID } from "mongodb";

import { PlayerType } from "./types";

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

interface PlayerModel extends PlayerType, Document {}

const PlayerSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    number: {
        type: Number
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: "Team"
    }
});

const Player: Model<PlayerModel> = model<PlayerModel>("Player", PlayerSchema);

export default Player;
