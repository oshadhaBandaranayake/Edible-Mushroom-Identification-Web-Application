import { URLS } from "../../constants/url";
import PageBase from "../PageBase/PageBase";

const Growth = () => {
  return (
    <PageBase
      url={URLS.GRWOTH}
      method={"POST"}
      title={"Growth Test"}
      description={
        "Explore our homepage to discover the first component, which excels at classifying edible mushroom species. Additionally, this versatile tool can also assist you in identifying the growth stage of mushrooms, making it an invaluable resource for both novice and experienced foragers alike."
      }
    />
  );
};

export default Growth;
