document.addEventListener("DOMContentLoaded", function() {
    var ho = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý", "Đào", "Đoàn", "Vương", "Trịnh", "Đinh", "Lưu"];
    var ten = ["Văn", "Thị", "Hồng", "Đức", "An", "Mai", "Thu", "Minh", "Tuấn", "Hải", "Dương", "Hạnh", "Phương", "Linh", "Quang", "Nam", "Lâm", "Như", "Tâm", "Giang"];

    var tenList = document.getElementById("tenList");

    // Hàm tạo tên ngẫu nhiên
    function generateName() {
        tenList.innerHTML = "";
        for (var i = 0; i < 5; i++) {
            var hoNgauNhien = ho[Math.floor(Math.random() * ho.length)];
            var tenNgauNhien1 = ten[Math.floor(Math.random() * ten.length)];
            var tenNgauNhien2 = ten[Math.floor(Math.random() * ten.length)];
            var tenDayDu = hoNgauNhien + " " + tenNgauNhien1 + " " + tenNgauNhien2;
            var listItem = document.createElement("li");
            listItem.textContent = tenDayDu;
            tenList.appendChild(listItem);
        }
    }

    // Gọi hàm tạo tên khi trang được tải
    generateName();

    // Sao chép từng tên khi nhấn vào tên
    tenList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            var textToCopy = event.target.textContent;
            navigator.clipboard.writeText(textToCopy).then(function() {
                alert("Tên đã được sao chép!");
            }, function(err) {
                console.error('Failed to copy text: ', err);
            });
        }
    });
});
