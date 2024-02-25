# klickWake
Klickwake is a nodejs script that uses rtcwake to wake the computer from hibernation, then runs a command on wakeup, the default option is cvlc playing an alarm. The options can be easily edited to fit whatever needs, for example waking up to do a backup then go back to sleep.

Can be started by simply doing: "node klickwake.cjs" or using "npm link" to make it a command that can be run from the terminal.

The alarm sound needs to be specified in the script, the default mode for rtcwake is mem but can also be changed. check supported modes from rtcwake manpage.

Dependencies:

rtcwake
Nodejs
npm
cvlc
