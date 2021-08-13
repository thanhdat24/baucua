const initialState = {
  mangCuoc: [
    { ma: "bau", hinhAnh: "./assets/bau.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./assets/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./assets/tom.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./assets/ca.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./assets/nai.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./assets/ga.png", diemCuoc: 0 },
  ],
  tienThuong: 1000,
  mangXucXac: [
    { ma: "ca", hinhAnh: "./assets/ca.png" },
    { ma: "nai", hinhAnh: "./assets/nai.png" },
    { ma: "ga", hinhAnh: "./assets/ga.png" },
  ],
};

export const GameBauCua = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      // Tìm trong mangCuoc => quân cược nào được click sẽ tăng hoặc giảm điểm
      let mangCuocUpdate = [...state.mangCuoc];
      let index = mangCuocUpdate.findIndex(
        (qc) => qc.ma === action.quanCuoc.ma
      );
      if (index !== -1) {
        if (action.amount && state.tienThuong > 0) {
          mangCuocUpdate[index].diemCuoc += 100;
          state.tienThuong -= 100;
        } else {
          if (mangCuocUpdate[index].diemCuoc > 0 && action.amount === false) {
            mangCuocUpdate[index].diemCuoc -= 100;
            state.tienThuong += 100;
          }
        }
      }
      return { ...state, mangCuoc: mangCuocUpdate };
    }
    default:
      return { ...state };
  }
};

export default GameBauCua;
