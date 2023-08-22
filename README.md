# JGMath

[![npm](https://img.shields.io/npm/v/@jgtools/jgmath)](https://www.npmjs.com/package/@jgtools/jgmath)
[![npm](https://img.shields.io/npm/dm/@jgtools/jgmath)](https://www.npmjs.com/package/@jgtools/jgmath)
[![GitHub](https://img.shields.io/github/license/jgtools/jgmath)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

Math utils

## Installation

### Using npm

```bash
npm i @jgtools/jgmath
```

```javascript
// import all functions using a namespace
import * as JGMath from "@jgtools/jgmath";
// or import functions individually
import { getAngle } from "@jgtools/jgmath";
// ...
```

### Using cdn

```html
<script type="module">
    // import all functions using a namespace
    import * as JGMath from "https://cdn.jsdelivr.net/npm/@jgtools/jgmath@1.0.6/dist/index.min.js";
    // or import functions individually
    import { getAngle } from "https://cdn.jsdelivr.net/npm/@jgtools/jgmath@1.0.6/dist/index.min.js";
    // ...
</script>
```

## Usage

```javascript
import { getAngle } from "@jgtools/jgmath";

const p1 = { x: 1, y: 2 };
const p2 = { x: 5, y: 5 };
const a = getAngle(p1, p2);
```

## License

MIT
