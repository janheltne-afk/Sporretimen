---
episode: en/mrp-produksjonsplanlegging
kind: sporsmal
transcriptSource: manuell
worktitle: "MRP in production planning"
subtitle: "Recording script – order, transitions and where the graphics go"
description: "Script for the Learn something new episode on MRP: independent versus dependent demand, the three inputs, explosion and netting, lead time offsetting – and why a delivery in week 8 is decided in week 2."
updated: 2026-10-02
---

*This is the script, written before recording. The text below is what gets said,
and the lines in italics are production cues – they are not read aloud. Once the
episode is recorded, this text is replaced by what was actually said.*

*Length: allow 16–18 minutes.*

*This episode has one calculation carrying it. Take your time with the table – it
is the whole point, and it can stand you going slowly, one row at a time.*

*If you saw the lean episode: it called MRP "push" logic. This episode is the
answer to what that actually means.*

## The opening

*(A concrete situation first. No definition.)*

A customer calls in week five. They want a hundred bookshelves delivered in week
eight.

You have to say no.

And it is not because you are slow, or because someone cannot be bothered. It is
because the answer is already decided – and it is in the bill of materials, not in
the calendar.

Today we are going to work out why.

## The insight it all rests on

*(Graphic: independent versus dependent demand, side by side.)*

Before MRP, most factories managed their parts inventory the way a shop manages its
shelves. Look at consumption, work out an average, order when the balance falls below
a reorder point.

**Joseph Orlicky**, an engineer at IBM, set out in the early sixties why that is wrong
for a factory.

There are two kinds of demand.

**Independent demand** is the finished product the customer buys. Nobody can know for
certain how many will sell. It has to be forecast – you build an estimate from history
and from the market. How many bookshelves will we sell in week eight?

**Dependent demand** is the parts that go into the finished product. And here is the
point: the requirement follows from the plan with certainty.

*(This is the whole shift. Say it slowly.)*

If you are going to make a hundred bookshelves, you know you need four hundred
shelves.

So forecasting shelves is meaningless. You already have the answer.

Forecasting dependent demand is throwing away information you are holding.

*(State the rule.)*

Forecasts belong in one place in the chain: right at the outer edge, where the
customer is.

Everything inside that is arithmetic.

## The three inputs

*(Graphic: the three.)*

MRP is not a mystery. It is a calculator with three inputs.

**The production plan** – what has to be finished, how much, and which week.

**The bill of materials** – what the finished product consists of, in what quantities,
and at what levels.

**The inventory position** – what you already have, what is on order, and how long the
lead time is for each part.

*(The most important warning in the episode.)*

And the third point is where most implementations actually fail.

The calculation is trivial. Knowing what is on the shelf is the hard part.

If the balance figures are wrong, MRP produces wrong orders with complete confidence.
And that is worse than no plan at all – because nobody doubts it.

## The bill of materials

*(Graphic: the bill of materials with levels, quantities and lead times.)*

The bill of materials is the recipe, but with levels.

A bookshelf consists of parts, and some of those parts consist of other parts.

The shelf is assembled in one week. It needs two side panels, which are made in-house
in two weeks. Each side panel needs one board, bought in with a three-week lead time.
On top of that the shelf needs four shelves, bought with a two-week lead time – and
twenty-four screws, with one week.

*(Explain the word.)*

To **explode** the bill of materials is simply to multiply your way down it, level by
level. A hundred shelves becomes two hundred side panels, which in turn becomes two
hundred boards.

The word sounds dramatic, but all it describes is that one number at the top becomes
many numbers further down – and that the quantity grows quickly when the bill has
several levels.

## The calculation

*(Graphic: the full table, built up one row at a time. This is the core of the
episode – go slowly.)*

Now let us do the whole thing.

A hundred bookshelves to be delivered in week eight. In stock you have twenty side
panels, fifty shelves and a thousand screws. No boards.

Two operations repeat at every level.

**Netting** is subtracting what you already have. Gross requirement minus stock gives
net requirement.

**Lead time offsetting** is counting backwards. If something has to be in place in
week seven and has a two-week lead time, it must be ordered in week five.

*(Now go through the table row by row. Let each row stand.)*

**The bookshelf.** A hundred gross, nothing in stock, a hundred net. It has to be
finished in week eight, and with one week of assembly it must start in week seven.

**The side panels.** A hundred shelves require two hundred side panels. But twenty are
in stock, so the net requirement is a hundred and eighty. They have to be ready in week
seven, and with two weeks of production time they must start in week five.

*(Here is the subtle part. Stop here.)*

**The boards.** And here is a trap that is easy to fall into.

The hundred and eighty side panels require a hundred and eighty boards. Not two
hundred.

