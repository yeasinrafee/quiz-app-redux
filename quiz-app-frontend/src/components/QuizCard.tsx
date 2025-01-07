import { Card, CardBody } from '@material-tailwind/react';
import { ReactNode } from 'react';

export function QuizCard({ children }: { children: ReactNode }) {
  return (
    <Card
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder=''
      className='mt-6 w-full h-full'
    >
      <CardBody
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={''}
      >
        {children}
      </CardBody>
    </Card>
  );
}
