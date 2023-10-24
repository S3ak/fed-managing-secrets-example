import "dotenv/config";

console.log(process.env.API_USER);

function test(expectedSecret) {
  const secretMatches = process.env.MEANING_OF_LIFE == expectedSecret;
  console.log(`The meaning of life is ${process.env.MEANING_OF_LIFE}`);
  console.log(`The secret does${secretMatches ? "" : " not"} match!`);
  return secretMatches;
}

test(42);
