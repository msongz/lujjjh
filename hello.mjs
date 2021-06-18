#!/usr/bin/env node

import { strict as assert } from 'assert';
import { writeFileSync } from 'fs';
import svgo from 'svgo';

// pretend to use lit-html and help VSCode highlight the SVG code below
const html = String.raw;

/**
 * @param easingFn {(n: number) => number}
 */
const interpolate =
  (easingFn) =>
  /**
   * @param from {number | number[]}
   * @param to {number | number[]} */ (from, to) => {
    if (!Array.isArray(from)) from = [from];
    if (!Array.isArray(to)) to = [to];
    assert.equal(to.length, from.length);
    const precision = 0.1;
    return Array.from({ length: 1 / precision })
      .map((_, i) => i * precision)
      .map((x) =>
        from
          .map((fromValue, index) => {
            const toValue = to[index];
            const value = fromValue + (toValue - fromValue) * easingFn(x);
            return +value.toFixed(2);
          })
          .join(' ')
      )
      .join(';');
  };

const easeOutCubic = interpolate((x) => 1 - Math.pow(1 - x, 3));

const width = 900;
const height = 360;
const heyWidth = 60;
const heyHeight = 57;
const heyWidth2x = heyWidth * 2;
const heyHeight2x = heyHeight * 2;
const imLujjjhWidth = 132;
const imLujjjhHeight = 57;

