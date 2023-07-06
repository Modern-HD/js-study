import { BehaviorSubject, ReplaySubject, AsyncSubject, interval } from 'rxjs';
import { scan, take } from 'rxjs/operators';

// '현재의 값' 개념을 가진 subject
const behaviorSubject = new BehaviorSubject<number>(0);

behaviorSubject.subscribe(value => {
    console.log("현재 값:", value);
});

interval(500).pipe(
    scan((acc) => {
        return acc + 1;
    }, 0),
    take(21)
).subscribe({
    next(num) {
        num % 2 === 0 && behaviorSubject.next(behaviorSubject.getValue() + 1);
        // subject 객체에서 직접 값 꺼내오기
        num % 2 !== 0 && console.log("subject 값:", behaviorSubject.getValue());
    },
    complete() {
        behaviorSubject.complete();
    },
});

// 과거의 상태를 기억하는 subject
const replaySubject = new ReplaySubject(3); // 최대 3개의 값 기억

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.next(4);

replaySubject.subscribe(value => {
    // 3개의 값을 기억하고 2, 3, 4 출력
    console.log("replaySubject 값:", value);
});

replaySubject.next(5);

// 마지막 상태만 전달하는 subject
const asyncSubject = new AsyncSubject();

asyncSubject.subscribe(value => {
    console.log("asyncSubject 값:", value);
});

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

// 1, 2는 무시하고 마지막 값인 3만 출력
asyncSubject.complete();