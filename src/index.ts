import { add, multiply } from "./math";

async function main() {
  console.log(add(1, 2));
  console.log(multiply(1, 2));
}

main().catch(console.error);
