const SO_NGAU_NHIEN = Math.floor(Math.random() * 100)
let count = 0
let buttonChoiLai = document.getElementById("choi-lai");
buttonChoiLai.style.display = "none";

function xacNhan() {
    let inputLuaChon = document.getElementById("lua-chon")
    let luaChon = parseInt(document.getElementById("lua-chon").value)
    if (isNaN(luaChon) || luaChon < 0 || luaChon > 100) {
        inputLuaChon.value = ""
        return
    }
    if (luaChon !== SO_NGAU_NHIEN) {
        count++;
        let soLanDoan = document.getElementById("so-lan-doan")
        let thongBao = document.getElementById("thong-bao")
        soLanDoan.innerHTML = "Số lần đoán: " + count
        inputLuaChon.value = ""
        if (luaChon < SO_NGAU_NHIEN) {
            thongBao.innerHTML = "Lớn hơn!"
        }
        else thongBao.innerHTML = "Nhỏ hơn!"
    } 
    else {
        count++;
        let thongBao = document.getElementById("thong-bao")
        thongBao.innerHTML = "Bạn đã đoán đúng!"
        buttonChoiLai.style.display = "block"
        inputLuaChon.value = ""
        let soLanDoan = document.getElementById("so-lan-doan")
        soLanDoan.innerHTML = "Số lần đoán: " + count
        inputLuaChon.disabled = true
        let buttonXacNhan = document.getElementById("xac-nhan")
        buttonXacNhan.disabled = true
        let buttonBoCuoc = document.getElementById("bo-cuoc")
        buttonBoCuoc.disabled = true
        count = 0 
    }
}

function boCuoc() {
    let soLanDoan = document.getElementById("so-lan-doan")
    soLanDoan.innerHTML = "Số lần đoán: " + count
    let thongBao = document.getElementById("thong-bao")
    thongBao.innerHTML = "Số cần đoán là: " + SO_NGAU_NHIEN; 
    buttonChoiLai.style.display = "block"
    let inputLuaChon = document.getElementById("lua-chon")
    inputLuaChon.disabled = true
    let buttonXacNhan = document.getElementById("xac-nhan")
    buttonXacNhan.disabled = true
    count = 0 
    let buttonBoCuoc = document.getElementById("bo-cuoc")
    buttonBoCuoc.disabled = true
}

function choiLai() {
    buttonChoiLai.style.display = "none";
    let thongBao = document.getElementById("thong-bao")
    thongBao.innerHTML = "";
    location.reload()
}