import { UserButton } from '@clerk/nextjs'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full relative overflow-x-hidden">
      <aside className="absolute top-0 left-0 h-full border-r border-black/10 w-[200px]">
        Mood
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="w-full h-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
