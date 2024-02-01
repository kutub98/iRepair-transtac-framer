import { useQuery } from '@tanstack/react-query';

import { servicesApi } from './Api/service.api';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useGetServices } from './Api/service.hook.api';

const ServiceList = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/services")
  //     .then(data => data.json())
  //     .then((data)=> setData(data.data))
  // }, [])
  // console.log(data)

  const { data: services, isError, isLoading } = useGetServices();

  console.log(services?.map((item) => {
    item.devices
  }))

  if (isLoading) {
    return (
      <h1 className="h-screen flex justify-center text-center bg-slate-950 text-white items-center">
        Data Loading.....
      </h1>
    );
  }

  if (isError) {
    return <h1>Something went wrong!</h1>;
  }

  // let services = [];

  // const services = data?.data?.map(item => ({
  //   name: item.name,
  //   description: item.description,
  //   price: item.price,
  //   id: item._id,
  // }));

  // if (Array.isArray(data?.data)) {
  //   services = data.data.map(item => ({
  //     name: item.name,
  //     description: item.description,
  //     price: item.price,
  //     id: item._id,
  //   }));
  // } else {
  //   console.error("Data received is not an array:", data?.data);
  // }

  return (
    <div>
      <Table>
        <TableHeader className="text-center">
          <TableRow>
            <TableHead className="text-center">id</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Description</TableHead>
            <TableHead className="text-center">Devices</TableHead>
            <TableHead className="text-center">price</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map(item => (
            <TableRow key={item.id}>
              <TableCell className="font-medium text-center">
                {item.id}
              </TableCell>
              <TableCell className="font-medium text-center">
                {item.name}
              </TableCell>
              <TableCell className="font-medium text-center">
                {item.description}
              </TableCell>
              <TableCell className="font-medium text-center">
              {item.devices ? item.devices.join(', ') : ''}
              </TableCell>
              <TableCell className="font-medium text-center">
                {item.price}
              </TableCell>
              <TableCell className="font-medium text-center">
                <Button variant="destructive" className='p-2'><Trash2/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Services</TableCell>
            <TableCell className="text-right"> {services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ServiceList;
