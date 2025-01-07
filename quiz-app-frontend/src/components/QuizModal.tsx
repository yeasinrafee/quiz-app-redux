/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react';
import { useGetAllQuizByModuleIdQuery } from '../redux/features/quiz/quizApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCurrentQuestionIndex } from '../redux/features/quiz/quizSlice';

export function QuizModal({ moduleId }: { moduleId: string }) {
  const { currentQuestionIndex } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
  const { data: quizes, isLoading } = useGetAllQuizByModuleIdQuery(moduleId);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <Button
        size='sm'
        placeholder={''}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onClick={handleOpen}
        variant='gradient'
      >
        Start Quiz
      </Button>
      <Dialog
        placeholder={''}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        open={open}
        handler={handleOpen}
      >
        <DialogBody
          placeholder={''}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {quizes?.data.map(
            (quiz: any, index: number) =>
              currentQuestionIndex === index && (
                <div className=''>
                  <Typography
                    variant='h5'
                    placeholder={''}
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {quiz.question}
                  </Typography>
                </div>
              )
          )}

          <div className='grid grid-cols-2 gap-4 mt-4'>
            {quizes?.data[currentQuestionIndex]?.options.map((option: any) => (
              <Button
                placeholder={''}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                variant={
                  (quizes?.data[currentQuestionIndex]?.correctOption ===
                    option &&
                    'filled') ||
                  'outlined'
                }
                color={
                  (quizes?.data[currentQuestionIndex]?.correctOption ===
                    option &&
                    'green') ||
                  'gray'
                }
              >
                {option}
              </Button>
            ))}
          </div>
        </DialogBody>
        <DialogFooter
          placeholder={''}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div className='flex justify-end space-x-4'>
            {currentQuestionIndex > 0 && (
              <Button
                placeholder={''}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onClick={() => {
                  dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1));
                }}
              >
                Previous
              </Button>
            )}
            {(currentQuestionIndex < quizes.data.length - 1 && (
              <Button
                size='sm'
                placeholder={''}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onClick={() => {
                  dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
                }}
              >
                Next
              </Button>
            )) || (
              <Button
                placeholder={''}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Submit
              </Button>
            )}
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
