import Rx from 'rxjs';

export const fromSTDIn = () => {
  const standardIn = process.stdin;
  standardIn.setRawMode(true);
  standardIn.setEncoding('utf-8');
  const observable = Rx.Observable.fromEvent(standardIn, 'data');
  observable.subscribe(key => {
    if (key === '\u0003') {
      process.exit();
    }
  })
  return observable;
}