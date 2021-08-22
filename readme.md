# @anticore-contracts/tree-insert

An [anticore](https://github.com/Lcfvs/anticore) contract to insert some
elements `before`/`after` another one.

## Install

`npm i @anticore-contracts/tree-insert`

## Reminder

The tree contracts should be added lastly, to improve the performances.

## Exports

### on
```js
import '@anticore-contracts/tree-insert/on.js'
```

### when
```js
import '@anticore-contracts/tree-insert/when.js'
```

## Lifecycle

* Matches `.anticore > [data-before], .anticore > [data-after]`
* Takes the value as a query selector to find the target
* Inserts the match `before` or `after` the target

## License

[MIT](./license.md)
