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
  addQuiz,
  resetQuizForm,
  resetQuizPublish,
  setCorrectOption,
  setDescription,
  setOptions,
  setQuestion,
} from '../redux/features/quiz/quizSlice';
import toast from 'react-hot-toast';
import { useAddQuizMutation } from '../redux/features/quiz/quizApi';

export function AddQuizForm() {
  const { moduleTitle, moduleId } = useAppSelector((state) => state.module);
  const { options, question, description, correctOption, quiz } =
    useAppSelector((state) => state.quiz);
  const [publishQuiz, { data, isLoading }] = useAddQuizMutation();
  const dispatch = useAppDispatch();

  const handleAddQuiz = () => {
    dispatch(addQuiz(moduleId));
    dispatch(resetQuizForm());
  };

  const handlePublish = async () => {
    await publishQuiz(quiz);
    dispatch(resetQuizPublish());
    toast.success('Quiz Published Successfully!');
  };

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
              value={question}
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
              value={description}
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
              value={options[0]}
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
              value={options[1]}
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
              value={options[2]}
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
              value={options[3]}
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
              selected={correctOption}
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
            onClick={handleAddQuiz}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={''}
            size='sm'
          >
            Add Quiz
          </Button>
          <Button
            onClick={handlePublish}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={''}
            size='sm'
            className='ml-4'
          >
            Publish
          </Button>
        </div>
      </form>
    </Card>
  );
}