const hello = html`<svg
  width="${width}"
  height="${height}"
  viewBox="0 0 ${width} ${height}"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="${width}" height="${height}" rx="15" fill="#F4F5F6" />
  <defs>
    <path
      id="hey"
      transform="translate(-${heyWidth / 2} -${heyHeight / 2})"
      d="M0.942438 39V0.599999H4.11044V18.264H10.2544V0.599999H13.4224V39H10.2544V21.096H4.11044V39H0.942438ZM27.5011 29.112H30.5731C30.6051 29.848 30.6211 30.616 30.6211 31.416C30.6531 32.184 30.6531 32.888 30.6211 33.528C30.5251 35.576 30.0291 37.064 29.1331 37.992C28.2691 38.888 26.7811 39.336 24.6691 39.336C22.4931 39.336 20.9251 38.888 19.9651 37.992C19.0051 37.064 18.4931 35.576 18.4291 33.528C18.3651 31.8 18.3171 29.896 18.2851 27.816C18.2851 25.704 18.2851 23.608 18.2851 21.528C18.3171 19.448 18.3651 17.528 18.4291 15.768C18.5251 13.656 19.0531 12.152 20.0131 11.256C20.9731 10.328 22.5091 9.864 24.6211 9.864C26.6691 9.864 28.1571 10.312 29.0851 11.208C30.0131 12.104 30.5251 13.592 30.6211 15.672C30.6531 16.408 30.6691 17.656 30.6691 19.416C30.7011 21.144 30.6691 23.096 30.5731 25.272H21.5491C21.5491 26.616 21.5491 27.976 21.5491 29.352C21.5811 30.696 21.6131 32.168 21.6451 33.768C21.6451 34.92 21.8691 35.72 22.3171 36.168C22.7971 36.584 23.5491 36.792 24.5731 36.792C25.5971 36.792 26.3171 36.584 26.7331 36.168C27.1811 35.72 27.4371 34.92 27.5011 33.768C27.5331 32.584 27.5331 31.032 27.5011 29.112ZM24.6211 12.408C23.5651 12.408 22.7971 12.648 22.3171 13.128C21.8691 13.576 21.6451 14.328 21.6451 15.384C21.6131 16.792 21.5811 18.088 21.5491 19.272C21.5491 20.456 21.5491 21.624 21.5491 22.776H27.5491C27.5491 21.08 27.5491 19.592 27.5491 18.312C27.5491 17 27.5331 16.024 27.5011 15.384C27.4371 14.328 27.1811 13.576 26.7331 13.128C26.2851 12.648 25.5811 12.408 24.6211 12.408ZM37.3793 39L33.4433 10.2H36.7073L38.2433 24.264L39.4913 36.504H40.4033L41.7473 24.264L43.1873 10.2H46.4993L42.1793 42.936C41.8593 44.984 41.2513 46.456 40.3553 47.352C39.4593 48.28 37.9393 48.744 35.7953 48.744C34.8033 48.744 33.8433 48.664 32.9153 48.504V46.008C33.2673 46.072 33.6993 46.104 34.2113 46.104C34.7553 46.136 35.2673 46.152 35.7473 46.152C36.9313 46.152 37.7153 45.928 38.0993 45.48C38.5153 45.064 38.8033 44.28 38.9633 43.128L39.5393 39H37.3793ZM51.5498 31.416L51.0218 10.44V0.599999H54.3818V10.44L53.8538 31.416H51.5498ZM49.9658 39V34.728H55.3898V39H49.9658Z"
    />
    <path
      id="imLujjjh"
      transform="translate(-${imLujjjhWidth / 2} -${imLujjjhHeight / 2})"
      d="M0.590875 39V0.599999H3.75888V39H0.590875ZM8.50488 4.92V0.599999H13.9289V4.536L11.6249 9.864H9.56088L11.3849 4.92H8.50488ZM17.0909 39V10.2H20.2589V12.744H20.8829C21.3629 11.784 21.9069 11.064 22.5149 10.584C23.1549 10.104 24.0349 9.864 25.1549 9.864C26.3069 9.864 27.2189 10.104 27.8909 10.584C28.5949 11.064 29.0909 11.848 29.3789 12.936H30.0029C30.4829 11.944 31.0749 11.192 31.7789 10.68C32.4829 10.136 33.3949 9.864 34.5149 9.864C36.0189 9.864 37.1389 10.312 37.8749 11.208C38.6109 12.072 38.9949 13.528 39.0269 15.576L39.0749 39H35.9069L35.8589 15.336C35.8269 14.28 35.6189 13.528 35.2349 13.08C34.8829 12.6 34.2749 12.36 33.4109 12.36C31.6189 12.36 30.3869 13.352 29.7149 15.336V39H26.5469L26.4989 15.336C26.4989 14.28 26.3069 13.528 25.9229 13.08C25.5389 12.6 24.9149 12.36 24.0509 12.36C22.1309 12.36 20.8669 13.336 20.2589 15.288V39H17.0909ZM54.2159 39V0.599999H57.3839V39H54.2159ZM67.2179 39.336C65.6819 39.336 64.5139 38.904 63.7139 38.04C62.9459 37.144 62.5619 35.672 62.5619 33.624V10.2H65.7779V33.864C65.7779 34.92 65.9699 35.688 66.3539 36.168C66.7379 36.616 67.3619 36.84 68.2259 36.84C69.0579 36.84 69.8099 36.584 70.4819 36.072C71.1859 35.56 71.6979 34.84 72.0179 33.912V10.2H75.1859V39H72.0179V36.456H71.3939C70.4659 38.376 69.0739 39.336 67.2179 39.336ZM79.3664 4.44V0.599999H84.4064V4.44H79.3664ZM74.6144 48.552V46.056C74.9664 46.12 75.4144 46.152 75.9584 46.152C76.4704 46.184 76.9664 46.2 77.4464 46.2C78.4704 46.2 79.2064 45.976 79.6544 45.528C80.1024 45.112 80.3264 44.344 80.3264 43.224V10.2H83.4944V42.984C83.4944 45.064 83.0144 46.552 82.0544 47.448C81.1264 48.376 79.6064 48.84 77.4944 48.84C76.5024 48.84 75.5424 48.744 74.6144 48.552ZM87.7101 4.44V0.599999H92.7501V4.44H87.7101ZM82.9581 48.552V46.056C83.3101 46.12 83.7581 46.152 84.3021 46.152C84.8141 46.184 85.3101 46.2 85.7901 46.2C86.8141 46.2 87.5501 45.976 87.9981 45.528C88.4461 45.112 88.6701 44.344 88.6701 43.224V10.2H91.8381V42.984C91.8381 45.064 91.3581 46.552 90.3981 47.448C89.4701 48.376 87.9501 48.84 85.8381 48.84C84.8461 48.84 83.8861 48.744 82.9581 48.552ZM96.0539 4.44V0.599999H101.094V4.44H96.0539ZM91.3019 48.552V46.056C91.6539 46.12 92.1019 46.152 92.6459 46.152C93.1579 46.184 93.6539 46.2 94.1339 46.2C95.1579 46.2 95.8939 45.976 96.3419 45.528C96.7899 45.112 97.0139 44.344 97.0139 43.224V10.2H100.182V42.984C100.182 45.064 99.7019 46.552 98.7419 47.448C97.8139 48.376 96.2939 48.84 94.1819 48.84C93.1899 48.84 92.2299 48.744 91.3019 48.552ZM105.31 39V0.599999H108.478V12.744H109.198C109.646 11.784 110.174 11.064 110.782 10.584C111.422 10.104 112.286 9.864 113.374 9.864C114.878 9.864 116.014 10.312 116.782 11.208C117.55 12.072 117.934 13.528 117.934 15.576V39H114.766V15.336C114.734 14.28 114.526 13.528 114.142 13.08C113.758 12.6 113.134 12.36 112.27 12.36C110.35 12.36 109.086 13.336 108.478 15.288V39H105.31ZM122.317 39V34.728H127.741V39H122.317Z"
    />
  </defs>
  <g fill="#333333">
    <g opacity="0">
      <g transform="translate(${width / 2} ${height / 2})">
        <use href="#hey">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="${easeOutCubic(1, 2)}"
            begin="heyOut.end+.125s"
            dur=".5s"
            fill="freeze"
          />
        </use>
      </g>
      <animate id="heyIn" attributeName="opacity" values="${easeOutCubic(0, 1)}" begin=".25s" dur=".5s" fill="freeze" />
      <animateTransform
        id="heyOut"
        attributeName="transform"
        type="translate"
        values="${easeOutCubic([0, 0], [0, -heyHeight])}"
        begin="heyIn.end+.125s"
        dur=".5s"
        fill="freeze"
      />
      <animate attributeName="opacity" values="${easeOutCubic(1, 0.5)}" begin="heyOut.begin" dur=".5s" fill="freeze" />
      <animateTransform
        attributeName="transform"
        type="translate"
        values="${easeOutCubic([0, -heyHeight], [35 - width / 2 + heyWidth2x / 2, 30 - height / 2 + heyHeight2x / 2])}"
        begin="heyOut.end+.125s"
        dur=".5s"
        fill="freeze"
      />
    </g>
    <use href="#imLujjjh" x="50%" y="50%" opacity="0">
      <animateTransform
        id="imLujjjhIn"
        attributeName="transform"
        type="translate"
        values="${easeOutCubic([0, 57], [0, 0])}"
        begin="heyIn.end+.125s"
        dur=".5s"
        fill="freeze"
      />
      <animate
        attributeName="opacity"
        values="${easeOutCubic(0, 1)}"
        begin="imLujjjhIn.begin"
        dur=".5s"
        fill="freeze"
      />
    </use>
  </g>
</svg>`;

writeFileSync(
  'hello.svg',
  svgo.optimize(hello, {
    floatPrecision: 1,
    plugins: [
      'cleanupAttrs',
      'removeComments',
      'removeUselessDefs',
      'removeEmptyAttrs',
      'removeEmptyContainers',
      'removeViewBox',
      'convertColors',
      'convertPathData',
      'convertTransform',
      'removeUnknownsAndDefaults',
      'removeNonInheritableGroupAttrs',
      'removeUselessStrokeAndFill',
      'cleanupIDs',
      'cleanupNumericValues',
      'moveElemsAttrsToGroup',
      'moveGroupAttrsToElems',
      'collapseGroups',
      'mergePaths',
      'convertShapeToPath',
      'sortDefsChildren',
    ],
  }).data + '\n'
);
