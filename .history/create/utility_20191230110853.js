import Rx from 'rxjs';

export const fromSTDIn = () => {
  const standardIn = process.stdin;
  standardIn.setRawMode(true);
  standardIn.setEncoding('utf-8');
  const observable = Rx.Observable.fromEvent(standardIn, 'data');
  return observable;
}

fromSTDIn().subscribe(console.log)