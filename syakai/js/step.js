/*論理回路シミュレーション*/
function selectGateOutput(isInput1Checked, isInput2Checked, selectedGate){
    switch (selectedGate) {
        case 'and':
            return isInput1Checked && isInput2Checked;
        case 'or':
            return isInput1Checked || isInput2Checked;
        case 'xor':
            return isInput1Checked ^ isInput2Checked;
        case 'nand':
            return !(isInput1Checked && isInput2Checked);
        case 'nor':
            return !(isInput1Checked || isInput2Checked);
        case 'xnor':
            return !(isInput1Checked ^ isInput2Checked);
        case 'not':
            return !isInput1Checked;
    }
}

/*回路1*/
const input1_1 = document.getElementById("input1-1");
const input1_2 = document.getElementById("input1-2");
const gatesSelect1 = document.getElementById("gates-select1");
const redCircle1 = document.getElementById("red-circle1");
const yellowCircle1 = document.getElementById("yellow-circle1");
const greenCircle1 = document.getElementById("green-circle1");

var ws1 = new WebSocket("ws://172.20.10.5:5555/");

function InOutput(isInput1Checked, isInput2Checked, selectedGate){
    greenCircle1.style.backgroundColor = isInput1Checked ? 'rgb(0, 255, 0)' : 'transparent';
    yellowCircle1.style.backgroundColor = isInput2Checked ? 'rgb(255, 230, 0)' : 'transparent';

    const result = selectGateOutput(isInput1Checked, isInput2Checked, selectedGate);
    redCircle1.style.backgroundColor = result ? 'rgb(255, 0, 0)' : 'transparent';
}

function simulateLogicGates1() {
    const isInput1Checked = input1_1.checked;
    const isInput2Checked = input1_2.checked;
    const selectedGate = gatesSelect1.value;

    const gatesOutput1 = InOutput(isInput1Checked, isInput2Checked, selectedGate);

    ws1.send(isInput1Checked ? 'input1_on' : 'input1_off');
    ws1.send(isInput2Checked ? 'input2_on' : 'input2_off');
    ws1.send(gatesOutput1 ? 'output_on' : 'output_off');
}

input1_1.addEventListener("change", simulateLogicGates1);
input1_2.addEventListener("change", simulateLogicGates1);
gatesSelect1.addEventListener("change", simulateLogicGates1);
//simulateLogicGates1();

/*回路2*/
const input2_1 = document.getElementById("input2-1");
const input2_2 = document.getElementById("input2-2");
const gatesSelect2_1 = document.getElementById("gates-select2-1");
const gatesSelect2_2 = document.getElementById("gates-select2-2");
const redCircle2_1 = document.getElementById("red-circle2-1");
const redCircle2_2 = document.getElementById("red-circle2-2");
const yellowCircle2 = document.getElementById("yellow-circle2");
const greenCircle2 = document.getElementById("green-circle2");

var ws2 = new WebSocket("ws://172.20.10.5:5555/");

function InOutput2(isInput1Checked, isInput2Checked, selectedGate1, selectedGate2){
    greenCircle2.style.backgroundColor = isInput1Checked ? 'rgb(0, 255, 0)' : 'transparent';
    yellowCircle2.style.backgroundColor = isInput2Checked ? 'rgb(255, 230, 0)' : 'transparent';

    const result1 = selectGateOutput(isInput1Checked, isInput2Checked, selectedGate1);
    redCircle2_2.style.backgroundColor = result1 ? 'rgb(255, 0, 0)' : 'transparent';
    const result2 = selectGateOutput(result1, isInput2Checked, selectedGate2);
    redCircle2_1.style.backgroundColor = result2 ? 'rgb(255, 0, 0)' : 'transparent';
}

function simulateLogicGates2() {
    const isInput1Checked = input2_1.checked;
    const isInput2Checked = input2_2.checked;
    const selectedGate1 = gatesSelect2_1.value;
    const selectedGate2 = gatesSelect2_2.value;

    const gatesOutput2 = InOutput2(isInput1Checked, isInput2Checked, selectedGate1, selectedGate2);

    ws2.send(isInput1Checked ? 'input1_on' : 'input1_off');
    ws2.send(isInput2Checked ? 'input2_on' : 'input2_off');
    ws2.send(gatesOutput2 ? 'output_on' : 'output_off');
}

