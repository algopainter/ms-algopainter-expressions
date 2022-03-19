const Jimp = require('jimp');
const paint = require('../paint');


module.exports.handler = async function (event, context) {
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

  const base = await paint('https://github.com/algopainter/ms-algopainter-expressions/blob/master', {
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

  try {
    const buffer = await base.getBufferAsync(Jimp.MIME_PNG);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
      },
      body: buffer.toString('base64'),
      isBase64Encoded: true,
    }
  } catch(e) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: e
    }
  }
}