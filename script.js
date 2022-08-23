let txtn = document.getElementById('txtn')
let tab = document.getElementById('seltab')

function resultado() {

if (txtn.value.length == 0) {
    alert('Por favor digite um numero')
    } else {
        showResult()
    } 
}

function showResult() {
    let number = Number(txtn.value)
    tab.innerHTML =""
    
    for(let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${number} x ${c} = ${number*c}`
        tab.appendChild(item)       
    }

    txtn.value = ''
    txtn.focus()
}