import { Plus } from "lucide-react";

import { Checkbox } from "@career-canvas/components/ui/checkbox";
import { Input } from "@career-canvas/components/ui/input";
import { Label } from "@career-canvas/components/ui/label";

export function StepThreeComponent() {
  return (
    <form className="flex w-2/5 flex-col gap-5">
      <div className="rounded-3xl border-2 border-canvas-gray">
        <Input className="border-t-0" placeholder="Current Occupation" />
        <div className="flex flex-col gap-5 px-4 pb-4 pt-2">
          <Input
            className="rounded-none border border-x-0 border-t-0 px-0 py-1"
            placeholder="Organization Name"
          />
          <Input
            className="rounded-none border border-x-0 border-t-0 px-0 py-1"
            placeholder="Designation"
          />
          <Input
            className="rounded-none border border-x-0 border-t-0 px-0 py-1"
            placeholder="Work From"
          />
          <div className="flex justify-between border-b border-canvas-gray py-1">
            <Input className="border-none p-0" placeholder="Work Till" />
            <div className="flex items-center gap-2">
              <Label>Current</Label>
              <Checkbox size="10" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Plus size={20} />
        <span className="text-sm font-medium">Add More Experience</span>
      </div>
    </form>
  );
}
