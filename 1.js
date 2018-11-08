
function check(x) {
    if (x == 2) return "SNT";
    if (x == 1 || x % 2 == 0) return "nSNT";
    for (let i = 3; i < (x - 1); i += 2) {
        if (x % i == 0) {
            return "nSNT";
        }
    }
    return "SNT";
}

var ketqua = "";
var count = 0;
for (let i = 1; count < 20; i++) {
    if (check(i) == "SNT") {
        ketqua = ketqua + " " + i;
        count++;
    }
}
alert(ketqua);