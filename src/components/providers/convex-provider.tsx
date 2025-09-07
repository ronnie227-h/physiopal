"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useMemo } from "react";

export function ConvexProviders({ children, url }: { children: React.ReactNode; url?: string }) {
  const client = useMemo(() => (url ? new ConvexReactClient(url) : null), [url]);
  if (!client) return <>{children}</>;
  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}


