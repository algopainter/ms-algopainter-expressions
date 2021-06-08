const express = require('express');
const Jimp = require('jimp');
const paint = require('./paint');
const cors = require('cors');

const app = express();
app.use(cors()); 

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
      res.setHeader('Content-Type', 'image/png');

      const background = parseInt(req.query.background);
      const gender = req.query.gender;
      const expression = req.query.expression;
      const expressionTemplate = parseInt(req.query.expressionTemplate);
      const innerColorHue = parseInt(req.query.innerColorHue);
      const overlay = parseInt(req.query.overlay);
      const overlayHue = parseInt(req.query.overlayHue);
      const useShadow = req.query.useShadow === 'true';
      const shadowHue = parseInt(req.query.shadowHue);
      const wireframeHue = parseInt(req.query.wireframeHue);
      const useWireframe = req.query.useWireframe === 'true';
      const useWireframeBlend = req.query.useWireframeBlend === 'true';
      const wireframeBlendStyle = req.query.wireframeBlendStyle;
      const size = req.query.size;
      const flip = req.query.flip === 'true';
        
      const base = await paint('.', {
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

      res.end(buffer);
    } catch (e) {
      console.log(e);
      res.send({ e });
    }
});

app.get('/expressions-resized/*', async (req, res) => {
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(`${__dirname}${req.path}`);
});

app.listen(port, function () {
    console.log('Ready');
});