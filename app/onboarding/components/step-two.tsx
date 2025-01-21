import { File, Plus } from "lucide-react";

import { Input } from "@career-canvas/components/ui/input";

export function StepTwo() {
  return (
    <form className="flex w-2/5 flex-col gap-5">
      <div className="rounded-3xl border-2 border-canvas-gray">
        <Input className="border-t-0" placeholder="Current Education" />
        <div className="flex flex-col gap-5 px-4 pb-4 pt-2">
          <Input
            className="rounded-none border border-x-0 border-t-0 border-canvas-gray px-0 py-1"
            placeholder="Institute Name"
          />
          <Input
            className="rounded-none border border-x-0 border-t-0 border-canvas-gray px-0 py-1"
            placeholder="Field of Education"
          />
          <Input
            className="rounded-none border border-x-0 border-t-0 border-canvas-gray px-0 py-1"
            placeholder="Expected Graduation Date"
          />
          <Input
            className="rounded-none border border-x-0 border-t-0 border-canvas-gray px-0 py-1"
            placeholder="Academic Achievements"
          />
          <div className="flex items-center justify-end gap-2">
            <span className="text-sm font-medium text-canvas-gray">
              Upload Certificates
            </span>
            <File className="text-canvas-gray" size={18} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Plus size={20} />
        <span className="text-sm font-medium">Add Education</span>
      </div>
    </form>
  );
}
