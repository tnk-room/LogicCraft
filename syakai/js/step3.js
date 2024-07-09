const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');
const newWireButton = document.getElementById('newWireButton');

let allLines = [];
let currentLine = [];
let newLine = false;
let clickTimeout = null;
let componentFrames = []; // 画像情報
const gridPoints = []; // 黒い円の座標を保持する配列
const inputs = { A: 0, B: 0, C: 0 , D: 0}; // 入力の値を保持するオブジェクト
const outputs = {LED1: 0, LED2: 0, LED3: 0, LED4: 0}; // 出力の値を保持するオブジェクト
const outputsExp = {LED1: '', LED2: '', LED3: '', LED4: ''}; // 出力の論理式を保持するオブジェクト
let Lines = [];
let Line = [];

var ws = new WebSocket("wss://192.168.10.46:5555/");

const inputPositions = {
    A: { x: 60, y: 130 },
    B: { x: 60, y: 290 },
    C: { x: 60, y: 450 },
    D: { x: 60, y: 610}
};

const outputPositions = {
    LED1: { x: 1040, y: 130 },
    LED2: { x: 1040, y: 290 },
    LED3: { x: 1040, y: 450 },
    LED4: { x: 1040, y: 610 },
};

const switchText = document.getElementById('switchButton');
const ledSwitchText = document.getElementById('ledSwitchButton');
const doButton = document.getElementById('doButton');
const log = "組み合わせ回路";
const seq = "順序回路";
const led = "LED";
const seg = "7seg";

//回路保存ポップアップ表示
document.getElementById('saveButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = "block";
    document.getElementById('saveModal').style.display = "block";
});

//保存ボタンのクリックイベント
document.getElementById('saveModalButton').addEventListener('click', function() {
    var saveName = document.getElementById('modalSaveName').value;
    if (saveName) {
        const data = {
            componentFrames: componentFrames,
            allLines: allLines
        };
        localStorage.setItem(`circuitData_${saveName}`, JSON.stringify(data));
        loadText.textContent = '保存しました';
        updateLoadSelect();
        document.getElementById('saveModal').style.display = "none";
        document.getElementById('overlay').style.display = "none";
    } else {
        alert("保存名を入力してください");
    }
});

// 回路復元ポップアップ表示
document.getElementById('loadButton').addEventListener('click', function() {
    updateLoadSelectModal();
    document.getElementById('loadModal').style.display = "block";
    document.getElementById('overlay').style.display = "block";
});

//復元ボタンのクリックイベント
document.getElementById('loadModalButton').addEventListener('click', function() {
    const selectedSave = document.getElementById('modalLoadSelect').value;
    const saveName = document.getElementById('modalSaveName');
    if (selectedSave) {
        const data = localStorage.getItem(`circuitData_${selectedSave}`);
        if (data) {
            let parsedData = JSON.parse(data);
            componentFrames = parsedData.componentFrames;
            allLines = parsedData.allLines;
            drawPolyline();
            loadText.textContent = '復元されました';
            saveName.value = selectedSave;
            saveName.textContent = selectedSave;
        } else {
            loadText.textContent = '保存されたデータがありません';
        }
        document.getElementById('loadModal').style.display = "none";
        document.getElementById('overlay').style.display = "none";
        switchReset();
        changeValue();
    } else {
        alert("復元する回路を選択してください");
    }
});

// 保存されたデータの一覧を更新する関数
function updateLoadSelectModal() {
    const loadSelect = document.getElementById('modalLoadSelect');
    loadSelect.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('circuitData_')) {
            const saveName = key.replace('circuitData_', '');
            const option = document.createElement('option');
            option.value = saveName;
            option.textContent = saveName;
            loadSelect.appendChild(option);
        }
    }
}

function updateLoadSelect() {
    const loadSelect = document.getElementById('loadSelect');
    loadSelect.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('circuitData_')) {
            const saveName = key.replace('circuitData_', '');
            const option = document.createElement('option');
            option.value = saveName;
            option.textContent = saveName;
            loadSelect.appendChild(option);
        }
    }
}

//回路削除ポップアップ表示
document.getElementById('deleteButton').addEventListener('click', function() {
    updateDeleteSelect();
    document.getElementById('overlay').style.display = "block";
    document.getElementById('deleteModal').style.display = "block";
});

// モーダルのボタンにイベントリスナーを追加
document.querySelectorAll('.close').forEach(element => {
    element.addEventListener('click', function() {
        document.getElementById('overlay').style.display = "none";
        document.getElementById('saveModal').style.display = "none";
        document.getElementById('loadModal').style.display = "none";
        document.getElementById('deleteModal').style.display = "none";
    });
});

