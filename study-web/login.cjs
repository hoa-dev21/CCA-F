const {spawn}=require('node:child_process');
const {resolveCodex}=require('./codex-bridge.cjs');
const child=spawn(resolveCodex(),['login'],{stdio:'inherit',windowsHide:false});
child.on('error',()=>{console.error('Khong tim thay Codex CLI. Hay kiem tra cai dat Codex tren may.');process.exitCode=1;});
child.on('exit',code=>{process.exitCode=code||0;});
