import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = async (formData) => {
    console.log(formData);
    const res = await fetch(
      'https://formsubmit.co/ea168d8fa9cc6f351f5623bdd8e905b5',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      }
    );
    console.log(res);
  };

  return (
    <div className='h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center pt-20'>
      <h2 className='sectionTitleClass'>Contact</h2>
      <div className='flex flex-col space-y-6'>
        <h4 className='text-xl font-semibold text-center text-slate-100'>
          Just what you need.{' '}
          <span className='decoration-yellow-700/80 underline underline-offset-2 text-2xl'>
            Lets Talk.
          </span>
        </h4>
        <div className='space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-yellow-700 h-7 w-7 animate-pulse' />
            <p>+44 795-676-9795</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-yellow-700 h-7 w-7 animate-pulse' />
            <p>coder.mariusz@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-yellow-700 h-7 w-7 animate-pulse' />
            <p>87 park green</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-3 w-full'>
            <div className='space-y-3 md:space-y-0 md:space-x-2 flex flex-col md:flex-row'>
              <input
                type='hidden'
                name='_captcha'
                value='false'
              />
              <input
                type='hidden'
                name='_template'
                value='table'
              />
              <input
                {...register('name', { required: true })}
                className='contactInput'
                name='name'
                id='name'
                placeholder='Name'
                type='text'
              />
              <input
                {...register('email', { required: true })}
                className='contactInput'
                name='email'
                id='email'
                placeholder='e-mail'
                type='email'
              />
            </div>
            <input
              {...register('phone', { required: true })}
              className='contactInput'
              name='phone'
              id='subject'
              placeholder='subject'
              type='text'
            />
            <textarea
              {...register('message', { required: true })}
              className='contactInput'
              name='message'
              id='message'
              placeholder='Message...'
              cols='20'
              rows='6'></textarea>
            <button
              type='submit'
              className='bg-[#f7ab0a] px-7 py-3 rounded-md text-black '>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