// 削除ボタンのクリックイベント
document.getElementById('deleteModalButton').addEventListener('click', function() {
    const selectedSave = document.getElementById('modalDeleteSelect').value;
    if (selectedSave) {
        localStorage.removeItem(`circuitData_${selectedSave}`);
        loadText.textContent = '削除しました';
        updateLoadSelect();
        updateDeleteSelect();
        document.getElementById('deleteModal').style.display = "none";
        document.getElementById('overlay').style.display = "none";
    } else {
        alert("削除する回路を選択してください");
    }
});

// 削除用のデータ一覧を更新する関数
function updateDeleteSelect() {
    const deleteSelect = document.getElementById('modalDeleteSelect');
    deleteSelect.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('circuitData_')) {
            const saveName = key.replace('circuitData_', '');
            const option = document.createElement('option');
            option.value = saveName;
            option.textContent = saveName;
            deleteSelect.appendChild(option);
        }
    }
}

// イベントリスナーの追加
function addInputListeners() {
    document.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.addEventListener('change', (event) => {
            handleInputChange(event, input.name.replace('input', ''));
        });
    });
}

// イベントリスナーの削除
function removeInputListeners() {
    document.querySelectorAll('input[name="inputA"]').forEach(input => input.removeEventListener('change', handleInputChangeA));
    document.querySelectorAll('input[name="inputB"]').forEach(input => input.removeEventListener('change', handleInputChangeB));
    document.querySelectorAll('input[name="inputC"]').forEach(input => input.removeEventListener('change', handleInputChangeC));
    document.querySelectorAll('input[name="inputD"]').forEach(input => input.removeEventListener('change', handleInputChangeD));
}

// handleInputChange関数
function handleInputChange(event, key) {
    inputs[key] = event.target.checked ? 0 : 1;
    let message = '';
    if (ledSwitchText.textContent === led) {
        if(inputs[key] == 0) message = `input${key}_off`;
        else message = `input${key}_on`;   
        ws.send(message);
        console.log("送信:segED_LED");
        console.log(message);
    } else {
        if(inputs[key] == 0) message = `input${key}_off`;
        else message = `input${key}_on`;
        ws.send(message); 
        console.log("送信:segED_seg");
        console.log(message);
    }
    drawPolyline();
    changeValue();
}   

// doButtonのクリックイベント
function handleDoButtonClick() {
    const inputA = document.querySelectorAll('div.toggle1 input[name="inputA"]');
    const inputB = document.querySelectorAll('div.toggle2 input[name="inputB"]');
    const inputC = document.querySelectorAll('div.toggle3 input[name="inputC"]');
    const inputD = document.querySelectorAll('div.toggle4 input[name="inputD"]');

    for (const input of inputA) if (input.checked) inputs.A = parseInt(input.value);
    for (const input of inputB) if (input.checked) inputs.B = parseInt(input.value);
    for (const input of inputC) if (input.checked) inputs.C = parseInt(input.value);
    for (const input of inputD) if (input.checked) inputs.D = parseInt(input.value);

    drawPolyline();
    changeValue();
    drawPolyline();
    changeValue();
}

// 初期状態の確認とリスナーの追加
if (switchText.textContent === log) {
    console.log(switchText.textContent);
    addInputListeners();
} else {
    doButton.style.display = 'inline-block';
}

// スイッチボタンのクリックイベント
switchButton.addEventListener('click', function() {
    if (switchText.textContent === log) {
        switchText.textContent = seq;
        doButton.style.display = 'inline-block';
        removeInputListeners();
    } else {
        switchText.textContent = log;
        doButton.style.display = 'none';
        addInputListeners();
    }
    switchReset();
});

ledSwitchButton.addEventListener('click', function() {
    if (ledSwitchText.textContent === led) {
        ledSwitchText.textContent = seg;
        ws.send('segED_seg');
        console.log("送信:segED_seg");

    } else {
        ledSwitchText.textContent = led;
        ws.send('segED_LED');
        console.log("送信:segED_LED");
    }
});

// 常にdoButtonのクリックイベントを設定
doButton.addEventListener('click', handleDoButtonClick);

