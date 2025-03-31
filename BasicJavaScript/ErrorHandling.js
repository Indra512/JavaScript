let add = (x, y) => x + y;
try {
    let a = add(5, 6);
} catch (e) {
    console.log(e.message);
} finally {
    console.log(a);
}
