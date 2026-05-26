type MainLayoutProps = {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return <div className="relative min-h-screen bg-bg">{children}</div>
}
