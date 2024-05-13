import "../../fonts/fonts.css"
export default function General(){
    return(
    <div className="mb-4 gap-8 w-full items-center justify-center flex-col flex">
        <div className="flex justify-center items-center w-[90%]">
              <label htmlFor="NbEmploye" className="block aileron  mr-4">Nombres d’employés </label>
              <div className="flex border w-[80%]  border-black rounded-lg px-3 py-1">
                <input
                  id="NbEmploye"
                  type="text"
                  className="focus:outline-none"
                  placeholder="0"
                />
              </div>
            </div>
              <div className="flex justify-center gap-16 items-center  w-[90%]">
              <span className="block aileron mr-4 ml-6">Période étudiée </span>
              <div className="flex items-center gap-32 w-[80%]">
                <input
                  id="DebPer"
                  type="date"
                  className=" border-[1px] rounded-lg py-1 px-6 w-64 border-black  focus:outline-none"
                  placeholder="0"
                />
                <span className="aileron">Au</span>
                 <input
                  id="FinPer"
                  type="date"
                  className="border-[1px] rounded-lg py-1 px-6 w-64 border-black focus:outline-none"
                  placeholder="0"
                />
              </div>
              </div>
    </div>)
}