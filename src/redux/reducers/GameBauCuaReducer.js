const initialState = {
  mangCuoc: [
    { ma: "bau", hinhAnh: "./assets/bau.png", diemCuoc: 0, soLuong: 0 },
    { ma: "cua", hinhAnh: "./assets/cua.png", diemCuoc: 0, soLuong: 0 },
    { ma: "tom", hinhAnh: "./assets/tom.png", diemCuoc: 0, soLuong: 0 },
    { ma: "ca", hinhAnh: "./assets/ca.png", diemCuoc: 0, soLuong: 0 },
    { ma: "nai", hinhAnh: "./assets/nai.png", diemCuoc: 0, soLuong: 0 },
    { ma: "ga", hinhAnh: "./assets/ga.png", diemCuoc: 0, soLuong: 0 },
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
          mangCuocUpdate[index].soLuong += 1;
        } else {
          if (mangCuocUpdate[index].diemCuoc > 0 && action.amount === false) {
            mangCuocUpdate[index].diemCuoc -= 100;
            state.tienThuong += 100;
            mangCuocUpdate[index].soLuong -= 1;
          }
        }
      }
      return { ...state, mangCuoc: mangCuocUpdate };
    }
    case "PLAY_GAME": {
      const mangXucXacNgauNhien = [];

      for (let i = 0; i < 3; i++) {
        // Tạo ra 1 số ngẫu nhiên từ 0->5
        let soNgauNhien = Math.floor(Math.random() * 6);
        let xucXacNgauNhien = state.mangCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }

      // Xử lí tăng điểm thưởng
      mangXucXacNgauNhien.forEach((xucXacNN, index) => {
        let indeXucXacNN = state.mangCuoc.findIndex(
          (qc) => qc.ma === xucXacNN.ma
        );

        if (indeXucXacNN !== -1) {
          state.tienThuong += state.mangCuoc[indeXucXacNN].diemCuoc;
        }
      });

      // Xử lí hoàn tiền
      state.mangCuoc.forEach((qc, index) => {
        let indexXucXacNN = mangXucXacNgauNhien.findIndex(
          (xxnn) => xxnn.ma === qc.ma
        );

        if (indexXucXacNN !== -1) {
          state.tienThuong += qc.diemCuoc;
        }
      });

      // Xử lý làm mới game
      state.mangCuoc = state.mangCuoc.map((qc, index) => {
        return { ...qc, diemCuoc: 0, soLuong: 0 };
      });
      return { ...state, mangXucXac: mangXucXacNgauNhien };
    }

    case "RESET_GAME": {
      state.tienThuong = 1000;
      state.mangCuoc = state.mangCuoc.map((qc, index) => {
        return { ...qc, diemCuoc: 0, soLuong: 0 };
      });
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default GameBauCua;
