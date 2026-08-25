import { Node, Txt, Img, makeScene2D, Rect } from "@motion-canvas/2d";
import "@fontsource/inter/400.css";
import bg from "../svg/grabient.png"
import "@fontsource/cal-sans/400.css";
import kafkaIcon from "../svg/kafka-svgrepo-com.svg"
import postgresIcon from "../svg/postgresql-logo-svgrepo-com.svg"
import redisIcon from "../svg/redis-logo-svgrepo-com.svg"
import envoyIcon from "../svg/Envoy.svg"
import rabbitIcon from "../svg/RabbitMQ.svg"
import elasticlbIcon from "../svg/Elastic Load Balancing.svg"
import natsIcon from "../svg/nats.svg"


const background = "#212121";
const cardBackground = "#272727";
const cardBorder = "#414141";
const neonBlue = "#00f0ff";
const neonGlow = "#00e5ff";

export default makeScene2D(function* (view) {
  view.fill(background);

  view.add(
    <>
      <Img src={bg} height={1080} width={1080} />
      <Rect width={1040} height={1040} fill={"#fafafa"} radius={12} >

        <Txt x={0} y={-400} text={"Microservice Mesh"} fill={background} fontSize={72} fontFamily={"Cal sans"} />

        <Txt x={-350} y={-200} scale={2.6} text={"👉"} />
        <Img src={natsIcon} scale={3.4} x={0} y={-200} />


        <Img src={redisIcon} scale={0.1} x={-200} y={0} />
        <Txt x={-200} y={60} text={"Redis"} fill={background} fontSize={50} fontFamily={"Cal sans"} />

        <Img src={postgresIcon} scale={0.1} x={200} y={0} />
        <Txt x={200} y={60} text={"PostgreSQL"} fill={background} fontSize={50} fontFamily={"Cal sans"} />

        <Img src={envoyIcon} scale={.6} x={-200} y={150} />
        <Txt x={-200} y={230} text={"Envoy"} fill={background} fontSize={50} fontFamily={"Cal sans"} />

        <Img src={rabbitIcon} scale={.4} x={-200} y={340} />
        <Txt x={-200} y={400} text={"RabbitMQ"} fill={background} fontSize={50} fontFamily={"Cal sans"} />

        <Img src={elasticlbIcon} scale={.75} x={200} y={340} />
        <Txt x={200} y={400} text={"Load Balancing"} fill={background} fontSize={50} fontFamily={"Cal sans"} />

        <Img src={kafkaIcon} scale={0.2} x={200} y={150} />
        <Txt x={200} y={230} text={"Kafka"} fill={background} fontSize={50} fontFamily={"Cal sans"} />
      </Rect>
    </>
  )

});
