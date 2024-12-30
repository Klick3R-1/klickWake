# Klickwake

A command-line utility for scheduling system wake-ups and alarms on Linux systems using `rtcwake`.

## Features

- Schedule system wake-ups with optional alarm
- Natural language date/time input (e.g., "tomorrow at 8am", "in 2 hours")
- Custom startup commands support
- Test mode for alarm verification
- Cancel scheduled wake-ups

## Prerequisites

- Linux operating system
- Node.js and npm installed
- VLC media player (`cvlc`)
- `sudo` privileges (required for `rtcwake`)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/klickwake.git
cd klickwake
```

2. Install dependencies:
```bash
npm install
```

3. Install required Node.js packages:
```bash
npm install chrono-node readline
```

4. Make the script executable:
```bash
chmod +x klickwake.cjs
```

5. (Optional) Create a symbolic link to run from anywhere:
```bash
sudo ln -s $(pwd)/klickwake.cjs /usr/local/bin/klickwake
```

## Usage

Run the script:
```bash
./klickwake.cjs
```

Or if you created the symbolic link:
```bash
klickwake
```

### Available Options

1. **Alarm**: System will wake up and play an alarm sound
2. **Power on only**: System will wake up without an alarm
3. **Cancel**: Cancel any scheduled wake-ups
4. **Test alarm**: Test the alarm sound (20-second delay)
5. **Custom startup command**: Run a custom command after wake-up

### Examples

- Schedule wake-up for tomorrow morning:
```bash
Enter a date and time: tomorrow at 8am
```

- Schedule wake-up in 2 hours:
```bash
Enter a date and time: in 2 hours
```

- Schedule wake-up for specific date/time:
```bash
Enter a date and time: December 25th at 7:30am
```

## Configuration

The default alarm sound and sleep mode can be modified in the script:
```javascript
const alarmSound = '/path/to/your/alarm.mp3';
const sleepMode = 'mem';  // or 'disk' for hibernate
```

## Troubleshooting

1. If you get permission errors:
   - Ensure you have sudo privileges
   - Check that rtcwake is installed (`sudo apt-get install util-linux`)

2. If the alarm doesn't play:
   - Verify VLC is installed (`sudo apt-get install vlc`)
   - Check the alarm sound file path is correct

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
```
