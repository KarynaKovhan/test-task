function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof ErrorException) {
        throw e;
      }
    }
  }
}

try {
  console.log(reliableMultiply(8, 8));
} catch (e) {
  console.log("An error occurred: ", e.message);
}
