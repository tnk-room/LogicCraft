const a0_0x62c292=a0_0x10d7;(function(_0x40da68,_0x421710){const _0x3e4eec=a0_0x10d7,_0x179410=_0x40da68();while(!![]){try{const _0x488d94=-parseInt(_0x3e4eec(0x1bd))/0x1*(-parseInt(_0x3e4eec(0x172))/0x2)+parseInt(_0x3e4eec(0x152))/0x3+parseInt(_0x3e4eec(0x195))/0x4*(parseInt(_0x3e4eec(0x140))/0x5)+parseInt(_0x3e4eec(0x189))/0x6*(parseInt(_0x3e4eec(0x166))/0x7)+-parseInt(_0x3e4eec(0x1bf))/0x8+-parseInt(_0x3e4eec(0x13c))/0x9*(parseInt(_0x3e4eec(0x12f))/0xa)+parseInt(_0x3e4eec(0x191))/0xb*(-parseInt(_0x3e4eec(0x15c))/0xc);if(_0x488d94===_0x421710)break;else _0x179410['push'](_0x179410['shift']());}catch(_0x39bb5c){_0x179410['push'](_0x179410['shift']());}}}(a0_0x4bc4,0x26dc1));const canvas=document[a0_0x62c292(0x1d0)]('gridCanvas'),ctx=canvas['getContext']('2d'),newWireButton=document[a0_0x62c292(0x1d0)]('newWireButton');let allLines=[],currentLine=[],newLine=![],clickTimeout=null,componentFrames=[];const gridPoints=[],inputs={'A':0x0,'B':0x0,'C':0x0,'D':0x0},outputs={'LED1':0x0,'LED2':0x0,'LED3':0x0,'LED4':0x0},outputsExp={'LED1':'','LED2':'','LED3':'','LED4':''};let Lines=[],Line=[];const inputPositions={'A':{'x':0x3c,'y':0x82},'B':{'x':0x3c,'y':0x122},'C':{'x':0x3c,'y':0x1c2},'D':{'x':0x3c,'y':0x262}},outputPositions={'LED1':{'x':0x5a0,'y':0x82},'LED2':{'x':0x5a0,'y':0x122},'LED3':{'x':0x5a0,'y':0x1c2},'LED4':{'x':0x5a0,'y':0x262}},switchText=document[a0_0x62c292(0x1d0)](a0_0x62c292(0x139)),doButton=document[a0_0x62c292(0x1d0)](a0_0x62c292(0x17f)),log=a0_0x62c292(0x13a),seq=a0_0x62c292(0x148);document[a0_0x62c292(0x1d0)]('saveButton')['addEventListener'](a0_0x62c292(0x123),function(){const _0x30dd29=a0_0x62c292;document[_0x30dd29(0x1d0)]('overlay')['style'][_0x30dd29(0x196)]='block',document['getElementById'](_0x30dd29(0x14a))['style'][_0x30dd29(0x196)]=_0x30dd29(0x167);}),document[a0_0x62c292(0x1d0)](a0_0x62c292(0x127))[a0_0x62c292(0x192)]('click',function(){const _0x1b9976=a0_0x62c292;var _0x5c2747=document[_0x1b9976(0x1d0)](_0x1b9976(0x122))[_0x1b9976(0x17e)];if(_0x5c2747){const _0x54a507={'componentFrames':componentFrames,'allLines':allLines};localStorage[_0x1b9976(0x1c4)]('circuitData_'+_0x5c2747,JSON[_0x1b9976(0x182)](_0x54a507)),loadText[_0x1b9976(0x12b)]='保存しました',updateLoadSelect(),document[_0x1b9976(0x1d0)]('saveModal')['style'][_0x1b9976(0x196)]=_0x1b9976(0x1b9),document[_0x1b9976(0x1d0)](_0x1b9976(0x1bc))['style'][_0x1b9976(0x196)]=_0x1b9976(0x1b9);}else alert(_0x1b9976(0x164));}),document[a0_0x62c292(0x1d0)](a0_0x62c292(0x18f))[a0_0x62c292(0x192)](a0_0x62c292(0x123),function(){const _0x4936a3=a0_0x62c292;updateLoadSelectModal(),document['getElementById'](_0x4936a3(0x1bc))[_0x4936a3(0x132)][_0x4936a3(0x196)]=_0x4936a3(0x167),document['getElementById'](_0x4936a3(0x185))[_0x4936a3(0x132)]['display']=_0x4936a3(0x167);}),document['getElementById']('loadModalButton')[a0_0x62c292(0x192)](a0_0x62c292(0x123),function(){const _0x2a368e=a0_0x62c292,_0x245d2b=document[_0x2a368e(0x1d0)](_0x2a368e(0x1b8))[_0x2a368e(0x17e)],_0xbdc5be=document[_0x2a368e(0x1d0)](_0x2a368e(0x122));if(_0x245d2b){const _0x1d4101=localStorage['getItem'](_0x2a368e(0x1c7)+_0x245d2b);if(_0x1d4101){let _0x30e54e=JSON[_0x2a368e(0x18d)](_0x1d4101);componentFrames=_0x30e54e['componentFrames'],allLines=_0x30e54e[_0x2a368e(0x125)],drawPolyline(),loadText[_0x2a368e(0x12b)]=_0x2a368e(0x16d),_0xbdc5be[_0x2a368e(0x17e)]=_0x245d2b,_0xbdc5be[_0x2a368e(0x12b)]=_0x245d2b;}else loadText['textContent']='保存されたデータがありません';document[_0x2a368e(0x1d0)](_0x2a368e(0x185))[_0x2a368e(0x132)][_0x2a368e(0x196)]=_0x2a368e(0x1b9),document[_0x2a368e(0x1d0)](_0x2a368e(0x1bc))['style'][_0x2a368e(0x196)]=_0x2a368e(0x1b9),switchReset(),changeValue();}else alert('復元する回路を選択してください');});function updateLoadSelectModal(){const _0x4ef9fd=a0_0x62c292,_0x192c97=document['getElementById'](_0x4ef9fd(0x1b8));_0x192c97[_0x4ef9fd(0x178)]='';for(let _0x22c760=0x0;_0x22c760<localStorage[_0x4ef9fd(0x1ae)];_0x22c760++){const _0x52f2ef=localStorage[_0x4ef9fd(0x121)](_0x22c760);if(_0x52f2ef[_0x4ef9fd(0x18c)](_0x4ef9fd(0x1c7))){const _0x2cfd59=_0x52f2ef['replace'](_0x4ef9fd(0x1c7),''),_0xf361ab=document['createElement'](_0x4ef9fd(0x150));_0xf361ab['value']=_0x2cfd59,_0xf361ab[_0x4ef9fd(0x12b)]=_0x2cfd59,_0x192c97[_0x4ef9fd(0x14b)](_0xf361ab);}}}function updateLoadSelect(){const _0x1769e9=a0_0x62c292,_0x21f14c=document[_0x1769e9(0x1d0)](_0x1769e9(0x19a));_0x21f14c[_0x1769e9(0x178)]='';for(let _0x1f5026=0x0;_0x1f5026<localStorage[_0x1769e9(0x1ae)];_0x1f5026++){const _0x967a65=localStorage[_0x1769e9(0x121)](_0x1f5026);if(_0x967a65[_0x1769e9(0x18c)](_0x1769e9(0x1c7))){const _0xc6b7ef=_0x967a65[_0x1769e9(0x157)](_0x1769e9(0x1c7),''),_0x130585=document[_0x1769e9(0x18e)]('option');_0x130585[_0x1769e9(0x17e)]=_0xc6b7ef,_0x130585['textContent']=_0xc6b7ef,_0x21f14c[_0x1769e9(0x14b)](_0x130585);}}}document[a0_0x62c292(0x1d0)](a0_0x62c292(0x170))[a0_0x62c292(0x192)]('click',function(){const _0xa3a94=a0_0x62c292;updateDeleteSelect(),document[_0xa3a94(0x1d0)](_0xa3a94(0x1bc))[_0xa3a94(0x132)]['display']=_0xa3a94(0x167),document[_0xa3a94(0x1d0)]('deleteModal')[_0xa3a94(0x132)][_0xa3a94(0x196)]=_0xa3a94(0x167);}),document[a0_0x62c292(0x1be)](a0_0x62c292(0x120))[a0_0x62c292(0x144)](_0x1c0435=>{const _0x396ea6=a0_0x62c292;_0x1c0435[_0x396ea6(0x192)]('click',function(){const _0x32d590=_0x396ea6;document['getElementById'](_0x32d590(0x1bc))['style'][_0x32d590(0x196)]='none',document[_0x32d590(0x1d0)](_0x32d590(0x14a))[_0x32d590(0x132)][_0x32d590(0x196)]='none',document[_0x32d590(0x1d0)]('loadModal')[_0x32d590(0x132)]['display']='none',document[_0x32d590(0x1d0)](_0x32d590(0x165))[_0x32d590(0x132)][_0x32d590(0x196)]='none';});}),document[a0_0x62c292(0x1d0)](a0_0x62c292(0x1c8))[a0_0x62c292(0x192)](a0_0x62c292(0x123),function(){const _0x4d04bf=a0_0x62c292,_0x2464f8=document[_0x4d04bf(0x1d0)](_0x4d04bf(0x171))['value'];_0x2464f8?(localStorage[_0x4d04bf(0x1a9)]('circuitData_'+_0x2464f8),loadText[_0x4d04bf(0x12b)]=_0x4d04bf(0x1ac),updateLoadSelect(),updateDeleteSelect(),document['getElementById']('deleteModal')[_0x4d04bf(0x132)]['display']=_0x4d04bf(0x1b9),document[_0x4d04bf(0x1d0)](_0x4d04bf(0x1bc))[_0x4d04bf(0x132)][_0x4d04bf(0x196)]='none'):alert(_0x4d04bf(0x118));});function updateDeleteSelect(){const _0x2254f6=a0_0x62c292,_0x2dc215=document[_0x2254f6(0x1d0)](_0x2254f6(0x171));_0x2dc215[_0x2254f6(0x178)]='';for(let _0x5d87dc=0x0;_0x5d87dc<localStorage[_0x2254f6(0x1ae)];_0x5d87dc++){const _0x38b091=localStorage[_0x2254f6(0x121)](_0x5d87dc);if(_0x38b091[_0x2254f6(0x18c)](_0x2254f6(0x1c7))){const _0x1f34cd=_0x38b091['replace'](_0x2254f6(0x1c7),''),_0x38ef14=document[_0x2254f6(0x18e)]('option');_0x38ef14[_0x2254f6(0x17e)]=_0x1f34cd,_0x38ef14[_0x2254f6(0x12b)]=_0x1f34cd,_0x2dc215[_0x2254f6(0x14b)](_0x38ef14);}}}function addInputListeners(){const _0x1a40a0=a0_0x62c292;document[_0x1a40a0(0x1be)](_0x1a40a0(0x145))[_0x1a40a0(0x144)](_0x4548f4=>{const _0x1e1bdb=_0x1a40a0;_0x4548f4[_0x1e1bdb(0x192)](_0x1e1bdb(0x163),_0x21df4b=>{const _0x292c2a=_0x1e1bdb;handleInputChange(_0x21df4b,_0x4548f4[_0x292c2a(0x124)]['replace'](_0x292c2a(0x15e),''));});});}function removeInputListeners(){const _0x500e8f=a0_0x62c292;document[_0x500e8f(0x1be)]('input[name=\x22inputA\x22]')[_0x500e8f(0x144)](_0x241f18=>_0x241f18['removeEventListener']('change',handleInputChangeA)),document[_0x500e8f(0x1be)]('input[name=\x22inputB\x22]')[_0x500e8f(0x144)](_0x56ee70=>_0x56ee70[_0x500e8f(0x156)]('change',handleInputChangeB)),document[_0x500e8f(0x1be)](_0x500e8f(0x11e))[_0x500e8f(0x144)](_0x401158=>_0x401158['removeEventListener'](_0x500e8f(0x163),handleInputChangeC)),document['querySelectorAll']('input[name=\x22inputD\x22]')[_0x500e8f(0x144)](_0xf5e78=>_0xf5e78[_0x500e8f(0x156)](_0x500e8f(0x163),handleInputChangeD));}function handleInputChange(_0x1c77b1,_0x3cb70f){const _0x450846=a0_0x62c292;inputs[_0x3cb70f]=_0x1c77b1[_0x450846(0x162)][_0x450846(0x159)]?0x0:0x1,drawPolyline(),changeValue();}function handleDoButtonClick(){const _0x3bc4c0=a0_0x62c292,_0x2bc853=document['querySelectorAll'](_0x3bc4c0(0x14c)),_0x76df71=document[_0x3bc4c0(0x1be)](_0x3bc4c0(0x1aa)),_0x492df0=document['querySelectorAll'](_0x3bc4c0(0x11e)),_0x437c2c=document[_0x3bc4c0(0x1be)](_0x3bc4c0(0x13d));for(const _0x21695 of _0x2bc853)if(_0x21695[_0x3bc4c0(0x159)])inputs['A']=parseInt(_0x21695[_0x3bc4c0(0x17e)]);for(const _0x28585a of _0x76df71)if(_0x28585a['checked'])inputs['B']=parseInt(_0x28585a[_0x3bc4c0(0x17e)]);for(const _0x3a2fe5 of _0x492df0)if(_0x3a2fe5[_0x3bc4c0(0x159)])inputs['C']=parseInt(_0x3a2fe5[_0x3bc4c0(0x17e)]);for(const _0x4b965c of _0x437c2c)if(_0x4b965c['checked'])inputs['D']=parseInt(_0x4b965c['value']);drawPolyline(),changeValue(),drawPolyline(),changeValue();}if(switchText[a0_0x62c292(0x12b)]===log)addInputListeners();else doButton[a0_0x62c292(0x132)][a0_0x62c292(0x196)]=a0_0x62c292(0x130);switchButton['addEventListener'](a0_0x62c292(0x123),function(){const _0x208964=a0_0x62c292;switchText[_0x208964(0x12b)]===log?(switchText[_0x208964(0x12b)]=seq,doButton[_0x208964(0x132)][_0x208964(0x196)]='inline-block',removeInputListeners()):(switchText[_0x208964(0x12b)]=log,doButton[_0x208964(0x132)][_0x208964(0x196)]='none',addInputListeners()),switchReset();}),doButton[a0_0x62c292(0x192)](a0_0x62c292(0x123),handleDoButtonClick);function imgChange(_0x210efd,_0x26813a){const _0x23c89b=a0_0x62c292,_0xa4b83b=componentFrames['find'](_0x4152e2=>_0x4152e2['id']===_0x210efd);if(!_0xa4b83b)return;let _0x4cd0bf;switch(_0x26813a){case'':_0x4cd0bf=_0x23c89b(0x176);break;case _0x23c89b(0x190):_0x4cd0bf=_0x23c89b(0x19c);break;case'or':_0x4cd0bf=_0x23c89b(0x198);break;case _0x23c89b(0x137):_0x4cd0bf=_0x23c89b(0x15b);break;case _0x23c89b(0x1a3):_0x4cd0bf='img/NAND.png';break;case _0x23c89b(0x184):_0x4cd0bf=_0x23c89b(0x1cb);break;case _0x23c89b(0x1b7):_0x4cd0bf=_0x23c89b(0x1ce);break;case _0x23c89b(0x16b):_0x4cd0bf=_0x23c89b(0x149);break;}_0xa4b83b[_0x23c89b(0x1a1)]=_0x4cd0bf,_0xa4b83b[_0x23c89b(0x1ca)]=_0x26813a,calculateOutput(_0xa4b83b),changeValue(),drawPolyline();}function addselect(_0xc3579a,_0x37ae82,_0x4dc405){const _0x4100d8=a0_0x62c292;var _0x2fec5d=document[_0x4100d8(0x1d0)](_0x4100d8(0x180));document['getElementById'](_0x4100d8(0x134)),_0x2fec5d[_0x4100d8(0x132)][_0x4100d8(0x17a)]=_0x4100d8(0x13f);var _0x5d7563=document[_0x4100d8(0x18e)]('select');_0x5d7563['id']='gates-select',_0x5d7563[_0x4100d8(0x194)]=_0x4100d8(0x135),_0x5d7563[_0x4100d8(0x132)][_0x4100d8(0x16f)]=_0x37ae82,_0x5d7563[_0x4100d8(0x132)][_0x4100d8(0x14e)]=_0x4dc405;var _0x5eb636=[{'value':'','text':''},{'value':_0x4100d8(0x190),'text':'AND'},{'value':'or','text':'OR'},{'value':'xor','text':'XOR'},{'value':_0x4100d8(0x1a3),'text':_0x4100d8(0x126)},{'value':_0x4100d8(0x184),'text':_0x4100d8(0x1a6)},{'value':_0x4100d8(0x1b7),'text':_0x4100d8(0x193)}];_0x5eb636[_0x4100d8(0x144)](function(_0x170995){const _0x2e7d47=_0x4100d8;var _0x454b44=document['createElement']('option');_0x454b44[_0x2e7d47(0x17e)]=_0x170995['value'],_0x454b44['text']=_0x170995[_0x2e7d47(0x1cf)],_0x5d7563['appendChild'](_0x454b44);}),_0x5d7563[_0x4100d8(0x11c)]=function(){const _0x4a5704=_0x4100d8;imgChange(_0xc3579a,this[_0x4a5704(0x17e)]);},_0x2fec5d[_0x4100d8(0x14b)](_0x5d7563);}function calculateOutput(_0x58d8cb){const _0x3fdac3=a0_0x62c292,_0x2f150f=_0x58d8cb[_0x3fdac3(0x15e)][0x0]=='A'||_0x58d8cb[_0x3fdac3(0x15e)][0x0]=='B'||_0x58d8cb['input'][0x0]=='C'||_0x58d8cb['input'][0x0]=='D'?''+_0x58d8cb[_0x3fdac3(0x15e)][0x0]:'('+_0x58d8cb[_0x3fdac3(0x15e)][0x0]+')',_0x1dc0b2=_0x58d8cb[_0x3fdac3(0x15e)][0x1]=='A'||_0x58d8cb['input'][0x1]=='B'||_0x58d8cb['input'][0x1]=='C'||_0x58d8cb[_0x3fdac3(0x15e)][0x1]=='D'?''+_0x58d8cb[_0x3fdac3(0x15e)][0x1]:'('+_0x58d8cb[_0x3fdac3(0x15e)][0x1]+')';switch(_0x58d8cb[_0x3fdac3(0x1ca)]){case'and':_0x58d8cb[_0x3fdac3(0x183)]=_0x2f150f+'\x20AND\x20'+_0x1dc0b2,_0x58d8cb['outputValue1']=_0x58d8cb[_0x3fdac3(0x11b)][0x0]&_0x58d8cb['inputValue'][0x1];break;case'or':_0x58d8cb[_0x3fdac3(0x183)]=_0x2f150f+_0x3fdac3(0x188)+_0x1dc0b2,_0x58d8cb[_0x3fdac3(0x143)]=_0x58d8cb[_0x3fdac3(0x11b)][0x0]|_0x58d8cb[_0x3fdac3(0x11b)][0x1];break;case _0x3fdac3(0x137):_0x58d8cb[_0x3fdac3(0x183)]=_0x2f150f+_0x3fdac3(0x175)+_0x1dc0b2,_0x58d8cb[_0x3fdac3(0x143)]=_0x58d8cb[_0x3fdac3(0x11b)][0x0]^_0x58d8cb[_0x3fdac3(0x11b)][0x1];break;case _0x3fdac3(0x1a3):_0x58d8cb[_0x3fdac3(0x183)]=_0x3fdac3(0x19f)+_0x2f150f+_0x3fdac3(0x1a2)+_0x1dc0b2+')',_0x58d8cb[_0x3fdac3(0x143)]=!(_0x58d8cb[_0x3fdac3(0x11b)][0x0]&_0x58d8cb[_0x3fdac3(0x11b)][0x1]);break;case'nor':_0x58d8cb[_0x3fdac3(0x183)]='NOT\x20('+_0x2f150f+_0x3fdac3(0x188)+_0x1dc0b2+')',_0x58d8cb[_0x3fdac3(0x143)]=!(_0x58d8cb[_0x3fdac3(0x11b)][0x0]|_0x58d8cb['inputValue'][0x1]);break;case _0x3fdac3(0x1b7):_0x58d8cb[_0x3fdac3(0x183)]='NOT\x20('+_0x2f150f+_0x3fdac3(0x175)+_0x1dc0b2+')',_0x58d8cb[_0x3fdac3(0x143)]=!(_0x58d8cb[_0x3fdac3(0x11b)][0x0]^_0x58d8cb[_0x3fdac3(0x11b)][0x1]);break;case'not':_0x58d8cb[_0x3fdac3(0x183)]=_0x3fdac3(0x1c0)+_0x2f150f,_0x58d8cb[_0x3fdac3(0x143)]=!_0x58d8cb['inputValue'][0x0];break;default:_0x58d8cb['outputValue']='',_0x58d8cb[_0x3fdac3(0x143)]=0x0;}_0x58d8cb[_0x3fdac3(0x1ab)][_0x3fdac3(0x15f)](_0x3fdac3(0x147))&&(outputsExp[_0x3fdac3(0x147)]=_0x58d8cb[_0x3fdac3(0x183)],outputs[_0x3fdac3(0x147)]=_0x58d8cb[_0x3fdac3(0x143)]?0x1:0x0),_0x58d8cb[_0x3fdac3(0x1ab)][_0x3fdac3(0x15f)](_0x3fdac3(0x1a8))&&(outputsExp[_0x3fdac3(0x1a8)]=_0x58d8cb['outputValue'],outputs[_0x3fdac3(0x1a8)]=_0x58d8cb[_0x3fdac3(0x143)]?0x1:0x0),_0x58d8cb[_0x3fdac3(0x1ab)]['includes'](_0x3fdac3(0x1cc))&&(outputsExp[_0x3fdac3(0x1cc)]=_0x58d8cb[_0x3fdac3(0x183)],outputs[_0x3fdac3(0x1cc)]=_0x58d8cb['outputValue1']?0x1:0x0),_0x58d8cb[_0x3fdac3(0x1ab)][_0x3fdac3(0x15f)](_0x3fdac3(0x131))&&(outputsExp['LED4']=_0x58d8cb[_0x3fdac3(0x183)],outputs[_0x3fdac3(0x131)]=_0x58d8cb['outputValue1']?0x1:0x0),drawLEDs();}function drawInputs(){const _0xe8e75b=a0_0x62c292;ctx[_0xe8e75b(0x19e)]=_0xe8e75b(0x151);const _0x4b79fd=inputPositions['A'];ctx[_0xe8e75b(0x1c6)]=inputs['A']===0x1?_0xe8e75b(0x155):_0xe8e75b(0x11f),ctx[_0xe8e75b(0x16a)]('A',_0x4b79fd['x'],_0x4b79fd['y']-0x14),ctx['beginPath'](),ctx[_0xe8e75b(0x197)](_0x4b79fd['x']+0x14,_0x4b79fd['y']-0xa,0xa,0x0,0x2*Math['PI']),ctx[_0xe8e75b(0x1c6)]=inputs['A']===0x1?_0xe8e75b(0x155):_0xe8e75b(0x142),ctx[_0xe8e75b(0x16e)]();const _0xe3e395=inputPositions['B'];ctx['fillStyle']=inputs['B']===0x1?_0xe8e75b(0x155):_0xe8e75b(0x11f),ctx[_0xe8e75b(0x16a)]('B',_0xe3e395['x'],_0xe3e395['y']-0x14),ctx[_0xe8e75b(0x12c)](),ctx[_0xe8e75b(0x197)](_0xe3e395['x']+0x14,_0xe3e395['y']-0xa,0xa,0x0,0x2*Math['PI']),ctx[_0xe8e75b(0x1c6)]=inputs['B']===0x1?_0xe8e75b(0x155):_0xe8e75b(0x142),ctx[_0xe8e75b(0x16e)]();const _0x5c1b33=inputPositions['C'];ctx[_0xe8e75b(0x1c6)]=inputs['C']===0x1?_0xe8e75b(0x155):_0xe8e75b(0x11f),ctx[_0xe8e75b(0x16a)]('C',_0x5c1b33['x'],_0x5c1b33['y']-0x14),ctx[_0xe8e75b(0x12c)](),ctx['arc'](_0x5c1b33['x']+0x14,_0x5c1b33['y']-0xa,0xa,0x0,0x2*Math['PI']),ctx[_0xe8e75b(0x1c6)]=inputs['C']===0x1?'green':_0xe8e75b(0x142),ctx[_0xe8e75b(0x16e)]();const _0x388819=inputPositions['D'];ctx[_0xe8e75b(0x1c6)]=inputs['D']===0x1?'green':_0xe8e75b(0x11f),ctx[_0xe8e75b(0x16a)]('D',_0x388819['x'],_0x388819['y']-0x14),ctx[_0xe8e75b(0x12c)](),ctx['arc'](_0x388819['x']+0x14,_0x388819['y']-0xa,0xa,0x0,0x2*Math['PI']),ctx['fillStyle']=inputs['D']===0x1?_0xe8e75b(0x155):_0xe8e75b(0x142),ctx[_0xe8e75b(0x16e)]();}function drawGrid(){const _0x57da20=a0_0x62c292;ctx[_0x57da20(0x12e)]=_0x57da20(0x14d);for(let _0x11c10a=0x0;_0x11c10a<=0x50;_0x11c10a++){ctx['beginPath'](),ctx[_0x57da20(0x160)](_0x11c10a*0x14,0x0),ctx[_0x57da20(0x186)](_0x11c10a*0x14,0x2d0),ctx[_0x57da20(0x173)]();}for(let _0x4bcf81=0x0;_0x4bcf81<=0x24;_0x4bcf81++){ctx[_0x57da20(0x12c)](),ctx[_0x57da20(0x160)](0x0,_0x4bcf81*0x14),ctx['lineTo'](0x640,_0x4bcf81*0x14),ctx[_0x57da20(0x173)]();}ctx[_0x57da20(0x1c6)]='blue',ctx[_0x57da20(0x19e)]=_0x57da20(0x151),ctx[_0x57da20(0x16a)](_0x57da20(0x153),0x5aa,0x1e);}function initializeComponentFrames(){const _0x198783=a0_0x62c292,_0x51ef0e=new Image();_0x51ef0e[_0x198783(0x14f)]=_0x198783(0x176),_0x51ef0e[_0x198783(0x1ba)]=function(){const _0x5e92eb=_0x198783,_0x31905a=[_0x5e92eb(0x169),_0x5e92eb(0x177),_0x5e92eb(0x13e),_0x5e92eb(0x138),_0x5e92eb(0x1b3),_0x5e92eb(0x17c),_0x5e92eb(0x1c1),'program8',_0x5e92eb(0x133),_0x5e92eb(0x1c3),'program11',_0x5e92eb(0x11d),'program13','program14','program15',_0x5e92eb(0x1af)];let _0x226d14=0x0;for(let _0x572fd0=0xc;_0x572fd0<=0x3c;_0x572fd0+=0x10){for(let _0x242489=0x3;_0x242489<=0x1b;_0x242489+=0x8){if(_0x226d14>=_0x31905a[_0x5e92eb(0x1ae)])break;const _0x507abd=_0x572fd0*0x14,_0x37d68a=_0x242489*0x14,_0x26c1c0=7.5*0x14,_0x15396d=0x6*0x14,_0x5cb4c5=(0x8*0x14-_0x26c1c0)/0x2,_0x2c1a26=_0x507abd+_0x5cb4c5,_0x4afb56=_0x31905a[_0x226d14++];addselect(_0x4afb56,_0x37d68a+0x5+'px',_0x507abd-0x12+'px'),componentFrames[_0x5e92eb(0x146)]({'id':_0x4afb56,'x':_0x2c1a26,'y':_0x37d68a,'width':_0x26c1c0,'height':_0x15396d,'imageSrc':_0x5e92eb(0x176),'type':'','inputs':[{'x':_0x2c1a26,'y':_0x37d68a+0x28},{'x':_0x2c1a26,'y':_0x37d68a+0x50}],'input':['',''],'inputValue':[0x0,0x0],'inputLocate':['',''],'output':{'x':_0x2c1a26+_0x26c1c0,'y':_0x37d68a+0x3c},'outputValue':'','outputValue1':0x0,'outputLocate':[]});}}drawImage(),console[_0x5e92eb(0x1a4)](componentFrames);};}function drawImage(){const _0x3e8587=a0_0x62c292;componentFrames[_0x3e8587(0x144)](_0x284f23=>{const _0x3c8068=_0x3e8587,_0x25207a=new Image();_0x25207a[_0x3c8068(0x14f)]=_0x284f23['imageSrc']||_0x3c8068(0x176),_0x25207a['onload']=function(){const _0x28b8a6=_0x3c8068;ctx['clearRect'](_0x284f23['x'],_0x284f23['y'],_0x284f23['width'],_0x284f23[_0x28b8a6(0x1b5)]),ctx[_0x28b8a6(0x1b6)](_0x25207a,_0x284f23['x'],_0x284f23['y'],_0x284f23[_0x28b8a6(0x1cd)],_0x284f23[_0x28b8a6(0x1b5)]),drawFramePoints(_0x284f23);};});}function drawFramePoints(_0x2b7102){const _0x34ede3=a0_0x62c292;ctx[_0x34ede3(0x1c6)]='black',_0x2b7102[_0x34ede3(0x129)]['forEach'](_0x2d9468=>{const _0x2074eb=_0x34ede3;ctx[_0x2074eb(0x12c)](),ctx[_0x2074eb(0x197)](_0x2d9468['x'],_0x2d9468['y'],0x6,0x0,0x2*Math['PI']),ctx[_0x2074eb(0x16e)]();}),ctx['beginPath'](),ctx[_0x34ede3(0x197)](_0x2b7102[_0x34ede3(0x161)]['x'],_0x2b7102[_0x34ede3(0x161)]['y'],0x6,0x0,0x2*Math['PI']),ctx[_0x34ede3(0x16e)]();}function drawLEDs(){const _0x27de29=a0_0x62c292;ctx['font']=_0x27de29(0x151);const _0x383a2b=outputPositions[_0x27de29(0x147)];ctx[_0x27de29(0x1c6)]=outputs[_0x27de29(0x147)]===0x1||outputs[_0x27de29(0x147)]?_0x27de29(0x16c):_0x27de29(0x11f),ctx[_0x27de29(0x16a)]('LED1',_0x383a2b['x'],_0x383a2b['y']-0x14),ctx['beginPath'](),ctx[_0x27de29(0x197)](_0x383a2b['x']+0x28,_0x383a2b['y']-0xa,0xa,0x0,0x2*Math['PI']),ctx[_0x27de29(0x1c6)]=outputs[_0x27de29(0x147)]===0x1||outputs['LED1']?_0x27de29(0x16c):_0x27de29(0x142),ctx[_0x27de29(0x16e)]();const _0x466ac4=outputPositions[_0x27de29(0x1a8)];ctx[_0x27de29(0x1c6)]=outputs[_0x27de29(0x1a8)]===0x1||outputs[_0x27de29(0x1a8)]?_0x27de29(0x16c):_0x27de29(0x11f),ctx[_0x27de29(0x16a)](_0x27de29(0x1a8),_0x466ac4['x'],_0x466ac4['y']-0x14),ctx[_0x27de29(0x12c)](),ctx['arc'](_0x466ac4['x']+0x28,_0x466ac4['y']-0xa,0xa,0x0,0x2*Math['PI']),ctx[_0x27de29(0x1c6)]=outputs[_0x27de29(0x1a8)]===0x1||outputs[_0x27de29(0x1a8)]?_0x27de29(0x16c):_0x27de29(0x142),ctx['fill']();const _0x4e280e=outputPositions[_0x27de29(0x1cc)];ctx[_0x27de29(0x1c6)]=outputs[_0x27de29(0x1cc)]===0x1||outputs[_0x27de29(0x1cc)]?_0x27de29(0x16c):_0x27de29(0x11f),ctx['fillText'](_0x27de29(0x1cc),_0x4e280e['x'],_0x4e280e['y']-0x14),ctx[_0x27de29(0x12c)](),ctx[_0x27de29(0x197)](_0x4e280e['x']+0x28,_0x4e280e['y']-0xa,0xa,0x0,0x2*Math['PI']),ctx[_0x27de29(0x1c6)]=outputs[_0x27de29(0x1cc)]===0x1||outputs[_0x27de29(0x1cc)]?'red':'gray',ctx[_0x27de29(0x16e)]();const _0x2f3b4b=outputPositions['LED4'];ctx[_0x27de29(0x1c6)]=outputs[_0x27de29(0x131)]===0x1||outputs[_0x27de29(0x131)]?_0x27de29(0x16c):_0x27de29(0x11f),ctx['fillText'](_0x27de29(0x131),_0x2f3b4b['x'],_0x2f3b4b['y']-0x14),ctx['beginPath'](),ctx[_0x27de29(0x197)](_0x2f3b4b['x']+0x28,_0x2f3b4b['y']-0xa,0xa,0x0,0x2*Math['PI']),ctx[_0x27de29(0x1c6)]=outputs[_0x27de29(0x131)]===0x1||outputs[_0x27de29(0x131)]?'red':_0x27de29(0x142),ctx[_0x27de29(0x16e)]();}canvas[a0_0x62c292(0x192)](a0_0x62c292(0x123),function(_0x1dd83f){clickTimeout&&(clearTimeout(clickTimeout),clickTimeout=null),clickTimeout=setTimeout(function(){const _0x2d346b=a0_0x10d7,_0x3519b1=canvas['getBoundingClientRect'](),_0x6de5fa=Math[_0x2d346b(0x1c5)]((_0x1dd83f[_0x2d346b(0x174)]-_0x3519b1['left'])/0x14)*0x14,_0x145400=Math['round']((_0x1dd83f['clientY']-_0x3519b1[_0x2d346b(0x16f)])/0x14)*0x14;newLine&&(currentLine['length']>0x0&&allLines[_0x2d346b(0x146)]([...currentLine]),currentLine=[],newLine=![]);if(!isPointInComponentFrame(_0x6de5fa,_0x145400)&&(currentLine['length']===0x0||!isLineIntersectingComponent(currentLine[currentLine[_0x2d346b(0x1ae)]-0x1],{'x':_0x6de5fa,'y':_0x145400}))){if(currentLine[_0x2d346b(0x1ae)]>0x0)judgeInput(currentLine[currentLine['length']-0x1],{'x':_0x6de5fa,'y':_0x145400});currentLine['push']({'x':_0x6de5fa,'y':_0x145400}),Line['s']!=null&&Line['e']!=null&&(Lines[_0x2d346b(0x146)](Line),newWireButton['click'](),Line=[]),drawPolyline();}},0xfa);}),canvas['addEventListener'](a0_0x62c292(0x1a5),function(_0x2d20c8){const _0x1c0947=a0_0x62c292;clickTimeout&&(clearTimeout(clickTimeout),clickTimeout=null);const _0x4d6b8e=canvas[_0x1c0947(0x12d)](),_0x4023db=Math[_0x1c0947(0x1c5)]((_0x2d20c8[_0x1c0947(0x174)]-_0x4d6b8e[_0x1c0947(0x14e)])/0x14)*0x14,_0x3866fc=Math['round']((_0x2d20c8['clientY']-_0x4d6b8e['top'])/0x14)*0x14;let _0x3b35b7=-0x1;for(let _0x3c7823=0x0;_0x3c7823<allLines[_0x1c0947(0x1ae)];_0x3c7823++){if(isPointOnPolyline(_0x4023db,_0x3866fc,allLines[_0x3c7823])){_0x3b35b7=_0x3c7823;break;}}if(_0x3b35b7!==-0x1){if(allLines[_0x1c0947(0x1ae)]>0x0)checkConnectPoints(allLines[_0x3b35b7]);allLines[_0x1c0947(0x1c9)](_0x3b35b7,0x1),drawPolyline();}isPointOnPolyline(_0x4023db,_0x3866fc,currentLine)&&(currentLine=[],drawPolyline());}),newWireButton['addEventListener'](a0_0x62c292(0x123),function(){const _0x12ad33=a0_0x62c292;currentLine[_0x12ad33(0x1ae)]>0x0&&(allLines[_0x12ad33(0x146)]([...currentLine]),currentLine=[]),newLine=!![];});function switchReset(){const _0xbdf32d=a0_0x62c292;inputs['A']=0x0,inputs['B']=0x0,inputs['C']=0x0,inputs['D']=0x0;const _0x96e111=document[_0xbdf32d(0x1be)](_0xbdf32d(0x11a));_0x96e111[_0xbdf32d(0x144)](_0x41853f=>{const _0x2ccf82=_0xbdf32d;_0x41853f[_0x2ccf82(0x17e)]==='0'&&(_0x41853f[_0x2ccf82(0x159)]=!![]);}),drawPolyline();for(let _0x3d95ba=0x0;_0x3d95ba<componentFrames[_0xbdf32d(0x1ae)];_0x3d95ba++)calculateOutput(componentFrames[_0x3d95ba]);}clearButton[a0_0x62c292(0x192)](a0_0x62c292(0x123),function(){const _0x458ef6=a0_0x62c292;window[_0x458ef6(0x18b)][_0x458ef6(0x18a)]();});function checkConnectPoints(_0x2fc614){const _0x352ae0=a0_0x62c292;console[_0x352ae0(0x1a4)](_0x2fc614);if(_0x2fc614[0x0]!=null)for(let _0xf88a93=0x78;_0xf88a93<=0x258;_0xf88a93+=0xa0){if(_0x2fc614[0x0]['x']===0x50&&_0x2fc614[0x0]['y']===_0xf88a93){for(let _0x53256b=0x0;_0x53256b<0x4;_0x53256b++)for(let _0x42b649=0x0;_0x42b649<0x2;_0x42b649++){const _0x450c3a=componentFrames[_0x53256b];Math['abs'](_0x2fc614[_0x2fc614['length']-0x1]['x']-_0x450c3a[_0x352ae0(0x129)][_0x42b649]['x'])<0x14&&Math[_0x352ae0(0x1b0)](_0x2fc614[_0x2fc614[_0x352ae0(0x1ae)]-0x1]['y']-_0x450c3a['inputs'][_0x42b649]['y'])<0x14&&(_0x450c3a[_0x352ae0(0x15e)][_0x42b649]='',_0x450c3a[_0x352ae0(0x1b2)][_0x42b649]='',_0x450c3a[_0x352ae0(0x11b)][_0x42b649]=0x0,calculateOutput(_0x450c3a));}}}}function isPointInComponentFrame(_0x5c4a89,_0x3bef9c){const _0x764532=a0_0x62c292;for(const _0x47c905 of componentFrames){if(_0x5c4a89>=_0x47c905['x']&&_0x5c4a89<=_0x47c905['x']+_0x47c905[_0x764532(0x1cd)]&&_0x3bef9c>=_0x47c905['y']&&_0x3bef9c<=_0x47c905['y']+_0x47c905[_0x764532(0x1b5)])return!![];}return![];}function isLineIntersectingComponent(_0x466513,_0x33e943){const _0x4f98f7=a0_0x62c292;for(const _0x432a25 of componentFrames){if(isLineIntersectingRect(_0x466513,_0x33e943,_0x432a25)){if(_0x466513['x']===_0x432a25['x']&&_0x33e943['x']===_0x432a25['x']+_0x432a25[_0x4f98f7(0x1cd)]||_0x466513['x']===_0x432a25['x']+_0x432a25[_0x4f98f7(0x1cd)]&&_0x33e943['x']===_0x432a25['x']||_0x466513['y']===_0x432a25['y']&&_0x33e943['y']===_0x432a25['y']+_0x432a25['height']||_0x466513['y']===_0x432a25['y']+_0x432a25[_0x4f98f7(0x1b5)]&&_0x33e943['y']===_0x432a25['y'])continue;return alert(_0x4f98f7(0x17d)),newWireButton[_0x4f98f7(0x123)](),!![];}}return![];}function isLineIntersectingRect(_0x26ccd3,_0x293206,_0x5dbfe8){const {x:_0x51ecf7,y:_0x5cd5bb}=_0x26ccd3,{x:_0x5e8004,y:_0x2de435}=_0x293206,{x:_0x595867,y:_0x1c20dd,width:_0x19ebdd,height:_0x59c23b}=_0x5dbfe8;return isLineIntersectingLine(_0x51ecf7,_0x5cd5bb,_0x5e8004,_0x2de435,_0x595867,_0x1c20dd,_0x595867+_0x19ebdd,_0x1c20dd)||isLineIntersectingLine(_0x51ecf7,_0x5cd5bb,_0x5e8004,_0x2de435,_0x595867,_0x1c20dd,_0x595867,_0x1c20dd+_0x59c23b)||isLineIntersectingLine(_0x51ecf7,_0x5cd5bb,_0x5e8004,_0x2de435,_0x595867+_0x19ebdd,_0x1c20dd,_0x595867+_0x19ebdd,_0x1c20dd+_0x59c23b)||isLineIntersectingLine(_0x51ecf7,_0x5cd5bb,_0x5e8004,_0x2de435,_0x595867,_0x1c20dd+_0x59c23b,_0x595867+_0x19ebdd,_0x1c20dd+_0x59c23b);}function a0_0x4bc4(){const _0x2296f2=['program4','switchButton','組み合わせ回路','</table>','34659xAbtPX','input[name=\x22inputD\x22]','program3','relative','195kkHXHi','toggle','gray','outputValue1','forEach','input[type=\x22checkbox\x22]','push','LED1','順序回路','img/NOT.png','saveModal','appendChild','input[name=\x22inputA\x22]','#ccc','left','src','option','20px\x20Arial','105318YfExiV','Tanaka-Lab','error','green','removeEventListener','replace','classList','checked','led2','img/XOR.png','12nYEiIk','<td>','input','includes','moveTo','output','target','change','保存名を入力してください','deleteModal','46270GhjAgS','block','<table><tr>','program1','fillText','not','red','復元されました','fill','top','deleteButton','modalDeleteSelect','14hCLbzG','stroke','clientX','\x20XOR\x20','img/void.png','program2','innerHTML','truthTable','position','led4','program6','素子と線が交差します','value','doButton','canvasContainer','<tr>','stringify','outputValue','nor','loadModal','lineTo','.toggle','\x20OR\x20','24QQMGez','reload','location','startsWith','parse','createElement','loadButton','and','1884003KSySxM','addEventListener','XNOR','className','16148RvBuds','display','arc','img/OR.png',')</th></tr>','loadSelect','</td></tr>','img/AND.png','</td>','font','NOT\x20(','find','imageSrc','\x20AND\x20','nand','log','dblclick','NOR','contains','LED2','removeItem','input[name=\x22inputB\x22]','outputLocate','削除しました','toUpperCase','length','program16','abs','<th>','inputLocate','program5','partSelector','height','drawImage','xnor','modalLoadSelect','none','onload','dispatchEvent','overlay','39277tDzAqg','querySelectorAll','1123040UEFVrN','NOT\x20','program7','選択されたパーツが見つかりません','program10','setItem','round','fillStyle','circuitData_','deleteModalButton','splice','type','img/NOR.png','LED3','width','img/XNOR.png','text','getElementById','削除する回路を選択してください','isArray','input[type=\x22radio\x22]','inputValue','onchange','program12','input[name=\x22inputC\x22]','black','.close','key','modalSaveName','click','name','allLines','NAND','saveModalButton','checkbox','inputs','led3','textContent','beginPath','getBoundingClientRect','strokeStyle','60gCRvmg','inline-block','LED4','style','program9','gridCanvas','onCanvas','led1','xor'];a0_0x4bc4=function(){return _0x2296f2;};return a0_0x4bc4();}function isLineIntersectingLine(_0x57a53b,_0xf42e48,_0x1138da,_0x4775a7,_0x5639ca,_0x2a7faf,_0x56c295,_0x4b8405){const _0x26e2db=(_0x4b8405-_0x2a7faf)*(_0x1138da-_0x57a53b)-(_0x56c295-_0x5639ca)*(_0x4775a7-_0xf42e48);if(_0x26e2db===0x0)return![];const _0x14536d=((_0x56c295-_0x5639ca)*(_0xf42e48-_0x2a7faf)-(_0x4b8405-_0x2a7faf)*(_0x57a53b-_0x5639ca))/_0x26e2db,_0x12a438=((_0x1138da-_0x57a53b)*(_0xf42e48-_0x2a7faf)-(_0x4775a7-_0xf42e48)*(_0x57a53b-_0x5639ca))/_0x26e2db;return _0x14536d>=0x0&&_0x14536d<=0x1&&(_0x12a438>=0x0&&_0x12a438<=0x1);}function isPointOnPolyline(_0x5aede1,_0x93a3e2,_0x3deb75){const _0x365ba8=a0_0x62c292,_0x3c3c2d=0xa;for(let _0xaf6193=0x0;_0xaf6193<_0x3deb75[_0x365ba8(0x1ae)]-0x1;_0xaf6193++){if(isPointNearLine(_0x5aede1,_0x93a3e2,_0x3deb75[_0xaf6193],_0x3deb75[_0xaf6193+0x1],_0x3c3c2d))return!![];}return![];}function isPointNearLine(_0x4be15a,_0x172d74,_0x59ce44,_0x19638c,_0x1c99d1){const {x:_0x242c0d,y:_0x1b4191}=_0x59ce44,{x:_0x19de1c,y:_0x3b9f68}=_0x19638c,_0x32be13=_0x4be15a-_0x242c0d,_0x188a48=_0x172d74-_0x1b4191,_0x4f4b6d=_0x19de1c-_0x242c0d,_0x3d5d3b=_0x3b9f68-_0x1b4191,_0x2dd3a9=_0x32be13*_0x4f4b6d+_0x188a48*_0x3d5d3b,_0x5e8675=_0x4f4b6d*_0x4f4b6d+_0x3d5d3b*_0x3d5d3b,_0x1c44bd=_0x2dd3a9/_0x5e8675;let _0x24d2ae,_0x411049;if(_0x1c44bd<0x0||_0x242c0d===_0x19de1c&&_0x1b4191===_0x3b9f68)_0x24d2ae=_0x242c0d,_0x411049=_0x1b4191;else _0x1c44bd>0x1?(_0x24d2ae=_0x19de1c,_0x411049=_0x3b9f68):(_0x24d2ae=_0x242c0d+_0x1c44bd*_0x4f4b6d,_0x411049=_0x1b4191+_0x1c44bd*_0x3d5d3b);const _0x4756f2=_0x4be15a-_0x24d2ae,_0x482b0c=_0x172d74-_0x411049;return _0x4756f2*_0x4756f2+_0x482b0c*_0x482b0c<=_0x1c99d1*_0x1c99d1;}function changeValue(){const _0x132a3b=a0_0x62c292;for(let _0x3b3927=0x0;_0x3b3927<componentFrames[_0x132a3b(0x1ae)];_0x3b3927++){const _0x277758=componentFrames[_0x3b3927];for(let _0x506cf9=0x0;_0x506cf9<0x2;_0x506cf9++){if(_0x277758['inputLocate'][_0x506cf9]==='A'){_0x277758[_0x132a3b(0x15e)][_0x506cf9]='A',_0x277758['inputValue'][_0x506cf9]=inputs['A'];if(_0x277758[_0x132a3b(0x1ca)]!='')calculateOutput(_0x277758);}else{if(_0x277758[_0x132a3b(0x1b2)][_0x506cf9]==='B'){_0x277758[_0x132a3b(0x15e)][_0x506cf9]='B',_0x277758[_0x132a3b(0x11b)][_0x506cf9]=inputs['B'];if(_0x277758['type']!='')calculateOutput(_0x277758);}else{if(_0x277758[_0x132a3b(0x1b2)][_0x506cf9]==='C'){_0x277758[_0x132a3b(0x15e)][_0x506cf9]='C',_0x277758[_0x132a3b(0x11b)][_0x506cf9]=inputs['C'];if(_0x277758[_0x132a3b(0x1ca)]!='')calculateOutput(_0x277758);}else{if(_0x277758[_0x132a3b(0x1b2)][_0x506cf9]==='D'){_0x277758[_0x132a3b(0x15e)][_0x506cf9]='D',_0x277758[_0x132a3b(0x11b)][_0x506cf9]=inputs['D'];if(_0x277758[_0x132a3b(0x1ca)]!='')calculateOutput(_0x277758);}}}}for(let _0x4b614=0x0;_0x4b614<componentFrames[_0x132a3b(0x1ae)];_0x4b614++){if(_0x277758['inputLocate'][_0x506cf9]===_0x4b614){_0x277758[_0x132a3b(0x15e)][_0x506cf9]=componentFrames[_0x277758[_0x132a3b(0x1b2)][_0x506cf9]][_0x132a3b(0x183)],_0x277758[_0x132a3b(0x11b)][_0x506cf9]=componentFrames[_0x277758['inputLocate'][_0x506cf9]][_0x132a3b(0x143)];if(_0x277758[_0x132a3b(0x1ca)]!='')calculateOutput(_0x277758);}}}}}function judgeInput(_0x5e59e4,_0x2622e7){const _0x52678e=a0_0x62c292,{x:_0x432792,y:_0x4d44ed}=_0x5e59e4,{x:_0x426fa4,y:_0x1f3ccb}=_0x2622e7;if(_0x432792==0x50&&_0x4d44ed==0x78)Line['s']='A';else{if(_0x432792==0x50&&_0x4d44ed==0x118)Line['s']='B';else{if(_0x432792==0x50&&_0x4d44ed==0x1b8)Line['s']='C';else{if(_0x432792==0x50&&_0x4d44ed==0x258)Line['s']='D';}}}for(let _0x31d8a5=0x0;_0x31d8a5<componentFrames[_0x52678e(0x1ae)];_0x31d8a5++){const _0xcfa704=componentFrames[_0x31d8a5];Math['abs'](_0x432792-_0xcfa704[_0x52678e(0x161)]['x'])<0x14&&Math[_0x52678e(0x1b0)](_0x4d44ed-_0xcfa704['output']['y'])<0x14&&(Line['s']=_0x31d8a5,calculateOutput(_0xcfa704));}for(let _0x53e175=0x0;_0x53e175<componentFrames[_0x52678e(0x1ae)];_0x53e175++)for(let _0x53b45d=0x0;_0x53b45d<0x2;_0x53b45d++){const _0x1d8b82=componentFrames[_0x53e175];if(Math[_0x52678e(0x1b0)](_0x426fa4-_0x1d8b82[_0x52678e(0x129)][_0x53b45d]['x'])<0x14&&Math[_0x52678e(0x1b0)](_0x1f3ccb-_0x1d8b82[_0x52678e(0x129)][_0x53b45d]['y'])<0x14){Line['e']=_0x53e175;if(Line['s']!=null){if(Line['s']=='A'||Line['s']=='B'||Line['s']=='C'||Line['s']=='D')_0x1d8b82['input'][_0x53b45d]=Line['s'];else _0x1d8b82[_0x52678e(0x15e)][_0x53b45d]=componentFrames[Line['s']]['outputValue'],componentFrames[Line['s']][_0x52678e(0x1ab)][_0x52678e(0x146)](Line['e']);}_0x1d8b82['inputLocate'][_0x53b45d]=Line['s'],calculateOutput(_0x1d8b82);}}if(_0x426fa4==0x5c8&&_0x1f3ccb==0x78)Line['e']='LED1',outputs[_0x52678e(0x147)]=componentFrames[Line['s']][_0x52678e(0x143)],componentFrames[Line['s']][_0x52678e(0x1ab)][_0x52678e(0x146)](_0x52678e(0x147));else{if(_0x426fa4==0x5c8&&_0x1f3ccb==0x118)Line['e']=_0x52678e(0x1a8),outputs[_0x52678e(0x1a8)]=componentFrames[Line['s']][_0x52678e(0x143)],componentFrames[Line['s']]['outputLocate'][_0x52678e(0x146)](_0x52678e(0x1a8));else{if(_0x426fa4==0x5c8&&_0x1f3ccb==0x1b8)Line['e']=_0x52678e(0x1cc),outputs['LED3']=componentFrames[Line['s']][_0x52678e(0x143)],componentFrames[Line['s']][_0x52678e(0x1ab)][_0x52678e(0x146)](_0x52678e(0x1cc));else _0x426fa4==0x5c8&&_0x1f3ccb==0x258&&(Line['e']='LED4',outputs['LED4']=componentFrames[Line['s']][_0x52678e(0x143)],componentFrames[Line['s']][_0x52678e(0x1ab)][_0x52678e(0x146)](_0x52678e(0x131)));}}console[_0x52678e(0x1a4)](_0x432792+'\x20'+_0x4d44ed);}function drawPolyline(){const _0x45063d=a0_0x62c292;ctx['clearRect'](0x0,0x0,canvas['width'],canvas['height']),drawGrid(),drawImage(),ctx[_0x45063d(0x12e)]=_0x45063d(0x16c),allLines[_0x45063d(0x144)](_0x44619c=>{const _0xb5d314=_0x45063d;ctx[_0xb5d314(0x12c)](),ctx[_0xb5d314(0x160)](_0x44619c[0x0]['x'],_0x44619c[0x0]['y']);for(let _0x3c33ae=0x1;_0x3c33ae<_0x44619c['length'];_0x3c33ae++){ctx['lineTo'](_0x44619c[_0x3c33ae]['x'],_0x44619c[_0x3c33ae]['y']);}ctx[_0xb5d314(0x173)]();});if(currentLine[_0x45063d(0x1ae)]>0x1){ctx[_0x45063d(0x12c)](),ctx[_0x45063d(0x160)](currentLine[0x0]['x'],currentLine[0x0]['y']);for(let _0x5e09ca=0x1;_0x5e09ca<currentLine[_0x45063d(0x1ae)];_0x5e09ca++){ctx[_0x45063d(0x186)](currentLine[_0x5e09ca]['x'],currentLine[_0x5e09ca]['y']);}ctx[_0x45063d(0x173)]();}drawInputs(),drawLEDs();}function a0_0x10d7(_0x28ac54,_0x351500){const _0x4bc43b=a0_0x4bc4();return a0_0x10d7=function(_0x10d76c,_0x5654e1){_0x10d76c=_0x10d76c-0x118;let _0x373c09=_0x4bc43b[_0x10d76c];return _0x373c09;},a0_0x10d7(_0x28ac54,_0x351500);}function generateTruthTable(){const _0x3bf809=a0_0x62c292,_0x5358ee=document[_0x3bf809(0x1d0)](_0x3bf809(0x1b4))['value'];selectedPart=componentFrames[_0x3bf809(0x1a0)](_0x240f2e=>_0x240f2e['id']===_0x5358ee);(_0x5358ee==_0x3bf809(0x136)||_0x5358ee==_0x3bf809(0x15a)||_0x5358ee=='led3'||_0x5358ee==_0x3bf809(0x17b))&&(selectedPart=componentFrames['find'](_0x141d40=>{const _0x4af2e9=_0x3bf809;return Array[_0x4af2e9(0x119)](_0x141d40[_0x4af2e9(0x1ab)])?_0x141d40[_0x4af2e9(0x1ab)]['includes'](_0x5358ee[_0x4af2e9(0x1ad)]()):_0x141d40[_0x4af2e9(0x1ab)]===_0x5358ee[_0x4af2e9(0x1ad)]();}));if(!selectedPart){alert(_0x3bf809(0x1c2));return;}let _0x27c381;if(selectedPart==_0x3bf809(0x136))_0x27c381=outputsExp['LED1'];else{if(selectedPart==_0x3bf809(0x15a))_0x27c381=outputsExp[_0x3bf809(0x1a8)];else{if(selectedPart==_0x3bf809(0x12a))_0x27c381=outputsExp[_0x3bf809(0x1cc)];else{if(selectedPart=='led4')_0x27c381=outputsExp[_0x3bf809(0x131)];else _0x27c381=selectedPart[_0x3bf809(0x183)];}}}const _0x2c8cff=['A','B','C','D']['filter'](_0x16639c=>{const _0x309f53=new RegExp('\x5cb'+_0x16639c+'\x5cb');return _0x309f53['test'](_0x27c381);}),_0x2ae5b1=generateCombinations(_0x2c8cff['length']),_0x4a35a4={'AND':'&&','OR':'||','XOR':'!=','XNOR':'==','NOT':'!'};for(let _0x577271 in _0x4a35a4){let _0x32101b=new RegExp('\x5cb'+_0x577271+'\x5cb','g');_0x27c381=_0x27c381[_0x3bf809(0x157)](_0x32101b,_0x4a35a4[_0x577271]);}let _0x2d96cd=_0x3bf809(0x168);_0x2c8cff['forEach'](_0x442419=>{const _0x131625=_0x3bf809;_0x2d96cd+=_0x131625(0x1b1)+_0x442419+'</th>';}),_0x2d96cd+=_0x3bf809(0x1b1)+_0x5358ee+'\x20('+selectedPart[_0x3bf809(0x183)]+_0x3bf809(0x199),_0x2ae5b1['forEach'](_0x2aacb0=>{const _0x2cd836=_0x3bf809;let _0xda5206={};_0x2c8cff[_0x2cd836(0x144)]((_0xa5949f,_0x597e12)=>{_0xda5206[_0xa5949f]=_0x2aacb0[_0x597e12]?0x1:0x0;});let _0x509dd4=_0x27c381;for(let _0x580760 in _0xda5206){let _0x3fd3d1=new RegExp('\x5cb'+_0x580760+'\x5cb','g');_0x509dd4=_0x509dd4['replace'](_0x3fd3d1,_0xda5206[_0x580760]);}let _0x38e2de;try{_0x38e2de=eval(_0x509dd4)?0x1:0x0;}catch(_0x470e46){_0x38e2de=_0x2cd836(0x154);}_0x2d96cd+=_0x2cd836(0x181),_0x2c8cff[_0x2cd836(0x144)](_0x21ed57=>{const _0x54f97b=_0x2cd836;_0x2d96cd+='<td>'+_0xda5206[_0x21ed57]+_0x54f97b(0x19d);}),_0x2d96cd+=_0x2cd836(0x15d)+_0x38e2de+_0x2cd836(0x19b);}),_0x2d96cd+=_0x3bf809(0x13b),document['getElementById'](_0x3bf809(0x179))[_0x3bf809(0x178)]=_0x2d96cd;}function generateCombinations(_0x544fc1){const _0x1e8768=a0_0x62c292;let _0xbe10d6=[];for(let _0x380124=0x0;_0x380124<0x1<<_0x544fc1;_0x380124++){let _0x430223=[];for(let _0x1bb7e5=0x0;_0x1bb7e5<_0x544fc1;_0x1bb7e5++){_0x430223[_0x1e8768(0x146)](!!(_0x380124&0x1<<_0x1bb7e5));}_0xbe10d6[_0x1e8768(0x146)](_0x430223);}return _0xbe10d6;}document['querySelectorAll'](a0_0x62c292(0x187))[a0_0x62c292(0x144)](function(_0x51367a){const _0x5e9439=a0_0x62c292;_0x51367a[_0x5e9439(0x192)](_0x5e9439(0x123),function(){const _0x13ed5b=_0x5e9439;this[_0x13ed5b(0x158)][_0x13ed5b(0x141)](_0x13ed5b(0x159));let _0x55a3a3=this['previousElementSibling'];if(_0x55a3a3&&_0x55a3a3[_0x13ed5b(0x1ca)]===_0x13ed5b(0x128)){_0x55a3a3[_0x13ed5b(0x159)]=this[_0x13ed5b(0x158)][_0x13ed5b(0x1a7)](_0x13ed5b(0x159));var _0x914d76=new Event(_0x13ed5b(0x163));_0x55a3a3[_0x13ed5b(0x1bb)](_0x914d76);}});}),componentFrames[a0_0x62c292(0x144)](_0x2c39a6=>calculateOutput(_0x2c39a6)),drawGrid(),initializeComponentFrames(),drawInputs(),drawLEDs(),updateLoadSelect();