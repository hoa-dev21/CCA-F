@echo off
cd /d "%~dp0"
where node.exe >nul 2>nul
if errorlevel 1 (
  echo Khong tim thay Node.js. Hay cai Node.js de chay trang hoc local.
  pause
  exit /b 1
)
node study-server.cjs --open
if errorlevel 1 pause
