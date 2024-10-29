// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
let rows = 4;
for (let i = 1; i <= rows; i++) {
    console.log("#".repeat(i));
}
for (let i = rows - 1; i >= 1; i--) {
    console.log("#".repeat(i));
}
