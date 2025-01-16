import { URLS } from "../../constants/url";
import PageBase from "../PageBase/PageBase";

const Edible = () => {
  return (
    <PageBase
      url={URLS.EDIBLE}
      method={"POST"}
      title={"Edibility Test"}
      description={
        " Our homepage features a remarkable component designed to help you identify whether a mushroom is edible or not. This tool is a valuable resource for mushroom enthusiasts, ensuring that you can safely distinguish between delicious, edible species and potentially harmful ones."
      }
    />
  );
};

export default Edible;
