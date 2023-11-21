const input1 = document.getElementById("input1");
                const input2 = document.getElementById("input2");
                const gatesSelect = document.getElementById("gates-select");
                const gatesOutput = document.getElementById("gates-output");
                var ws = new WebSocket("ws://172.20.10.2:5555/");
                
                function simulateLogicGates() {
                    const isInput1Checked = input1.checked;
                    const isInput2Checked = input2.checked;
                    const selectedGate = gatesSelect.value;
                    
                    switch (selectedGate) {
                        case 'and':
                            const andResult = isInput1Checked && isInput2Checked;
                            gatesOutput.innerText = andResult ? "1" : "0";
                            break;
                        case 'or':
                            const orResult = isInput1Checked || isInput2Checked;
                            gatesOutput.innerText = orResult ? "1" : "0";
                            break;
                        case 'xor':
                            const xorResult = (isInput1Checked || isInput2Checked) && !(isInput1Checked && isInput2Checked);
                            gatesOutput.innerText = xorResult ? "1" : "0";
                            break;
                        case 'nand':
                            const nandResult = !(isInput1Checked && isInput2Checked);
                            gatesOutput.innerText = nandResult ? "1" : "0";
                            break;
                        case 'nor':
                            const norResult = !(isInput1Checked || isInput2Checked);
                            gatesOutput.innerText = norResult ? "1" : "0";
                            break;
                    }

                    if(gatesOutput.innerText == "1"){
                        ws.send('led_on');
                    }else{
                        ws.send('led_off');
                    }
                }
                
                input1.addEventListener("change", simulateLogicGates);
                input2.addEventListener("change", simulateLogicGates);
                gatesSelect.addEventListener("change", simulateLogicGates);                
                simulateLogicGates();

