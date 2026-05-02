'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import StarBorder from '../ui/StarBorder/StarBorder'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  projectScope: z.string().min(20, 'Project scope must be at least 20 characters'),
  technicalRequirements: z.string().min(20, 'Technical requirements must be at least 20 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      projectScope: '',
      technicalRequirements: '',
    },
  })

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('Form data:', data)
      toast.success('Thank you! We&apos;ll review your project details and get back to you soon.')
      form.reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Start Your Project
          </h2>
          <p className="text-lg text-foreground/70">
            Tell us about your vision. We&apos;ll schedule a discovery call to discuss your needs.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="OgiTech"
                        {...field}
                        className="bg-background border-border"
                      />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="ogitech@email.com"
                        {...field}
                        className="bg-background border-border"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectScope"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Scope</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your project scope and goals..."
                        {...field}
                        className="bg-background border-border resize-none"
                        rows={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="technicalRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technical Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What are your technical requirements and constraints?"
                        {...field}
                        className="bg-background border-border resize-none"
                        rows={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <StarBorder
                as="button"
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                color="var(--primary)"
                speed="4s"
              >
                {isSubmitting ? 'Sending...' : 'Schedule Discovery Call'}
              </StarBorder>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
