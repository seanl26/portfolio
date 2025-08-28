type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps){
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-200 antialiased overflow-x-hidden">
        {/* add justify-center to main if needed */}
        <main className="flex flex-col justify-center items-center py-10 sm:py-16 lg:py-20 space-y-5"> 
          { children }
        </main>
      </div>
    </>
  )
}

export default Layout