# 🌟 nodejs-wake-on-lan-tests

Easy [Node JS](https://nodejs.org/en) control for testing communication with [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN).

## 🔧 Pre-requisites

- To use Wake-On-Lan, you need to configure the target machine to enable this feature, settings may vary depending on the target machine. Follow the Ultimate Wake-On-LAN Tutorial for more details: 

## 🪛 Tools

<div align="center"><img width="100px" src="ethermod/ethermod-logo.png"></img></div>

- 🚀 [ethermod](https://gitlab.wetouch.at/playground/nodejs-wake-on-lan-tests/-/tree/master/ethermod), is a [Linux](https://www.raspbian.org/) [npm](https://www.npmjs.com/) module for sending [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN) magic packets to target machines with [Etherwake](https://www.mkssoftware.com/docs/man1/etherwake.1.asp) via their [MAC address](https://en.wikipedia.org/wiki/MAC_address).

## ❓ FAQ

**Q. How do I find the [MAC address](https://en.wikipedia.org/wiki/MAC_address) of a device on my network?**

**A.** On Windows, you can find your [MAC address](https://en.wikipedia.org/wiki/MAC_address) on Windows by opening the Command Prompt or PowerShell and typing <code> ipconfig /all </code> . Your [MAC address](https://en.wikipedia.org/wiki/MAC_address)will be displayed next to Physical Address under the section of your network adapter.

On [Linux](https://www.raspbian.org/), you can find your [MAC address](https://en.wikipedia.org/wiki/MAC_address) on [Linux](https://www.raspbian.org/) by opening a terminal and typing <code> ip addr show </code> . Your [MAC address](https://en.wikipedia.org/wiki/MAC_address) will be displayed next to link/ether under the section of your network interface.
