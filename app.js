//b1
function tinhtien(){
    let socu = parseFloat(document.getElementById("socu").value);
    let somoi = parseFloat(document.getElementById("somoi").value);
    let sodien = somoi - socu;
    let kq = document.getElementById("kq")
    let sotien = 0;
    if(sodien <= 0 ){
        sotien = 0;
    }
    else{
        if(sodien > 0 && sodien <= 50){
            sotien = sodien * 1.678;
        }
        else if(sodien > 50 && sodien <= 100){
            sotien = (sodien - 50)* 1.734 + 50* 1.678;
        }
        else if(sodien > 100 && sodien <= 200){
            sotien = (sodien-100)*2.014 + 50*1.734 + 50*1.678;
        }
        else if(sodien > 200 && sodien <= 300){
            sotien = (sodien-200)*2.536 + 100*2.014 + 50*1.734 + 50*1.678;
        }
        else if(sodien > 300 && sodien <=400){
            sotien = (sodien - 300)*2.834 + 100*2.536 + 100*2.014 + 50*1.734 + 50*1.678;
        }
        else{
            sotien = (sodien - 400)*2.927 + 100*2.834 + 100*2.536 + 100*2.014 + 50*1.734 + 50*1.678;
        }

    }
    kq.innerText = `Số tiền điện của bạn là ${sotien} đồng`;
}

//b2
function tinhluong(){
    let ngaycong = parseInt(document.getElementById("songaycong").value);
    let bac = document.getElementById("bacluong").value;
    let kq1 = document.getElementById("kq1");
    let tienluong = 0 ;
    if(ngaycong < 0 & bac != "A" & bac != "B" & bac != "C" & bac != "D"){
        tienluong = 0;
    }
    else{
        if(bac == "A"){
            tienluong = 5000000 * (ngaycong/22)
        }
        else if(bac == "B"){
            tienluong = 6000000 * (ngaycong/23)
        }
        else if(bac == "C"){
            tienluong = 8000000 * (ngaycong/23)
        }
        else if(bac == "D"){
            tienluong = 10000000 * (ngaycong/23)
        }
        else{
            tienluong = 0;
        }
    }
    kq1.innerText = `Tien lương của bạn là ${tienluong} đồng`
}