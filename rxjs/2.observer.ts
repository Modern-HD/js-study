import { Subject, Observer, interval, range } from 'rxjs';
import { take, scan } from 'rxjs/operators';

// 옵저버 생성
const observer: Observer<number> = {
    next(num) {
        console.log('값: ' + num);
    },
    error(err) {
        console.error(err);
    },
    complete() {
        console.log("끝");
    }
};

// Observable에 옵저버 구독하기
range(0, 10).subscribe(observer);

console.log('##################');

// subject 생성
const subject = new Subject<number>();

// subject에 옵저버 구독
subject.subscribe(observer);

// 1초마다 subject의 상태 변화시키기
interval(1000).pipe(
    scan((acc) => {
        return acc + 1;
    }, 0),
    take(10)
).subscribe({
    next(num) {
        subject.next(num);
    },
    complete() {
        subject.complete();
    },
});
