const fs = require('fs')
const path = require('path')

const logDir = path.join(__dirname, 'Logs')

if (fs.existsSync(logDir)) {
    const files = fs.readdirSync(logDir)

    files.forEach(file => {
        fs.unlinkSync(path.join(logDir, file))
        console.log(`Deleted: ${file}`)
    })

    fs.rmdirSync(logDir)
    console.log('Logs directory removed')
}