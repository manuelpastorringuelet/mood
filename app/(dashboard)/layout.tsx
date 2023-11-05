import Navbar from '@/components/Navbar'

const links = [
  { href: '/journal', label: 'Journal' },
  { href: '/history', label: 'History' },
]

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full relative overflow-x-hidden">
      <Navbar links={links} />
      <div className="h-[calc(100vh-64px)]">{children}</div>
    </div>
  )
}

export default DashboardLayout
