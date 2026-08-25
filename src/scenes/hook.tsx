import { Node, Circle, CubicBezier, Img, Line, makeScene2D, Path, Rect, Txt } from "@motion-canvas/2d";
import "@fontsource/cal-sans/400.css";
import "@fontsource/inter/400.css";
import { background, blue, cardBackground } from "./colors";
import { all, createRef, createRefArray, delay, waitFor } from "@motion-canvas/core";
import availability from "../svg/availability-svgrepo-com.svg"
import mobile from "../svg/mobile-app-svgrepo-com.svg"
import grinningFace from "../svg/grinning-face-with-sweat-svgrepo-com.svg"
import kafkaIcon from "../svg/kafka-svgrepo-com.svg"
import postgresIcon from "../svg/postgresql-logo-svgrepo-com.svg"
import redisIcon from "../svg/redis-logo-svgrepo-com.svg"
import envoyIcon from "../svg/Envoy.svg"
import rabbitIcon from "../svg/RabbitMQ.svg"
import elasticlbIcon from "../svg/Elastic Load Balancing.svg"
import natsIcon from "../svg/nats.svg"


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
      <Txt ref={domain1Txt} text={"Domain A"} fontFamily={"Inter"} x={-360} y={380} fontSize={40} fill={"lightgray"} opacity={0} />

      <Rect ref={domain2} size={400} height={200} x={290} y={320} stroke={'gray'} lineWidth={4} radius={12} lineDash={[10, 10]} opacity={0} />
      <Txt ref={domain2Txt} text={"Domain B"} fontFamily={"Inter"} x={360} y={380} fontSize={40} fill={"lightgray"} opacity={0} />

      <Txt ref={microservices} text={"Microservices"} fontFamily={"Inter"} y={460} fontSize={40} fill={"lightgray"} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={-400} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={-200} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={0} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={200} stroke={blue} lineWidth={4} opacity={0} />
      <Circle ref={circles} size={100} y={300} x={400} stroke={blue} lineWidth={4} opacity={0} />
      <Rect ref={inputRectRef} x={0} y={-350} width={500} height={200} stroke={'gray'} lineWidth={4} radius={8} lineDash={[10, 10]} fill={cardBackground} opacity={0} />
      <Img ref={browserRef} src={availability} x={-100} y={-370} opacity={0} scale={0.2} />
      <Txt ref={browserTxtRef} x={-100} y={-290} text={"Web"} fontFamily={"Inter"} fontSize={28} fill={"lightgray"} opacity={0} />
      <Img ref={mobileRef} src={mobile} x={100} y={-370} opacity={0} scale={0.2} />
      <Txt ref={mobileTxtRef} x={105} y={-290} text={"Mobile"} fontFamily={"Inter"} fontSize={28} fill={"lightgray"} opacity={0} />
      <Line ref={line1} points={[[0, -250], [0, -100]]} lineWidth={4} stroke={'gray'} end={0} endArrow />
      <Rect ref={apiGwRef} size={400} height={100} y={-50} stroke={'gray'} fill={cardBackground} lineWidth={4} radius={12} lineDash={[10, 10]} opacity={0} />
      <Txt ref={apiGwTextRef} text={"API Gateway"} y={-50} fontFamily={"Inter"} fontSize={40} fill={"lightgray"} opacity={0} />
      <CubicBezier ref={path1} p0={[0, 0]} p1={[0, 200]} p2={[-400, -10]} p3={[-400, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
      <CubicBezier ref={path2} p0={[0, 0]} p1={[0, 200]} p2={[-140, 50]} p3={[-200, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
      <CubicBezier ref={path3} p0={[0, 0]} p1={[0, 200]} p2={[0, -10]} p3={[0, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
      <CubicBezier ref={path4} p0={[0, 0]} p1={[0, 200]} p2={[200, 50]} p3={[200, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
      <CubicBezier ref={path5} p0={[0, 0]} p1={[0, 200]} p2={[400, -10]} p3={[400, 250]} stroke="gray" lineWidth={4} endArrow end={0} />,
    </Node>
  )

  yield* waitFor(1)

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
  const caches = createRef<Txt>();
  const eventStreaming = createRef<Txt>();
  view.add(
    <Rect ref={textContainer1} layout direction={"column"} alignItems={"start"}>
      <Txt ref={discovery} x={0} y={-220} text={"service discovery"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />
      <Txt ref={secureComms} x={0} y={-160} text={"secure comms"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />
      <Txt ref={loadBalancing} x={0} y={-100} text={"load balancing"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />
      <Txt ref={messaging} x={0} y={-40} text={"pub/sub queues"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />
      <Txt ref={caches} x={0} y={20} text={"caches"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />
      <Txt ref={eventStreaming} x={0} y={80} text={"event streaming"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />
    </Rect>
  )

  yield* all(
    delay(0.5, discovery().opacity(1, 0)),
    delay(1.25, secureComms().opacity(1, 0)),
    delay(2.25, loadBalancing().opacity(1, 0)),
    delay(3, messaging().opacity(1, 0)),
    delay(3.75, caches().opacity(1, 0)),
    delay(4.5, eventStreaming().opacity(1, 0))
  )

  yield* all(
    waitFor(5),
    delay(4, textContainer1().opacity(0, 0.5))
  )

  const textContainer2 = createRef<Node>();

  const redis = createRef<Node>();
  const redisImg = createRef<Img>();

  const postgres = createRef<Txt>();
  const postgresImg = createRef<Img>();

  const kafkaImg = createRef<Img>();
  const kafka = createRef<Txt>();

  const envoyImg = createRef<Img>();
  const envoy = createRef<Txt>();

  const rabbitImg = createRef<Img>();
  const rabbit = createRef<Txt>();

  const elasticlbImg = createRef<Img>();
  const elasticlb = createRef<Txt>();

  view.add(
    <Node ref={textContainer2} y={-120}>

      <Img ref={redisImg} src={redisIcon} scale={0.1} x={-150} y={-80} opacity={0} />
      <Txt ref={redis} x={-150} y={0} text={"Redis"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />

      <Img ref={postgresImg} src={postgresIcon} scale={0.1} x={150} y={-80} opacity={0} />
      <Txt ref={postgres} x={150} y={0} text={"PostgreSQL"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />

      <Img ref={envoyImg} src={envoyIcon} scale={.6} x={-380} y={100} opacity={0} />
      <Txt ref={envoy} x={-380} y={170} text={"Envoy"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />

      <Img ref={rabbitImg} src={rabbitIcon} scale={.4} x={-130} y={100} opacity={0} />
      <Txt ref={rabbit} x={-130} y={170} text={"RabbitMQ"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />

      <Img ref={elasticlbImg} src={elasticlbIcon} scale={.75} x={130} y={100} opacity={0} />
      <Txt ref={elasticlb} x={130} y={170} text={"ElasticLB"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />

      <Img ref={kafkaImg} src={kafkaIcon} scale={0.2} x={350} y={100} opacity={0} />
      <Txt ref={kafka} x={350} y={170} text={"Kafka"} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} opacity={0} />

    </Node>
  )

  yield* all(
    redisImg().opacity(1, 0),
    redis().opacity(1, 0),
    delay(0.75, postgresImg().opacity(1, 0)),
    delay(0.75, postgres().opacity(1, 0))
  )

  yield* waitFor(4)

  const face1 = createRef<Img>();
  const face2 = createRef<Img>();
  const emoji = createRef<Node>();
  const reliability = createRef<Txt>();
  const delivery = createRef<Txt>();
  view.add(
    <Node ref={emoji}>
      <Img ref={face1} src={grinningFace} scale={0.1} x={-150} y={-200} />
      <Img ref={face2} src={grinningFace} scale={0.1} x={150} y={-200} />
      <Txt text={"*not like  this pls"} x={350} y={-200} fill={"lightgray"} fontSize={30} fontFamily={"Inter"} />
      <Txt ref={reliability} text={"❌ reliability"} x={0} y={0} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} />
      <Txt ref={delivery} text={"❌ delivery guarantees"} x={0} y={70} fill={"lightgray"} fontSize={50} fontFamily={"Inter"} />
    </Node>
  )

  yield* emoji().opacity(1, 0);
  yield* waitFor(3);

  yield* all(
    reliability().opacity(0, 0),
    delivery().opacity(0, 0),

    delay(.5, envoyImg().opacity(1, 0)),
    delay(.5, envoy().opacity(1, 0)),
    delay(1.25, envoyImg().opacity(1, 0)),
    delay(1.25, envoy().opacity(1, 0)),
    delay(2, rabbitImg().opacity(1, 0)),
    delay(2, rabbit().opacity(1, 0)),
    delay(2.75, elasticlbImg().opacity(1, 0)),
    delay(2.75, elasticlb().opacity(1, 0)),
    delay(3.5, kafkaImg().opacity(1, 0)),
    delay(3.5, kafka().opacity(1, 0)),
  )

  yield* waitFor(3);

  const natsImg = createRef<Img>()
  view.add(
    <Img ref={natsImg} src={natsIcon} scale={4} x={1400} y={0} />
  )
  yield* all(emoji().x(-2000, 1), textContainer2().x(-2000, 1), delay(0.3, natsImg().x(0, 1)));
  yield* waitFor(3);
  yield* natsImg().y(-380, 1)

  const natsTable = createRef<Txt>()
  const core = createRef<Txt>()
  const jetstream = createRef<Txt>()
  const kv = createRef<Txt>()
  const tableLine1 = createRef<Line>()
  const tableLine2 = createRef<Line>()
  const tableLine3 = createRef<Line>()
  const tableLine4 = createRef<Line>()
  const tableRow1 = createRef<Rect>()
  const tableRow2 = createRef<Rect>()
  const tableRow3 = createRef<Rect>()
  const tableRow4 = createRef<Rect>()

  view.add(
    <>
      <Rect ref={natsTable} layout direction={'row'} gap={100} justifyContent={"space-between"} width={1200} x={0} y={-180} opacity={0}>
        <Txt ref={core} marginLeft={30} text={"Feature"} fill={"lightgray"} fontFamily={"Inter"} />
        <Txt ref={core} marginLeft={30} text={"Core"} fill={"lightgray"} fontFamily={"Inter"} />
        <Txt ref={jetstream} marginLeft={40} text={"JetStream"} fill={"lightgray"} fontFamily={"Inter"} />
        <Txt ref={kv} marginRight={100} text={"Key-Value"} fill={"lightgray"} fontFamily={"Inter"} />
      </Rect>
      <Rect layout direction={"column"} gap={60} width={1200} x={0} y={100}>
        <Rect ref={tableRow1} layout direction={"row"} gap={100} justifyContent={"start"} opacity={0} >
          <Txt fontSize={40} text={"Messaging"} fill={"lightgray"} fontFamily={"Inter"} />
          <Txt fontSize={40} marginLeft={60} text={"✅"} fill={"lightgray"} fontFamily={"Inter"} />
          <Txt fontSize={40} marginLeft={140} text={"✅"} fill={"lightgray"} fontFamily={"Inter"} />
          <Txt fontSize={40} marginLeft={150} text={"✅"} fill={"lightgray"} fontFamily={"Inter"} />
        </Rect>
        <Rect ref={tableRow2} layout direction={"row"} gap={100} justifyContent={"start"} opacity={0} >
          <Txt fontSize={40} text={"Persistence"} fill={"lightgray"} fontFamily={"Inter"} />
          <Txt fontSize={40} marginLeft={50} text={"❌"} fill={"lightgray"} fontFamily={"Inter"} />
          <Txt fontSize={40} marginLeft={135} text={"✅"} fill={"lightgray"} fontFamily={"Inter"} />
        </Rect>
        <Rect ref={tableRow3} layout direction={"row"} gap={100} justifyContent={"start"} opacity={0} >
          <Txt fontSize={40} text={"Delivery"} fill={"lightgray"} fontFamily={"Inter"} />
          <Txt fontSize={30} marginTop={10} marginLeft={45} text={"at-most-once"} fill={"lightgray"} fontFamily={"Inter"} />
          <Txt fontSize={30} marginTop={10} marginLeft={0} text={"at-least-once"} fill={"lightgray"} fontFamily={"Inter"} />
        </Rect>
        <Rect ref={tableRow4} layout direction={"row"} gap={100} justifyContent={"start"} opacity={0} >
          <Txt fontSize={40} text={"Load Bal."} fill={"lightgray"} fontFamily={"Inter"} />
          <Txt fontSize={30} marginTop={10} marginLeft={25} text={"queue groups"} fill={"lightgray"} fontFamily={"Inter"} />
          <Txt fontSize={30} marginTop={10} marginRight={10} text={"queue groups"} fill={"lightgray"} fontFamily={"Inter"} />
        </Rect>
      </Rect>
      <Line ref={tableLine1} points={[[-360, -200], [-360, 400]]} lineWidth={4} stroke={'gray'} end={0} />
      <Line ref={tableLine2} points={[[-60, -200], [-60, 400]]} lineWidth={4} stroke={'gray'} end={0} />
      <Line ref={tableLine3} points={[[240, -200], [240, 400]]} lineWidth={4} stroke={'gray'} end={0} />
      <Line ref={tableLine4} points={[[-600, -120], [600, -120]]} lineWidth={4} stroke={'gray'} end={0} />
    </>
  )

  yield* all(
    natsTable().opacity(1, 0.4),
    delay(0.1, tableLine1().end(1, 1)),
    delay(0.1, tableLine2().end(1, 1)),
    delay(0.1, tableLine3().end(1, 1)),
    delay(0.1, tableLine4().end(1, 1)),
    delay(2.5, tableRow1().opacity(1, 0.2)),
    delay(3.5, tableRow2().opacity(1, 0.2)),
    delay(4.5, tableRow3().opacity(1, 0.2)),
    delay(5.5, tableRow4().opacity(1, 0.2)),
  )


});


function getRandomDecimal(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}