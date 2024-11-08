function Container({ children }: { children: React.ReactNode }) {
   return (
      <section className="flex justify-center flex-col font-sans min-h-screen bg-blue-200">
         {children}
      </section>
   )
}

export default Container
