'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export function ToastWithTitle() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Successfully added new Services',
          description: 'There was a problem with your request.',
        });
      }}
    ></Button>
  );
}
