---
episode: en/eoq-optimal-bestillingsmengde
kind: sporsmal
transcriptSource: manuell
worktitle: "EOQ – economic order quantity"
subtitle: "Recording script – order, transitions and where the graphics go"
description: "Script for the Learn something new episode on EOQ: the two costs that pull in opposite directions, the 1913 formula, why both costs are equal at the optimum, why the curve is flat – and what lean does to the calculation."
updated: 2026-10-02
---

*This is the script, written before recording. The text below is what gets said,
and the lines in italics are production cues – they are not read aloud. Once the
episode is recorded, this text is replaced by what was actually said.*

*Length: allow 15–17 minutes.*

*The episode has two high points: that the two costs are exactly equal at the
optimum, and that the curve is flat around the bottom. The second is the more
useful one, and it is almost always left out when EOQ is taught. Do not cut it.*

## The opening

*(Pick up the thread from the MRP episode, but phrase it so it also works for
someone who has not seen it.)*

You know how much you need in a year. Say a hundred thousand screws.

The question is how many to take at a time.

And the answer is neither "as many as possible" nor "as few as possible". There is a
number, and it has been known since 1913.

Today we are going to work it out – and see why hitting it exactly matters less than
most people think.

## The two costs

*(Graphic: the two columns, side by side.)*

The whole problem is that two costs pull in opposite directions.

**Small, frequent orders** give you cheap inventory and expensive ordering. Little
capital tied up in goods, little space in use. But many orders a year – and every
order costs administration, freight and setup.

**Large, infrequent orders** give you cheap ordering and expensive inventory. Few
orders, discounts, a full truck. But a lot of capital tied up, and space, shrinkage,
insurance and obsolescence.

*(The point of the figure.)*

And notice that neither column is wrong. Both are sensible – and they are sensible for
opposite reasons.

When two costs behave like that, where one falls as the other rises, there is a point
where the sum is lowest.

Finding that point is the whole of EOQ.

## The 1913 formula

*(Graphic: the formula, with D, S and H explained.)*

**Ford Whitman Harris** published the answer in 1913, in an article with the sober
title "How Many Parts to Make at Once", in the magazine *Factory*.

He was an engineer, an inventor and later a patent lawyer – and had no formal education
beyond secondary school.

*(The curious twist. Take it – it plays well on video.)*

And the story has a strange twist.

The formula became known as the **Wilson formula**, after the consultant R. H. Wilson,
who used and analysed it thoroughly. Harris's own article went missing – and was not
rediscovered until 1988.

Three quarters of a century after it was written.

*(Now the formula. Three letters.)*

The formula itself needs three numbers.

**D** is annual demand, in units.

**S** is what it costs to place one order – administration, freight, machine setup. And
note: per order, not per unit.

**H** is what it costs to hold one unit for a year – cost of capital, space, shrinkage,
insurance.

And then: EOQ is the square root of two times D times S, divided by H.

*(Stop at the square root – it tells you something.)*

It is worth pausing at that square root for a moment, because it says something:

Double the demand and you do not double the batch. You multiply it by 1.41.

## A worked example

*(Graphic: the three numbers, and the answer.)*

Take the screws.

Demand: a hundred thousand screws a year. That is D, from the production plan.

Order cost: five hundred kroner. That is S – and it costs the same whether you order a
hundred or a hundred thousand.

Holding cost: one krone per screw per year. That is H.

*(Work it out out loud.)*

Two times a hundred thousand times five hundred, divided by one. That is a hundred
million. The square root of a hundred million is ten thousand.

Order ten thousand screws at a time. So ten times a year.

*(Say the thing that is easy to miss.)*

And notice how little is needed. Three numbers, one square root.

The hard part of EOQ is not the mathematics. It is working out what the order cost and
the holding cost actually are in your own organisation – and those numbers are rarely
sitting ready in any system.

## The elegant part

*(Graphic: the two costs at 10,000. This is the first high point.)*

Now work out what the two costs come to at ten thousand, and something neat happens.

**Ordering cost:** a hundred thousand divided by ten thousand is ten orders. Times five
hundred kroner. Five thousand kroner.

**Holding cost:** average inventory is half the batch, so five thousand screws. Times one
krone. Five thousand kroner.

*(Pause.)*

Exactly equal.

And that is no coincidence. It always holds.

If the two costs differ, you are not at the optimum – and that gives you a quick way to
check an answer without running the formula again.

Together: ten thousand kroner a year.

## The curve is flat

*(Graphic: the sensitivity table. This is the second high point, and the most
important thing in the episode.)*

And now the most useful insight, which is almost always left out when EOQ is taught.

