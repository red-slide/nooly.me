import { GridBg } from "@/components/layouts/GridBg";
import { Header } from "@/components/layouts/Header";

export default function App() {
  return (
    <>
      <GridBg className="z-0 stroke-dark-4 fixed" />
      <Header className="z-50" />
    </>
  );
}
