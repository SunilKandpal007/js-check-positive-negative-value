function findPNvalue(){  

    var num1 = parseFloat(document.getElementById("positiveValue").value);

    if(isNaN(num1)){
        document.getElementById('posinegResult').innerText = `Please input a value first.`;
    }

    else if(num1 == 0){
        document.getElementById('posinegResult').innerText = `Input value ${num1} is equavalet to zero.`;
    }
    else if(num1 > 0){
        document.getElementById('posinegResult').innerText = `Input value ${num1} is a positive value.`;
    }
    else{
        document.getElementById('posinegResult').innerText = `Input value ${num1} is a negative value.`;
    }
    document.getElementById('positiveValue').value = "";
}