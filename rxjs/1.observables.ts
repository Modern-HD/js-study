import { Observable, range, interval } from 'rxjs';
import { map, filter, scan, take } from 'rxjs/operators';

// observable 생성
const observable = new Observable<number>((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.next(5);
    subscriber.next(6);
    subscriber.complete();
});

console.log('구독 전');
observable.pipe(
    filter(num => num % 2 === 0),
    map(num => num * 2)
).subscribe({
    next(x) {
        console.log('얻은 값: ' + x);
    },
    error(err) {
        console.error(err);
    },
    complete() {
        console.log('끝');
    },
});
console.log('구독 후');

console.log('###################');

// observable을 생성하는 다른 방법
range(0, 5).subscribe({
    next(x) {
        console.log('얻은 값:' + x);
    },
    complete() {
        console.log('range 끝');
    },
});

console.log('##################');

const oddPrint = (num: number) => {
    console.log(num + '은 홀수다.');
};

const evenPrint = (num: number) => {
    console.log(num + '은 짝수다.');
};

// 0부터 9까지 홀수, 짝수 여부 출력;
range(0, 10).subscribe({
    next(num) {
        num % 2 === 0 ? evenPrint(num) : oddPrint(num);
    }
});

console.log('###################');

// 1부터 10까지 1초마다 출력
interval(1000).pipe(
    scan((acc) => {
        return acc + 1;
    }, 0),
    take(10)
).subscribe({
    next(num) {
        console.log(num);
    }
});