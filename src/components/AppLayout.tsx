import Header from "./Header"
import Sidebar from "./Sidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col min-h-screen w-full text-black dark:text-white"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}