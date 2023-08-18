function solution(n) {
    let a = 0;
    let b = 0;

    for (let i = 1; i <= n; i++) {
        console.log('i :', i);
        if (i % 3 == 0) {
            a++;
            n++;
            console.log('a,n :', a, n);
        } else {
            if (i.toString().includes(3)) {
                b++;
                n++;
                console.log('b,n :', b, n);
            }
        }
    }

    console.log('n', n);
    console.log('a', a);
    console.log('b', b);
    console.log('답', n);
    return n;
}
// solution(10);

// solution(15);
solution(40);
