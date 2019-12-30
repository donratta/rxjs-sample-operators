import Rx from 'rxjs'

const interval = rxjs.Operator.interval(1000)
	.map(i => {name: `Friend ${i}`, mutual: i + 2 + 1})
	.subscribe(console.log)
