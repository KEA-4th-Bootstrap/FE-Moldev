import { ChangeEvent, useEffect, useState } from 'react';

const useSearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);

  return {
    isOpen,
    searchInput,
    setIsOpen,
    handleSearchInput,
  };
};

export default useSearchInput;
