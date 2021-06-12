const Jimp = require('jimp');

const width = 400;
const height = 400;
 
async function run(file) {
    console.log(`Resizing ${file}`);
    const image = await Jimp.read(`${file}.png`);
    image.resize(width, height);
    image.write(`expressions-resized/${height}x${height}/${file}.png`);
}

[
  './expressions-raw/background/BG5',
  './expressions-raw/background/BG4',
  './expressions-raw/background/BG1',
  './expressions-raw/background/BG3',
  './expressions-raw/background/BG2',

  './expressions-raw/shadow/M_shadow',
  './expressions-raw/shadow/F_shadow',

  './expressions-raw/innercolor/M_serious',
  './expressions-raw/innercolor/F_disgust',
  './expressions-raw/innercolor/F_surprise',
  './expressions-raw/innercolor/M_happy',
  './expressions-raw/innercolor/F_happy',
  './expressions-raw/innercolor/M_surprise',
  './expressions-raw/innercolor/F_serious',
  './expressions-raw/innercolor/M_disgust',
  './expressions-raw/innercolor/M_angry',
  './expressions-raw/innercolor/F_angry',

  './expressions-raw/wireframe/M_serious',
  './expressions-raw/wireframe/F_disgust',
  './expressions-raw/wireframe/F_surprise',
  './expressions-raw/wireframe/M_happy',
  './expressions-raw/wireframe/F_happy',
  './expressions-raw/wireframe/M_surprise',
  './expressions-raw/wireframe/F_serious',
  './expressions-raw/wireframe/M_disgust',
  './expressions-raw/wireframe/M_angry',
  './expressions-raw/wireframe/F_angry',
  './expressions-raw/expressions/F_angry_T1',
  './expressions-raw/expressions/F_angry_T3',
  './expressions-raw/expressions/F_angry_T2',
  './expressions-raw/expressions/F_angry_T5',
  './expressions-raw/expressions/F_angry_T4',
  './expressions-raw/expressions/M_angry_T3',
  './expressions-raw/expressions/M_surprise_T1',
  './expressions-raw/expressions/M_angry_T2',
  './expressions-raw/expressions/M_surprise_T3',
  './expressions-raw/expressions/M_surprise_T2',
  './expressions-raw/expressions/M_angry_T1',
  './expressions-raw/expressions/M_angry_T5',
  './expressions-raw/expressions/M_angry_T4',
  './expressions-raw/expressions/M_surprise_T5',
  './expressions-raw/expressions/M_surprise_T4',
  './expressions-raw/expressions/M_happy_T5',
  './expressions-raw/expressions/M_disgust_T3',
  './expressions-raw/expressions/M_disgust_T2',
  './expressions-raw/expressions/F_serious_T1',
  './expressions-raw/expressions/M_happy_T4',
  './expressions-raw/expressions/F_serious_T3',
  './expressions-raw/expressions/M_disgust_T1',
  './expressions-raw/expressions/F_serious_T2',
  './expressions-raw/expressions/M_happy_T3',
  './expressions-raw/expressions/M_disgust_T5',
  './expressions-raw/expressions/M_disgust_T4',
  './expressions-raw/expressions/M_happy_T2',
  './expressions-raw/expressions/F_serious_T5',
  './expressions-raw/expressions/F_serious_T4',
  './expressions-raw/expressions/M_happy_T1',
  './expressions-raw/expressions/F_surprise_T1',
  './expressions-raw/expressions/F_disgust_T3',
  './expressions-raw/expressions/M_serious_T1',
  './expressions-raw/expressions/F_disgust_T2',
  './expressions-raw/expressions/F_surprise_T2',
  './expressions-raw/expressions/F_happy_T5',
  './expressions-raw/expressions/M_serious_T3',
  './expressions-raw/expressions/M_serious_T2',
  './expressions-raw/expressions/F_disgust_T1',
  './expressions-raw/expressions/F_happy_T4',
  './expressions-raw/expressions/F_surprise_T3',
  './expressions-raw/expressions/F_disgust_T5',
  './expressions-raw/expressions/F_disgust_T4',
  './expressions-raw/expressions/F_happy_T1',
  './expressions-raw/expressions/F_surprise_T4',
  './expressions-raw/expressions/F_happy_T3',
  './expressions-raw/expressions/M_serious_T5',
  './expressions-raw/expressions/M_serious_T4',
  './expressions-raw/expressions/F_happy_T2',
  './expressions-raw/expressions/F_surprise_T5',

  './expressions-raw/overlay/overlay_1',
  './expressions-raw/overlay/overlay_3',
  './expressions-raw/overlay/overlay_2',
  './expressions-raw/overlay/overlay_4',
].map(item => run(item));