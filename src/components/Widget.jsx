import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import tailwindStyles from '../index.css?inline';

const Widget = () => {
  const [rating, setRating] = useState(3);
  const [submitted, setSubmitted] = useState(false);

  const onSelectStar = (index) => {
    setRating(index + 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      feedback: form.feedback.value,
      rating,
    };
    setSubmitted(true);
    console.log(data);
  };

  return (
    <>
      <style>{tailwindStyles}</style>
      <div className='widget fixed bottom-4 right-4 z-50'>
        <Popover>
          <PopoverTrigger asChild>
            <Button className='rounded-full shadow-lg hover:scale-105'>
              <MeesageIcon className='mr-2 w-5 h-5' />
              Feedback
            </Button>
          </PopoverTrigger>
          <PopoverContent className='widget w-80'>
            <style>{tailwindStyles}</style>
            {submitted ? (
              <div>
                <h3 className='text-lg font-bold mb-2'>
                  Thank you for your feedback!
                </h3>
                <p className='mt-5 text-neutral-700'>
                  We appreciate your feedback. It helps us improve our product
                  and provide better service to our customers.
                </p>
              </div>
            ) : (
              <div>
                <h3 className='text-lg font-bold mb-2'>
                  Send us your feedback
                </h3>
                <form onSubmit={onSubmit} className='space-y-2'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <Label htmlFor='name'>Name</Label>
                      <Input id='name' placeholder='Enter your name' />
                    </div>
                    <div>
                      <Label htmlFor='email'>Email</Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor='feedback'>Feedback</Label>
                    <Textarea
                      id='feedback'
                      placeholder='Tell us what you think'
                      className='m-h-[100px]'
                    />
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                      {[...Array(5)].map((_, index) => (
                        <StarIcon
                          key={index}
                          onClick={() => onSelectStar(index)}
                          className={`cursor-pointer h-5 w-5 ${
                            rating > index
                              ? 'fill-primary'
                              : 'fill-muted stroke-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <Button type='submit'>Submit</Button>
                  </div>
                </form>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Widget;

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}

function MeesageIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
    </svg>
  );
}
