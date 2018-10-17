#stop what may ahve started
killall lircd
#then start the right device
lircd -d /dev/lirc0
#start the server
node /home/pi/lircremote/index.js
