import { useCallback, useEffect, useRef, useState } from 'react';
import { joinType } from '../../data/type';

const useJoin = (isMarketingSelected: boolean) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [authNumber, setAuthNumber] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isEmailSend, setIsEmailSend] = useState(false);
  const [isAuthNumberCheck, setIsAuthNumberCheck] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [form, setForm] = useState<joinType>({
    isMarketing: isMarketingSelected,
    email: '',
    password: '',
    moldevId: '',
    userName: '',
    islandName: '',
    profileImage: '/img/img_empty_profile.png',
  });

  useEffect(() => {
    console.log('form ---> ', form);
  }, [form]);

  const onChangeMarketing = (isMarketing: boolean) => {
    setForm({
      ...form,
      isMarketing: isMarketing,
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsComplete(true);
    console.log('제출되었습니다 submit ---> ', form);
  };

  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setForm({
          ...form,
          profileImage: reader.result || '/img/img_empty_profile.png',
        });
        resolve(reader.result);
      };
    });
  };

  const onUploadImageButtonClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  const checkIsAbleToAuth = () => {
    console.log('email : ', form.email);
    return form.email.length > 0;
  };

  const checkIsAbleToConfirm = () => {
    return authNumber.length > 0 && isEmailSend;
  };

  const checkNameIsAbleToConfirm = () => {
    return form.moldevId.length > 0;
  };

  const isAbleToStep2 = () => {
    return form.email.length > 0 && passwordCheck.length > 0 && form.password === passwordCheck;
  };

  return {
    authNumber,
    passwordCheck,
    isEmailSend,
    isAuthNumberCheck,
    checkName,
    inputRef,
    isComplete,
    form,
    onChangeMarketing,
    setAuthNumber,
    setPasswordCheck,
    setIsEmailSend,
    setIsAuthNumberCheck,
    checkIsAbleToAuth,
    checkIsAbleToConfirm,
    setCheckName,
    checkNameIsAbleToConfirm,
    onChange,
    onSubmit,
    onUpload,
    onUploadImageButtonClick,
    isAbleToStep2,
    setIsComplete,
  };
};

export default useJoin;
