import AddTodoForm from "./AddTodoForm"

function Sidebar() {
   console.log("i am from sidebar")
   return (
      <section className=" col-[2/3] row-[2/3] bg-blue-50 border-l px-[25px] pt-[18px] pb-[28px] border-slate-200 flex flex-col justify-between ">
         <AddTodoForm />
         <section className="w-full h-0 my-2 "></section>

         <section className="flex gap-2">
            <button className="bg-black btn " type="button">
               Login
            </button>
            <button className="bg-black btn" type="button">
               Register
            </button>
         </section>
      </section>
   )
}

export default Sidebar
