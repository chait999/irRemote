<h3>Getting Started</h3><br>
A node.js module containing Server  part of the InfraRed Remote Control
<br>
<br>
<h3>Prerequisites</h3><br>
Node.js - Download & Install Node.js and the npm package manager. If you encounter any problems, you can also use this GitHub Gist to install Node.js.<br>
MQTTClient- Setup <a href="https://github.com/chaitanyaT99/irRemoteClient">irRemoteClient</a> on RaspberryPi
<br>
<br>
<h3>Installation</h3><br>
Setup this module on a cloud Server

_git clone <a href="https://github.com/chaitanyaT99/irRemoteServer">irRemoteServer</a><br>
npm install<br>
node server.js<br>_


Now Setup the client module from <a href = "https://github.com/chaitanyaT99/irRemoteClient">here</a><br>
<br>
<br>
<h3>Deployment</h3><br>
Once Installation is done, create a systemctl daemon for starting the nodejs server on boot.
You can access the irRemoteControl from your server hostname/ip
<br><br>
<h3>Built With</h3><br>
<a href="https://nodejs.org/en/">Node.js</a>
<br><br>
<h3>License</h3><br>
This project is licensed under the MIT License - see the <a href="https://github.com/chaitanyaT99/irRemoteClient/blob/master/LICENSE.md">LICENSE.md</a> file for details
