import { BottomBar, SideBar } from "@/components/Navigation";
import "../globals.css";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      <div className="my-16 mx-6 flex w-full">{children}</div>
      <BottomBar />
    </>
  );
}
