import Rx from 'rxjs';

const range = Rx.Observable.range(1,9);

range
.map(n => n**)
.subscribe(console.log)