import { Button } from "@career-canvas/components/ui/button";
import { Input } from "@career-canvas/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@career-canvas/components/ui/tabs";

export function TabsComponent() {
  return (
    <Tabs className="mx-auto w-fit" defaultValue="email">
      <TabsList className="rounded-full">
        <TabsTrigger className="rounded-full" value="email">
          Email
        </TabsTrigger>
        <TabsTrigger className="rounded-full" value="phone">
          Phone Number
        </TabsTrigger>
        <TabsTrigger className="rounded-full" value="whatsApp">
          WhatsApp
        </TabsTrigger>
      </TabsList>
      <TabsContent className="flex flex-col gap-4" value="email">
        <Input className="rounded-full" placeholder="Email" />
        <Button className="rounded-full">Continue with Magic Link</Button>
      </TabsContent>
      <TabsContent className="flex flex-col gap-4" value="phone">
        <Input className="rounded-full" placeholder="Phone Number" />
        <Button className="rounded-full">Continue with Magic Link</Button>
      </TabsContent>
      <TabsContent className="flex flex-col gap-4" value="whatsApp">
        <Input className="rounded-full" placeholder="WhatsApp Number" />
        <Button className="rounded-full">Continue with Magic Link</Button>
      </TabsContent>
    </Tabs>
  );
}
