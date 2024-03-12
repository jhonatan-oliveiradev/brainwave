import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="overflow-hidden pt-[4.7rem] lg:pt-[5.25rem]">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
