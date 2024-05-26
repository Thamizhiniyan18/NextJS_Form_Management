import JsonData from "./JsonDataForm";
import FormDataForm from "./FormDataForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServerActionForm from "./ServerActionForm";
import ServerActionFormData from "./ServerActionFormData";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Tabs defaultValue="json" className="w-[500px]">
        <TabsList>
          <TabsTrigger value="json">JSON Data</TabsTrigger>
          <TabsTrigger value="form">Form Data</TabsTrigger>
          <TabsTrigger value="serverAction">Server Action</TabsTrigger>
          <TabsTrigger value="serverActionFormData">
            Server Action Form Data
          </TabsTrigger>
        </TabsList>
        <TabsContent value="json">
          <JsonData />
        </TabsContent>
        <TabsContent value="form">
          <FormDataForm />
        </TabsContent>
        <TabsContent value="serverAction">
          <ServerActionForm />
        </TabsContent>
        <TabsContent value="serverActionFormData">
          <ServerActionFormData />
        </TabsContent>
      </Tabs>
    </div>
  );
}
