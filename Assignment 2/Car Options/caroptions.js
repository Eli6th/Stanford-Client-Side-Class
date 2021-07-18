var image = document.getElementById("car_img");
function changeColor(color) {
    if (color == 1) {
        image.src = "images/red.jpg";
    } else if (color == 2) {
        image.src = "images/blue.jpg";
    } else if (color == 3) {
        image.src = "images/silver.jpg";
    } else if (color == 4) {
        image.src = "images/white.jpg";
    } else if (color == 5) {
        image.src = "images/black.jpg";
    }
}

var car_config_price = 0;
function carConfiguration(car_config) {
    if (car_config == GT_Manual) {
        car_config_price = 17790;
    } else if (car_config == GT_Automatic) {
        car_config_price = 18590;
    } else if (car_config == GT_S_Manual) {
        car_config_price = 22455;
    } else if (car_config == GT_S_Sportshift) {
        car_config_price = 23155;
    }
}
var fact_options_price = 0;
function factOptions(fact_opt) {
    if (fact_opt == combo1) {
        fact_options_price = 1235;
    } else if (fact_opt == combo2) {
        fact_options_price = 3354;
    } else if (fact_opt == no_combo) {
        fact_options_price = 0;
    }
}
var stereo_price = 0;
var security_price = 0;
var mirror_price = 0;
function dealOptions() {
    if (document.getElementById("stereo").checked == true) {
        stereo_price = 550;
    } else {
        stereo_price = 0;
    }
    if (document.getElementById("security").checked == true) {
        security_price = 399;
    } else {
        security_price = 0;
    }
    if (document.getElementById("mirror").checked == true) {
        mirror_price = 295;
    } else {
        mirror_price = 0;
    }
}

function calculateTotalPrice() {
    var total = car_config_price + fact_options_price + stereo_price + security_price + mirror_price;
    document.getElementById("output_price").innerText = "$" + total.toString() + ".00";
}