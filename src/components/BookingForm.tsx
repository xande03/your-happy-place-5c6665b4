import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  phone: z.string().min(9, {
    message: "Por favor, insira um número de telefone válido.",
  }),
  date: z.date({
    required_error: "Por favor, selecione uma data.",
  }),
});

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simular chamada de API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log(values);
    toast.success("Agendamento solicitado!", {
      description: `Enviamos uma confirmação para ${values.email}. Entraremos em contato em breve.`,
    });
    
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <div className="bg-white p-8 md:p-12 shadow-2xl border border-luxury-ivory max-w-xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-serif text-luxury-black mb-4">Agende sua Consultoria</h3>
        <p className="text-muted-foreground">
          Preencha os dados abaixo e entraremos em contato para confirmar sua experiência exclusiva.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-luxury-black uppercase tracking-widest text-[10px] font-bold">Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome" 
                    {...field} 
                    className="rounded-none border-luxury-ivory focus:border-gold transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-luxury-black uppercase tracking-widest text-[10px] font-bold">E-mail</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="seu@email.com" 
                      {...field} 
                      className="rounded-none border-luxury-ivory focus:border-gold transition-colors"
                    />
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
                  <FormLabel className="text-luxury-black uppercase tracking-widest text-[10px] font-bold">Telefone</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+351 000 000 000" 
                      {...field} 
                      className="rounded-none border-luxury-ivory focus:border-gold transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-luxury-black uppercase tracking-widest text-[10px] font-bold">Data de Preferência</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal rounded-none border-luxury-ivory hover:bg-transparent hover:border-gold transition-colors",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Escolha uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 rounded-none border-luxury-ivory" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                      initialFocus
                      className="rounded-none"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold/90 text-white py-6 rounded-none uppercase tracking-widest text-xs font-bold transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              "Confirmar Agendamento"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
