type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps){
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-200 antialiased">
        <main className="flex items-center justify-center min-h-screen">
          { children }
        </main>
      </div>
    </>
  )
}

export default Layout