# Change Data Capture and the dual write problem

Your database changes constantly as user interact with your application.
How do you make sure all the changes propagate to the rest of your system?

Let' say somebody places an order in your web shop and you record it in the database.
But now, that same information needs to reach several other systems: your inventory
service, your checkout service, your data warehouse, and maybe many others.

What happens if ome of these services are unavailable or there is a network failure?

The database has the order but other services never receive the message. Now different
parts of your system are out of synch. Essentially we're trying to update different
systems in an atomic way to guarantee, every system sees the same truth.

This is the essence of the dual-write problem. Since the two systems are independent,
even if one transaction can be rolled back, there is not guarantee that you can reliably
roll back the other.

So the question is:
How do you make sure all the components of your system are kept in synch?

That's where Change Data Capture and the Oubox pattern come in.

In CDC we're reading the database log containing database changes and we're making
those available to downstream services. We're recording even changed we never
intended to expose to downstream services.

The outbox instead pattern is typically just a database table. We decide explicitly
what events are worth inserting in that table and relay downstream.

CDC records what changed in the database; the outbox records what the application considers a meaningful business event.

But neither eliminates the delivery problem, they move it.

We still need to reliably propagate changes from CDC or the Outbox to downstream consumers, and that can fail too.

The solution is to make every step durable and retryable: atomically record the change,
reliably publish it, and make consumers idempotent.
This way, a network failure or a temporary service outage doesn't mean the information is lost, it can be delivered and processed later.
