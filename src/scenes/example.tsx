import { makeScene2D, Rect, Txt } from "@motion-canvas/2d";
import "@fontsource/cal-sans/400.css";

const background = "#212121";
const cardBackground = "#272727";
const cardBorder = "#414141";
const neonBlue = "#00f0ff";
const neonGlow = "#00e5ff";

export default makeScene2D(function* (view) {
  view.fill(background);

  view.add(<Card />);

  yield;
});

function Card() {
  return (
    <>
      <Txt text="THEY CHANGED" fontFamily="Cal Sans" fontSize={120} fontWeight={900} letterSpacing={-1} fill="white" />
      <Rect
        x={-500}
        y={-400}
        width={400}
        height={200}
        fill={neonGlow}
        radius={8}
        shadowColor={neonBlue}
        shadowBlur={60}
        shadowOffset={[0, 0]}
      >
        <Txt text="CODE" fontFamily="Cal Sans" fontSize={120} fontWeight={900} letterSpacing={-1} />
      </Rect>
    </>
  );
}
