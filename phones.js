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
            <td><button onclick="deletePhoneById(${phones[i].id})">Del</button></td>
        </tr>`
            }
            document.getElementById("content").innerHTML = content;
        }
    });
}
getAllPhones();

function createNewPhone() {
    let producer = document.getElementById("producer").value;
    let model = document.getElementById("model").value;
    let price = parseInt(document.getElementById("price").value);
    let newPhone = {
        "producer": producer,
        "model": model,
        "price": price
    }
    $.ajax(
        {
            type: "POST",
            url: "http://localhost:8080/smartphones/create/",
            data: JSON.stringify(newPhone),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            success: function () {
                alert("created smartphones successfully");
                getAllPhones();
            }
        }
    )
    event.preventDefault();
}

function deletePhoneById(id) {
    $.ajax(
        {
            type: "DELETE",
            url: "http://localhost:8080/smartphones/" + id,
            success: function () {
                alert("deleted successfully");
                getAllPhones();
            }
        }
    )

}
