
var man=[
    {
    id:1,
    name:"Quần kaki",
    code:"TC143NA",
    Old_price:"300.000",
    price:"250.000",
    image:"https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-kaki-nam-10s22pca001_kelp_4__1_jpg.webp"
    },
    {
    id:2,
    name:"Áo sơ mi nam",
    code:"TC1342NA",
    Old_price:"300.000",
    price:"380.000",
    image:"https://routine.vn/media/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/a/o/ao-so-mi-nam-10s21shl003cr2_white_5_177_1_1.jpg"
    },
    {
    id:3,
    name:"Quần tây",
    code:"TC323",
    Old_price:"300.000",
    price:"270.000",
    image:"https://routine.vn/media/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_2__1.jpg"
    },
    {
    id:4,
    name:"Bộ đồ thể thao",
    code:"TC223",
    Old_price:"300.000",
    price:"300.000",
    image:"https://gymfashion.vn/wp-content/uploads/2019/06/1.1-110.jpg"
    }

]

function listTable(){
    var demo = ""; 

    for (let i = 0; i < man.length; i++) {
        demo += "<tr>";
        demo += "<td>" + man[i].id + "</td>";
        demo += "<td>" + man[i].code+ "</td>";
        demo += "<td>" + man[i].name + "</td>";
        demo+= '<td><img src="'+man[i].image+'" class="card-img-top" style="height:400px; "></td>';
        demo += "<td>" + man[i].Old_price + "</td>";
        demo += "<td>" + man[i].price + "</td>";
        demo += "</tr>";
    }
        console.log(demo);
        document.getElementById("tbl").innerHTML+= demo;


}