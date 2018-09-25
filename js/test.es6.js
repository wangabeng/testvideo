let promise = readFile("example.txt");
// 原始的完成处理函数
promise.then(function(contents) {
console.log(contents);
// 现在添加另一个
promise.then(function(contents) {
console.log(contents);
});
});
