import { URLS } from "../../constants/url";
import PageBase from "../PageBase/PageBase";

const Classification = () => {
  return (
    <PageBase
      url={URLS.CLASSIFICATION}
      method={"POST"}
      title={"Classification Test"}
      description={
        "You'll find information about our first component, which is dedicated to classifying edible mushroom species. This cutting-edge component can accurately identify various species, including the delectable oyster mushroom and other savory varieties."
      }
    />
  );
};

export default Classification;
