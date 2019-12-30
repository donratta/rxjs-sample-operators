import Rx from 'rxjs';

Rx.Observable.of(42)
.do(() => console.log('helo'))
.subscribe(console.log)