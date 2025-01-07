import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useAppSelector } from '../redux/hooks';

export function AddQuizForm() {
  const { moduleTitle } = useAppSelector((state) => state.module);
  return (
    <Card
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder={''}
      color='transparent'
      shadow={false}
    >
      <Typography
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={''}
        variant='h4'
        color='blue-gray'
      >
        {moduleTitle}
      </Typography>
      <Typography
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={''}
        color='gray'
        className='mt-1 font-normal'
      >
        Add your quiz below
      </Typography>
      <form className='mt-8 mb-2 w-full'>
        <div className='mb-1 grid grid-cols-2 gap-4'>
          <div>
            <Typography
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder={''}
              variant='h6'
              color='blue-gray'
              className='mb-3'
            >
              Question
            </Typography>
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={''}
              size='lg'
              placeholder='name@mail.com'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <div>
            <Typography
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder={''}
              variant='h6'
              color='blue-gray'
              className='mb-3'
            >
              Description
            </Typography>
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={''}
              size='lg'
              placeholder='name@mail.com'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>

          <div>
            <Typography
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder={''}
              variant='h6'
              color='blue-gray'
              className='mb-3'
            >
              Option 1
            </Typography>
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={''}
              size='lg'
              placeholder='name@mail.com'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <div>
            <Typography
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder={''}
              variant='h6'
              color='blue-gray'
              className='mb-3'
            >
              Option 2
            </Typography>
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={''}
              size='lg'
              placeholder='name@mail.com'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <div>
            <Typography
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder={''}
              variant='h6'
              color='blue-gray'
              className='mb-3'
            >
              Option 3
            </Typography>
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={''}
              size='lg'
              placeholder='name@mail.com'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <div>
            <Typography
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder={''}
              variant='h6'
              color='blue-gray'
              className='mb-3'
            >
              Option 4
            </Typography>
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={''}
              size='lg'
              placeholder='name@mail.com'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <div>
            <Typography
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder={''}
              variant='h6'
              color='blue-gray'
              className='mb-3'
            >
              Correct Answer
            </Typography>
            <Input
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={''}
              size='lg'
              placeholder='name@mail.com'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
        </div>
        <div className='flex justify-end'>
          <Button
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={''}
            size='sm'
          >
            Add Quiz
          </Button>
        </div>
      </form>
    </Card>
  );
}
