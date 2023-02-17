var red = 255;
var green = 255;
var blue = 255;
// rgb(255, 255, 255)


function RGBvalue(vlu){
    
    // red color code 
    if (vlu == "R"){
        red = red + 1;
        if (red >= 26){
            red = 0;
        }
    }
    if (vlu == "r"){
        red = red - 1;
        if (red <= 0){
            red = 255;
        }
    }
    
    // blue color code
    if (vlu == "G"){
        green = green + 1;
        if (green >= 26){
            green = 0;
        }
    }
    if (vlu == "g"){
        green = green - 1;
        if (green <= 0){
            green = 255;
        }
    }

    // blue color code
    if (vlu == "B"){
        blue = blue + 1;
        if (blue >= 26){
            blue = 0;
        }
    }
    if (vlu == "b"){
        blue = blue - 1;
        if (blue <= 0){
            blue = 255;
        }
    }

    RGBcolorCode = 'rgb('+ red + ', '+ green + ', '+ blue + ')'
    document.getElementById('chColor').style.backgroundColor = RGBcolorCode;
    document.getElementById('colorCode').innerHTML = RGBcolorCode;
}