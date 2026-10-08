const fs = require('fs')
const path = require('path')
const logDir = path.join(__dirname, 'Logs')

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir)
}

process.chdir(logDir)
console.log('Current directory:', process.cwd())

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`
    fs.writeFileSync(fileName, `This is log file ${i}`)
    console.log(fileName)
}