input2_1.addEventListener("change", simulateLogicGates2);
input2_2.addEventListener("change", simulateLogicGates2);
gatesSelect2_1.addEventListener("change", simulateLogicGates2);
gatesSelect2_2.addEventListener("change", simulateLogicGates2);
//simulateLogicGates2();

/*回路3*/
const input3_1 = document.getElementById("input3-1");
const input3_2 = document.getElementById("input3-2");
const gatesSelect3_1 = document.getElementById("gates-select3-1");
const gatesSelect3_2 = document.getElementById("gates-select3-2");
const redCircle3_1 = document.getElementById("red-circle3-1");
const redCircle3_2 = document.getElementById("red-circle3-2");
const yellowCircle3 = document.getElementById("yellow-circle3");
const greenCircle3 = document.getElementById("green-circle3");

var ws3 = new WebSocket("ws://172.20.10.5:5555/");

function InOutput3(isInput1Checked, isInput2Checked, selectedGate1, selectedGate2){
    greenCircle3.style.backgroundColor = isInput1Checked ? 'rgb(0, 255, 0)' : 'transparent';
    yellowCircle3.style.backgroundColor = isInput2Checked ? 'rgb(255, 230, 0)' : 'transparent';

    const result1 = selectGateOutput(isInput1Checked, isInput2Checked, selectedGate1);
    redCircle3_1.style.backgroundColor = result1 ? 'rgb(255, 0, 0)' : 'transparent';
    const result2 = selectGateOutput(isInput1Checked, isInput2Checked, selectedGate2);
    redCircle3_2.style.backgroundColor = result2 ? 'rgb(255, 0, 0)' : 'transparent';
}

function simulateLogicGates3() {
    const isInput1Checked = input3_1.checked;
    const isInput2Checked = input3_2.checked;
    const selectedGate1 = gatesSelect3_1.value;
    const selectedGate2 = gatesSelect3_2.value;

    const gatesOutput3 = InOutput3(isInput1Checked, isInput2Checked, selectedGate1, selectedGate2);

    ws3.send(isInput1Checked ? 'input1_on' : 'input1_off');
    ws3.send(isInput2Checked ? 'input2_on' : 'input2_off');
    ws3.send(gatesOutput3 ? 'output_on' : 'output_off');
}

input3_1.addEventListener("change", simulateLogicGates3);
input3_2.addEventListener("change", simulateLogicGates3);
gatesSelect3_1.addEventListener("change", simulateLogicGates3);
gatesSelect3_2.addEventListener("change", simulateLogicGates3);
simulateLogicGates3();

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

/*回路画像チェンジ*/
function imgChange(fname, id){
    switch (fname) {
        case 'and':
            document.getElementById(id).src = "img/AND.jpg";
            break;
        case 'or':
            document.getElementById(id).src = "img/OR.jpg";
            break;
        case 'xor':
            document.getElementById(id).src = "img/XOR.jpg";
            break;
        case 'nand':
            document.getElementById(id).src = "img/NAND.jpg";
            break;
        case 'nor':
            document.getElementById(id).src = "img/NOR.jpg";
            break;
        case 'xnor':
            document.getElementById(id).src = "img/XNOR.jpg";
            break;
        case 'not':
            document.getElementById(id).src = "img/NOT.jpg";
            break;
    }
}

/*画像1*/
function imgChange1(parts, id) {
    const fname = parts.options[parts.selectedIndex].value;
    imgChange(fname, id);
}

/*画像2*/
function imgChange2(parts, id) {
    const fname = parts.options[parts.selectedIndex].value;
    imgChange(fname, id); 
}

/*画像3*/
function imgChange3(parts, id) {
    const fname = parts.options[parts.selectedIndex].value;
    imgChange(fname, id); 
}

/*画像4*/
function imgChange4(parts, id) {
    const fname = parts.options[parts.selectedIndex].value;
    imgChange(fname, id); 
}

/*画像5*/
function imgChange5(parts, id) {
    const fname = parts.options[parts.selectedIndex].value;
    imgChange(fname, id); 
}

/*真理値表正誤判定*/
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
        case 'xor':
            return !(a ^ b) ? 1 : 0;
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
        const a = document.querySelector(`.userInput[data-row="${row}"][data-type="A"]`).getAttribute('value');
        const b = document.querySelector(`.userInput[data-row="${row}"][data-type="B"]`).getAttribute('value');
        const output = parseInt(document.querySelector(`.userInput[data-row="${row}"][data-type="out"]`).value, 10);
        const calculatedValue = calculate(a, b, selectGate);
        console.log(a, b, output, calculatedValue);

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