# FiveM NUI Utils

A package containing most of the most important functions and hooks for creating FiveM NUI.

## Version

[![Version](https://img.shields.io/npm/v/%40krzx000%2Ffivem-utils)](#)

## Authors

- [krzx000](https://www.github.com/krzx000)

## Installation

Install **fivem-utils** with npm.

```bash
  npm install @krzx000/fivem-util
```

## Functions

#### Fetch data from NUI

```typescript
fetchNui(eventName, data);
```

| Parameter   | Type     | Required | Description                                   |
| :---------- | :------- | :------- | :-------------------------------------------- |
| `eventName` | `string` | Yes      | The name of the NUI event to fetch data from. |
| `data`      | `any`    | No       | Data payload to send along with the request.  |

#### Fetch data from NUI

```typescript
useNuiEvents(action, handler);
```

| Parameter | Type       | Required | Description                                                      |
| :-------- | :--------- | :------- | :--------------------------------------------------------------- |
| `action`  | `string`   | Yes      | The specific action that should be listened for.                 |
| `data`    | `function` | Yes      | The callback function that will handle data relayed by this hook |

#### Generate a random float

```typescript
randomFloat(min, max);
```

| Parameter | Type     | Required | Description                                 |
| :-------- | :------- | :------- | :------------------------------------------ |
| `min`     | `number` | Yes      | The minimum value of the range (inclusive). |
| `max`     | `number` | Yes      | The maximum value of the range (exclusive). |

#### Generate a random int

```typescript
randomInt(min, max);
```

| Parameter | Type     | Required | Description                     |
| :-------- | :------- | :------- | :------------------------------ |
| `min`     | `number` | Yes      | The minimum value of the range. |
| `max`     | `number` | Yes      | The maximum value of the range. |

#### Generate a random string

```typescript
randomString(length);
```

| Parameter | Type     | Required | Description                                  |
| :-------- | :------- | :------- | :------------------------------------------- |
| `length`  | `number` | Yes      | The length of the random string to generate. |

#### Returns if the environment is a browser

```typescript
isEnvBrowser();
```
