@echo off

echo PUBLISH - BREWSTER

start /min cmd.exe /C npm publish

git add *
git commit -m "%*"
git push