const Jimp = require('jimp');
const fs = require('fs')
 
module.exports = async (initialPath, {
  background,
  gender,
  expression,
  expressionTemplate,
  innerColorHue,
  overlay,
  overlayHue,
  useShadow,
  shadowHue,
  useWireframe,
  wireframeHue,
  useWireframeBlend,
  wireframeBlendStyle,
  size,
  flip,
}) => {
  const path = !size ? `${initialPath}expressions` : `${initialPath}/expressions-resized/${size}/expressions`;

  const backgroundFile = await Jimp.read(`${path}/background/BG${background}.png`);
  const expressionFile = await Jimp.read(`${path}/expressions/${gender}_${expression}_T${expressionTemplate}.png`);
  const shadowFile = useShadow ? await Jimp.read(`${path}/shadow/${gender}_shadow.png`) : null;
  const wireframeFile = useWireframe ? await Jimp.read(`${path}/wireframe/${gender}_${expression}.png`) : null;
  const innerColorFile = await Jimp.read(`${path}/innercolor/${gender}_${expression}.png`);
  const overlayFile = overlay ? await Jimp.read(`${path}/overlay/overlay_${overlay}.png`) : null;

  if (shadowFile) {
    shadowFile.color([
      { apply: 'hue', params: [shadowHue * 36] },
    ]);

    backgroundFile.composite(shadowFile, 0, 0);
  }
  
  backgroundFile.composite(expressionFile, 0, 0);

  if (wireframeFile) {
    wireframeFile.color([
      { apply: 'hue', params: [wireframeHue * 36] },
    ]);

    // options
    // Jimp.BLEND_ADD
    // Jimp.BLEND_DARKEN
    // Jimp.BLEND_DIFFERENCE
    // Jimp.BLEND_EXCLUSION
    // Jimp.BLEND_HARDLIGHT
    // Jimp.BLEND_LIGHTEN
    // Jimp.BLEND_MULTIPLY
    
    if (useWireframeBlend) {
      backgroundFile.composite(wireframeFile, 0, 0,{
          mode: Jimp[wireframeBlendStyle],
          opacityDest: 1,
          opacitySource: 1
      });
    } else {
      backgroundFile.composite(wireframeFile, 0, 0);
    }
  }
  
  innerColorFile.color([
    { apply: 'hue', params: [innerColorHue * 36] },
  ]);
  backgroundFile.composite(innerColorFile, 0, 0);

  if (overlayFile) {
    overlayFile.color([
      { apply: 'hue', params: [overlayHue * 36] },
    ]);

    backgroundFile.composite(overlayFile, 0, 0, {
        mode: Jimp.BLEND_LIGHTEN,
        opacityDest: 1,
        opacitySource: 1
    });
  }
  
  if (flip) {
    backgroundFile.flip(true, false);
  }

  return backgroundFile;
}