import { CameraIcon } from "@career-canvas/components/icons/camera";
import { PersonIcon } from "@career-canvas/components/icons/person";
import { Input } from "@career-canvas/components/ui/input";

export function StepOne() {
  return (
    <form className="flex w-2/5 flex-col gap-2">
      <div className="mx-auto flex">
        <span className="text-sm font-medium text-canvas-gray">Add Image</span>
        <div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border-[3px] border-canvas-gray bg-canvas-gray/50">
          <PersonIcon />
          <div className="absolute left-20 top-20 z-10 flex h-[21px] w-[21px] items-center justify-center rounded-full bg-white">
            <CameraIcon />
          </div>
        </div>
      </div>
      <Input placeholder="Full Name" />
      <Input placeholder="Date of Birth" />
      <Input placeholder="Present Address" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Email" />
      <Input placeholder="Contact Information" />
    </form>
  );
}
