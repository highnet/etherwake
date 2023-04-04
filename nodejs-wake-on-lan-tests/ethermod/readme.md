# 🚀 ethermod

<div align="center"> <img width="250px" src="ethermod-logo.png"></img> </div>

## 🗒️ Description
- 🚀 [ethermod](https://gitlab.wetouch.at/playground/nodejs-wake-on-lan-tests/-/tree/master/ethermod), is a [Linux](https://www.raspbian.org/) [npm](https://www.npmjs.com/) module for sending [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN) magic packets to target machines with [Etherwake](https://www.mkssoftware.com/docs/man1/etherwake.1.asp) via their [MAC address](https://en.wikipedia.org/wiki/MAC_address).

## 🔧 Pre-requisites

- [Linux](https://www.raspbian.org/)
- [Node JS](https://nodejs.org/en)
- [Etherwake](https://www.mkssoftware.com/docs/man1/etherwake.1.asp)
- A target machine configured for [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN)

## 🤓 Installing [Node JS](https://nodejs.org/en) on [Linux](https://www.raspbian.org/)

To install [Node JS](https://nodejs.org/en) on your Raspberry PI, type the following sequence of commands in the terminal:

```bash
wget http://nodejs.org/dist/v6.2.1/node-v6.2.1-linux-armv6l.tar.gz
tar -xzf node-v6.2.1-linux-armv6l.tar.gz
cd node-v6.2.1-linux-armv6l/
sudo cp -R * /usr/local/
node -v
npm -v
```
## 😎 Installing etherwake on Linux

- To install [Etherwake](https://www.mkssoftware.com/docs/man1/etherwake.1.asp), a tool for sending [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN) magic packets, type <code> sudo apt install etherwake </code> in the terminal.

## 📶 Interfacing With Wake-On-Lan with Raspberry PI via ethermod

- [Clone](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) ethermod from its [repository](https://gitlab.wetouch.at/playground/nodejs-wake-on-lan-tests)

- Run the ethermod module by entering the command node index.js [MAC ADDRESS], where [MAC ADDRESS] is the [MAC address](https://en.wikipedia.org/wiki/MAC_address) of the target machine.

- For example, to wake up a target machine with [MAC address](https://en.wikipedia.org/wiki/MAC_address) <code> 00:01:2e:a8:65:75 </code> enter the command 
```bash 
node index.js 00:01:2e:a8:65:75
```

## 🤔  Common Issues

I want to turn on a target machine using ethermod, but when I run it, I get an error akin to <code>SIOCGIFHWADDR on eth0 failed: No such device</code>

The error message <code>SIOCGIFHWADDR on eth0 failed: No such device</code> indicates that the network interface <code>eth0</code> does not exist on your Raspberry Pi. You can check the available network interfaces on your Raspberry Pi by running the command <code>ifconfig -a</code>

Based on the output of the code ifconfig -a command, it seems that our Raspberry Pi has two network interfaces: Io (loopback) and wlan0 (wireless). The eth0 interface is not present, which is why you received the error message when trying to use it with the etherwake command. You can try using the wlan0 interface instead by specifying it with the -i option as following: sudo etherwake -i wlan0 [MAC ADDRESS]

## ❓ FAQ

