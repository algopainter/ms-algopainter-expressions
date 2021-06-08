const Jimp = require('jimp');
const crypto = require('crypto');
const seedrandom = require('seedrandom');

const width = 600;
const height = 600;
 
async function run(file) {
    console.log(`Resizing ${file}`);
    const image = await Jimp.read(`${file}.png`);
    image.resize(width, height);
    image.write(`expressions-resized/${height}x${height}/${file}.png`);
}

[
  './expressions/background/BG5',
  './expressions/background/BG4',
  './expressions/background/BG1',
  './expressions/background/BG3',
  './expressions/background/BG2',

  './expressions/shadow/M_shadow',
  './expressions/shadow/F_shadow',

  './expressions/innercolor/M_serious',
  './expressions/innercolor/F_disgust',
  './expressions/innercolor/F_surprise',
  './expressions/innercolor/M_happy',
  './expressions/innercolor/F_happy',
  './expressions/innercolor/M_surprise',
  './expressions/innercolor/F_serious',
  './expressions/innercolor/M_disgust',
  './expressions/innercolor/M_angry',
  './expressions/innercolor/F_angry',

  './expressions/wireframe/M_serious',
  './expressions/wireframe/F_disgust',
  './expressions/wireframe/F_surprise',
  './expressions/wireframe/M_happy',
  './expressions/wireframe/F_happy',
  './expressions/wireframe/M_surprise',
  './expressions/wireframe/F_serious',
  './expressions/wireframe/M_disgust',
  './expressions/wireframe/M_angry',
  './expressions/wireframe/F_angry',
  './expressions/expressions/F_angry_T1',
  './expressions/expressions/F_angry_T3',
  './expressions/expressions/F_angry_T2',
  './expressions/expressions/F_angry_T5',
  './expressions/expressions/F_angry_T4',
  './expressions/expressions/M_angry_T3',
  './expressions/expressions/M_surprise_T1',
  './expressions/expressions/M_angry_T2',
  './expressions/expressions/M_surprise_T3',
  './expressions/expressions/M_surprise_T2',
  './expressions/expressions/M_angry_T1',
  './expressions/expressions/M_angry_T5',
  './expressions/expressions/M_angry_T4',
  './expressions/expressions/M_surprise_T5',
  './expressions/expressions/M_surprise_T4',
  './expressions/expressions/M_happy_T5',
  './expressions/expressions/M_disgust_T3',
  './expressions/expressions/M_disgust_T2',
  './expressions/expressions/F_serious_T1',
  './expressions/expressions/M_happy_T4',
  './expressions/expressions/F_serious_T3',
  './expressions/expressions/M_disgust_T1',
  './expressions/expressions/F_serious_T2',
  './expressions/expressions/M_happy_T3',
  './expressions/expressions/M_disgust_T5',
  './expressions/expressions/M_disgust_T4',
  './expressions/expressions/M_happy_T2',
  './expressions/expressions/F_serious_T5',
  './expressions/expressions/F_serious_T4',
  './expressions/expressions/M_happy_T1',
  './expressions/expressions/F_surprise_T1',
  './expressions/expressions/F_disgust_T3',
  './expressions/expressions/M_serious_T1',
  './expressions/expressions/F_disgust_T2',
  './expressions/expressions/F_surprise_T2',
  './expressions/expressions/F_happy_T5',
  './expressions/expressions/M_serious_T3',
  './expressions/expressions/M_serious_T2',
  './expressions/expressions/F_disgust_T1',
  './expressions/expressions/F_happy_T4',
  './expressions/expressions/F_surprise_T3',
  './expressions/expressions/F_disgust_T5',
  './expressions/expressions/F_disgust_T4',
  './expressions/expressions/F_happy_T1',
  './expressions/expressions/F_surprise_T4',
  './expressions/expressions/F_happy_T3',
  './expressions/expressions/M_serious_T5',
  './expressions/expressions/M_serious_T4',
  './expressions/expressions/F_happy_T2',
  './expressions/expressions/F_surprise_T5',

  './expressions/overlay/overlay_1',
  './expressions/overlay/overlay_3',
  './expressions/overlay/overlay_2',
  './expressions/overlay/overlay_4',
].map(item => run(item));