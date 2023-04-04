# 🚀 ethermod
<div align="center"> <img width="250px" src="ethermod-logo.png"></img> </div>

## 🗒️ Description
- 🚀 [ethermod](https://gitlab.wetouch.at/playground/nodejs-wake-on-lan-tests/-/tree/master/ethermod), is a [Linux](https://www.raspbian.org/) [npm](https://www.npmjs.com/) module for sending [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN) magic packets to target machines with [Etherwake](https://www.mkssoftware.com/docs/man1/etherwake.1.asp) via their [MAC address](https://en.wikipedia.org/wiki/MAC_address).

## 🔧 Pre-requisites
- [Linux](https://www.raspbian.org/)
- [Node JS](https://nodejs.org/en)
- [Etherwake](https://www.mkssoftware.com/docs/man1/etherwake.1.asp)
- A target machine configured for [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN)

## 🌐 Usage
1. [Clone](https://learn.hibbittsdesign.org/gitlab-githubdesktop/cloning-a-gitlab-repo) the ethermod [repository](https://gitlab.wetouch.at/playground/nodejs-wake-on-lan-tests/-/tree/master/ethermod)

2. Run the ethermod module by entering the command:

```bash
node index.js [MAC ADDRESS1] [MAC ADDRESS2] [MAC ADDRESS3] … 
```
where <code>[MAC ADDRESS]</code> is the MAC address of the target machine. You may add arbitrarily as many [MAC addresses](https://en.wikipedia.org/wiki/MAC_address) as required.

- For example, to wake up a target machine with mac address <code>00:01:2e:a8:65:75</code> enter the command:

```bash
node index.js 00:01:2e:a8:65:75
```

- For example, to wake up 2 target machines, one with [MAC address](https://en.wikipedia.org/wiki/MAC_address) <code>00:01:2e:a8:65:75</code> and another with [MAC address](https://en.wikipedia.org/wiki/MAC_address) <code>b8:ae:ed:7e:ec:06</code> enter the command:

```bash
node index.js 00:01:2e:a8:65:75 b8:ae:ed:7e:ec:06
```

- Your target machines should now boot up, and you should see the following output:

```bash
wetouch@raspberrypi:~/nodejs-wake-on-lan-tests/ethermod $ node index.js 00:01:2e:a8:65:75 b8:ae:ed:7e:ec:06
   ___ ______  __ __    ___  ____   ___ ___   ___   ___
  /  _]      ||  |  |  /  _]|    \ |   |   | /   \ |   \
 /  [_|      ||  |  | /  [_ |  D  )| _   _ ||     ||    \
|    _]_|  |_||  _  ||    _]|    / |  \_/  ||  O  ||  D  |
|   [_  |  |  |  |  ||   [_ |    \ |   |   ||     ||     |
|     | |  |  |  |  ||     ||  .  \|   |   ||     ||     |
|_____| |__|  |__|__||_____||__|\_||___|___| \___/ |_____|

Sending magic packet to MAC Address: 00:01:2e:a8:65:75 ...
Sending magic packet to MAC Address: b8:ae:ed:7e:ec:06 ...
```

## 🤓 Installing [Node JS](https://nodejs.org/en) on [Linux](https://www.raspbian.org/)
- To install [Node JS](https://nodejs.org/en) on your Raspberry PI, type the following sequence of commands in the terminal:

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

```bash 
node index.js 00:01:2e:a8:65:75
```

## 🤔  Common Issues

- I want to turn on a target machine with ethermod, I followed the [Ultimate Wake-On-LAN Tutorial](https://docs.technotim.live/posts/wake-on-lan/) but it is still not responding to [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN) messages, or it is only responding to [Wake-On-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN) messages when the machine is is in sleep mode and not when it is on powered off state

    - Here are the steps to update the Ethernet interface network drivers on a Windows machine Using Device Manager:

    1. Press the Windows key and type “Device Manager” in the search bar, then click on “Open”.

    2. In Device Manager, locate and expand the “Network adapters” category.

    3. Right-click on your Ethernet interface network adapter and select “Update driver”.

    4. In the “Update Drivers” window, select “Search automatically for updated driver software”.

    5. Wait for Windows to search for and install any available updates for your Ethernet interface network adapter.

    - That’s it! Your Ethernet interface network drivers should now be up-to-date.
