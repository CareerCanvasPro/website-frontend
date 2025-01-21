"use client";

import { ChevronLeft } from "lucide-react";
import * as React from "react";

import { CareerCanvasLogo } from "@career-canvas/components/logos/career-canvas";
import { Button } from "@career-canvas/components/ui/button";
import { Progress } from "@career-canvas/components/ui/progress";

import { StepTwo } from "./components/step-two";

type Step = 1 | 2 | 3 | 4;

export default function OnboardingPage() {
  const [step] = React.useState<Step>(2);
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex w-3/5 flex-col gap-8">
        <div className="flex">
          <ChevronLeft size={50} />
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
      <StepTwo />
      <div className="flex items-center gap-3">
        <p className="mr-1 text-base font-light text-coin">Earn 5 coin</p>
        <Button variant="outline">Skip</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
}
