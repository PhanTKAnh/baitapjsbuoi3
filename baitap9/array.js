 var mang = [];
function save(){
    var a ={
        full:document.getElementById("full").value,
        pro:document.getElementById("pro").value,
       name:document.getElementById("name").value,
        Qua:document.getElementById("Qua").value,
        price:document.getElementById("price").value,
    }
    console.log(a);
    mang.push(a);
}
function show() {
    var demo = ""; 

    for (let i = 0; i < mang.length; i++) {
        var n=i;
        n++;
        demo += "<tr>";
        demo += "<td>" + (n) + "</td>";
        demo += "<td>" + mang[i].full + "</td>";
        demo += "<td>" + mang[i].pro + "</td>";
        demo += "<td>" + mang[i].name + "</td>";
        demo += "<td>" + mang[i].Qua + "</td>";
        demo += "<td>" + mang[i].price + "</td>";
        demo += "<td>" + parseFloat(mang[i].Qua) * parseFloat(mang[i].price) + "</td>";
        demo += "</tr>";
    }

    document.getElementById('tbl').innerHTML = demo; // Fix the ID here
}

function reset(){
    document.getElementById("full").value=' ';
    document.getElementById("pro").value=' ';
    document.getElementById("name").value=' ';
    document.getElementById("Qua").value=' ';
    document.getElementById("price").value=' ';

}