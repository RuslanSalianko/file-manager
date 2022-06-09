import { readdirSync, statSync } from 'fs';

async function messageFile(dir, name) {
  
  const stat = await statSync(`${dir}/${name}`);
  const isFile = stat.isFile();

  return `${isFile ? 'file: ' : ' dir: '} ${name}\n`
} 

async function ls() {
  const { currentDir } = process.env;
  const files = await readdirSync(currentDir);

  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    process.stdout.write( await messageFile(currentDir, file));
    
  }
}

export default ls;
