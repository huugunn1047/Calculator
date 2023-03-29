function take_ValueOld(){
    return document.getElementById("value_old").innerText;
}

function export_ValueOld(number) {
    document.getElementById("value_old").innerText = number;
}


function take_ValueNew() {
    return document.getElementById("value_new").innerText;
}
function export_ValueNew(number) {
    if(number=="") {
        document.getElementById("value_new").innerText = number;
    } else {
        document.getElementById("value_new").innerText = formatString(number);
    }
 
}

function formatString(number) {
    if(number == "-") {
        return "";
    }
    var n = Number(number);
    var value = n.toLocaleString("en");
    return value;
}

function delete_FormatString(number) {
    return Number(number.replace(/,/g, ''))
} 


var system = document.getElementsByClassName('system');
for(var i=0; i < system.length; i++) {
    system[i].addEventListener('click', function() {
        if(this.id == "deleteAll") {
            export_ValueNew("");
            export_ValueOld("");
        } 
        else if(this.id == "deleteOneNumber") {
            let result = delete_FormatString(take_ValueNew()).toString();
            if(result) {
                result = result.substr(0, result.length -1)
                export_ValueNew(result)
            }
        } 
        else {
            var result = take_ValueNew();
            var result_old = take_ValueOld();
            if(result != "") {
                result = delete_FormatString(result);
                result_old =result_old + result;
                if(this.id == "=") {
                    var result_final = eval(result_old);
                    export_ValueNew(result_final)
                    export_ValueOld("")
                } else {
                    result_old = result_old + this.id;
                    export_ValueOld(result_old)
                    export_ValueNew("")
                }
            }
        }
    })
}

var number = document.getElementsByClassName('number');
for(var i=0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var result = delete_FormatString(take_ValueNew())
        if(result != NaN) {
            result = result + this.id;
            export_ValueNew(result)
        }
    })
}