/*回路画像チェンジ*/
function imgChange(id, fname){
    const frame = componentFrames.find(frame => frame.id === id);
    if (!frame) return;
    
    let imageSrc;
    switch (fname) {
        case '':
            imageSrc = "img/void.png";
            break;
        case 'and':
            imageSrc = "img/AND.png";
            break;
        case 'or':
            imageSrc = "img/OR.png";
            break;
        case 'xor':
            imageSrc = "img/XOR.png";
            break;
        case 'nand':
            imageSrc = "img/NAND.png";
            break;
        case 'nor':
            imageSrc = "img/NOR.png";
            break;
        case 'xnor':
            imageSrc = "img/XNOR.png";
            break;
        case 'not':
            imageSrc = "img/NOT.png";
            break;
    }

    frame.imageSrc = imageSrc; // フレームに画像ソースを保存
    frame.type = fname;
    calculateOutput(frame);
    changeValue();
    drawPolyline();
}

// 素子選択
function addselect(program_id, top, left) {
    var canvasContainer = document.getElementById('canvasContainer');
    document.getElementById('gridCanvas');

    // canvasの親要素をrelativeに設定
    canvasContainer.style.position = 'relative';

    // select要素を作成
    var select = document.createElement('select');
    select.id = 'gates-select';
    select.className = 'onCanvas';
    select.style.top = top; // 位置を調整
    select.style.left = left; // 位置を調整

    // オプションを追加
    var options = [
        { value: "", text: ""},
        { value: "and", text: "AND"},
        { value: "or", text: "OR" },
        { value: "xor", text: "XOR" },
        { value: "nand", text: "NAND" },
        { value: "nor", text: "NOR" },
        { value: "xnor", text: "XNOR" }
    ];
    options.forEach(function(optionData) {
        var option1 = document.createElement('option');
        option1.value = optionData.value;
        option1.text = optionData.text;
        select.appendChild(option1);
    });

    // onchangeイベントを設定
    select.onchange = function() {
        imgChange(program_id, this.value);
    };

    // canvasContainerにselect要素を追加
    canvasContainer.appendChild(select);
}

//　論理式を計算
function calculateOutput(frame) {
    const input1 = (frame.input[0] == 'A' || frame.input[0] == 'B' || frame.input[0] == 'C' || frame.input[0] == 'D') ? `${frame.input[0]}` : `(${frame.input[0]})`;
    const input2 = (frame.input[1] == 'A' || frame.input[1] == 'B' || frame.input[1] == 'C' || frame.input[1] == 'D') ? `${frame.input[1]}` : `(${frame.input[1]})`;
    let message = '';

    switch (frame.type) {
        case 'and':
            frame.outputValue = `${input1} AND ${input2}`;
            frame.outputValue1 = frame.inputValue[0] & frame.inputValue[1];
            break;
        case 'or':
            frame.outputValue = `${input1} OR ${input2}`;
            frame.outputValue1 = frame.inputValue[0] | frame.inputValue[1];
            break;
        case 'xor':
            frame.outputValue = `${input1} XOR ${input2}`;
            frame.outputValue1 = frame.inputValue[0] ^ frame.inputValue[1];
            break;
        case 'nand':
            frame.outputValue = `NOT (${input1} AND ${input2})`;
            frame.outputValue1 = !(frame.inputValue[0] & frame.inputValue[1]);
            break;
        case 'nor':
            frame.outputValue = `NOT (${input1} OR ${input2})`;
            frame.outputValue1 = !(frame.inputValue[0] | frame.inputValue[1]);
            break;
        case 'xnor':
            frame.outputValue = `NOT (${input1} XOR ${input2})`;
            frame.outputValue1 = !(frame.inputValue[0] ^ frame.inputValue[1]);
            break;
        case 'not':
            frame.outputValue = `NOT ${input1}`;
            frame.outputValue1 = !frame.inputValue[0];
            break;
        default:
            frame.outputValue = '';
            frame.outputValue1 = 0;
    }

    if(frame.outputLocate.includes('LED1')) {
        outputsExp.LED1 = frame.outputValue;
        outputs.LED1 = frame.outputValue1 ? 1 : 0;
        message = `output1_${outputs.LED1}`;
    }
    if(frame.outputLocate.includes('LED2')) {
        outputsExp.LED2 = frame.outputValue;
        outputs.LED2 = frame.outputValue1 ? 1 : 0;
        message = `output2_${outputs.LED2}`;
    }
    if(frame.outputLocate.includes('LED3')) {
        outputsExp.LED3 = frame.outputValue;
        outputs.LED3 = frame.outputValue1 ? 1 : 0;
        message = `output3_${outputs.LED3}`;
    }
    if(frame.outputLocate.includes('LED4')) {
        outputsExp.LED4 = frame.outputValue;
        outputs.LED4 = frame.outputValue1 ? 1 : 0;
        message = `output4_${outputs.LED4}`;
    }
    ws.send(message);
    console.log(message);
    drawLEDs();
}

