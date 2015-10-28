// ROOT REDUCER
// ============

import { combineReducers } from "redux";

import auth from "./auth";
import disks from "./disks";
import events from "./events";
import rpc from "./rpc";
import shells from "./shells";
import statd from "./statd";
import subscriptions from "./subscriptions";
import system from "./system";
import tasks from "./tasks";
import volumes from "./volumes";
import websocket from "./websocket";
import ssh from "./ssh";
import users from "./users";
import groups from "./groups";

const rootReducer = combineReducers(
  { auth
  , disks
  , events
  , rpc
  , shells
  , statd
  , subscriptions
  , system
  , tasks
  , volumes
  , websocket
  , users
  , groups

  // SERVICES
  , ssh
  }
);

export default rootReducer;
