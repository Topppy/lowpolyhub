export const codeHelper = code => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>item</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <script src="https://threejs.org/build/three.min.js"></script>
    <script src="https://threejs.org/examples/js/controls/OrbitControls.js"></script>
    <script>${code}</script>
  </body>
</html>
`;
