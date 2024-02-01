import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';


const schema = z.object({
  name: z.string().min(1, { message: 'Name is Required' }),
  description: z.string().min(1, { message: 'description is Required' }),
  price: z.string().min(1, { message: 'Price value is Required' }),
  devices: z.string().min(1, { message: 'devices is Required' }),
});

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const queryClinet = useQueryClient();
  const { mutateAsync, isError, isSuccess, isPending } = useMutation({
    mutationKey: ['postNewService'],
    mutationFn: async data => {
      const response = await fetch('http://localhost:5000/api/v1/services', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      });
      
      
      return response;
    },
    onSuccess: () => {
      queryClinet.invalidateQueries({queryKey: ["services"]})
    }
  });

  const handleFormSubmit = async formData => {
    try {
      // Convert devices to array if it's a string
      const devices =
        typeof formData.devices === 'string'
          ? [formData.devices]
          : formData.devices;

      // Create the payload object
      const payload = {
        name: formData.name,
        description: formData.description,
        devices: devices,
        price: parseFloat(formData.price), // Convert price to float if it's a string
      };

      // Send the payload to the server
      const response = await mutateAsync(payload);

      if (response.ok) {
        // Handle success
        
      
        console.log('Form submitted successfully');
      } else {
        // Handle failure (e.g., server error)
        console.log('Server responded with an error:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error submitting form:', error);
    }
  };

 


  return (
    <Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="name">Service Name</label>
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
        <label htmlFor="description">Description</label>
        <input type="text" {...register('description')} />
        <p>{errors.description?.message}</p>
        <label htmlFor="price">Price</label>
        <input type="text" {...register('price')} />
        <p>{errors.price?.message}</p>
        <label htmlFor="devices">Device name</label>
        <input type="text" {...register('devices')} />
        <p>{errors.devices?.message}</p>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default AddService;
