function Footer() {
   return (
      <footer className="self-center flex justify-between text-sm w-[972px] mt-2 opacity-30 ">
         <small>&copy; 2024. Copyright by Mahfuz.</small>
         <small>
            Version <strong>{import.meta.env.VITE_VERSION}</strong>
         </small>
      </footer>
   )
}

export default Footer
