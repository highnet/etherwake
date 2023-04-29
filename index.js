const { exec } = require('child_process');

function printASCIIArt() {
    console.log("   ___ ______  __ __    ___  ____   ___ ___   ___   ___   ");
    console.log("  /  _]      ||  |  |  /  _]|    \\ |   |   | /   \\ |   \\ ");
    console.log(" /  [_|      ||  |  | /  [_ |  D  )| _   _ ||     ||    \\ ");
    console.log("|    _]_|  |_||  _  ||    _]|    / |  \\_/  ||  O  ||  D  |");
    console.log("|   [_  |  |  |  |  ||   [_ |    \\ |   |   ||     ||     |");
    console.log("|     | |  |  |  |  ||     ||  .  \\|   |   ||     ||     |");
    console.log("|_____| |__|  |__|__||_____||__|\\_||___|___| \\___/ |_____|");
    console.log("");
}

// This function wakes up multiple computers with a given MAC address
function wakeUpComputers(macAddresses) {
    printASCIIArt();

    macAddresses.forEach((macAddress) => {
        exec(`sudo etherwake -i wlan0 ${macAddress}`, (error, stdout, stderr) => {
            console.log(`Sending magic packet to MAC Address: ${macAddress} ...`);

            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }

            if (stdout) {
                console.log(`stdout: ${stdout}`);
            }

            if (stderr) {
                console.error(`stderr: ${stderr}`);
            }
        });
    });
}

// Call the function with an array of MAC addresses
wakeUpComputers(process.argv.slice(2));