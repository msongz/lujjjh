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
    return Array.from({ length: 1 / precision + 1 })
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

const linear = interpolate((x) => x);
const easeInOutCubic = interpolate((x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2));

const padding = 20;
const width = 900;
const height = 360;
const heyWidth = 60;
const heyHeight = 57;
const heyWidth2x = heyWidth * 2;
const heyHeight2x = heyHeight * 2;
const imLujjjhWidth = 132;
const imLujjjhHeight = 57;
const workingWidth = 718;
const workingHeight = 400;

const hello = html`<svg
  width="${width + padding * 2}"
  height="${height + padding * 2}"
  viewBox="0 0 ${width + padding * 2} ${height + padding * 2}"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
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
    <g id="working">
      <rect width="718" height="400" rx="15" fill="#0073C6" />
      <path
        d="M48.8 55H50.46V41.88H48.8V55ZM53.9739 46.38C55.3539 45.58 56.1139 44.44 56.1139 42.84C56.1139 41.68 55.6339 41.02 54.8539 41.02C54.2339 41.02 53.7939 41.44 53.7939 42.14C53.7939 42.78 54.2939 43.14 54.8539 43.14C54.9139 43.14 54.9539 43.14 55.0139 43.12C55.0139 44.28 54.5139 44.96 53.5139 45.62L53.9739 46.38ZM58.8744 55H60.5144V47.96C61.4144 46.96 62.2344 46.46 62.9544 46.46C64.1944 46.46 64.7744 47.24 64.7744 49.06V55H66.4144V47.96C67.3144 46.96 68.0944 46.46 68.8544 46.46C70.0744 46.46 70.6544 47.24 70.6544 49.06V55H72.2944V48.84C72.2944 46.36 71.3344 45.04 69.3344 45.04C68.1544 45.04 67.1544 45.8 66.1344 46.9C65.7344 45.74 64.9344 45.04 63.4544 45.04C62.2944 45.04 61.2744 45.76 60.4344 46.68H60.3744L60.2344 45.28H58.8744V55ZM79.4994 55H81.1394V48.76C81.7994 47.12 82.7794 46.52 83.5994 46.52C83.9994 46.52 84.2194 46.58 84.5394 46.68L84.8594 45.24C84.5394 45.1 84.2394 45.04 83.8194 45.04C82.7194 45.04 81.7194 45.82 81.0594 47.04H80.9994L80.8594 45.28H79.4994V55ZM85.5177 50.16C85.5177 53.34 87.5777 55.24 90.1777 55.24C91.4977 55.24 92.5377 54.78 93.3777 54.24L92.7977 53.16C92.0777 53.62 91.2977 53.92 90.3777 53.92C88.5177 53.92 87.2577 52.6 87.1377 50.5H93.6977C93.7377 50.26 93.7577 49.94 93.7577 49.6C93.7577 46.82 92.3577 45.04 89.8777 45.04C87.6577 45.04 85.5177 46.98 85.5177 50.16ZM87.1177 49.42C87.3177 47.46 88.5577 46.34 89.9177 46.34C91.4377 46.34 92.3177 47.44 92.3177 49.42H87.1177ZM95.4395 50.16C95.4395 53.38 97.4195 55.24 99.9995 55.24C101.16 55.24 102.28 54.76 103.16 53.98L102.42 52.9C101.84 53.42 101.06 53.88 100.14 53.88C98.3595 53.88 97.1395 52.38 97.1395 50.16C97.1395 47.92 98.4195 46.4 100.18 46.4C100.96 46.4 101.56 46.76 102.14 47.26L102.96 46.2C102.3 45.58 101.4 45.04 100.12 45.04C97.6195 45.04 95.4395 46.9 95.4395 50.16ZM104.131 50.16C104.131 53.34 106.191 55.24 108.791 55.24C110.111 55.24 111.151 54.78 111.991 54.24L111.411 53.16C110.691 53.62 109.911 53.92 108.991 53.92C107.131 53.92 105.871 52.6 105.751 50.5H112.311C112.351 50.26 112.371 49.94 112.371 49.6C112.371 46.82 110.971 45.04 108.491 45.04C106.271 45.04 104.131 46.98 104.131 50.16ZM105.731 49.42C105.931 47.46 107.171 46.34 108.531 46.34C110.051 46.34 110.931 47.44 110.931 49.42H105.731ZM114.773 55H116.413V47.96C117.393 46.98 118.073 46.46 119.073 46.46C120.353 46.46 120.913 47.24 120.913 49.06V55H122.553V48.84C122.553 46.36 121.633 45.04 119.593 45.04C118.253 45.04 117.253 45.76 116.333 46.68H116.273L116.133 45.28H114.773V55ZM125.99 52C125.99 53.92 126.69 55.24 128.77 55.24C129.37 55.24 130.03 55.06 130.57 54.88L130.25 53.64C129.93 53.76 129.49 53.9 129.15 53.9C128.03 53.9 127.65 53.22 127.65 52.02V46.62H130.27V45.28H127.65V42.56H126.27L126.07 45.28L124.55 45.38V46.62H125.99V52ZM132.468 53.04C132.468 54.46 132.968 55.24 134.208 55.24C134.648 55.24 134.928 55.18 135.148 55.08L134.928 53.84C134.748 53.88 134.668 53.88 134.568 53.88C134.328 53.88 134.108 53.68 134.108 53.16V40.76H132.468V53.04ZM136.906 57.68L136.586 58.98C136.906 59.1 137.286 59.18 137.726 59.18C139.686 59.18 140.686 57.72 141.366 55.8L145.026 45.28H143.426L141.686 50.66C141.426 51.52 141.146 52.52 140.866 53.4H140.786C140.486 52.5 140.146 51.5 139.846 50.66L137.866 45.28H136.166L140.066 55.02L139.846 55.74C139.446 56.94 138.746 57.82 137.646 57.82C137.406 57.82 137.106 57.74 136.906 57.68ZM152.485 55H154.405L155.765 49.8C156.025 48.88 156.225 47.96 156.445 46.98H156.525C156.765 47.96 156.945 48.86 157.185 49.78L158.585 55H160.585L163.185 45.28H161.625L160.205 50.9C160.005 51.82 159.825 52.7 159.605 53.6H159.525C159.305 52.7 159.085 51.82 158.845 50.9L157.325 45.28H155.725L154.225 50.9C153.985 51.8 153.785 52.7 153.565 53.6H153.485C153.305 52.7 153.125 51.82 152.905 50.9L151.465 45.28H149.785L152.485 55ZM164.502 50.16C164.502 53.38 166.622 55.24 169.002 55.24C171.382 55.24 173.502 53.38 173.502 50.16C173.502 46.9 171.382 45.04 169.002 45.04C166.622 45.04 164.502 46.9 164.502 50.16ZM166.202 50.16C166.202 47.92 167.342 46.4 169.002 46.4C170.682 46.4 171.802 47.92 171.802 50.16C171.802 52.38 170.682 53.88 169.002 53.88C167.342 53.88 166.202 52.38 166.202 50.16ZM176.062 55H177.702V48.76C178.362 47.12 179.342 46.52 180.162 46.52C180.562 46.52 180.782 46.58 181.102 46.68L181.422 45.24C181.102 45.1 180.802 45.04 180.382 45.04C179.282 45.04 178.282 45.82 177.622 47.04H177.562L177.422 45.28H176.062V55ZM182.995 55H184.615V52.44L186.435 50.32L189.275 55H191.075L187.375 49.18L190.635 45.28H188.815L184.675 50.4H184.615V40.76H182.995V55ZM193.738 43.28C194.378 43.28 194.878 42.84 194.878 42.22C194.878 41.58 194.378 41.16 193.738 41.16C193.098 41.16 192.598 41.58 192.598 42.22C192.598 42.84 193.098 43.28 193.738 43.28ZM192.898 55H194.538V45.28H192.898V55ZM197.82 55H199.46V47.96C200.44 46.98 201.12 46.46 202.12 46.46C203.4 46.46 203.96 47.24 203.96 49.06V55H205.6V48.84C205.6 46.36 204.68 45.04 202.64 45.04C201.3 45.04 200.3 45.76 199.38 46.68H199.32L199.18 45.28H197.82V55ZM209.457 56.64C209.457 56.08 209.757 55.5 210.457 55C210.877 55.12 211.337 55.16 211.717 55.16H213.397C214.657 55.16 215.357 55.46 215.357 56.36C215.357 57.38 214.137 58.34 212.277 58.34C210.517 58.34 209.457 57.68 209.457 56.64ZM208.017 56.86C208.017 58.54 209.657 59.48 212.037 59.48C215.057 59.48 216.957 57.92 216.957 56.12C216.957 54.5 215.817 53.8 213.557 53.8H211.677C210.357 53.8 209.957 53.36 209.957 52.74C209.957 52.2 210.237 51.88 210.577 51.58C211.017 51.8 211.557 51.92 212.037 51.92C214.017 51.92 215.597 50.62 215.597 48.54C215.597 47.72 215.257 46.98 214.797 46.54H216.797V45.28H213.417C213.057 45.14 212.577 45.04 212.037 45.04C210.057 45.04 208.377 46.38 208.377 48.5C208.377 49.66 208.997 50.6 209.637 51.12V51.2C209.137 51.54 208.577 52.18 208.577 53C208.577 53.76 208.957 54.28 209.437 54.58V54.66C208.557 55.26 208.017 56.04 208.017 56.86ZM212.037 50.82C210.917 50.82 209.977 49.92 209.977 48.5C209.977 47.08 210.897 46.24 212.037 46.24C213.177 46.24 214.097 47.08 214.097 48.5C214.097 49.92 213.157 50.82 212.037 50.82ZM222.158 50.16C222.158 53.38 224.278 55.24 226.658 55.24C229.038 55.24 231.158 53.38 231.158 50.16C231.158 46.9 229.038 45.04 226.658 45.04C224.278 45.04 222.158 46.9 222.158 50.16ZM223.858 50.16C223.858 47.92 224.998 46.4 226.658 46.4C228.338 46.4 229.458 47.92 229.458 50.16C229.458 52.38 228.338 53.88 226.658 53.88C224.998 53.88 223.858 52.38 223.858 50.16ZM233.718 55H235.358V47.96C236.338 46.98 237.018 46.46 238.018 46.46C239.298 46.46 239.858 47.24 239.858 49.06V55H241.498V48.84C241.498 46.36 240.578 45.04 238.538 45.04C237.198 45.04 236.198 45.76 235.278 46.68H235.218L235.078 45.28H233.718V55ZM244.316 46.78C244.316 47.52 244.856 48.02 245.516 48.02C246.156 48.02 246.696 47.52 246.696 46.78C246.696 46.02 246.156 45.52 245.516 45.52C244.856 45.52 244.316 46.02 244.316 46.78ZM244.316 54C244.316 54.72 244.856 55.24 245.516 55.24C246.156 55.24 246.696 54.72 246.696 54C246.696 53.24 246.156 52.72 245.516 52.72C244.856 52.72 244.316 53.24 244.316 54Z"
        fill="white"
      />
      <path
        d="M303.026 254H311.126V251.52H305.966V240.96H303.026V254ZM314.598 242.62C315.598 242.62 316.298 241.98 316.298 241.08C316.298 240.18 315.598 239.56 314.598 239.56C313.618 239.56 312.898 240.18 312.898 241.08C312.898 241.98 313.618 242.62 314.598 242.62ZM313.138 254H316.078V244.08H313.138V254ZM318.665 254H321.605V247.3C322.245 246.68 322.705 246.34 323.445 246.34C324.285 246.34 324.665 246.78 324.665 248.22V254H327.605V247.84C327.605 245.36 326.685 243.84 324.525 243.84C323.185 243.84 322.185 244.54 321.345 245.34H321.265L321.065 244.08H318.665V254ZM329.531 249.04C329.531 252.32 331.711 254.24 334.551 254.24C335.731 254.24 337.051 253.82 338.071 253.12L337.091 251.34C336.371 251.78 335.691 252 334.951 252C333.631 252 332.631 251.34 332.371 249.84H338.311C338.371 249.6 338.431 249.12 338.431 248.6C338.431 245.9 337.031 243.84 334.211 243.84C331.831 243.84 329.531 245.82 329.531 249.04ZM332.351 248.02C332.551 246.7 333.351 246.08 334.271 246.08C335.451 246.08 335.931 246.88 335.931 248.02H332.351ZM339.887 251.24C339.887 252.92 341.027 254.24 342.827 254.24C343.947 254.24 344.887 253.72 345.727 252.98H345.787L346.007 254H348.407V248.32C348.407 245.28 347.007 243.84 344.467 243.84C342.907 243.84 341.487 244.38 340.227 245.14L341.267 247.08C342.227 246.52 343.067 246.18 343.907 246.18C344.967 246.18 345.407 246.74 345.467 247.62C341.547 248.02 339.887 249.16 339.887 251.24ZM342.687 251.02C342.687 250.26 343.367 249.66 345.467 249.38V251.12C344.947 251.64 344.507 251.96 343.827 251.96C343.127 251.96 342.687 251.66 342.687 251.02ZM350.931 254H353.871V248.24C354.391 246.9 355.311 246.42 356.051 246.42C356.471 246.42 356.771 246.48 357.131 246.58L357.611 244.04C357.331 243.92 356.991 243.84 356.431 243.84C355.411 243.84 354.331 244.48 353.611 245.82H353.531L353.331 244.08H350.931V254ZM359.14 254H361.84V249.22C361.84 247.94 361.62 246.04 361.48 244.78H361.56L362.6 247.8L364.6 252.86H365.78L367.78 247.8L368.86 244.78H368.94C368.8 246.04 368.56 247.94 368.56 249.22V254H371.3V240.96H368.2L366.08 246.82L365.3 249.1H365.22L364.44 246.82L362.26 240.96H359.14V254ZM373.554 249.04C373.554 252.34 375.874 254.24 378.394 254.24C380.894 254.24 383.214 252.34 383.214 249.04C383.214 245.74 380.894 243.84 378.394 243.84C375.874 243.84 373.554 245.74 373.554 249.04ZM376.574 249.04C376.574 247.32 377.174 246.22 378.394 246.22C379.594 246.22 380.214 247.32 380.214 249.04C380.214 250.76 379.594 251.86 378.394 251.86C377.174 251.86 376.574 250.76 376.574 249.04ZM385.128 250.24C385.128 252.72 386.048 254.24 388.208 254.24C389.568 254.24 390.488 253.62 391.328 252.62H391.388L391.608 254H394.008V244.08H391.068V250.64C390.488 251.42 390.048 251.74 389.308 251.74C388.448 251.74 388.068 251.28 388.068 249.86V244.08H385.128V250.24ZM395.715 252.86C396.715 253.68 398.215 254.24 399.515 254.24C402.175 254.24 403.595 252.84 403.595 251.04C403.595 249.22 402.175 248.52 400.915 248.06C399.895 247.68 398.975 247.44 398.975 246.8C398.975 246.3 399.335 246.02 400.095 246.02C400.795 246.02 401.475 246.34 402.195 246.86L403.515 245.1C402.655 244.46 401.535 243.84 400.015 243.84C397.715 243.84 396.215 245.1 396.215 246.94C396.215 248.58 397.635 249.4 398.835 249.86C399.855 250.26 400.855 250.56 400.855 251.22C400.855 251.74 400.475 252.06 399.595 252.06C398.755 252.06 397.935 251.7 397.035 251.02L395.715 252.86ZM404.882 249.04C404.882 252.32 407.062 254.24 409.902 254.24C411.082 254.24 412.402 253.82 413.422 253.12L412.442 251.34C411.722 251.78 411.042 252 410.302 252C408.982 252 407.982 251.34 407.722 249.84H413.662C413.722 249.6 413.782 249.12 413.782 248.6C413.782 245.9 412.382 243.84 409.562 243.84C407.182 243.84 404.882 245.82 404.882 249.04ZM407.702 248.02C407.902 246.7 408.702 246.08 409.622 246.08C410.802 246.08 411.282 246.88 411.282 248.02H407.702Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M386 141H331V219H386V141ZM364 146.571H353V180H364V146.571Z"
        fill="white"
      />
    </g>
  </defs>
  <g transform="translate(${padding} ${padding})">
    <rect width="${width}" height="${height}" rx="15" fill="#F4F5F6" />
    <g fill="#333333">
      <g opacity="0">
        <g transform="translate(${width / 2} ${height / 2})">
          <use href="#hey">
            <animateTransform
              attributeName="transform"
              type="scale"
              values="${easeInOutCubic(1, 2)}"
              begin="heyMove.begin+.125s"
              dur=".5s"
              fill="freeze"
            />
          </use>
        </g>
        <animate
          id="heyIn"
          attributeName="opacity"
          values="${easeInOutCubic(0, 1)}"
          begin=".25s"
          dur=".5s"
          fill="freeze"
        />
        <animateTransform
          id="heyOut"
          attributeName="transform"
          type="translate"
          values="${easeInOutCubic([0, 0], [0, -heyHeight])}"
          begin="heyIn.end+.25s"
          dur=".5s"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="${easeInOutCubic(1, 0.5)}"
          begin="heyOut.begin"
          dur=".5s"
          fill="freeze"
        />
        <animateTransform
          id="heyMove"
          attributeName="transform"
          type="translate"
          values="${easeInOutCubic(
            [0, -heyHeight],
            [35 - width / 2 + heyWidth2x / 2, 30 - height / 2 + heyHeight2x / 2]
          )}"
          begin="heyOut.end+.5s"
          dur=".75s"
          fill="freeze"
        />
      </g>
      <g opacity="0">
        <g transform="translate(${width / 2} ${height / 2})">
          <use href="#imLujjjh"></use>
        </g>
        <animateTransform
          id="imLujjjhIn"
          attributeName="transform"
          type="translate"
          values="${easeInOutCubic([0, 57], [0, 0])}"
          begin="heyIn.end+.25s"
          dur=".5s"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="${easeInOutCubic(0, 1)}"
          begin="imLujjjhIn.begin"
          dur=".5s"
          fill="freeze"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="${easeInOutCubic(
            [0, 0],
            [35 - width / 2 + imLujjjhWidth / 2, 145 - height / 2 + imLujjjhHeight / 2]
          )}"
          begin="heyMove.begin"
          dur=".75s"
          fill="freeze"
        />
      </g>
    </g>
  </g>
  <clipPath id="workingMask">
    <circle cx="0" r="0">
      <animate
        id="workingIn"
        attributeName="r"
        values="${easeInOutCubic(0, Math.sqrt(2) * workingWidth)}"
        begin="heyMove.begin"
        dur=".75s"
        fill="freeze"
      />
    </circle>
  </clipPath>
  <g transform="translate(${width + padding * 2} ${workingWidth})" clip-path="url(#workingMask)">
    <g transform="translate(-${width + padding * 2} -${workingWidth})">
      <g transform="translate(222 0)">
        <use href="#working" />
        <circle transform="translate(-1000 -1000)" r="100" fill="white" fill-opacity="0.1">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="${linear([-100, -100], [workingWidth + 100, workingHeight + 100])}"
            begin="-1024s"
            dur="32s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </circle>
        <circle transform="translate(-1000 -1000)" r="80" fill="white" fill-opacity="0.08">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="${linear([400, -80], [220, workingHeight + 80])}"
            begin="-1024s"
            dur="25s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </circle>
        <circle transform="translate(-1000 -1000)" r="120" fill="white" fill-opacity="0.15">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="${linear([workingWidth + 120, workingHeight + 120], [workingWidth / 3, -120])}"
            begin="-1024s"
            dur="28s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </g>
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
