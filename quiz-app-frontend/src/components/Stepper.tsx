import { Stepper, Step, step } from '@material-tailwind/react';
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
      <Stepper placeholder={''} activeStep={activeStep}>
        {/* <Step
          placeholder={''}
          onClick={() => dispatch(setActiveStepper(0))}
          className='w-fit px-8'
        >
          All Quiz
        </Step>
        <Step
          placeholder={''}
          onClick={() => dispatch(setActiveStepper(1))}
          className='w-fit px-8'
        >
          Add Quiz
        </Step> */}
        {steps.map((step) => (
          <Step
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
