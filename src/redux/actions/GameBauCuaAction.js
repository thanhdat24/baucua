import { DAT_CUOC, PLAY_GAME } from "../types/GameBauCuaType";

export const datCuocAction = (quanCuoc, amount) => ({
  type: DAT_CUOC,
  quanCuoc,
  amount,
});

export const playGameAction = () => ({
  type: PLAY_GAME,
});
