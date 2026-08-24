# The High-Performance Messaging System You Don't Know Yet

## Table of Contents

- [Hook](#hook)
- [Transition](#transition) in 30–45 seconds — motivation
- [Meet NATS](#meet-nats) — explain Core NATS.
- [The key insight](#the-key-insight) — NATS isn't a Redis replacement; it's solving a different problem.
- Build something — a small real application using KV + messaging.
- Queue Groups — demonstrate distributed workload balancing.
- [Redis vs NATS](#redis-vs-nats) — now the differences actually mean something.
- When should you use which?
- [Conclusion](#conclusion)

### Hook

The microservice architecture is the paradigm that has dominated the tech field for over a decade, but it comes with its own set of problems. These microservices need to communicate with each other securely and at scale. 

We need service discovery, security, load balancing and a convenient messaging interface. That's when tools like Kubernetes, Istio, API gateways and consensus mechanisms and many other come in. The infrastructure burden is significant.

What if I told you that NATS could be the one solution you need? It's a lightweight, high-performance application that offers service discovery, load balancing, and granular zero-trust security directly into the communication fabric.

### Transition

Tools like Redis, Postgres and Kafka were built to do one thing well but as your system grows you may find yourself using those tools out of their comfort zone just to deal with the growing complexity. If you find yourself using Redis pub/sub or using Postgres tables and LISTEN/NOTIFY as a makeshift communication bus you may want to consider a real messaging system. Kafka is a big name in the world of event streaming but it has its operational burden.

### Meet NATS

NATS is a lightweight, high-performance messaging system engineered for low-latency communication, designed to move data between services quickly and reliably across cloud, multi-cloud, and edge environments.

### The Key Insight

There isn't really a strong overlap between Redis and NATS. Redis is fundamentally a low-latency data store, with primitives for storing, reading, and manipulating data. Postgres is a great transactional database. NATS, on the other hand, is first and foremost a high-performance communication system that can be extended with persistence when you need it.

In fact NATS with the Jetstream extension, has a stronger overlap with Kafka. But I'll skip an in depth comparison in this video.

NATS core is just the foundation. You can extend it with JetStream which adds persistance and reliable messaging delivery, and Key Value, which provides a key-value store on top of jetstream.
This means you can have ephemeral, low-latency messaging when you need it, while still having the option to persist messages and maintain state when you need that too. And because all of this is built around the same messaging system, you also get things like request-reply, hierarchical subject routing, and load balancing through queue groups.

These features make NATS an attractive alternative to Redis for certain workloads. Redis gives you a powerful data store with messaging capabilities. NATS gives you a high-performance messaging system that can also provide persistence and key-value semantics.

So rather than asking which one is faster, the better question is: which model fits your architecture better?

### Build Something

I promised you a messaging system with a Key-Value store and load balancing in a single lightweight system. Let's see how it works in practice.

---

### Redis vs NATS

|                   | Redis Pub/Sub                | NATS Core            | NATS + JetStream/KV     |
| ----------------- | ---------------------------- | -------------------- | ----------------------- |
| Primary model     | Data store + messaging       | Messaging            | Messaging + persistence |
| KV storage        | Native                       | —                    | Yes                     |
| Persistence       | RDB/AOF                      | No                   | Through JetStream       |
| Delivery          | At-most-once                 | At-most-once         | Configurable            |
| Request/Reply     | Not native                   | Native               | Native                  |
| Load balancing    | Not native in Pub/Sub        | Queue Groups         | Queue Groups            |
| Routing           | Channels/patterns            | Subjects + wildcards | Subjects + wildcards    |
| Work distribution | Requires additional patterns | Native               | Native                  |
| Messaging + KV    | Separate concepts            | Messaging first      | Unified stack           |

NATS Core doesn't magically make your messages durable. It's still at-most-once. But when you add JetStream, you can turn that ephemeral messaging layer into a persistent messaging system.

### Conclusion

NATS doesn't exactly replace Redis. But if you're building a distributed system that needs high-performance communication between microservices, key-value storage, persistence, and built-in load balancing, NATS might be exactly what you're looking for.

---

Redis is stateful in that it stores and maintains your data in memory, with optional persistence to disk which makes it a great choice when you actually need a database but it also means you're paying
for all that state even when all you want to do is move messages between services.

Redis pub/sub uses an at-most-once delivery model which basically means fire and forget when a message is published redis sends it to the subscribers that are currently listening but if a subscriber is disconnected when that message arrives the message is simply gone, there's no built-in mechanism to replay it later.
