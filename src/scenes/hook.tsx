import { Circle, Img, makeScene2D, Rect } from "@motion-canvas/2d";
import "@fontsource/cal-sans/400.css";
import { background, blue, cardBackground } from "./colors";
import { all, createRef, createRefArray, delay } from "@motion-canvas/core";
import availability from "../svg/availability-svgrepo-com.svg"
import mobile from "../svg/mobile-app-svgrepo-com.svg"


export default makeScene2D(function* (view) {
  view.fill(background);

  const rectRef = createRef<Rect>();
  const circles = createRefArray<Circle>();

  view.add(
    <>
      <Rect ref={rectRef} size={1000} height={200} y={200} stroke={'gray'} fill={cardBackground} lineWidth={4} radius={12} lineDash={[10, 10]} opacity={0} />
      <Circle ref={circles} size={100} y={200} x={-400} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={200} x={-200} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={200} x={0} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={200} x={200} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={200} x={400} stroke={blue} lineWidth={4} opacity={0} />
    </>
  )

  const browserRef = createRef<Img>()
  view.add(<Img ref={browserRef} src={availability} x={-100} y={-350} opacity={0} scale={0.2} />)
  // yield* browserRef().opacity(1, 0.2)

  const mobileRef = createRef<Img>()
  view.add(<Img ref={mobileRef} src={mobile} x={100} y={-350} opacity={0} scale={0.2} />)
  // yield* mobileRef().opacity(1, 0.2)

  yield* rectRef().opacity(1, 0.5);
  yield* all(browserRef().opacity(1, 0.2), delay(0.15, mobileRef().opacity(1, 0.2)), ...circles.map((circle, idx) => delay(0.15 * idx, circle.opacity(1, 0.5))))


});


function getRandomDecimal(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}