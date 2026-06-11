"use client";

import { useEffect, useState } from "react";

export default function SplashLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a1128] flex items-center justify-center z-[9999]">
        <div className="text-center">
          <img
  src="/images/alugridx-without-bg-1.webp"
            alt="ALUGRIDX"
            className="w-40 mx-auto"
          />

          <h1 className="mt-6 text-white text-4xl tracking-[8px]">
            ALUGRIDX
          </h1>

          <p className="mt-2 text-cyan-400 tracking-[4px] uppercase">
            Airflow Redefined
          </p>

          <div className="mt-8 flex justify-center gap-2">
            <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></span>
            <span
              className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}