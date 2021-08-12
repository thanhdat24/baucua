const initialState = {
  mangCuoc: [
    { ma: "bau", hinhAnh: "./assets/bau.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./assets/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./assets/tom.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./assets/ca.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./assets/nai.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./assets/ga.png", diemCuoc: 0 },
  ],
  tienThuong: 0,
  mangXucXac: [
    { ma: "ca", hinhAnh: "./assets/ca.png" },
    { ma: "nai", hinhAnh: "./assets/nai.png" },
    { ma: "ga", hinhAnh: "./assets/ga.png" },
  ],
};

export const GameBauCua = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default GameBauCua;
