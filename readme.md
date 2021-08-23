# @anticore-contracts/tree-insert

An [anticore](https://github.com/Lcfvs/anticore) contract to insert some
elements `before`/`after`/`instead` another one.

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

* Matches `.anticore > [data-before], .anticore > [data-after], .anticore > [data-instead]`
* Takes the value as a query selector to find the target
* Inserts the match `before` or `after` the target or replace it on `instead`

## License

[MIT](./license.md)
