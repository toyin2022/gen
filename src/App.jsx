import Red from "./Red";
import Green from "./Green";
import Yellow from "./Yellow";
import Button from "./components/ui/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWandMagicSparkles, FaWizardsOfTheCoast } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import { BsMagic } from "react-icons/bs";

const App = () => {
  return (
    <>
      {/* <Red />
      <Yellow />
      <Green /> */}
      <Button bg="red" text="Red" icon={<FaWandMagicSparkles />} />
      <Button bg="green" text="Green" icon={<BsMagic />} />
      <Button bg="blue" text="Blue" icon={<FaWizardsOfTheCoast />} />

      <section
        data-aos="fade-right"
        style={{ height: "100vh", background: "red", color: "white" }}
      >
        Hello
        <div>
          <Button bg="red" text="Red" icon={<FaWandMagicSparkles />} />
          <Button bg="green" text="Green" icon={<BsMagic />} />
          <Button bg="blue" text="Blue" icon={<FaWizardsOfTheCoast />} />
        </div>
      </section>
      <section
        data-aos="zoom-in-up"
        style={{ height: "100vh", background: "green", color: "white" }}
      >
        <div className="" data-aos="fade-left">
          Hiiii Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
          vero atque dolorem officiis ratione itaque esse nisi libero, alias
          accusamus? Amet suscipit beatae consequatur magni? Veniam amet dicta
          repellat porro et commodi, ad, vero fugit corrupti corporis dolores
          adipisci fugiat dolore sapiente maxime cum dolorum molestias. Labore
          magni accusamus corporis?
          <Button bg="red" text="Red" icon={<FaWandMagicSparkles />} />
          <Button bg="green" text="Green" icon={<BsMagic />} />
          <Button bg="blue" text="Blue" icon={<FaWizardsOfTheCoast />} />
        </div>
      </section>
      <section
        data-aos="flip-down"
        style={{ height: "100vh", background: "blue", color: "white" }}
      >
        <div className="">
          Go Away Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reiciendis asperiores tenetur ipsa tempore illo consectetur sit eum
          provident iste. Nemo accusantium nesciunt assumenda aspernatur odio
          totam nobis sint reprehenderit numquam, impedit sunt perspiciatis
          delectus, reiciendis voluptatibus fugit. Quas cum facilis
          necessitatibus libero a sint et eveniet voluptatem est, mollitia unde
          quae ad dolorum quod accusamus tempora eaque. Quidem earum qui
          sapiente provident! Nostrum quos doloribus dolores vero at dolor
          cupiditate architecto facere, eveniet, quo numquam deserunt velit
          neque nam dolorem ipsum amet assumenda molestias. Repellat accusamus
          amet nesciunt labore. Illo reprehenderit veniam molestiae earum
          maiores ipsum, laudantium at id ducimus.
          <Button bg="red" text="Red" icon={<FaWandMagicSparkles />} />
          <Button bg="green" text="Green" icon={<BsMagic />} />
          <Button bg="blue" text="Blue" icon={<FaWizardsOfTheCoast />} />
        </div>
      </section>
      <ToastContainer stacked />
    </>
  );
};

export default App;