// 入力を表示
function drawInputs() {
    ctx.font = '20px Arial';

    // 入力Aを描画
    const posA = inputPositions.A;
    ctx.fillStyle = inputs.A === 1 ? 'green' : 'black';
    ctx.fillText('A', posA.x, posA.y - 20);
    ctx.beginPath();
    ctx.arc(posA.x + 20, posA.y - 10, 10, 0, 2 * Math.PI); // 半径10の円を描く
    ctx.fillStyle = inputs.A === 1  ? 'green' : 'gray';
    ctx.fill();

    // 入力Bを描画
    const posB = inputPositions.B;
    ctx.fillStyle = inputs.B === 1 ? 'green' : 'black';
    ctx.fillText('B', posB.x, posB.y - 20);
    ctx.beginPath();
    ctx.arc(posB.x + 20, posB.y - 10, 10, 0, 2 * Math.PI); // 半径10の円を描く
    ctx.fillStyle = inputs.B === 1  ? 'green' : 'gray';
    ctx.fill();

    // 入力Cを描画
    const posC = inputPositions.C;
    ctx.fillStyle = inputs.C === 1 ? 'green' : 'black';
    ctx.fillText('C', posC.x, posC.y - 20);
    ctx.beginPath();
    ctx.arc(posC.x + 20, posC.y - 10, 10, 0, 2 * Math.PI); // 半径10の円を描く
    ctx.fillStyle = inputs.C === 1  ? 'green' : 'gray';
    ctx.fill();

    // 入力Dを描画
    const posD = inputPositions.D;
    ctx.fillStyle = inputs.D === 1 ? 'green' : 'black';
    ctx.fillText('D', posD.x, posD.y - 20);
    ctx.beginPath();
    ctx.arc(posD.x + 20, posD.y - 10, 10, 0, 2 * Math.PI); // 半径10の円を描く
    ctx.fillStyle = inputs.D === 1  ? 'green' : 'gray';
    ctx.fill();
}

// 格子
function drawGrid() {
    ctx.strokeStyle = '#ccc';
    for (let i = 0; i <= 60; i++) { // 横
        ctx.beginPath();
        ctx.moveTo(i * 20, 0);
        ctx.lineTo(i * 20, 720);
        ctx.stroke();
    }
    for (let i = 0; i <= 36; i++) { // 縦
        ctx.beginPath();
        ctx.moveTo(0, i * 20);
        ctx.lineTo(1200, i * 20);
        ctx.stroke();
    }
    // "Tanaka-Lab" を描画
    ctx.fillStyle = 'blue'; 
    ctx.font = '20px Arial'; 
    ctx.fillText('Tanaka-Lab', 1050, 30); 
    //drawGridPoints();
}

//　初期の画像を表示
function initializeComponentFrames() {
    const image = new Image();
    image.src = 'img/void.png';

    image.onload = function() {
        const ids = ['program1', 'program2', 'program3', 'program4']; // 割り当てるIDの配列
        let idIndex = 0; // IDインデックスを初期化

        // 素子を配置する枠に画像を表示
        for (let i = 16; i < 46; i += 20) {
            for (let j = 8; j < 32; j += 12) {
                if (idIndex >= ids.length) break; // すべてのIDが割り当てられたらループを終了

                const frameX = i * 20;
                const frameY = j * 20;
                const frameWidth = 7.5 * 20;  // 横幅を少し狭くする
                const frameHeight = 6 * 20;

                const offsetX = (8 * 20 - frameWidth) / 2;  // 中央に配置するためのオフセット
                const imageX = frameX + offsetX;

                // IDを割り当て
                const componentId = ids[idIndex++];
                
                addselect(componentId,`${frameY + 5}px`, `${frameX - 14}px`);

                // IDを含む情報をcomponentFramesに追加
                componentFrames.push({
                    id: componentId,
                    x: imageX,
                    y: frameY,
                    width: frameWidth,
                    height: frameHeight,
                    imageSrc: 'img/void.png', // デフォルトの画像ソースを設定
                    type: '',
                    inputs: [
                        {x: imageX, y: frameY + 40},
                        {x: imageX, y: frameY + 80}
                    ],
                    input: ['', ''], //入力論理式
                    inputValue: [0, 0], //入力値0or1
                    inputLocate: ['', ''], //入力場所(A,B,C,0,1,2,3)
                    output: {x: imageX + frameWidth, y: frameY + 60},
                    outputValue: '', //出力論理式
                    outputValue1: 0, //出力値0or1
                    outputLocate: [] //出力場所(0,1,2,3,LED1,LED2,LED3)
                });
            }
        }
        drawImage(); // 初期化時に画像を描画
    };
}

