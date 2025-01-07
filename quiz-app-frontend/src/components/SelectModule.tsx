/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, Option, Spinner } from '@material-tailwind/react';
import { useAppDispatch } from '../redux/hooks';
import { useGetAllModulesQuery } from '../redux/api/baseApi';
import { setSelectedModule } from '../redux/features/module/moduleSlice';

export function SelectModule() {
  const dispatch = useAppDispatch();
  const { data: modules, isLoading } = useGetAllModulesQuery('');

  if (isLoading) {
    return (
      <div className='flex justify-center h-full'>
        <Spinner
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      </div>
    );
  }

  return (
    <div className='w-72'>
      <Select
        onChange={(value) => {
          const moduleTitle = modules.data.find(
            (module: any) => module._id === value
          ).title;
          dispatch(
            setSelectedModule({
              moduleTitle,
              moduleId: value,
            })
          );
        }}
        placeholder={''}
        label='Select Module'
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {/* <Option value='module'>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option> */}

        {modules?.data.map((module: any) => (
          <Option value={module.id}>{module.title}</Option>
        ))}
      </Select>
    </div>
  );
}
