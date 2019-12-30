import Rx from 'rxjs';

Rx.Observable
// .range(1,9)
.interval(100)
.takeWhile(n => n < 7)
// .take(5)
.subscribe(console.log)