

function change() {
    const s = document.getElementById("s");
    /*
    let i = {open: 0, close: 0};
    s.value.split("").forEach(s => {
        if (s == "(") i.open++;
        else if (s == ")") i.close++;
    });

    if (i.open !== i.close) {
        let text = "error!";
        if (i.open > i.close)
            text += ' Missing ")"';
        else if (i.open < i.close)
            text += ' Missing "("';

        document.getElementById("err").innerHTML = text;
    }
    else {
        document.getElementById("err").innerHTML = eval(s.value);

    }

    */

    //if (s.value.include(/[0-9]|\||./)) {}
    const m = s.value.split("|");

    const dk = document.getElementById("k").value;
    let k;
    let has = Number(document.getElementById("def").value);
    let loop = document.getElementById("loop").value;
    const bi = document.getElementById("bi").value;
    const data = {win: 0, loss: 0, drow: 0, total: 0, mart: 0, Mwin: 0};

    for (i=0; i<document.getElementById("num").value; i++) {
        k = dk;
        data.total++;
        data.mart++;
        const d = switc(m, k);
        has += d;
        if (d < 0 && loop != 0) {
            for (l=0; l<loop || loop == -1; l++) {
                k *= bi;
                data.total++;
                const d = switc(m, k);
                has += d;
                //console.log(`k:${k}  has:${has}  win:${d}`);
                if (d == 0)
                    data.drow++;
                else if (d > 0) {
                    data.win++;
                    data.Mwin++;
                }
                else
                    data.loss++;

                if (d >= 0) break;
            }
        } else {
            //console.log(`k:${k}  has:${has}  win:${d}`);
            if (d == 0)
                data.drow++;
            else if (d > 0) {
                data.win++;
                data.Mwin++;
            }
            else
                data.loss++;
        }

    }
    //console.log("finish");

    document.getElementById("total").innerHTML = data.total;
    document.getElementById("win").innerHTML = data.win;
    document.getElementById("loss").innerHTML = data.loss;
    document.getElementById("win%").innerHTML = ((data.win/data.total)*100).toFixed(2);
    document.getElementById("e").innerHTML = has;
    document.getElementById("Awin").innerHTML = data.Mwin;
    document.getElementById("Awin%").innerHTML = ((data.Mwin/data.mart)*100).toFixed(2);
}


function checkmax() {
    let max = document.getElementById("k").value;
    const bi = document.getElementById("bi").value;
    for (i=0; i<document.getElementById("loop").value; i++) {
        max *= bi;
    }

    if (document.getElementById("loop").value == -1) 
        max = "infinity";
    document.getElementById("max").innerHTML = max;
}



function switc(m, k) {
    const select = Math.floor(Math.random()*(m.length));
    for (let i=0; i<m.length; i++) {
        if (i == select) {
            return k*m[i];
        }
    }
}