//　画像を表示
function drawImage() {
    componentFrames.forEach(frame => {
        const image = new Image();
        image.src = frame.imageSrc || 'img/void.png';
        image.onload = function() {
            ctx.clearRect(frame.x, frame.y, frame.width, frame.height);
            ctx.drawImage(image, frame.x, frame.y, frame.width, frame.height);
            drawFramePoints(frame); // ここで各フレームにポイントを描画
        };
    });
}

// 点を表示
function drawFramePoints(frame) {
    ctx.fillStyle = 'black';
    frame.inputs.forEach(input => {
        ctx.beginPath();
        ctx.arc(input.x, input.y, 6, 0, 2 * Math.PI);
        ctx.fill();
    });
    ctx.beginPath();
    ctx.arc(frame.output.x, frame.output.y, 6, 0, 2 * Math.PI);
    ctx.fill();
} 

// LEDを表示
function drawLEDs() {
    ctx.font = '20px Arial';

    // LED1
    const led1Pos = outputPositions.LED1;
    ctx.fillStyle = (outputs.LED1 === 1 || outputs.LED1)  ? 'red' : 'black';
    ctx.fillText('LED1', led1Pos.x, led1Pos.y - 20);
    ctx.beginPath();
    ctx.arc(led1Pos.x + 40, led1Pos.y - 10, 10, 0, 2 * Math.PI); // 半径10の円を描く
    ctx.fillStyle = (outputs.LED1 === 1 || outputs.LED1)  ? 'red' : 'gray';
    ctx.fill();

    // LED2
    const led2Pos = outputPositions.LED2;
    ctx.fillStyle = (outputs.LED2 === 1 || outputs.LED2) ? 'red' : 'black';
    ctx.fillText('LED2', led2Pos.x, led2Pos.y - 20);
    ctx.beginPath();
    ctx.arc(led2Pos.x + 40, led2Pos.y - 10, 10, 0, 2 * Math.PI); // 半径10の円を描く
    ctx.fillStyle = (outputs.LED2 === 1 || outputs.LED2)  ? 'red' : 'gray';
    ctx.fill();

    // LED3
    const led3Pos = outputPositions.LED3;
    ctx.fillStyle = (outputs.LED3 === 1 || outputs.LED3) ? 'red' : 'black';
    ctx.fillText('LED3', led3Pos.x, led3Pos.y - 20);
    ctx.beginPath();
    ctx.arc(led3Pos.x + 40, led3Pos.y - 10, 10, 0, 2 * Math.PI); // 半径10の円を描く
    ctx.fillStyle = (outputs.LED3 === 1 || outputs.LED3)  ? 'red' : 'gray';
    ctx.fill();

    // LED4
    const led4Pos = outputPositions.LED4;
    ctx.fillStyle = (outputs.LED4 === 1 || outputs.LED4) ? 'red' : 'black';
    ctx.fillText('LED4', led4Pos.x, led4Pos.y - 20);
    ctx.beginPath();
    ctx.arc(led4Pos.x + 40, led4Pos.y - 10, 10, 0, 2 * Math.PI); // 半径10の円を描く
    ctx.fillStyle = (outputs.LED4 === 1 || outputs.LED4)  ? 'red' : 'gray';
    ctx.fill();
}

// クリック検出
canvas.addEventListener('click', function(event) {
    if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
    }

    clickTimeout = setTimeout(function() {
        const rect = canvas.getBoundingClientRect();
        const x = Math.round((event.clientX - rect.left) / 20) * 20;
        const y = Math.round((event.clientY - rect.top) / 20) * 20;

        if (newLine) {
            if (currentLine.length > 0) {
                allLines.push([...currentLine]);
            }
            currentLine = [];
            newLine = false;
        }

        if (!isPointInComponentFrame(x, y) && (currentLine.length === 0 || !isLineIntersectingComponent(currentLine[currentLine.length - 1], { x, y }))) {
            if(currentLine.length > 0) judgeInput(currentLine[currentLine.length - 1], { x, y });
            currentLine.push({ x, y });
            if(Line.s != null && Line.e != null) {
                Lines.push(Line);
                newWireButton.click();
                Line = [];
            }
            drawPolyline();
        }
    }, 250); // ダブルクリックは250ms以内
});

