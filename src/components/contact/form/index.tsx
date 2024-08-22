// 'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// import emailjs from '@emailjs/browser'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useRef } from 'react'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'

// import { Button } from '@/components/ui/button'
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { Textarea } from '@/components/ui/textarea'
// import { services } from '@/lib/mocks'

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: 'Username must be at least 2 characters.',
//   }),
//   email: z.string().email({ message: 'Invalid email address.' }),
//   phone: z.string().min(10, {
//     message: 'Phone number must be at least 10 digits.',
//   }),
//   description: z.string().optional(),
//   service: z.string().optional(),
// })

// export function ProfileForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: '',
//       email: '',
//       phone: '',
//       description: '',
//       service: '',
//     },
//   })

//   const formAbout = useRef<HTMLFormElement>(null)

//   const sendEmail = () => {
//     if (formAbout.current) {
//       emailjs
//         .sendForm(
//           'service_rxfoorg',
//           'template_vu1u8ub',
//           formAbout.current,
//           'vRg8HRqRgRv9l9-0u',
//         )
//         .then(
//           () => {
//             console.log('SUCCESS!')
//           },
//           (error) => {
//             console.log('FAILED...', error.text)
//           },
//         )
//     }
//   }

//   const onSubmit = (data: z.infer<typeof formSchema>) => {
//     console.log(data)
//     sendEmail()
//   }

//   return (
//     <div className="container mx-auto mt-28 flex justify-center px-4 pb-8 sm:px-6 lg:justify-end lg:px-8">
//       <Form {...form}>
//         <form
//           ref={formAbout}
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-full max-w-2xl space-y-8 rounded-lg bg-brand-primary-700 p-8"
//         >
//           <FormField
//             control={form.control}
//             name="username"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-brand-primary-100">Nome</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Ex: Marta Nogueira" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-brand-primary-100">Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder="seuemail@gmail.com" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="phone"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-brand-primary-100">
//                   Celular
//                 </FormLabel>
//                 <FormControl>
//                   <Input placeholder="85 99999-9999" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="service"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-brand-primary-100">
//                   Especialidades
//                 </FormLabel>
//                 <FormControl>
//                   <Select onValueChange={field.onChange} value={field.value}>
//                     <SelectTrigger className="w-full">
//                       <SelectValue
//                         className="text-brand-primary-100"
//                         placeholder="Seleciona a especialidade"
//                       />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectGroup>
//                         <SelectLabel>Especialidades</SelectLabel>
//                         {services.map((service) => (
//                           <SelectItem key={service.title} value={service.title}>
//                             {service.title}
//                           </SelectItem>
//                         ))}
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-brand-primary-100">
//                   Descrição
//                 </FormLabel>
//                 <FormControl>
//                   <Textarea
//                     placeholder="Queria adicionar mais informações sobre o serviço.."
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button
//             className="w-full bg-brand-primary-900 hover:bg-brand-primary-900/90"
//             type="submit"
//           >
//             Enviar
//           </Button>
//         </form>
//       </Form>
//     </div>
//   )
// }

export function ProfileForm() {
  return (
    <div className="container mx-auto mt-28 flex justify-center px-4 pb-8 sm:px-6 lg:justify-end lg:px-8">
      <form
        method="POST"
        action="https://formsubmit.co/freirelf06@gmail.com"
        className="w-full max-w-2xl space-y-8 rounded-lg bg-brand-primary-700 p-8"
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
            className="w-full bg-brand-primary-900  text-sm hover:bg-brand-primary-900/90 lg:text-base"
            type="submit"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  )
}
