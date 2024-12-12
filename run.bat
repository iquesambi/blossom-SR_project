@echo off
cd blossom_web
call yarn build
cd ..
call python start.py
pause