// ダブルクリック検出
canvas.addEventListener('dblclick', function(event) {
    if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
    }

    const rect = canvas.getBoundingClientRect();
    const x = Math.round((event.clientX - rect.left) / 20) * 20;
    const y = Math.round((event.clientY - rect.top) / 20) * 20;

    let lineToRemove = -1;
    for (let i = 0; i < allLines.length; i++) {
        if (isPointOnPolyline(x, y, allLines[i])) {
            lineToRemove = i;
            break;
        }
    }

    if (lineToRemove !== -1) {
        if(allLines.length > 0) checkConnectPoints(allLines[lineToRemove]);
        allLines.splice(lineToRemove, 1);
        drawPolyline();
    }

    // ライン上のダブルクリックでライン消去
    if (isPointOnPolyline(x, y, currentLine)) {
        currentLine = [];
        drawPolyline();
    }
});

// 別の配線ボタンの検出
newWireButton.addEventListener('click', function() {
    if (currentLine.length > 0) {
        allLines.push([...currentLine]);
        currentLine = [];
    }
    newLine = true;
});

// スイッチのリセット
function switchReset() {
    inputs.A = 0;
    inputs.B = 0;
    inputs.C = 0;
    inputs.D = 0;

    // Reset radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        if (radio.value === "0") {
            radio.checked = true;
        }
    });

    drawPolyline();
    for(let i=0;i<componentFrames.length;i++) {
        let frame = componentFrames[i];
        calculateOutput(frame);
        if(frame.outputLocate.includes('LED1')) message = `output1_${outputs.LED1}`;
        if(frame.outputLocate.includes('LED2')) message = `output2_${outputs.LED2}`;
        if(frame.outputLocate.includes('LED3')) message = `output3_${outputs.LED3}`;
        if(frame.outputLocate.includes('LED4')) message = `output4_${outputs.LED4}`;
        ws.send(message);
        console.log(message);
    }
}

// 回路クリアボタンの検出
clearButton.addEventListener('click', function() {
    window.location.reload();
});

// 点とつながっているか検出
function checkConnectPoints(points){
    // A,B,C,D
    console.log(points);
    if(points[0] != null){
        for(let y=130;y<=610;y+=160){
            if(points[0].x === 60 && points[0].y === y) {
                for(let i=0;i<4;i++) for(let j=0;j<2;j++) {
                    const com = componentFrames[i];
                    if(Math.abs(points[points.length-1].x - com.inputs[j].x) < 20 && Math.abs(points[points.length-1].y - com.inputs[j].y) < 20) {
                        com.input[j] = '';
                        com.inputLocate[j] = '';
                        com.inputValue[j] = 0;
                        calculateOutput(com);
                    }
                }
            }
        }
    }
}

// 枠内か検出
function isPointInComponentFrame(x, y) {
    for (const frame of componentFrames) {
        if (x >= frame.x && x <= frame.x + frame.width && y >= frame.y && y <= frame.y + frame.height) {
            return true;
        }
    }
    return false;
}

// 線が枠と交差しているか検出
function isLineIntersectingComponent(p1, p2) {
    for (const frame of componentFrames) {
        if (isLineIntersectingRect(p1, p2, frame)) {
            // 始点と終点が枠の左側または右側に触れている場合は描画を許可
            if ((p1.x === frame.x && p2.x === frame.x + frame.width) ||
                (p1.x === frame.x + frame.width && p2.x === frame.x) ||
                (p1.y === frame.y && p2.y === frame.y + frame.height) ||
                (p1.y === frame.y + frame.height && p2.y === frame.y)) {
                continue;
            }
            alert('素子と線が交差します');
            newWireButton.click();
            return true;
        }
    }
    return false;
}

// 線が矩形と交差しているか検出
function isLineIntersectingRect(p1, p2, rect) {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    const { x: rx, y: ry, width: rw, height: rh } = rect;

    return (
        isLineIntersectingLine(x1, y1, x2, y2, rx, ry, rx + rw, ry) ||
        isLineIntersectingLine(x1, y1, x2, y2, rx, ry, rx, ry + rh) ||
        isLineIntersectingLine(x1, y1, x2, y2, rx + rw, ry, rx + rw, ry + rh) ||
        isLineIntersectingLine(x1, y1, x2, y2, rx, ry + rh, rx + rw, ry + rh)
    );
}

// 二つの線分が交差しているか検出
function isLineIntersectingLine(x1, y1, x2, y2, x3, y3, x4, y4) {
    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denom === 0) return false;

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;

    return (ua >= 0 && ua <= 1) && (ub >= 0 && ub <= 1);
}

// 折れ線がクリック位置にあると検出
function isPointOnPolyline(x, y, points) {
    const tolerance = 10;
    for (let i = 0; i < points.length - 1; i++) {
        if (isPointNearLine(x, y, points[i], points[i + 1], tolerance)) {
            return true;
        }
    }
    return false;
}