Why? Because the twenty side panels you already have in stock contain their boards
already. It is the netting that saves you twenty boards.

It is an easy mistake to make by hand, and it is one of the reasons you let a machine
do it.

The boards have to be there in week five, and with a three-week lead time they must be
ordered in week two.

**The shelves.** Four hundred gross, fifty in stock, three hundred and fifty net.
Needed in week seven, ordered in week five.

**The screws.** Two thousand four hundred gross, a thousand in stock, fourteen hundred
net. Needed in week seven, ordered in week six.

## The answer

*(Graphic: the longest path through the bill of materials, highlighted.)*

Look at the last column.

The boards have to be ordered in **week two**.

*(This is the punchline. Let it stand.)*

A delivery in week eight is in practice decided in week two.

The arithmetic is three weeks for the boards, plus two weeks to make the side panels,
plus one week of assembly. Six weeks in total.

And note what decides it: it is **the longest path through the bill of materials**, not
the sum of all the parts. The screws have a one-week lead time and are ordered in week
six. They are never the problem.

*(Back to the opening.)*

And that is why the customer calling in week five gets a no. It is physically
impossible to deliver in week eight, however hard anyone pushes.

The answer is in the bill of materials, not in willingness to try.

*(This is why MRP is more than a shopping list.)*

It is also why MRP is more than a shopping list. It tells you which promises you can
actually make.

## The calculator

*(Point to the tool here, not only at the end – it is most useful right after the
calculation.)*

The whole of this table is on the site as a calculator. You can change the quantity,
the delivery week and what you have in stock, and watch the whole chain move.

Two things are worth trying.

Double the number of shelves. The order weeks do **not** move at all – the lead times
are the same whether it is a hundred or ten thousand.

Then move the delivery week forward by one. The whole chain moves with it.

It is the lead times, not the volume, that decide when you have to decide.

## Lot sizing

*(Graphic: exact requirement versus batches.)*

In the example we ordered exactly the net requirement. Three hundred and fifty shelves,
fourteen hundred screws.

In reality you rarely do.

Screws are bought in boxes of five hundred, not fourteen hundred individually. That
gives you a discount on larger quantities and fewer changeovers in production – but
also more inventory and more tied-up capital.

*(The link to bullwhip. Important.)*

And notice what happens to the ordering pattern: lot sizes mean the orders no longer
resemble consumption.

That is exactly the mechanism behind the bullwhip effect, seen from inside the factory.

MRP does not solve that problem. It is one of the sources of it.

## From MRP to MRP II to ERP

*(Graphic: the three generations.)*

The method grew in two steps, and the names confuse people because the letters look
alike.

**MRP** is Orlicky's method from the sixties and seventies. It answers what to order
and when, and looks only at materials.

**MRP II** arrived with Oliver Wight in 1983. It brings in capacity, machines, people
and money. Same abbreviation, bigger question.

**ERP** is when planning becomes one module among many, alongside finance, purchasing,
sales and HR.

*(The point that surprises people.)*

And it is worth noting that MRP did not disappear.

The calculation we just went through still runs. Every night. Inside any ERP system
that manages production.

It has simply acquired many layers of interface on top of it.

## What the method cannot do

*(Graphic: the two assumptions against reality. Do not cut this section.)*

And finally the honest caveat, because MRP has two assumptions that are both untrue.

**Fixed lead time.** Lead time varies with how busy things are. A workshop that is full
takes longer. But MRP uses the same figure regardless.

**Unlimited capacity.** Classic MRP does not ask whether the machine has time free. It
produces the plan, and does not notice that it is impossible. That was precisely what
MRP II was meant to fix.

And then there is a third problem, which practitioners call **nervousness**: a small
change in the production plan can upend hundreds of order dates further down the bill
of materials. Move the delivery by one week, and everything underneath moves with it.

That is the same family as the bullwhip effect. A small movement at the top, large
effects further down.

## Summing up

*(Graphic: the points.)*

Six things to take with you.

That component requirements should be calculated, not guessed. Forecasts belong at the
outer edge of the chain, where the customer is.

That MRP needs three things – and that the third, correct inventory figures, is the one
that most often fails.

That explosion simply means multiplying your way down the bill of materials, and
netting means subtracting what you have.

That lead time offsetting is counting backwards from the date the customer needs the
goods.

That the longest path through the bill of materials decides how early you have to
start – in the example six weeks, so ordering in week two for delivery in week eight.

And that the method assumes fixed lead time and unlimited capacity, and that neither is
true.

## The ending

*(Back to the customer from the opening.)*

So: the customer calls in week five and wants a hundred bookshelves in week eight.

Now you know why the answer is no – and you can show them the arithmetic instead of
just saying it.

The table and the calculator are on sporretimen.no.

*(End card.)*
