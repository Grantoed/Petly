import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaAddPet } from '../helpers/schemaAppPet';
import { postNotice } from 'api/addNotice';

import { FormWrap, BackDrop, MainText } from './Form.styled';
import { RadioTwo, LabelText, RadioWrap, Label, TextTittle } from '../FormSteps/FormStep.styled';

export const Form = () => {
  const [selectedValue, setSelectedValue] = useState('lost/found');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      // category: selectedValue,
      owner: '63f397ebf7f968c7a15349d6',
      title: 'Notice',
      price: '150',
      category: 'sell',
      comment: 'cpmments',
    },
    resolver: yupResolver(schemaAddPet),
    mode: 'onBlur',
  });

  const client = useQueryClient();
  // const { data, isLoading } = useQuery({ queryFn: postNotice(value), queryKey: 'notice' });
  const { mutate: create } = useMutation({ mutationFn: postNotice, onSuccess: () => {} });

  const handleRadioInputChange = event => {
    setSelectedValue(event.target.value);
    methods.setValue('category', event.target.value);
    methods.reset();
  };

  const onSubmit = data => {
    // console.log(data);
    create(data);
    navigate('/');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeModal = e => {
    if (
      e.target.id === 'backdrop-notice' ||
      // e.target.id === 'modal-close' ||
      // e.target.id === 'close-svg' ||
      e.key === 'Escape'
    ) {
      console.log(e);
      navigate('/');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return (
    <FormProvider {...methods}>
      <BackDrop onClick={closeModal} id="backdrop-notice">
        <FormWrap>
          <TextTittle>Add pet</TextTittle>
          {location.pathname === '/addpet/step1' && (
            <MainText>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
            </MainText>
          )}
          <RadioWrap>
            <Label checked={selectedValue === 'lost/found'}>
              <RadioTwo
                type="radio"
                {...methods.register('category')}
                value="lost/found"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'lost/found'}
              />
              <LabelText>lost/found</LabelText>
            </Label>
            <Label checked={selectedValue === 'in good hands'}>
              <RadioTwo
                type="radio"
                {...methods.register('category')}
                value="in good hands"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'in good hands'}
              />
              <LabelText>in good hands</LabelText>
            </Label>
            <Label checked={selectedValue === 'sell'}>
              <RadioTwo
                type="radio"
                {...methods.register('category')}
                value="sell"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'sell'}
              />
              <LabelText>sell</LabelText>
            </Label>
          </RadioWrap>
          <form onSubmit={methods.handleSubmit(onSubmit)}>{<Outlet />}</form>
        </FormWrap>
      </BackDrop>
    </FormProvider>
  );
};
