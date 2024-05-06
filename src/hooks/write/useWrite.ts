import { useState } from 'react';
import { CategoryToKorType } from '../../data/type';

const useWrite = () => {
  const [value, setValue] = useState<string>('');
  const [category, setCategory] = useState<CategoryToKorType | null>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSave = () => {
    console.log('저장 --> ', value);
    if (!category) {
      setError('카테고리를 선택해주세요.');
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
      return;
    }
  };

  return {
    value,
    category,
    isCategoryOpen,
    isError,
    error,
    setValue,
    setCategory,
    setIsCategoryOpen,
    handleSave,
  };
};

export default useWrite;
