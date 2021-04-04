const test = (str: string): void => {
  switch (str) {
    case "A":
    case "a":
      console.log("good");
      break;
    default:
      break;
  }
};
test("a");
