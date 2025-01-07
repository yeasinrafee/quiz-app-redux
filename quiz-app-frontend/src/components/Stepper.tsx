import { Stepper, Step } from '@material-tailwind/react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setActiveStepper } from '../redux/features/stepper/stepperSlice';

type TStepperProps = {
  steps: {
    value: number;
    name: string;
    component: React.ReactNode;
  }[];
};

export function DefaultStepper({ steps }: TStepperProps) {
  const { activeStep } = useAppSelector((state) => state.stepper);
  const dispatch = useAppDispatch();

  return (
    <div className='w-full py-4 px-8'>
      <Stepper
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={''}
        activeStep={activeStep}
      >
        {steps.map((step) => (
          <Step
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={''}
            onClick={() => dispatch(setActiveStepper(step.value))}
            className='px-8 w-fit'
          >
            {step.name}
          </Step>
        ))}
      </Stepper>
      <div>{steps[activeStep].component}</div>
    </div>
  );
}