// 線に近いか検出
function isPointNearLine(px, py, p1, p2, tolerance) {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    const A = px - x1;
    const B = py - y1;
    const C = x2 - x1;
    const D = y2 - y1;

    const dot = A * C + B * D;
    const len_sq = C * C + D * D;
    const param = dot / len_sq;

    let xx, yy;

    if (param < 0 || (x1 === x2 && y1 === y2)) {
        xx = x1;
        yy = y1;
    } else if (param > 1) {
        xx = x2;
        yy = y2;
    } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
    }

    const dx = px - xx;
    const dy = py - yy;
    return (dx * dx + dy * dy) <= tolerance * tolerance;
}

// 入力変化後の値変更
function changeValue(){
    for(let i=0;i<componentFrames.length;i++) {
        const com = componentFrames[i];
        for(let j=0;j<2;j++) {
            //console.log(com.inputLocate[j]);
            if(com.inputLocate[j] === "A") {
                com.input[j] = "A";
                com.inputValue[j] = inputs.A;
                if(com.type != "") calculateOutput(com);
            }else if(com.inputLocate[j] === "B") {
                com.input[j] = "B";
                com.inputValue[j] = inputs.B;
                if(com.type != "") calculateOutput(com);
            }else if(com.inputLocate[j] === "C") {
                com.input[j] = "C";
                com.inputValue[j] = inputs.C;
                if(com.type != "") calculateOutput(com);
            }else if(com.inputLocate[j] === "D") {
                com.input[j] = "D";
                com.inputValue[j] = inputs.D;
                if(com.type != "") calculateOutput(com);
            }
            for(let k=0;k<componentFrames.length;k++){
                if(com.inputLocate[j] === k) {
                    com.input[j] = componentFrames[com.inputLocate[j]].outputValue;
                    com.inputValue[j] = componentFrames[com.inputLocate[j]].outputValue1;
                    if(com.type != "") calculateOutput(com);
                }
            } 
        }
    }
}

// 線の始点終点検出
function judgeInput(p1, p2) {
    const { x: x1, y: y1 } = p1; //始点
    const { x: x2, y: y2 } = p2; //終点

    //始点
    if(x1 == 80 && y1 == 120) Line.s = "A"; //A: 80 120
    else if(x1 == 80 && y1 == 280) Line.s = "B"; //B: 80 280
    else if(x1 == 80 && y1 == 440) Line.s = "C"; //C: 80 440
    else if(x1 == 80 && y1 == 600) Line.s = "D"; //C: 80 600

    for(let i=0;i<componentFrames.length;i++) {
        const com = componentFrames[i];
        if(Math.abs(x1 - com.output.x) < 20 && Math.abs(y1 - com.output.y) < 20)  {
            Line.s = i;
            calculateOutput(com);
        }
    }

    //終点
    for(let i=0;i<componentFrames.length;i++) for(let j=0;j<2;j++) {
        const com = componentFrames[i];
        if(Math.abs(x2 - com.inputs[j].x) < 20 && Math.abs(y2 - com.inputs[j].y) < 20) {
            Line.e = i;
            if(Line.s != null){
                if(Line.s == "A" || Line.s == "B" || Line.s == "C" || Line.s == "D") com.input[j] = Line.s;
                else {
                    com.input[j] = componentFrames[Line.s].outputValue;
                    componentFrames[Line.s].outputLocate.push(Line.e);
                }
            }
            com.inputLocate[j] = Line.s;
            calculateOutput(com);
        }
    }

    if(x2 == 1080 && y2 == 120) {
        Line.e = "LED1"; //LED1: 1080 120
        outputs.LED1 = componentFrames[Line.s].outputValue1; 
        componentFrames[Line.s].outputLocate.push('LED1');
    }else if(x2 == 1080 && y2 == 280) {
        Line.e = "LED2"; //LED2: 1080 280
        outputs.LED2 = componentFrames[Line.s].outputValue1;
        componentFrames[Line.s].outputLocate.push('LED2');
    }else if(x2 == 1080 && y2 == 440) {
        Line.e = "LED3"; //LED3: 1080 440
        outputs.LED3 = componentFrames[Line.s].outputValue1;
        componentFrames[Line.s].outputLocate.push('LED3');
    }else if(x2 == 1080 && y2 == 600) {
        Line.e = "LED4"; //LED4: 1080 600
        outputs.LED4 = componentFrames[Line.s].outputValue1;
        componentFrames[Line.s].outputLocate.push('LED4');
    }
}

