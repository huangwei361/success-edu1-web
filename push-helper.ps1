# push-helper.ps1
# ----------------------------------------------------------------
# 用途：在 site/ 目录下跑这一行就能完成 add → commit → push
# 用法：.\push-helper.ps1 "你的 commit 信息"
# 首次 push 会弹 Windows 凭据框，粘 GitHub Token 即可（只弹一次）
# 之后凭据自动存到 Credential Manager，不用再粘
# ----------------------------------------------------------------

param(
    [Parameter(Mandatory = $false)]
    [string]$Message = "update: 内容更新"
)

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

Write-Host "==== 1) git status ====" -ForegroundColor Cyan
git status

Write-Host "`n==== 2) git add . ====" -ForegroundColor Cyan
git add .

Write-Host "`n==== 3) git commit ====" -ForegroundColor Cyan
$porcelain = git status --porcelain
if ($porcelain) {
    git commit -m $Message
} else {
    Write-Host "无新改动，跳过 commit" -ForegroundColor Yellow
}

Write-Host "`n==== 4) git push ====" -ForegroundColor Cyan
Write-Host "如果弹出 Windows 凭据框，请粘 GitHub Token 进去" -ForegroundColor Yellow
git push -u origin main

Write-Host "`n==== 完成 ====" -ForegroundColor Green
git log --oneline -n 3
