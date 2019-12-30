import Rx from 'rxjs'

Rx.Observable.interval(100)
.map(n => ~~(n/10))
.distinctUntilChanged()
.subscribe(console.log)