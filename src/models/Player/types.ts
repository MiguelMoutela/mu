import { TeamType } from '../Team/types';

export interface PlayerType {
    name: String;
    age: String;
    position: String;
    number?: Number;
    team?: TeamType;
}