export function About() {
  return (
    <div id="about" className="container mx-auto  max-w-7xl sm:px-6 lg:px-8">
      <div className="container my-2 flex flex-col items-center gap-4 border-b p-4 lg:flex-row lg:items-center lg:border-none">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="font-Philosopher text-lg font-semibold text-brand-secondary-800 lg:text-2xl">
            Sobre mim
          </h1>
          <p className="text-sm text-brand-primary-50 lg:text-justify lg:text-base lg:tracking-wider">
            Sou Karine Freire, apaixonada pelo cuidado com o corpo e pela
            transformação que a fisioterapia dermatofuncional e estética podem
            proporcionar. Com uma especialização em estética e uma pós-graduação
            em fisioterapia cardiorrespiratória, trago um olhar abrangente para
            a saúde e o bem-estar dos meus pacientes.
            <br />
            <br />
            Minha jornada na fisioterapia começou com a vontade de ajudar as
            pessoas a sentirem-se bem consigo mesmas, tanto por dentro quanto
            por fora. Ao longo dos anos, desenvolvi uma abordagem que combina
            ciência, técnica e empatia, sempre com foco nas necessidades
            individuais de cada paciente.
          </p>
        </div>
        <div className="flex w-[50%] justify-center lg:justify-end">
          <img
            src="images/image-about-2.jpeg"
            alt=""
            className="w-[60%] rounded-lg lg:rounded-l-full"
          />
        </div>
      </div>

      <div className="container my-2 flex flex-col items-center gap-4 border-b bg-brand-secondary-60 p-4 lg:flex-row lg:items-center lg:border-none">
        <div className="flex w-[50%] justify-center lg:justify-start">
          <img
            src="images/image-about.jpeg"
            alt=""
            className="w-[60%] rounded-lg lg:rounded-r-full"
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="font-Philosopher text-lg font-semibold text-brand-secondary-800 lg:text-2xl">
            Sobre mim
          </h1>
          <p className="text-sm text-brand-primary-50 lg:text-justify lg:text-base  lg:tracking-wider">
            Mas além das qualificações técnicas, acredito que o verdadeiro
            diferencial no cuidado com a pele e o corpo está na conexão humana.
            Gosto de conhecer meus pacientes, entender suas histórias e
            objetivos, para que juntos possamos traçar um caminho que leve a
            resultados reais e satisfatórios.
            <br />
            <br />
            Estou aqui para ajudar você a alcançar a melhor versão de si
            mesma(o), com tratamentos que vão além da estética, promovendo
            saúde, bem-estar e autoestima. Vamos juntos nessa jornada?
          </p>
        </div>
      </div>
    </div>
  )
}
