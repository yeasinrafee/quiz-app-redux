import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from '@material-tailwind/react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  setCorrectOption,
  setDescription,
  setOptions,
  setQuestion,
} from '../redux/features/quiz/quizSlice';

export function AddQuizForm() {
  const { moduleTitle } = useAppSelector((state) => state.module);
  const { options } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
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
              onChange={(e) => dispatch(setQuestion(e.target.value))}
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
              onChange={(e) => dispatch(setDescription(e.target.value))}
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
              onBlur={(e) => dispatch(setOptions(e.target.value))}
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
              onBlur={(e) => dispatch(setOptions(e.target.value))}
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
              onBlur={(e) => dispatch(setOptions(e.target.value))}
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
              onBlur={(e) => dispatch(setOptions(e.target.value))}
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
            <Select
              onChange={(value) => dispatch(setCorrectOption(value))}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder={''}
            >
              {options.map((option) => {
                return <Option value={option}>{option}</Option>;
              })}
            </Select>
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
