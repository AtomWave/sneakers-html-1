import { config } from "./../gulp-config.js";

const {svgSprite} = config.tasks;
const { src, dest } = config.gulp;
const { source, build } = config.paths;

//const svgSprite = require('gulp-svg-sprite');

const svgStack = {
  mode: {
    stack: {
      example: true,
    },
  },
  shape: {
    transform: [
      {
        svgo: {
          js2svg: { indent: 4, pretty: true },
        },
      },
    ],
  },
};

const svgSymbol = {
  mode: {
    symbol: {
      sprite: '../sprite.symbol.svg',
    },
  },
  shape: {
    transform: [
      {
        svgo: {
          js2svg: { indent: 4, pretty: true },
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: '(fill|stroke)',
              },
            },
          ],
        },
      },
    ],
  },
};

export const getSvgSpriteStack = () => {
    return src(`${source}images/svg-icons/**/*.{svg}`)
        .pipe(svgSprite(svgStack))
        .pipe(dest(`${build}images/svgsprite/stack`));
};

export const getSvgSpriteSymbol = () => {
  return src(`${source}images/svg-icons/**/*.{svg}`)
      .pipe(svgSprite(svgSymbol))
      .pipe(dest(`${build}images/svgsprite/stack`));
};
