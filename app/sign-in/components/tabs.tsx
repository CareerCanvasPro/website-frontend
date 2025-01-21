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
      <TabsList>
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="phone">Phone Number</TabsTrigger>
        <TabsTrigger value="whatsApp">WhatsApp</TabsTrigger>
      </TabsList>
      <TabsContent className="flex flex-col gap-4" value="email">
        <Input placeholder="Email" />
        <Button variant="ghost">Continue with Magic Link</Button>
      </TabsContent>
      <TabsContent className="flex flex-col gap-4" value="phone">
        <Input placeholder="Phone Number" />
        <Button>Continue with Magic Link</Button>
      </TabsContent>
      <TabsContent className="flex flex-col gap-4" value="whatsApp">
        <Input placeholder="WhatsApp Number" />
        <Button>Continue with Magic Link</Button>
      </TabsContent>
    </Tabs>
  );
}
