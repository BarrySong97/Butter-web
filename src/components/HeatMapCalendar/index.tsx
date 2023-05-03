import { FC, useEffect, useRef } from "react";
import CalHeatmap from "cal-heatmap";
import "cal-heatmap/cal-heatmap.css";
import { YearMonthObject } from "../../utils/date";
export interface HeatMapCalendarProps {
  data?: YearMonthObject[];
}
const HeatMapCalendar: FC<HeatMapCalendarProps> = ({ data }) => {
  const calInstanceRef = useRef(new CalHeatmap());
  const calHeatmapRef = useRef<HTMLDivElement>(null);
  const dates = data?.reduce((acc, cur) => {
    acc.push(...cur.dates);
    return acc;
  }, [] as Date[]);
  const year = dates?.[0]?.getFullYear();
  useEffect(() => {
    if (data) {
      calInstanceRef.current.paint({
        data: {
          source: dates?.map((v) => ({
            date: v.toISOString(),
            value: 10,
          })),
          x: "date",
          y: "value",
        },
        date: {
          start: new Date(`${year}-01-01`),
          locale: "zh",
        },
        range: 12,
        scale: {
          color: {
            // Try some values: Purples, Blues, Turbo, Magma, etc ...
            scheme: "Cool",
            type: "linear",
            domain: [0, 30],
          },
        },
        domain: {
          type: "month",
          // gutter: 10,
        },
        subDomain: { type: "day", label: "DD", width: 15, height: 15 },
      });
    }
  }, [data]);
  return <div id="cal-heatmap" className="mb-6" ref={calHeatmapRef}></div>;
};

export default HeatMapCalendar;