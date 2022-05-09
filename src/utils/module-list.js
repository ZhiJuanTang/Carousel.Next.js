import { Warnings } from "../components/Warnings";

export const Modules = (props) => {
  switch (props.module.acf_fc_layout) {
    case "warnings":
      return <Warnings data={props.module} />;
      break;
      {
        /* TODO extend with a new case and add your component, by using the acf_fc_layout key */
      }
    default:
      return null;
  }
};
