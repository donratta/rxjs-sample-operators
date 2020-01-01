import Rx from 'rxjs';
import {fromSTDIn} from '../create/utility';

fromSTDIn()
.skip(10)
.take(5)
.subscribe(console.log)