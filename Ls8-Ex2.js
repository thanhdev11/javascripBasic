var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm cách dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích

// var x = a-- + b++ - ++b - ++a;
//     x = 10  + 18  - ++b - ++a; // a = 9, b = 19
//     x = 28        - 20  - 10;
//     x = -2;   
     