// 一連の回路図を描く
function drawPolyline() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawImage();

    ctx.strokeStyle = 'red';
    allLines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line[0].x, line[0].y);
        for (let i = 1; i < line.length; i++) {
            ctx.lineTo(line[i].x, line[i].y);
        }
        ctx.stroke();
    });

    if (currentLine.length > 1) {
        ctx.beginPath();
        ctx.moveTo(currentLine[0].x, currentLine[0].y);
        for (let i = 1; i < currentLine.length; i++) {
            ctx.lineTo(currentLine[i].x, currentLine[i].y);
        }
        ctx.stroke();
    }

    drawInputs();
    drawLEDs();
}

//真理値表作成関数
function generateTruthTable() {
    const selectedPartId = document.getElementById('partSelector').value;
    // console.log('Selected Part ID:', selectedPartId); // デバッグ用
    
    selectedPart = componentFrames.find(frame => frame.id === selectedPartId);
    if(selectedPartId == "led1" || selectedPartId == "led2" || selectedPartId == "led3" || selectedPartId == "led4") {
        selectedPart = componentFrames.find(frame => {
            if(Array.isArray(frame.outputLocate)) {
                return frame.outputLocate.includes(selectedPartId.toUpperCase());
            }else {
                return frame.outputLocate === selectedPartId.toUpperCase();
            }
        });
    }
    if (!selectedPart) {
        alert('選択されたパーツが見つかりません');
        return;
    }

    // console.log('Selected Part:', selectedPart); // デバッグ用

    let expression;
    // console.log(outputsExp.LED1);
    if(selectedPart == "led1") expression = outputsExp.LED1;
    else if(selectedPart == "led2") expression = outputsExp.LED2;
    else if(selectedPart == "led3") expression = outputsExp.LED3;
    else if(selectedPart == "led4") expression = outputsExp.LED4;
    else expression = selectedPart.outputValue;
    // console.log('Initial Expression:',  expression); // デバッグ用
    
    const usedVariables = ['A', 'B', 'C', 'D'].filter(variable => {
        const regex = new RegExp(`\\b${variable}\\b`);
        return regex.test(expression);
    });

    // console.log('Used Variables:', usedVariables); // デバッグ用

    const combinations = generateCombinations(usedVariables.length);

    const operators = {
        'AND': '&&',
        'OR': '||',
        'XOR': '!=',  // 一時的なプレースホルダー
        'XNOR': '==', // 一時的なプレースホルダー
        'NOT': '!'
    };

    for (let op in operators) {
        let regex = new RegExp(`\\b${op}\\b`, 'g');
        expression = expression.replace(regex, operators[op]);
    }

    // console.log('Evaluated Expression:', expression); // デバッグ用

    let table = '<table><tr>';
    usedVariables.forEach(variable => {
        table += `<th>${variable}</th>`;
    });
    table += `<th>${selectedPartId} (${selectedPart.outputValue})</th></tr>`;

    combinations.forEach(combination => {
        let context = {};
        usedVariables.forEach((variable, index) => {
            context[variable] = combination[index] ? 1 : 0;
        });

        let evalExpression = expression;
        for (let variable in context) {
            let regex = new RegExp(`\\b${variable}\\b`, 'g');
            evalExpression = evalExpression.replace(regex, context[variable]);
        }

        let result;
        try {
            result = eval(evalExpression) ? 1 : 0;
        } catch (error) {
            // console.error('Evaluation Error:', error); // デバッグ用
            result = 'error';
        }

        table += '<tr>';
        usedVariables.forEach(variable => {
            table += `<td>${context[variable]}</td>`;
        });
        table += `<td>${result}</td></tr>`;
    });

    table += '</table>';
    document.getElementById('truthTable').innerHTML = table;
    // console.log('Truth Table Generated'); // デバッグ用
}

function generateCombinations(n) {
    let combinations = [];
    for (let i = 0; i < (1 << n); i++) {
        let combination = [];
        for (let j = 0; j < n; j++) {
            combination.push(!!(i & (1 << j)));
        }
        combinations.push(combination);
    }
    return combinations;
}

// toggleボタン
document.querySelectorAll(".toggle").forEach(function(toggle) {
    toggle.addEventListener("click", function() {
        this.classList.toggle("checked");
        let input = this.previousElementSibling;
        if (input && input.type === "checkbox") {
            input.checked = this.classList.contains("checked");
            var event = new Event('change');
            input.dispatchEvent(event);
        }
    });
});



//出力を計算
componentFrames.forEach(frame => calculateOutput(frame));
// 格子を描く
drawGrid();
//最初に画像を表示
initializeComponentFrames();
//入力を描く
drawInputs();
//出力用のLEDを描く
drawLEDs();
// 初期化時に保存されたデータの一覧を更新
updateLoadSelect();