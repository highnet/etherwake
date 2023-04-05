# 🌟 nodejs-wake-on-lan-tests

Easy [Node JS](https://nodejs.org/en) control for testing communication with [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN).

## 🔧 Pre-requisites

- To use [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN), you need to configure the target machine to enable this feature, settings may vary depending on the target machine. Follow the [Ultimate Wake-On-LAN Tutorial](https://docs.technotim.live/posts/wake-on-lan/) for more details: 

## 🪛 Tools

<div align="center"><img width="100px" src="ethermod/ethermod-logo.png"></img></div>

- 🚀 [ethermod](https://gitlab.wetouch.at/playground/nodejs-wake-on-lan-tests/-/tree/master/ethermod), is a [Linux](https://www.raspbian.org/) [npm](https://www.npmjs.com/) module for sending [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN) magic packets to target machines with [Etherwake](https://www.mkssoftware.com/docs/man1/etherwake.1.asp) via their [MAC address](https://en.wikipedia.org/wiki/MAC_address).

## ❓ FAQ

**Q. How do I find the IP address of a device on my network?**

A. On Windows, open the Command Prompt or PowerShell and type <code>ipconfig</code> . Your local IP address will be displayed next to `IPv4 Address` under the section of your network adapter

On Linux, You can find your local IP address on Linux by opening a terminal and typing <code>ip addr show</code>. Your local IP address will be displayed next to `inet` under the section of your network interface.

**Q. How do I find the [MAC address](https://en.wikipedia.org/wiki/MAC_address) of a device on my network?**

A. On Windows, you can find your [MAC address](https://en.wikipedia.org/wiki/MAC_address) on Windows by opening the Command Prompt or PowerShell and typing <code>ipconfig /all</code> . Your [MAC address](https://en.wikipedia.org/wiki/MAC_address) will be displayed next to `Physical Address` under the section of your network adapter.

On [Linux](https://www.raspbian.org/), you can find your [MAC address](https://en.wikipedia.org/wiki/MAC_address) on [Linux](https://www.raspbian.org/) by opening a terminal and typing <code> ip addr show </code> . Your [MAC address](https://en.wikipedia.org/wiki/MAC_address) will be displayed next to `link/ether` under the section of your network interface.

**Q. How do I delete the leftover Node JS installation package files on the Raspberry PI?**

A. To remove a file on Linux, you can use the <code>rm</code> command followed by the filename you want to delete. For example, if you want to delete a file named `node-v6.2.1-linux-armv6l.tar.gz` , you can use the command <code>rm node-v6.2.1-linux-armv6l.tar.gz</code> .

If you want to remove a directory and all its contents, you can use the command <code>i rm -r dirname</code> .

_Be careful when using the rm command because it deletes files permanently and they cannot be easily recovered._

**Q. How do I transfer a script I wrote in VS code to the Raspberry PI?**

A. You can copy over files from your windows machine to the Raspberry PI with the command <code>scp [PATH_TO_FILE] [TARGET_DESTINATION]</code> .
For example, if I want to transfer the file `index.js` from my windows machine to the ethermod folder in the Raspberry PI, type the command: 
<code>scp index.js wetouch@raspberrypi:/~ethermod</code> .

**Q. How do I create an npm module from scratch, for sending etherwake commands to a target machine?**

A. To write an etherwake npm module for the Raspberry PI (let's call it ethermod), start by creating a directory called ethermod by entering the command: <code>mkdir ethermod</code> in the terminal.

Navigate to the new directory by entering the command: <code>cd ethermod</code>.

Enter the command <code>npm init</code> to start creating the npm module. After going through the init wizard, your `package.json` should look something like [this](https://gitlab.wetouch.at/playground/nodejs-wake-on-lan-tests/-/blob/master/ethermod/package.json).

Write the node JS script for sending the etherwake command as required (use nano index.js to edit the script in the linux terminal or write the script in VS code) and copy it over to the Raspberry PI with the command: <code>scp index.js wetouch@raspberrypi:/~ethermod</code>. Your `index.js` should look something like [this](https://gitlab.wetouch.at/playground/nodejs-wake-on-lan-tests/-/blob/master/ethermod/index.js).

## 🤔  Common Issues
- I want to ping a Windows Device, but it is not responding to my ping requests.

    1. To check the firewall settings on a Windows machine to make sure it is not blocking incoming ping requests, you can follow these steps:

    2. Open the Start menu and type `Firewall` in the search bar. Click on `Windows Defender Firewall` to open the firewall settings.

    3. In the left-hand menu, click on `Allow an app or feature through Windows Defender Firewall`.

    4. Scroll down the list of allowed apps and features until you find `File and Printer Sharing`. Make sure the checkbox next to it is checked for both `Private` and `Public` networks.

    5. If the checkbox is not checked, click on the `Change settings` button and check the box next to `File and Printer Sharing` for both `Private` and `Public` networks. Click on the `OK` button to save your changes.

    - This should allow incoming ping requests through the Windows Defender Firewall. If you are using a different firewall program, the steps to allow incoming ping requests may be different.

- I want to turn on a target machine using etherwake but when I run it, I get an error akin to <code>SIOCGIFHWADDR on eth0 failed: No such device</code>

    - The error message <code>SIOCGIFHWADDR on eth0 failed: No such device</code> indicates that the network interface <code>eth0</code> does not exist on your Raspberry Pi. You can check the available network interfaces on your Raspberry Pi by running the command <code>ifconfig -a</code> .

    - Based on the output of the code ifconfig -a command, it seems that our Raspberry Pi has two network interfaces: <code>Io</code> (loopback) and <code>wlan0</code> (wireless). The <code>eth0</code> interface is not present, which is why you received the error message when trying to use it with the etherwake command. You can try using the <code>wlan0</code> interface instead by specifying it with the <code>-i</code> option as following: 

```bash 
sudo etherwake -i wlan0 [MAC ADDRESS]
```
