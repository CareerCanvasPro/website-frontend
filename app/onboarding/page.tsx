"use client";

import { ChevronLeft } from "lucide-react";
import * as React from "react";

import { CareerCanvasLogo } from "@career-canvas/components/logos/career-canvas";
import { Button } from "@career-canvas/components/ui/button";
import { Progress } from "@career-canvas/components/ui/progress";

import { StepOne } from "./components/step-one";
import { StepTwo } from "./components/step-two";

export default function OnboardingPage() {
  const [step, setStep] = React.useState<number>(1);
  const StepComponent = () => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
    }
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex w-3/5 flex-col gap-8">
        <div className="flex">
          <ChevronLeft onClick={() => setStep(step - 1)} size={50} />
          <div className="mx-auto">
            <CareerCanvasLogo />
          </div>
        </div>
        <div>
          <Progress value={step * 20} />
          <p className="text-xs font-light">
            hello! Complete your profile for onboard
          </p>
        </div>
      </div>
      <StepComponent />
      <div className="flex items-center gap-3">
        <p className="mr-1 text-base font-light text-coin">Earn 5 coin</p>
        <Button onClick={() => setStep(step + 1)} variant="outline">
          Skip
        </Button>
        <Button onClick={() => setStep(step + 1)}>Next</Button>
      </div>
    </div>
  );
}
