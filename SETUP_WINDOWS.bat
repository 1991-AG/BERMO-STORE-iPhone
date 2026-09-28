@echo off
title BERMO STORE - Native App Setup
echo ==========================================
echo BERMO STORE Native App
echo ==========================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed.
  echo Install Node.js LTS first.
  pause
  exit /b 1
)
echo Installing dependencies...
call npm install
if errorlevel 1 (
  echo npm install failed.
  pause
  exit /b 1
)
echo.
echo Dependencies installed.
echo Next: edit capacitor.config.js and paste your Google Apps Script Web App URL.
echo.
pause
