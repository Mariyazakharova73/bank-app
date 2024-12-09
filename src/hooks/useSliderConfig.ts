import { useEffect, useState } from "react";
import { SLIDER_DATA } from "../utils/constants/slider";

const useSliderConfig = () => {
  const [sliderConfig, setSliderConfig] = useState(SLIDER_DATA[0]);

  useEffect(() => {
    const updateSliderConfig = () => {
      const width = window.innerWidth;

      let config = SLIDER_DATA[0];
      for (const breakpoint in SLIDER_DATA) {
        if (width > Number(breakpoint)) {
          config = SLIDER_DATA[breakpoint];
        }
      }

      setSliderConfig(config);
    };

    updateSliderConfig();
    window.addEventListener("resize", updateSliderConfig);
    return () => window.removeEventListener("resize", updateSliderConfig);
  }, []);

  return sliderConfig;
};

export default useSliderConfig;
