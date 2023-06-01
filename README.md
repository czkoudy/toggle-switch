# @czkoudy/toggle-switch

# Toggle Switch Component for React

> Using CSS file made by Bootstrap Toggle: bootstrap4-toggle.css v3.6.1

> https://gitbrent.github.io/bootstrap4-toggle/

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

[![NPM](https://img.shields.io/npm/v/@czkoudy/toggle-switch.svg)](https://www.npmjs.com/package/@czkoudy/toggle-switch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Downloads](https://img.shields.io/npm/dm/@czkoudy/toggle-switch?style=for-the-badge)

<a href="https://www.buymeacoffee.com/czkoudy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## ⚙️Install

#

```bash
npm install --save @czkoudy/toggle-switch
```

## 📓Usage

#

```jsx
import ToggleSwitch from '@czkoudy/toggle-switch';

return <ToggleSwitch />;
```

## ⚓ ToggleSwitch props

#

```
| Name     | Type    | Required | Default   | Options             |
| -------- | ------- | -------- | --------- | ------------------- |
| size     | string  | No       | "sm"      | "xs" , "sm", "lg"   |
| onStyle  | string  | No       | "success" | Any Boostrap colors |
| offStyle | string  | No       | "danger"  | Any Boostrap colors |
| onLabel  | string  | No       | "On"      | Any String          |
| offLabel | string  | No       | "Off"     | Any String          |
| checked  | boolean | No       | false     | true, false         |
| width    | string  | No       | "150px"   | Any px string       |
| disabled | boolean | No       | false     | true, false         |
```

## 👮‍♀️ License

    MIT

[stars-shield]: https://img.shields.io/github/stars/czkoudy/toggle-switch.svg?style=for-the-badge
[stars-url]: https://github.com/czkoudy/toggle-switch/stargazers
[issues-shield]: https://img.shields.io/github/issues/czkoudy/toggle-switch.svg?style=for-the-badge
[issues-url]: https://github.com/czkoudy/toggle-switch/issues
