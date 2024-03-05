import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
} from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onApplyFilters: (filters: string) => void;
}

const FiltersDialog = ({ open, onClose, onApplyFilters }: Props) => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    city: '',
    district: '',
    search: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    const paramsString = params.toString();
    onApplyFilters(paramsString);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      city: '',
      district: '',
      search: '',
    });
    onApplyFilters('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Filter Ads</DialogTitle>
      <DialogContent>
        <Input
          name="minPrice"
          placeholder="Min price"
          value={filters.minPrice}
          onChange={handleChange}
        />
        <Input
          name="maxPrice"
          placeholder="Max price"
          value={filters.maxPrice}
          onChange={handleChange}
        />
        <Input
          name="city"
          placeholder="City"
          value={filters.city}
          onChange={handleChange}
        />
        <Input
          name="district"
          placeholder="District"
          value={filters.district}
          onChange={handleChange}
        />
        <Input
          name="search"
          placeholder="Contains"
          value={filters.search}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleApply}>Apply</Button>
      </DialogActions>
    </Dialog>
  );
};
export default FiltersDialog;
