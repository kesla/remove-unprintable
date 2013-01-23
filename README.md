#remove-unprintable

Small npm module to remove all unprintable characters from a string

## installation
```
	npm install remove-unprintable
```

## example/usage

```javascript
	var removeUnprintable = require('remove-unprintable');

	var str = '\u0000foo';
	console.log(removeUnprintable(str) === 'foo'); // will print true;
```