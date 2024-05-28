/*論理回路シミュレーション*/
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const gatesSelect = document.getElementById("gates-select");
const gatesOutput = document.getElementById("gates-output");
const redCircle = document.getElementById("red-circle");
const yellowCircle = document.getElementById("yellow-circle");
const greenCircle = document.getElementById("green-circle");

var ws = new WebSocket("ws://172.20.10.5:5555/");

function simulateLogicGates() {
    const isInput1Checked = input1.checked;
    const isInput2Checked = input2.checked;
    const selectedGate = gatesSelect.value;

    if(isInput1Checked){
        greenCircle.style.display = 'block';
    } else {
        greenCircle.style.display = 'none';
    }

    if(isInput2Checked){
        yellowCircle.style.display = 'block';
    } else {
        yellowCircle.style.display = 'none';
    }

    switch (selectedGate) {
        case 'and':
            const andResult = isInput1Checked && isInput2Checked;
            gatesOutput.innerText = andResult ? "1" : "0";
            if(andResult){
                redCircle.style.display = 'block';
            } else {
                redCircle.style.display = 'none';
            }
            break;
        case 'or':
            const orResult = isInput1Checked || isInput2Checked;
            gatesOutput.innerText = orResult ? "1" : "0";
            if(orResult){
                redCircle.style.display = 'block';
            } else {
                redCircle.style.display = 'none';
            }
            break;
        case 'xor':
            const xorResult = (isInput1Checked || isInput2Checked) && !(isInput1Checked && isInput2Checked);
            gatesOutput.innerText = xorResult ? "1" : "0";
            if(xorResult){
                redCircle.style.display = 'block';
            } else {
                redCircle.style.display = 'none';
            }
            break;
        case 'nand':
            const nandResult = !(isInput1Checked && isInput2Checked);
            gatesOutput.innerText = nandResult ? "1" : "0";
            if(nandResult){
                redCircle.style.display = 'block';
            } else {
                redCircle.style.display = 'none';
            }
            break;
        case 'nor':
            const norResult = !(isInput1Checked || isInput2Checked);
            gatesOutput.innerText = norResult ? "1" : "0";
            if(norResult){
                redCircle.style.display = 'block';
            } else {
                redCircle.style.display = 'none';
            }
            break;
    }

    ws.send(isInput1Checked ? 'input1_on' : 'input1_off');
    ws.send(isInput2Checked ? 'input2_on' : 'input2_off');
    ws.send(gatesOutput.innerText === "1" ? 'output_on' : 'output_off');
}

input1.addEventListener("change", simulateLogicGates);
input2.addEventListener("change", simulateLogicGates);
gatesSelect.addEventListener("change", simulateLogicGates);
simulateLogicGates();

/*回路画像チェンジ*/
function imgChange1(parts, id) {
    const fname = parts.options[parts.selectedIndex].value;
    switch (fname) {
        case '0':
            document.getElementById(id).src = "img/AND.jpg";
            break;
        case '1':
            document.getElementById(id).src = "img/OR.jpg";
            break;
        case '2':
            document.getElementById(id).src = "img/XOR.jpg";
            break;
        case '3':
            document.getElementById(id).src = "img/NAND.jpg";
            break;
        case '4':
            document.getElementById(id).src = "img/NOR.jpg";
            break;
        case '5':
            document.getElementById(id).src = "img/XNOR.jpg";
            break;
        case '6':
            document.getElementById(id).src = "img/NOT.jpg";
            break;
    }
    simulateLogicGates();
}

function imgChange2(parts, id) {
    const fname = parts.options[parts.selectedIndex].value;
    switch (fname) {
        case '0':
            document.getElementById(id).src = "img/AND.jpg";
            break;
        case '1':
            document.getElementById(id).src = "img/OR.jpg";
            break;
        case '2':
            document.getElementById(id).src = "img/XOR.jpg";
            break;
        case '3':
            document.getElementById(id).src = "img/NAND.jpg";
            break;
        case '4':
            document.getElementById(id).src = "img/NOR.jpg";
            break;
        case '5':
            document.getElementById(id).src = "img/XNOR.jpg";
            break;
        case '6':
            document.getElementById(id).src = "img/NOT.jpg";
            break;
    }
    simulateLogicGates(); 
}

/*タブ*/
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

/*真理値表正誤判定*/
function calculate(a, b, selectedGate) {
    switch (selectedGate) {
        case 'and':
            return andResult = a && b;
        case 'or':
            return orResult = a || b;
        case 'xor':
            return xorResult = (a || b) && !(a && b);
        case 'nand':
            return nandResult = !(a && b);
        case 'nor':
            return norResult = !(a || b);
    }
}

function calculate(a, b, selectedGate) {
    switch (selectedGate) {
        case 'and':
            return a & b ? 1 : 0;
        case 'or':
            return a | b ? 1 : 0;
        case 'xor':
            return a ^ b ? 1 : 0;
        case 'nand':
            return !(a & b) ? 1 : 0;
        case 'nor':
            return !(a | b) ? 1 : 0;
        default:
            return null; // 不正なゲートが選択された場合はnullを返す
    }
}

function validateInputs() {
    const results = document.querySelectorAll('.result');
    const selectGate = document.getElementById('truth').value;

    // 初期化
    results.forEach(result => {
        result.textContent = '';
        result.style.color = 'black';
    });

    // 行ごとの計算と検証
    for (let row = 0; row < 4; row++) {
        const a = parseInt(document.querySelector(`.userInput[data-row="${row}"][data-type="A"]`).value, 10);
        const b = parseInt(document.querySelector(`.userInput[data-row="${row}"][data-type="B"]`).value, 10);
        const output = parseInt(document.querySelector(`.userInput[data-row="${row}"][data-type="out"]`).value, 10);
        const calculatedValue = calculate(a, b, selectGate);

        const resultElement = document.querySelector(`.result[data-row="${row}"]`);

        if (calculatedValue === null) {
            resultElement.textContent = 'Invalid Gate';
            resultElement.style.color = 'red';
        } else if (output === calculatedValue) {
            resultElement.textContent = 'Correct';
            resultElement.style.backgroundColor = 'green';
            resultElement.style.color = 'white';
        } else {
            resultElement.textContent = 'Incorrect';
            resultElement.style.backgroundColor = 'red';
            resultElement.style.color = 'white';
        }
    }
}
