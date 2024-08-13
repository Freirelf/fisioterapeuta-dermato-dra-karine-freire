export function About() {
  return (
    <div className="container mx-auto mt-10 max-w-7xl  sm:px-6 lg:px-8">
      <div className="container my-2 flex flex-col items-center gap-4 border-b p-4 lg:flex-row lg:items-center lg:border-none">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="font-Philosopher text-lg font-semibold text-brand-primary-900 lg:text-xl">
            Sobre mim
          </h1>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            dolores consequuntur voluptatem vitae earum nihil perspiciatis
            placeat cum harum, assumenda maiores, laudantium, omnis ducimus?
            Rerum quo ea ut earum voluptate?
          </p>
        </div>
        <div className="flex w-[50%] justify-center lg:justify-end">
          <img
            src="/src/assets/images/image-about-2.jpeg"
            alt=""
            className="w-[60%] rounded-lg lg:rounded-l-full"
          />
        </div>
      </div>

      <div className="bg-brand-secondary-60 container my-2 flex flex-col items-center gap-4 border-b p-4 lg:flex-row lg:items-center lg:border-none">
        <div className="flex w-[50%] justify-center lg:justify-start">
          <img
            src="/src/assets/images/image-about.jpeg"
            alt=""
            className="w-[60%] rounded-lg lg:rounded-r-full"
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="font-Philosopher text-lg font-semibold text-brand-primary-900 lg:text-xl">
            Sobre mim
          </h1>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            dolores consequuntur voluptatem vitae earum nihil perspiciatis
            placeat cum harum, assumenda maiores, laudantium, omnis ducimus?
            Rerum quo ea ut earum voluptate?
          </p>
        </div>
      </div>
    </div>
  )
}
