document.addEventListener("DOMContentLoaded", function() {
    var hoNam = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý", "Đào", "Đoàn", "Vương", "Trịnh", "Đinh", "Lưu"];
    var hoNu = ["Nguyễn Thị", "Trần Thị", "Lê Thị", "Phạm Thị", "Hoàng Thị", "Võ Thị", "Đặng Thị", "Bùi Thị", "Đỗ Thị", "Hồ Thị", "Ngô Thị", "Dương Thị"];
    var tenNam = ["Văn", "Hữu", "Đức", "Hải", "Dương", "Minh", "Quang", "Khang", "Tuấn", "Anh"];
    var tenNu = ["Thị", "Hồng", "Mai", "Thu", "Hạnh", "Phương", "Linh", "Như", "Tâm", "Giang"];
    var tenDemNam = ["Minh", "Quang", "Ngọc", "Đức", "Hữu"];
    var tenDemNu = ["Ngọc", "Thu", "Bảo", "Mai", "Vân"];

    var tenList = document.getElementById("tenList");
    var gioiTinhSelect = document.getElementById("gioiTinh");
    var soLuongInput = document.getElementById("soLuong");
    var generateButton = document.getElementById("generateButton");

    // Hàm tạo tên ngẫu nhiên
    function generateNames() {
        var gioiTinh = gioiTinhSelect.value;
        var hoList = gioiTinh === "nam" ? hoNam : hoNu;
        var tenListArr = gioiTinh === "nam" ? tenNam : tenNu;
        var tenDemList = gioiTinh === "nam" ? tenDemNam : tenDemNu;
        var soLuong = parseInt(soLuongInput.value);

        tenList.innerHTML = "";
        for (var i = 0; i < soLuong; i++) {
            var hoNgauNhien = hoList[Math.floor(Math.random() * hoList.length)];
            var tenDemNgauNhien = tenDemList[Math.floor(Math.random() * tenDemList.length)];
            var tenNgauNhien = tenListArr[Math.floor(Math.random() * tenListArr.length)];
            var tenDayDu = hoNgauNhien + " " + tenDemNgauNhien + " " + tenNgauNhien;
            var listItem = document.createElement("li");
            listItem.textContent = tenDayDu;
            listItem.classList.add("copyable");
            tenList.appendChild(listItem);
        }
    }

    // Gọi hàm tạo tên khi trang được tải
    generateNames();

    // Tạo danh sách tên khi nhấn nút "Tạo Danh Sách Tên"
    generateButton.addEventListener("click", function() {
        generateNames();
    });

    // Sao chép từng tên khi nhấn vào tên
    tenList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            var textToCopy = event.target.textContent;
            navigator.clipboard.writeText(textToCopy).then(function() {
                // Không hiển thị thông báo khi tên được sao chép
            }, function(err) {
                console.error('Failed to copy text: ', err);
            });
        }
    });

    // Ngăn chặn chuột phải
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });
});
