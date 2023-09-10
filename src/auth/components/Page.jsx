import React from 'react'
export const Page = () => {
  return (
    <>
   <div className="pe-1 max-w- mx-auto text-center">
      <div className="mx-auto max-w-7xl py-23 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
           <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
            <a href="https://vitejs.dev" target="_blank">
          <img src={'./vite.svg'} className="logo react" alt="Vite logo" />
        </a>
          <div className=" text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">App creada con React<br />por Anneuri</h2>
            <p className="mt-6 text-lg  text-gray-300">Cree esta app para poner en practicas mis conocimientos en react</p>
           
          </div>
        <a href="https://react.dev" target="_blank">
          <img src='./react.svg' className="logo" alt="React logo" />
        </a>
        
        </div>
      </div>
    </div>

    </>
  )
}
