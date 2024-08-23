import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ProfileForm() {
  return (
    <div className="container mx-auto mt-28 flex justify-center px-4 pb-8 sm:px-6 lg:justify-end lg:px-8">
      <form
        method="POST"
        action="https://formsubmit.co/freirelf06@gmail.com"
        className="w-full max-w-2xl space-y-8 rounded-lg bg-gradient-to-r from-brand-primary-900 to-brand-secondary-400 p-8"
      >
        {/* <input
        type="hidden"
        name="_next"
        value="https://centroclinica13demaio.vercel.app/success"
      /> */}
        <Input
          type="hidden"
          name="_autoresponse"
          value="Recebemos suas informações, obrigado pelo contato, logo retornaremos!"
        />

        <fieldset>
          <div className="fieldset-wrapper">
            <legend className="text-center text-lg text-brand-primary-100">
              Olá, conte-nos como podemos ajuda-lo(a)
            </legend>
            <div className="input-wrapper">
              <Label htmlFor="eventName" className="text-brand-primary-100">
                Nome
              </Label>
              <Input
                type="text"
                name="name"
                id="eventName"
                required
                minLength={5}
                placeholder="Ex: Seu nome"
              />
            </div>
            <div className="input-wrapper">
              <Label htmlFor="eventEmail" className="text-brand-primary-100">
                Email <span>(digite um email válido)</span>
              </Label>
              <Input
                type="text"
                name="email"
                id="eventEmail"
                required
                placeholder="Ex: seuemail@gmail.com"
              />
            </div>
            <div className="input-wrapper">
              <Label
                htmlFor="event-whatsapp"
                className="text-brand-primary-100"
              >
                Whatsapp para contato <span>(somente números)</span>
              </Label>
              <Input
                type="number"
                name="contato"
                id="event-whatsapp"
                required
                placeholder="Ex: 85 99999-9999"
              />
            </div>

            <div className="input-wrapper">
              <Label htmlFor="event-info" className="text-brand-primary-100">
                Informações (digite aqui sua dúvida){' '}
              </Label>
              <Textarea
                className="textarea"
                name="info"
                id="event-info"
                cols={30}
                rows={10}
                required
                placeholder="Ex: Gostaria de saber sobre o procedimento de uma pessoa que não possui uma boa pele.."
              ></Textarea>
            </div>
          </div>
        </fieldset>
        <div className="">
          <Button
            className="w-full bg-brand-primary-500  text-sm text-brand-primary-900 hover:bg-brand-primary-500/90 lg:text-base"
            type="submit"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  )
}
