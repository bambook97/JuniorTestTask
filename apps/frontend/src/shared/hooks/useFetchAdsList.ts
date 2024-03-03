import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Ads } from '../types/types';

interface Props {
  searchValue?: string;
  isEnabled: boolean;
}

const useFetchAdsList = ({ searchValue = '', isEnabled }: Props) => {
  const fetchAds = async (): Promise<Ads[]> => {
    const { data } = await axios.get(
      searchValue ? `/api/ads?${searchValue}` : '/api/ads'
    );
    return data.results;
  };

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['ads', searchValue],
    queryFn: fetchAds,
    enabled: isEnabled,
  });

  useEffect(() => {
    if (isLoading && isEnabled) {
      toast.loading('Loading...', { toastId: 'loading' });
    }
    if (isSuccess && isEnabled) {
      toast.dismiss('loading');
      toast.success('Success!', { toastId: 'success' });
    }
    if (isError && isEnabled) {
      toast.dismiss('loading');
      toast.error('Something went wrong...', { toastId: 'error' });
    }
  }, [isLoading, isEnabled, isSuccess, isError]);

  return { data };
};

export default useFetchAdsList;
