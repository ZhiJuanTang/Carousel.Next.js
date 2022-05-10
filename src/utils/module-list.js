import Carousel from "../components/Carousel";
import { Warnings } from "../components/Warnings";

export const Modules = (props) => {
  switch (props.module.acf_fc_layout) {
    case "warnings":
      return <Warnings data={props.module} />;
      break;
    case "square_slider":
      return props.module.type === "images" ? (
        <Carousel data={props.module} />
      ) : null;
      break;
    default:
      return null;
  }
};
