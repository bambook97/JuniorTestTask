import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Ads } from '../types/types';

interface Props {
  id: string;
}

const useFetchAdData = ({ id }: Props) => {
  const fetchAdData = async () => {
    const { data } = await axios.get<Ads>(`/api/ads/${id}`);
    return data;
  };

  const { data } = useQuery({
    queryKey: ['adData', id],
    queryFn: fetchAdData,
  });

  return { data };
};
export default useFetchAdData;
