import React, { ReactNode } from "react";
import Logo from "@/components/Logo";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen flex-col w-full items-center justify-center">
      <Logo />
      <div className="mt-12">{children}</div>
    </div>
  );
}

export default Layout;
