# Repro Issue with React 18

This project is a simple `npm create-next-app .` followed by modifications to `_app.js` and `_document.js`

To reproduce issue:

1. run `npm i`
2. run `npm run dev` (successfully runs)
3. change version of react/react-dom to `18.1.0` in package.json
4. run `npm i`
5. run `npm run dev` (fails on window not defined)
