module.exports = {
    testConcurrency: 1,
    apiKey: "4dfo9bRkKmHMr7Vve99JeEhZeV107XMY2avfQkA4a1po3w110",
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 700, height: 500, name: 'firefox'},
        // Add mobile emulation devices in Portrait mode
        // {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    batchName: 'Login-Screen-Multi-Browser'
}