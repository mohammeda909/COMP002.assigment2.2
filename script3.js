// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
let size = 8;
for (let row = 0; row < size; row++) {
    let line = "";
    for (let col = 0; col < size; col++) {
        line += (row + col) % 2 === 0 ? "#" : " ";
    }
    console.log(line);
}
