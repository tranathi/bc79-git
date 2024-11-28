// Tính lương nhân viên
/**
 * Đầu vào
 * - Tạo 2 biến salary và date
 * - Tạo biến luong tính kết quả
 * Đầu ra
 * - Lấy dữ liệu kết quả từ biến luong ra web
 */
function calculateSalary() {
  let salary = parseFloat(document.getElementById("salary").value);
  let date = parseInt(document.getElementById("date").value);
  let luong = salary * date;
  document.getElementById("result1").innerText =
    "Lương nhân viên: " + luong + "VND";
}

// Tính trung bình của 5 số
/**
 * Đầu vào
 * - Tạo 5 biến số number1, number2, number3, number4, number5
 * - Tạo 1 biến trungbinh để tính trung bình cộng của 5 số
 * Đầu ra
 * - Lấy dữ liệu kết quả từ biến trungbinh ra web
 */
function average() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let number3 = parseFloat(document.getElementById("number3").value);
  let number4 = parseFloat(document.getElementById("number4").value);
  let number5 = parseFloat(document.getElementById("number5").value);
  let trungbinh = (number1 + number2 + number3 + number4 + number5) / 5;
  document.getElementById("result2").innerText =
    "Giá trị trung bình là: " + trungbinh;
}

// Quy đổi tiền tệ
/**
 * Đầu vào
 * - Tạo một const tyGia và set giá trị thực cho biến tyGia = 24000
 * - Tạo 1 biến money
 * - Tạo 1 biến vnd để tính quy đổi tiền tệ
 * Đầu ra
 * - Lấy dữ liệu kết quả từ biến vnd ra web
 */
const tyGia = 24000;
function redeemMoney() {
  let money = parseFloat(document.getElementById("money").value);
  let vnd = money * tyGia;
  document.getElementById("result3").innerText =
    "Số tiền: " + vnd.toLocaleString() + "VND";
}

// Tính diện tích và chu vi hình chữ nhật
/**
 * Đầu vào
 * - Tạo 2 biến chieudai và chieurong
 * - Tạo 1 biến dientich và set công thức tính cho biến đó
 * - Tạo 1 biến chuvi và set công thức tính cho biến đó
 * Đầu ra
 * - Lấy dữ liệu kết quả từ biến dientich, chuvi ra web
 */
function calculateArea() {
  let chieudai = parseFloat(document.getElementById(chieudai).value);
  let chieurong = parseFloat(document.getElementById(chieurong).value);
  let dientich = chieudai * chieurong;
  let chuvi = 2 * (chieudai + chieurong);
  document.getElementById("result4").innerText =
    "Diện tích là: " + dientich + "m2, Chu vi là: " + chuvi + "m";
}

// Tính tổng 2 ký số
/**
 * Đầu vào
 * - Tạo 1 biến numbers
 * - Tạo một biến hangchuc và chèn phép tính để tách chữ số hàng chục ra
 * - Tạo một biến hangdonvi và chèn phép tính chia lấy dư để lấy phần đơn vị
 * - Tạo một biến tong và chèn phép tính tổng hai biến hangchuc + hangdonvi
 * Đầu ra
 * - Lấy dữ liệu kết quả từ biến tong ra web
 */
function sumNumber() {
  let numbers = parseFloat(document.getElementById("numbers").value);
  let hangchuc = Math.floor(numbers / 10);
  let hangdonvi = numbers % 10;
  let tong = hangchuc + hangdonvi;
  document.getElementById("result5").innerText = "Tổng các chữ số là: " + tong;
}
