import Rx from 'rxjs';
import { fromSTDIn } from '../create/utility';

Rx.Observable
.of(
  Rx.Observable.range(1,3),
  Rx.Observable.interval(100).take(5),
  fromSTDIn()
)
.concatAll()
.subscribe(console.log);