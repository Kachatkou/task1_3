import { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const worker = new Worker(
      new URL("../workers/calculation.worker.ts", import.meta.url),
      { type: "module" }
    );

    worker.onmessage = (e: MessageEvent<number>) => {
      setD(e.data);
      setIsLoading(false);
      worker.terminate();
    };

    worker.postMessage("start");

    return () => worker.terminate();
  }, []);

  return (
    <div>{isLoading ? <div>Calculating...</div> : <div>Result: {d}</div>}</div>
  );
}
