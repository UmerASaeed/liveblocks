import { useRoom } from "./useRoom";

/**
 * Works similarly to `liveblocks-react` useRedo
 * https://liveblocks.io/docs/api-reference/liveblocks-react#useRedo
 *
 * const redo = useRedo()
 * redo()
 */
export function useRedo() {
  return useRoom().history.redo;
}
