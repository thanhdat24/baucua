import { DAT_CUOC } from "../types/GameBauCuaType";

export const datCuocAction = (quanCuoc, amount) => ({
  type: DAT_CUOC,
  quanCuoc,
  amount,
});
