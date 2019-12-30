import Rx from 'rxjs';

Rx.Observable.empty()
.defaultIfEmpty()
.subscribe(console.log);