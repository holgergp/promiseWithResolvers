import { Suspense, use } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

const { promise, resolve, reject } = Promise.withResolvers<string>();
function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          resolve("Promise Resolved");
        }}
        className="btn"
      >
        Resolve Promise
      </button>
      <button
        onClick={() => {
          reject("Promise Rejected");
        }}
        className="btn"
      >
        Reject Promise
      </button>
      <ErrorBoundary fallback={<div>Promise rejected</div>}>
        <Suspense fallback={<div>Loading</div>}>
          <PromiseResolver />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function PromiseResolver() {
  const value = use(promise);
  console.log("Test");
  return (
    <>
      <div>{value}</div>
    </>
  );
}

export default App;
