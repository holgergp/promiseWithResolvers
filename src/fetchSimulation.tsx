export function fetchDataSimulationOld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "John Doe" });
      } else {
        reject("Failed to fetch data!");
      }
    }, 3000);
  });
}
export function fetchDataSimulationNew() {
  const { promise, resolve, reject } = Promise.withResolvers();
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ id: 1, name: "John Doe" });
    } else {
      reject("Failed to fetch data!");
    }
  }, 3000);
  return promise;
}
