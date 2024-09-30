#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Parse Builder Config
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🤖
// @raycast.packageName Adapty Tools

// Documentation:
// @raycast.description Get paywall builder config from network response
// @raycast.author mlnchk
// @raycast.authorURL https://raycast.com/mlnchk

const { exec } = require('child_process')

exec('pbpaste', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`)
        return
    }
    if (stderr) {
        console.error(`Error: ${stderr}`)
        return
    }

    try {
      const parsedData = JSON.parse(stdout);
      const builderConfig = JSON.stringify(parsedData.paywall_builder_v3.builder_config, null, 2)
      console.log(builderConfig)
    } catch (error) {
      throw new Error("Clipboard content is not valid");
    }
})
