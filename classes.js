function getAllPhones() {
    $.ajax({
        type: "GET",
        //tên API
        url: "http://localhost:8080/smartphones",
        //xử lý khi thành công
        success: function (phones) {
            // hien thi danh sach o day
            console.log(phones);
            let content = "";
            for (let i = 0; i < phones.length; i++) {
                content += `<tr>
            <td>${phones[i].producer}</td>
            <td>${phones[i].model}</td>
            <td>${phones[i].price}</td>
        </tr>`
            }
            document.getElementById("content").innerHTML = content;
        }
    });
}
getAllPhones();

