'use client'

import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { services } from '@/lib/mocks'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  description: z.string().optional(),
  service: z.string().optional(),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      description: '',
      service: '',
    },
  })

  const formAbout = useRef<HTMLFormElement>(null)

  const sendEmail = () => {
    if (formAbout.current) {
      emailjs
        .sendForm(
          'service_rxfoorg',
          'template_vu1u8ub',
          formAbout.current,
          'vRg8HRqRgRv9l9-0u',
        )
        .then(
          () => {
            console.log('SUCCESS!')
          },
          (error) => {
            console.log('FAILED...', error.text)
          },
        )
    }
  }

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
    sendEmail()
  }

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values)
  // }

  return (
    <div className="container mx-auto mt-28 flex max-w-7xl justify-end px-4 pb-8 sm:px-6 lg:px-8">
      <Form {...form}>
        <form
          ref={formAbout}
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-1/2 space-y-8 bg-brand-primary-500 p-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-primary-50">Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Marta Nogueira" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-primary-50">Email</FormLabel>
                <FormControl>
                  <Input placeholder="seuemail@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-primary-50">Celular</FormLabel>
                <FormControl>
                  <Input placeholder="85 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-primary-50">
                  Especialidades
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        className="text-brand-primary-50"
                        placeholder="Seleciona a especialidade"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Especialidades</SelectLabel>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-primary-50">
                  Descrição
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Queria adicionar mais informações sobre o serviço.."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="mx-auto mt-8 block w-full bg-brand-primary-600 hover:bg-brand-primary-600/90"
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  )
}
