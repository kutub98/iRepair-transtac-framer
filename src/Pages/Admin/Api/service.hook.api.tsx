import { useQuery } from "@tanstack/react-query";
import { servicesApi } from "./service.api";


export const useGetServices = () => {

  const serviceData = useQuery({
    queryKey: ['services'],
    queryFn: servicesApi,
    select: data => {
      const services = data?.data.map(item => ({
        name: item.name,
        description: item.description,
        price: item.price,
        id: item._id,
      }));
      return services
    },
    // gcTime: 10000,
    staleTime: 10000
  })
  return serviceData
}
  