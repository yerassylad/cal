function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function foo(str) {
  return str
    .split(" ")
    .map(el => capitalizeFirstLetter(el))
    .join(" ");
}

export { foo };
