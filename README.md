# FiveM NUI Utils

A package containing most of the most important functions and hooks for creating FiveM NUI.

## Version

[![Version](https://img.shields.io/npm/v/%40krzx000%2Ffivem-utils)](#)

## Authors

- [krzx000](https://www.github.com/krzx000)

## Installation

Install @krzx000/fivem-utils with npm

```bash
  npm install @krzx000/fivem-util
```

## API Reference

#### Fetch data from NUI

```javascript
fetchNui(eventName, data);
```

| Parameter   | Type     | Required | Description                                   |
| :---------- | :------- | :------- | :-------------------------------------------- |
| `eventName` | `string` | Yes      | The name of the NUI event to fetch data from. |
| `data`      | `any`    | No       | Data payload to send along with the request.  |
