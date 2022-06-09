import { cpus as cp } from 'os';

function cpus() {
  const cpuInfo = cp();
  const numberCpu = cpuInfo.length;
  const { model } = cpuInfo[0];

  const messageCpu = cpuInfo.reduce((message, {speed},index) => (
    `${message}\n${index + 1}: ${speed/1000} GHz`
  ),`Model: ${model}\nNumber of processors: ${numberCpu} `);

  process.stdout.write(messageCpu);
}

export default cpus;
