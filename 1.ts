function addOne(n: number) {
    return n+1;
}

function concatOne(n: string): string {
    return n + "One";
}

const addOne = function (n: number) {
    return n + 1;
}

const addOne1 = (n: number) => {
    return n + 1;
}

// 関数本体が単体の場合はさらに省略できる
const addOne2 = (n: number) => n + 1;