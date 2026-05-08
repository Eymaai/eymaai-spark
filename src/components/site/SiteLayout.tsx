import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { GrainOverlay } from "./GrainOverlay";
import { CursorGlow } from "./CursorGlow";
import { LoadingScreen } from "./LoadingScreen";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <GrainOverlay />
      <CursorGlow />
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
