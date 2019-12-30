import Rx from 'rxjs'

const interval = Rx.Observable.interval(1000)
	.map(i => ({name: `Friend ${i}`, mutual: i + 2 + 1}))
	.pluck('name')
	.subscribe(console.log)
