"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from "@/components/ui/input"; // Assuming shadcn/ui input is available from template
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button is available
import { useToast } from "@/hooks/use-toast"; // Corrected path

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

type FormData = z.infer<typeof formSchema>;

const CTAForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSubmitError(null);
    try {
      // TODO: Replace with actual API call to backend/server action
      console.log('Form submitted:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Placeholder for API call
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to subscribe. Please try again.');
      // }

      toast({
        title: "Success!",
        description: "Thank you for subscribing!",
      });
      reset(); // Reset form fields
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
      setSubmitError(errorMessage);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: errorMessage,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <div className="flex-grow">
        <Input
          type="email"
          placeholder="Enter your email address"
          {...register('email')}
          className={`w-full ${errors.email ? 'border-destructive' : ''}`}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {/* Optional: Display general submission error */}
      {/* {submitError && <p className="text-sm text-destructive mt-2">{submitError}</p>} */}
    </form>
  );
};

export default CTAForm;

