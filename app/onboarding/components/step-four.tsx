import { Plus } from "lucide-react";

import { Input } from "@career-canvas/components/ui/input";

export function StepFourComponent() {
  return (
    <form className="flex w-2/5 flex-col gap-5">
      <div className="rounded-3xl border-2 border-canvas-gray">
        <Input className="border-t-0" placeholder="Hard Skills" />
        <div className="flex flex-col gap-5 px-4 pb-4 pt-2">
          <Input
            className="rounded-none border border-x-0 border-t-0 px-0 py-1"
            placeholder="Skill"
          />
          <Input
            className="rounded-none border border-x-0 border-t-0 px-0 py-1"
            placeholder="Skill"
          />
          <Input
            className="rounded-none border border-x-0 border-t-0 px-0 py-1"
            placeholder="Skill"
          />
          <Input
            className="rounded-none border border-x-0 border-t-0 px-0 py-1"
            placeholder="Skill"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Plus size={20} />
        <span className="text-sm font-medium">Add Soft Skills</span>
      </div>
    </form>
  );
}
