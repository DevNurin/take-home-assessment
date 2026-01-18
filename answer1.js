// Three unique implementations to sum numbers from 1 to n

var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
};

var sum_to_n_c = function(n) {
    // Using formula: sum of 1 to n = n*(n+1)/2
    return n * (n + 1) / 2;
};

console.log(sum_to_n_a(10)); // 55
console.log(sum_to_n_b(10)); // 55
console.log(sum_to_n_c(10)); // 55
