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

export function TabsWithIcon() {
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
      desc: <QuizCard>{<>Hello World 2</>}</QuizCard>,
    },
  ];

  return (
    <Tabs value='all-quiz'>
      <TabsHeader placeholder={''}>
        {data.map(({ label, value, icon }) => (
          <Tab placeholder={''} key={value} value={value}>
            <div className='flex items-center gap-2'>
              {React.createElement(icon, { className: 'w-5 h-5' })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={''}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
