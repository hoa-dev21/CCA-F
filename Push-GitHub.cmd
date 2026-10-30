@echo off
cd /d "%~dp0"
if not exist "C:\Program Files\Git\bin\bash.exe" (
  echo Git Bash was not found at C:\Program Files\Git\bin\bash.exe
  pause
  exit /b 1
)
"C:\Program Files\Git\bin\bash.exe" --login ./push-github.sh
if errorlevel 1 (
  echo.
  echo Keep this window open and share the error with your assistant.
)
pause