What does it cost to be wrong?

*(Go through the three middle rows. Not the whole table.)*

Order seven thousand five hundred instead of ten thousand – twenty-five per cent too
little – and it costs you four point two per cent.

Order twelve thousand five hundred, twenty-five per cent too much, and it costs you two
and a half per cent.

*(The point. Let it stand.)*

The curve is flat around the bottom.

And that has a practical consequence people rarely draw: you do **not** need precise
figures for holding cost and order cost. A rough estimate gives you a decision that is
good enough.

It is only when you are out by a factor of four – two thousand five hundred against ten
thousand – that it really hurts. That is a hundred and twelve per cent over.

*(Turn the objection around.)*

And this is worth saying out loud, because it reverses a common argument.

"We don't know what our holding cost actually is" is not a reason to avoid using EOQ.

It is a reason to use an estimate and move on.

## The calculator

*(Point to the tool here, while the flat curve is fresh.)*

This is on the site as a calculator. You put in your own three numbers, and it gives you
the batch and how the cost splits.

It also has a field for the batch you actually order today, and tells you what the
deviation costs you.

Try setting it to seven thousand five hundred, and then to twelve thousand five hundred.
You will see the total barely moves.

## What the model assumes

*(Graphic: the four assumptions.)*

The formula is so simple because it assumes a lot away. Four things.

**Steady, known demand.** It breaks down for seasonal goods, promotions and trends –
anything that swings.

**Instant delivery.** Lead time exists. It is handled with a reorder point, not by EOQ.

**A fixed price per unit.** Quantity discounts make the curve lumpy, and the optimum can
jump.

**No limit on space or capital.** The warehouse has a wall, and the budget has a limit.

*(But – and this matters.)*

It is easy to dismiss the model because of these.

But remember the flat curve: even when the assumptions are badly broken, EOQ usually
gives you a batch that is closer to right than the gut feeling of whoever is ordering.

The model is a direction, not a verdict.

## The lean attack

*(Graphic: the four lines where S is cut. This is the best part of the episode.)*

And here it gets interesting, because this is where EOQ meets Toyota.

EOQ takes the order cost as a given, and finds the best batch for it.

The lean tradition does something quite different. It refuses to accept the number, and
attacks it.

*(Go through the four lines.)*

With an order cost of five hundred kroner, EOQ is ten thousand. Ten orders a year, and a
total cost of ten thousand kroner.

Cut it to a hundred and twenty-five, and EOQ falls to five thousand. Twenty orders, total
cost five thousand.

Cut it to fifty kroner, and EOQ is three thousand one hundred and sixty-two. Over thirty
orders a year.

And at five kroner: a thousand units at a time, a hundred orders a year, and the cost
down to a tenth of where we started.

*(The point. This is the whole link between the two traditions.)*

A cut from five hundred to fifty kroner makes EOQ fall by sixty-eight per cent.

And that is the entire point of changeover work in lean. Spend a day getting a machine
changeover from four hours down to ten minutes, and you have not just saved those hours.

You have moved the optimum, and made small batches viable.

*(The conclusion, which surprises many.)*

So lean and EOQ are not in disagreement.

Lean changes one of the inputs, and lets the formula give a new answer.

## And the link to bullwhip

*(Short. A reminder, not a new section.)*

Finally, a reminder that every optimisation has a price somewhere else.

Large batches are exactly what the bullwhip episode pointed to as cause number two: when
you order in boxes and pallets rather than by consumption, the supplier sees swings that
do not exist.

EOQ gives you the cheapest batch **for you**, measured on your two costs.

That calculation does not include what the batch costs the tier above.

And that is precisely why smaller, more frequent deliveries show up as a measure against
bullwhip. It is the same trade-off – seen from the chain instead of from the warehouse.

## Summing up

*(Graphic: the points.)*

Six things to take with you.

That EOQ weighs order cost against holding cost, and that both are real.

That the formula is the square root of two times demand times order cost, divided by
holding cost.

That the two costs are equal at the optimum, and that this is a quick check.

That the curve is flat – twenty-five per cent wrong costs a few per cent, so rough
estimates will do.

That the model assumes steady demand and instant delivery, and that neither is true.

And that lean does not disagree with the formula – it cuts the order cost, and lets the
answer get smaller on its own.

## The ending

*(Back to the opening.)*

So: a hundred thousand screws a year. How many at a time?

Ten thousand. But just as importantly – whether you order seven thousand or twelve
thousand, it costs you a few per cent.

It is one of the rare occasions where the mathematics says you do not need to be precise.

The calculator is on sporretimen.no.

*(End card.)*
