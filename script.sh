#stop what may ahve started
killall lircd
sleep 30
#then start the right device
lircd -d /dev/lirc0
#start the server
node /home/pi/lircremote/index.js
