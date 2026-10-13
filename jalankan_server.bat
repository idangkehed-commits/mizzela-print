@echo off
title Mizzelaa & Print - Server Digital Printing
cd /d "%~dp0"

echo =======================================================
echo    MIZZELAA & PRINT x MIZELA DESIGN STUDIO
echo    Menjalankan Server Website Digital Printing...
echo =======================================================
echo.

node -v >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Node.js tidak terdeteksi di sistem PATH.
    echo [INFO] Membuka website secara langsung di browser Anda...
    start "" "%~dp0index.html"
    pause
    exit /b
)

echo [1/2] Membuka browser ke http://localhost:3088 ...
start "" "http://localhost:3088"

echo [2/2] Menjalankan server Node.js di port 3088 ...
echo Tekan Ctrl+C untuk menghentikan server.
echo.
node server.js
pause
