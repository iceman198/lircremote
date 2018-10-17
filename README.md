# lircremote
A server for your LIRC setup on a Raspberry Pi

## Instructions
Here is the instructables I used for the initial setup of LIRC and such: https://www.hackster.io/austin-stanton/creating-a-raspberry-pi-universal-remote-with-lirc-2fd581

### Full transparency
I found this guy has already done something similar (https://github.com/bbtinkerer/LircNodeJsWeb), but just wanted to make my own.

## Troubleshooting
In all of this, the key thing is to make sure your remote file that gets created during the 'irrecord' process looks something like one of the files in the 'remote' folder here.  If there aren't many lines of numbers, then something didn't go right and you should delete it and try again.

The issue I ran into was the initial install of LIRC.  Something must not have installed right when I first ran the `$sudo apt-get install lirc` because I couldnt' get the record to run at all...it kept crying about it couldn't use the device.  So I ended up just removing LIRC (`$sudo apt-get remove lirc`) and then installing again (`$sudo apt-get install lirc`).

Also note that the service name is `lircd`, NOT `lirc` like in the tutorial mentioned.

### Starting it right
I had to tweak my rc.local to kill the initial `lircd` service and then start it back up specifying the `lirc0` device.  I'm running the following in my `rc.local` (I'm actually just calling the `script.sh` that is here):

```
#stop what may ahve started
killall lircd
#then start the right device
lircd -d /dev/lirc0
```

### Next Steps
Going to enhance the nodejs express server to give a web page and read form a json config of the buttons!