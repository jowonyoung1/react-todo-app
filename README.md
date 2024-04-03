# 할 일 앱 만들기

## 리액트 프로젝트 세팅

- `npx create-react-app ./`
- `yarn create-react-app ./`
- `yarn add normalize.css`
- `yarn add sass`
- `yarn add classnames react-icons`

## ESLint, prrttier 설정

- ./.prettierrc.json

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- ESlint 설정
- `yarn add eslint --dev`
- `npx eslint --init`
- `yarn eslint --init`

- ESLint와 Prettier 연결하여 ESLint 설정
  `npm install eslint-config-prettier --save-dev`
  `yarn add eslint-config-prettier --save-dev`

- ./.eslintrc.js 내용 수정

```js
extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
],
```
