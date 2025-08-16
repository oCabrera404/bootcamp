import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingInForm from "./components/sing-in-form";
import SingUpForm from "./components/sing-up-form";
import Header from "@/components/common/header";

const Authentication = async () => {
  return (
    <>
      <Header />
      <div className="flex w-full flex-col gap-6">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="sing-in">Entrar</TabsTrigger>
            <TabsTrigger value="sing-up">Criar Conta</TabsTrigger>
          </TabsList>
          <TabsContent value="sing-in" className="w-full">
            <Card>
              <CardContent className="grid gap-6">
                <SingInForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sing-up" className="w-full">
            <Card>
              <CardContent className="grid gap-6">
                <SingUpForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Authentication;
