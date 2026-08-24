import { Node, Circle, CubicBezier, Img, Line, makeScene2D, Path, Rect, Txt } from "@motion-canvas/2d";
import "@fontsource/cal-sans/400.css";
import { background, blue, cardBackground } from "./colors";
import { all, createRef, createRefArray, delay, waitFor } from "@motion-canvas/core";
import availability from "../svg/availability-svgrepo-com.svg"
import mobile from "../svg/mobile-app-svgrepo-com.svg"
import grinningFace from "../svg/grinning-face-with-sweat-svgrepo-com.svg"
import kafkaIcon from "../svg/kafka-svgrepo-com.svg"
import postgresIcon from "../svg/postgresql-logo-svgrepo-com.svg"


export default makeScene2D(function* (view) {
  view.fill(background);

  const content = createRef<Node>();
  const rectRef = createRef<Rect>();
  const domain1 = createRef<Rect>();
  const domain2 = createRef<Rect>();
  const microservices = createRef<Txt>();
  const domain1Txt = createRef<Txt>();
  const domain2Txt = createRef<Txt>();
  const circles = createRefArray<Circle>();
  const inputRectRef = createRef<Rect>();
  const browserRef = createRef<Img>();
  const browserTxtRef = createRef<Txt>();
  const mobileRef = createRef<Img>();
  const mobileTxtRef = createRef<Txt>();
  const line1 = createRef<Line>();
  const apiGwRef = createRef<Rect>();
  const apiGwTextRef = createRef<Txt>();
  const path1 = createRef<Path>();
  const path2 = createRef<Path>();
  const path3 = createRef<Path>();
  const path4 = createRef<Path>();
  const path5 = createRef<Path>();

  view.add(
    <Node ref={content}>
      <Rect ref={rectRef} size={1000} height={300} y={350} stroke={'gray'} fill={cardBackground} lineWidth={4} radius={12} lineDash={[10, 10]} opacity={0} />

      <Rect ref={domain1} size={550} height={200} x={-200} y={320} stroke={'gray'} lineWidth={4} radius={12} lineDash={[10, 10]} opacity={0} />
      <Txt ref={domain1Txt} text={"Domain A"} fontFamily={"Cal sans"} x={-360} y={380} fontSize={40} fill={"lightgray"} opacity={0} />

      <Rect ref={domain2} size={400} height={200} x={290} y={320} stroke={'gray'} lineWidth={4} radius={12} lineDash={[10, 10]} opacity={0} />
      <Txt ref={domain2Txt} text={"Domain B"} fontFamily={"Cal sans"} x={360} y={380} fontSize={40} fill={"lightgray"} opacity={0} />

      <Txt ref={microservices} text={"Microservices"} fontFamily={"Cal sans"} y={460} fontSize={40} fill={"lightgray"} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={-400} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={-200} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={0} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={200} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={400} stroke={blue} lineWidth={4} opacity={0} />
      <Rect ref={inputRectRef} x={0} y={-350} width={500} height={200} stroke={'gray'} lineWidth={4} radius={8} lineDash={[10, 10]} fill={cardBackground} opacity={0} />
      <Img ref={browserRef} src={availability} x={-100} y={-370} opacity={0} scale={0.2} />
      <Txt ref={browserTxtRef} x={-105} y={-290} text={"Web"} fontFamily={"Cal sans"} fontSize={28} fill={"lightgray"} opacity={0} />
      <Img ref={mobileRef} src={mobile} x={100} y={-370} opacity={0} scale={0.2} />
      <Txt ref={mobileTxtRef} x={105} y={-290} text={"Mobile"} fontFamily={"Cal sans"} fontSize={28} fill={"lightgray"} opacity={0} />
      <Line ref={line1} points={[[0, -250], [0, -100]]} lineWidth={4} stroke={'gray'} end={0} endArrow />
      <Rect ref={apiGwRef} size={400} height={100} y={-50} stroke={'gray'} fill={cardBackground} lineWidth={4} radius={12} lineDash={[10, 10]} opacity={0} />
      <Txt ref={apiGwTextRef} text={"API Gateway"} y={-50} fontFamily={"Cal sans"} fontSize={40} fill={"lightgray"} opacity={0} />
      <CubicBezier ref={path1} p0={[0, 0]} p1={[0, 200]} p2={[-400, -10]} p3={[-400, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
      <CubicBezier ref={path2} p0={[0, 0]} p1={[0, 200]} p2={[-140, 50]} p3={[-200, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
      <CubicBezier ref={path3} p0={[0, 0]} p1={[0, 200]} p2={[0, -10]} p3={[0, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
      <CubicBezier ref={path4} p0={[0, 0]} p1={[0, 200]} p2={[200, 50]} p3={[200, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
      <CubicBezier ref={path5} p0={[0, 0]} p1={[0, 200]} p2={[400, -10]} p3={[400, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
    </Node>
  )

  yield* all(
    delay(0.2, path1().end(1, 1)),
    delay(0.25, path2().end(1, 1)),
    delay(0.3, path3().end(1, 1)),
    delay(0.35, path4().end(1, 1)),
    delay(0.4, path5().end(1, 1)),
    apiGwRef().opacity(1, 0.5),
    delay(0.1, apiGwTextRef().opacity(1, 0.5)),
    line1().end(1, 0.5),
    inputRectRef().opacity(1, 0.2),
    delay(0.15, browserRef().opacity(1, 0.5)),
    delay(0.15, browserTxtRef().opacity(1, 0.5)),
    rectRef().opacity(1, 1),
    domain1().opacity(1, 1),
    domain1Txt().opacity(1, 1),
    delay(0.25, domain2().opacity(1, 1)),
    delay(0.25, domain2Txt().opacity(1, 1)),
    delay(0.25, mobileRef().opacity(1, 0.5)),
    delay(0.25, mobileTxtRef().opacity(1, 0.5)),
    delay(0.1, microservices().opacity(1, 0.5)),
    ...circles.map((circle, idx) => delay(0.15 * idx, circle.opacity(1, 0.5)))
  );


  yield* waitFor(3);
  yield* content().opacity(0, .25);

  const textContainer1 = createRef<Node>();
  const discovery = createRef<Txt>();
  const secureComms = createRef<Txt>();
  const loadBalancing = createRef<Txt>();
  const messaging = createRef<Txt>();
  view.add(
    <Node ref={textContainer1}>
      <Txt ref={discovery} x={0} y={-220} text={"service discovery"} fill={"lightgray"} fontSize={50} fontFamily={"Cal sans"} opacity={0} />
      <Txt ref={secureComms} x={0} y={-160} text={"secure comms"} fill={"lightgray"} fontSize={50} fontFamily={"Cal sans"} opacity={0} />
      <Txt ref={loadBalancing} x={0} y={-100} text={"load balancing"} fill={"lightgray"} fontSize={50} fontFamily={"Cal sans"} opacity={0} />
      <Txt ref={messaging} x={0} y={-40} text={"messaging interface"} fill={"lightgray"} fontSize={50} fontFamily={"Cal sans"} opacity={0} />
    </Node>
  )

  yield* all(
    delay(0.5, discovery().opacity(1, 0)),
    delay(1.25, secureComms().opacity(1, 0)),
    delay(2.25, loadBalancing().opacity(1, 0)),
    delay(3, messaging().opacity(1, 0))
  )

  yield* all(
    waitFor(5),
    delay(4, textContainer1().opacity(0, 0.5))
  )

  const textContainer2 = createRef<Node>();
  const redis = createRef<Node>();

  const postgres = createRef<Txt>();
  const postgresImg = createRef<Img>();
  const kafkaImg = createRef<Img>();
  const kafka = createRef<Txt>();
  view.add(
    <Node ref={textContainer2}>
      <Txt ref={redis} x={-300} y={0} text={"Redis"} fill={"lightgray"} fontSize={50} fontFamily={"Cal sans"} opacity={0} />

      <Img ref={postgresImg} src={postgresIcon} scale={0.1} x={0} y={-80} opacity={0} />
      <Txt ref={postgres} x={0} y={0} text={"PostgreSQL"} fill={"lightgray"} fontSize={50} fontFamily={"Cal sans"} opacity={0} />

      <Img ref={kafkaImg} src={kafkaIcon} scale={0.2} x={300} y={-80} opacity={0} />
      <Txt ref={kafka} x={300} y={0} text={"Kafka"} fill={"lightgray"} fontSize={50} fontFamily={"Cal sans"} opacity={0} />
    </Node>
  )

  yield* all(
    redis().opacity(1, 0),
    delay(0.75, postgresImg().opacity(1, 0)),
    delay(0.75, postgres().opacity(1, 0)),
    delay(1.5, kafkaImg().opacity(1, 0)),
    delay(1.5, kafka().opacity(1, 0)),
  )

  yield* waitFor(5);


  const emoji = createRef<Node>();
  view.add(
    <Node ref={emoji}>
      <Img src={grinningFace} scale={0.2} x={0} y={200} />
      <Txt text={"not like  this pls"} x={0} y={340} fill={"lightgray"} fontSize={50} fontFamily={"Cal sans"} />
    </Node>
  )

  yield* emoji().opacity(1, 0);
  yield* waitFor(1);

});


function getRandomDecimal(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}