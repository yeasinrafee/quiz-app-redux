import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { Square3Stack3DIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { QuizCard } from './QuizCard';
import { AddQuizForm } from './AddQuizForm';
import { DefaultStepper } from './Stepper';
import { SelectModule } from './SelectModule';

export function TabsWithIcon() {
  const steps = [
    {
      value: 0,
      name: 'Select Module',
      component: (
        <div className='flex justify-center m-12'>
          <SelectModule />
        </div>
      ),
    },
    {
      value: 1,
      name: 'Add Quiz',
      component: <AddQuizForm />,
    },
  ];

  const data = [
    {
      label: 'All Quiz',
      value: 'all-quiz',
      icon: Square3Stack3DIcon,
      desc: <QuizCard>{<>Hello World</>}</QuizCard>,
    },
    {
      label: 'Add Quiz',
      value: 'add-quiz',
      icon: UserCircleIcon,
      desc: (
        <QuizCard>
          <DefaultStepper steps={steps} />
        </QuizCard>
      ),
    },
  ];

  return (
    <Tabs value='all-quiz'>
      <TabsHeader
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={''}
      >
        {data.map(({ label, value, icon }) => (
          <Tab
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={''}
            key={value}
            value={value}
          >
            <div className='flex items-center gap-2'>
              {React.createElement(icon, { className: 'w-5 h-5' })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={''}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
