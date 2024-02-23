var man=[
    {
    id:1,
    name:"Quần kaki",
    code:"TC143NA",
    price:"250.000",
    image:"https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-kaki-nam-10s22pca001_kelp_4__1_jpg.webp"
    },
    {
    id:2,
    name:"Áo sơ mi nam",
    code:"TC1342NA",
    price:"380.000",
    image:"https://routine.vn/media/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/a/o/ao-so-mi-nam-10s21shl003cr2_white_5_177_1_1.jpg"
    },
    {
    id:3,
    name:"Quần tây",
    code:"TC323",
    price:"270.000",
    image:"https://routine.vn/media/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_2__1.jpg"
    },
    {
    id:4,
    name:"Bộ đồ thể thao",
    code:"TC223",
    price:"300.000",
    image:"https://gymfashion.vn/wp-content/uploads/2019/06/1.1-110.jpg"
    }

]
var women=[
    {
    id:1,
    name:"váy ",
    code:"TC143",
    price:"250.000",
    image:"https://routine.vn/media/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/d/a/dam-nu-29-10f23drew011_dark_sapphire_4__1.jpg"
    },
    {
    id:2,
    name:"Áo sơ mi nữ",
    code:"TC123",
    price:"200.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-22100-mcxr2dfjngiv6b"
    },
    {
    id:3,
    name:"Áo Khoác",
    code:"TC323",
    price:"270.000",
    image:"https://pos.nvncdn.com/af3c03-152482/ps/20240105_eKcQr4W6UU.jpeg"
    },
    {
    id:4,
    name:"Áo thun",
    code:"TC223",
    price:"300.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-7qvdb-lgg6tpkuke6838"
    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;


    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+women[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+= demo;


    }

}