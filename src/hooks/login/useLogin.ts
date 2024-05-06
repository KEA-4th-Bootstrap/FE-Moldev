import { useEffect, useState } from 'react';

const useLogin = (isShow: boolean) => {
  const [type, setType] = useState<'login' | 'join' | 'password'>('login');

  useEffect(() => {
    if (isShow) {
      setType('login');
    }
  }, [isShow]);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    console.log(form);
  };

  return {
    type,
    setType,
    form,
    onChange,
    onSubmit,
  };
};

export default useLogin;
