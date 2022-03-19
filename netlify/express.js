const Jimp = require('jimp');
const paint = require('../paint');

module.exports.handler = async function(event, context) {
  const background = parseInt(event.queryStringParameters.background);
      const gender = event.queryStringParameters.gender;
      const expression = event.queryStringParameters.expression;
      const expressionTemplate = parseInt(event.queryStringParameters.expressionTemplate);
      const innerColorHue = parseInt(event.queryStringParameters.innerColorHue);
      const overlay = parseInt(event.queryStringParameters.overlay);
      const overlayHue = parseInt(event.queryStringParameters.overlayHue);
      const useShadow = event.queryStringParameters.useShadow === 'true';
      const shadowHue = parseInt(event.queryStringParameters.shadowHue);
      const wireframeHue = parseInt(event.queryStringParameters.wireframeHue);
      const useWireframe = event.queryStringParameters.useWireframe === 'true';
      const useWireframeBlend = event.queryStringParameters.useWireframeBlend === 'true';
      const wireframeBlendStyle = event.queryStringParameters.wireframeBlendStyle;
      const size = event.queryStringParameters.size;
      const flip = event.queryStringParameters.flip === 'true';
        
      const base = await paint('../../', {
        background,
        gender,
        expression,
        expressionTemplate,
        innerColorHue,
        overlay,
        overlayHue,
        useShadow,
        shadowHue,
        wireframeHue,
        useWireframe,
        useWireframeBlend,
        wireframeBlendStyle,
        size,
        flip,
      });

      const buffer = await new Promise((resolve, reject) => {
        base.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
          if (err) {
              reject(err);
          }

          resolve(buffer);
        });
      });
}