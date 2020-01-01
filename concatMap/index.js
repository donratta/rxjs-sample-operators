import Rx from 'rxjs';

Rx.Observable
.interval(1000)
.subscribe(console.log);