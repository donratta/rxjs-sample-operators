import Rx from 'rxjs';

Rx.Observable
.interval(1000)
.take(10)
.last(n => n%2 ==0)
.subscribe(console.log);