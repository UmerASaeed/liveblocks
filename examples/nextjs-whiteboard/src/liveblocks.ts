import { createHooks } from "@liveblocks/react";
import { Presence, Storage } from "./types";

const {
  RoomProvider,
  useBatch,
  useHistory,
  useList,
  useMap,
  useMyPresence,
  useOthers,
  useRoom,
} = createHooks<Presence, Storage>();

export {
  RoomProvider,
  useBatch,
  useHistory,
  useList,
  useMap,
  useMyPresence,
  useOthers,
  useRoom,
};
