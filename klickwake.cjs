#!/usr/bin/env node
const readline = require('readline');
const chrono = require('chrono-node');
const { execSync } = require('child_process');

// The alarm sound is defined here, by default this is opened with cvlc
const alarmSound = '/home/klick3r/alarm.mp3';
//  Set the mode for rtcwake
const sleepMode = 'mem';


async function klickwake() {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter a date and time (e.g., "today at 21:15"): ', (input) => {
      const parsedDate = chrono.parseDate(input);

  if (parsedDate) {
      const year = parsedDate.getFullYear();
      const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
      const day = String(parsedDate.getDate()).padStart(2, '0');
      const hours = String(parsedDate.getHours()).padStart(2, '0');
      const minutes = String(parsedDate.getMinutes()).padStart(2, '0');
      const seconds = String(parsedDate.getSeconds()).padStart(2, '0');

      const formattedDate = `${year}${month}${day}${hours}${minutes}${seconds}`;
      const tellTime = `${day}/${month}/${year} at: ${hours}:${minutes}`;

      try {
        
        console.log(`Wake up set for: ${tellTime}`);

        rl.question('Options:\n1. Alarm\n2. Only power on (no alarm)\n3. Cancel any scheduled alarms/wakeups\n4. Test alarm\n5. Custom startup command\n\nChoose:', async (answer) => {
          
          if (answer.toLowerCase() === '1') {
            const command = `sudo rtcwake -m ${sleepMode} -l --date ${formattedDate} && sleep 10 && cvlc --loop ${alarmSound}`;
            console.log(`Running: ${command}\n\nEnter password or Ctrl + C to abort.`)
            // await new Promise(resolve => setTimeout(resolve, 10000));
            const result = execSync(command, { encoding: 'utf-8', stdio: 'inherit' });

          } else if (answer.toLowerCase() === '2') {
            const command = `sudo rtcwake -m ${sleepMode} -l --date ${formattedDate}`;
            console.log(`Running: ${command}\n\nEnter password or Ctrl + C to abort.`)
            // await new Promise(resolve => setTimeout(resolve, 10000));
            const result = execSync(command, { encoding: 'utf-8', stdio: 'inherit' });
            
          } else if (answer.toLowerCase() === '3') {
            const command = `sudo rtcwake -m disable`;
            console.log(`Running: ${command}\n\nEnter password or Ctrl + C to abort.`)
            // await new Promise(resolve => setTimeout(resolve, 10000));
            const result = execSync(command, { encoding: 'utf-8', stdio: 'inherit' });

          } else if (answer.toLowerCase() === '4') {
            const command = `sudo rtcwake -m ${sleepMode} -l -n -s 20 && sleep 10 && cvlc --loop ${alarmSound}`;
            console.log(`Running: ${command}\n\nEnter password or Ctrl + C to abort.`)
            // await new Promise(resolve => setTimeout(resolve, 10000));
            const result = execSync(command, { encoding: 'utf-8', stdio: 'inherit' });

          } else if (answer.toLowerCase() === '5') {
            rl.question('Input custom command:', async (customCommand) => {
              const command = `sudo rtcwake -m ${sleepMode} -l -n --date ${formattedDate} && sleep 10 && ${customCommand}`;
              console.log(`Running: ${command}\n\nEnter password or Ctrl + C to abort.`)
              // await new Promise(resolve => setTimeout(resolve, 10000));
              const result = execSync(command, { encoding: 'utf-8', stdio: 'inherit' });
              rl.close();
            });
          } else {
            console.log('No valid option selected, ending klickWake')
            process.exit()
          }
        });
      } catch (error) {
        console.error('Error executing the command:', error.message);
        rl.close();
      }
    } else {
      console.log('Unable to parse the date and time. Please try again.');
      rl.close();
    }
  });
}

klickwake();
