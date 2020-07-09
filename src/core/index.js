import { combineReducers } from "redux";

import { User } from "./user";
import { Company } from "./company";
import { Poi } from "./poi";
import { Tags } from "./tags";
import { GreenScoreTypes } from "./greenScoreTypes";
import { Stats } from "./statsDashboard";
import { KnowIt } from "./knowIt";
import { Quizz } from "@core/quizz";
import { Challenge } from "@core/challenge";

const createRootReducer = () =>
  combineReducers({
    user: User.reducer,
    company: Company.reducer,
    poi: Poi.reducer,
    tags: Tags.reducer,
    greenScoreTypes: GreenScoreTypes.reducer,
    stats: Stats.reducer,
    knowIt: KnowIt.reducer,
    quizz: Quizz.reducer,
    challenge: Challenge.reducer,
  });

export default createRootReducer;
