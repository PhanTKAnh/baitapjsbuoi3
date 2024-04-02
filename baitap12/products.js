var product = [
    {
        id: "SP1",
        name: "Áo dài thêu họa tiết ",
        img: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/473865KgW/image-top-10-dia-diem-ban-ao-dai-da-nang-dep-chat-luong-169147620975547.jpg",
        price:"12000",
    },
    {
        id: "SP2",
        name: "Áo dài HK's House",
        img: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/473865VfI/image-top-10-dia-diem-ban-ao-dai-da-nang-dep-chat-luong-169147621033958.jpg",
        price:"12000",
    },
    {
        id: "SP3",
        name: "Áo dài đỏ",
        img: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/473865bAJ/image-top-10-dia-diem-ban-ao-dai-da-nang-dep-chat-luong-169147621127969.jpg",
        price:"12000",
    },
    {
        id: "SP4",
        name: "Áo dài hoa",
        img: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/473865lXf/image-top-10-dia-diem-ban-ao-dai-da-nang-dep-chat-luong-169147621137441.jpg",
        price:"12000",
    }


]
function Save() {
    localStorage.setItem('listProduct', JSON.stringify(product));

}
function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}
if (localStorage.getItem("listProduct") != null) {
    load();
}
var listLocal = function () {
    var listproduct = " ";
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]))

        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 mt-3">';
        listproduct += '<div class="card product p-2" style="width:auto">';
        listproduct += '<img class="card-img-top" scr="' + data.img + '"alt="...">';
        listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + '</div>';
        listproduct += '<span class="text-center add-to-card btn btn-outlinr-warning add-card" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '"data-price="' + data.price + '" onclick="tks()">';
        listproduct += '<a>';
        listproduct += '<i class="fas fa-cart-plus"></i>';
        listproduct += '</a>';
        listproduct += '</span>';
        listproduct += '</div>';
        listproduct += '</div>';
        document.getElementById("banchay").innerHTML += listproduct;
    }
    Save();

}
listLocal();
