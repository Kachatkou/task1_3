import { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    let t = 0;
    for (let i = 0; i < 1e8; i++) {
      t += i;
    }
    setD(t);
  }, []);

  return <div>{d}</div>;
}
