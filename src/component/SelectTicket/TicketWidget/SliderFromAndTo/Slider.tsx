import './slider.css'
import { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import React from "react";

export default function Slider() {
  
  const curTime = new Date();
  const timeMax = 24 * 60 - 1;
  const curMin = (curTime.getHours() % 12) * 60 + curTime.getMinutes();
  const [minTimeCaption, set_minTimeCaption] = useState("");
  const [maxTimeCaption, set_maxTimeCaption] = useState("");

  const handleTimeChange = (e: ChangeResult) => {
    let h = Math.floor(e.minValue / 60);
    let m = e.minValue % 60;
    let minH = h.toString().padStart(2, "0");
    let minM = m.toString().padStart(2, "0");
    set_minTimeCaption(minH + ":" + minM);

    let hh = Math.floor(e.maxValue / 60);
    let mm = e.maxValue % 60;
    let maxH = hh.toString().padStart(2, "0");
    let maxM = mm.toString().padStart(2, "0");
    set_maxTimeCaption(maxH + ":" + maxM);
  };
  return (
    <div>
      <MultiRangeSlider
        label={false}
        ruler={false}
        min={0}
        max={timeMax}
        minValue={curMin}
        maxValue={timeMax}
        step={1}
        minCaption={minTimeCaption}
        maxCaption={maxTimeCaption}
        onInput={handleTimeChange}
      />
    </div>
  );
}

