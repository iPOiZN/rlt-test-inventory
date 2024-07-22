import { exec } from 'child_process'
import os from 'os'

const isWindows = os.platform() === 'win32'
const viteCommand = 'vite'
const jsonServerCommand = 'npx json-server db.json --watch'

const command = isWindows
  ? `start /b ${viteCommand} && ${jsonServerCommand}`
  : `${viteCommand} & ${jsonServerCommand}`

const serverProcess = exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`)
    return
  }
  console.log(stdout)
  console.error(stderr)
})

serverProcess.stdout.pipe(process.stdout)
serverProcess.stderr.pipe(process.stderr)
