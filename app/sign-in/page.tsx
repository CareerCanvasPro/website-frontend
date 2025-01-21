import { AppleIcon } from "@career-canvas/components/icons/apple";
import { FacebookIcon } from "@career-canvas/components/icons/facebook";
import { GithubIcon } from "@career-canvas/components/icons/github";
import { GoogleIcon } from "@career-canvas/components/icons/google";
import { CareerCanvasLogo } from "@career-canvas/components/logos/career-canvas";
import { Progress } from "@career-canvas/components/ui/progress";

import { TabsComponent } from "./components/tabs";

export default function SignInPage() {
  return (
    <main>
      <TabsComponent />
      <GithubIcon />
      <FacebookIcon />
      <AppleIcon />
      <GoogleIcon />
      <CareerCanvasLogo />
      <Progress value={50} className="w-1/2" />
    </main>
  );
}
