---
title: "Learn something new: MRP – the calculation that decides what a factory orders, and when"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - MRP
  - production planning
  - ERP
  - bill of materials
  - inventory management
  - lead time
topics:
  - The insight the whole method rests on
  - The three inputs
  - The bill of materials, and what an explosion is
  - A calculation from start to finish
  - Working backwards from the delivery date
  - Lot sizing, and why you rarely order the exact requirement
  - From MRP to MRP II to ERP
  - What the method cannot do
questions:
  - What is MRP?
  - What is the difference between dependent and independent demand?
  - What is a bill of materials, and what does exploding it mean?
  - How do you calculate what to order?
  - What is lead time offsetting?
  - What is the difference between MRP, MRP II and ERP?
  - What are the weaknesses of MRP?
takeaways:
  - "The core insight: component requirements should be calculated, not forecast."
  - MRP needs three things – a production schedule, a bill of materials and inventory records.
  - "Explosion means multiplying your way down the bill of materials, level by level."
  - Net requirement is gross requirement minus what you already hold.
  - Lead time offsetting means working backwards from the date the customer needs the goods.
  - "The longest path through the bill of materials decides how early you must start."
  - MRP assumes fixed lead times and unlimited capacity. Both are untrue.
coverTheme: "MRP"
image: /images/episoder/mrp-produksjonsplanlegging.jpg
imageAlt: "Spørretimen cover: MRP – Lær noe nytt (Learn something new). Host Jan Sindre Heltne in the studio."
description: >-
  MRP explained from the ground up: why component requirements should be
  calculated rather than guessed, what a bill of materials is, and a full worked
  calculation from order to order date – gross, net and lead time offsetting.
featured: false
popularityScore: 0
sources:
  - title: "Joseph Orlicky – Material Requirements Planning: The New Way of Life in Production and Inventory Management (1975)"
  - title: "Material requirements planning – overview article"
    url: https://en.wikipedia.org/wiki/Material_requirements_planning
related:
  - en/erp-wms-integrasjon
  - en/bullwhip-effekten
  - en/lean-forklart
---

You have to deliver 100 bookcases in week 8. Each one has two side panels, four
shelves and 24 screws. You make the side panels yourself, from boards you have to
buy in.

When do you have to order the boards?

That is not a guessing question. It has an exact answer, and working it out is the
whole point of **MRP** – Material Requirements Planning.

## The insight it all rests on

Before MRP, most factories managed component stock the way a shop manages its
shelves: look at consumption, work out an average, reorder when the level falls
below a reorder point.

**Joseph Orlicky**, an engineer at IBM, set out in the early 1960s why that is
wrong for a factory.

<figure class="fig fig--compare">
  <p class="fig__title">Two kinds of demand, two completely different methods</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Independent</p>
      <h4>Must be forecast</h4>
      <ul>
        <li>The finished goods the customer buys</li>
        <li>Nobody can know for certain how many will sell</li>
        <li>You build an estimate from history and the market</li>
        <li>Example: how many bookcases will we sell in week 8?</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Dependent</p>
      <h4>Should be calculated</h4>
      <ul>
        <li>The components that go into the finished goods</li>
        <li>The requirement follows from the plan with certainty</li>
        <li>Forecasting it throws away information you already have</li>
        <li>Example: 100 bookcases require exactly 400 shelves</li>
      </ul>
    </div>
  </div>
  <figcaption>This is the whole revolution, and it is easier to underrate than to grasp. If you are going to build 100 bookcases, you <em>know</em> you need 400 shelves. Forecasting shelves is therefore meaningless – you already have the answer. Forecasts belong in one place in the chain: at the very outer edge, where the customer is. Everything inside is arithmetic.</figcaption>
</figure>

Orlicky's 1975 book carried the subtitle *The New Way of Life in Production and
Inventory Management*. By that same year the method was in use at around 700
companies.

## The three inputs

MRP is not a mystery. It is a calculator with three inputs, and the answer can
never be better than those three.

<figure class="fig fig--flow">
  <p class="fig__title">What the calculation needs</p>
  <ol>
    <li><span class="fig__box"><b>The production schedule</b><small>What is to be finished, how much, and in which week. The master production schedule.</small></span></li>
    <li><span class="fig__box"><b>The bill of materials</b><small>What the finished item consists of, in what quantities, and at what levels.</small></span></li>
    <li><span class="fig__box"><b>Inventory records</b><small>What you already hold, what is on order, and the lead time for each item.</small></span></li>
  </ol>
  <figcaption>The third point is where most implementations actually fail. The calculation is trivial; knowing what is really on the shelf is the hard part. If the stock figures are wrong, MRP produces wrong orders with complete confidence – which is worse than having no plan, because nobody doubts it.</figcaption>
</figure>

## The bill of materials, and what an explosion is

The bill of materials is the recipe, but with levels. A bookcase consists of
parts, and some of those parts consist of other parts.

<figure class="fig fig--matrix">
  <p class="fig__title">Bill of materials for one bookcase</p>
  <table>
    <thead><tr><th scope="col">Level</th><th scope="col">Item</th><th scope="col">Quantity</th><th scope="col">Lead time</th></tr></thead>
    <tbody>
      <tr><th scope="row">0</th><td>Bookcase (assembled)</td><td>1</td><td>1 week</td></tr>
      <tr><th scope="row">1</th><td>Side panel (made in-house)</td><td>2</td><td>2 weeks</td></tr>
      <tr><th scope="row">2</th><td>Board (bought in)</td><td>1 per side panel</td><td>3 weeks</td></tr>
      <tr><th scope="row">1</th><td>Shelf (bought in)</td><td>4</td><td>2 weeks</td></tr>
      <tr><th scope="row">1</th><td>Screw (bought in)</td><td>24</td><td>1 week</td></tr>
    </tbody>
  </table>
  <figcaption>To <em>explode</em> the bill of materials is to multiply your way down it, level by level. 100 bookcases become 200 side panels, which in turn become 200 boards. The word sounds dramatic, but it only describes one number at the top becoming many numbers below – and how fast the count grows once the bill has several levels.</figcaption>
</figure>

## The calculation, from start to finish

Now we do the whole thing. **100 bookcases are to be delivered in week 8.** In
stock you have 20 side panels, 50 shelves and 1,000 screws. No boards.

Two operations repeat at every level:

**Netting.** Subtract what you already hold. Gross requirement minus stock gives
net requirement.

**Lead time offsetting.** Work backwards. If something must be in place in week 7
and has a two-week lead time, it has to be ordered in week 5.

<figure class="fig fig--matrix">
  <p class="fig__title">The full calculation</p>
  <table>
    <thead><tr><th scope="col">Item</th><th scope="col">Gross</th><th scope="col">In stock</th><th scope="col">Net</th><th scope="col">Needed week</th><th scope="col">Ordered week</th></tr></thead>
    <tbody>
      <tr><th scope="row">Bookcase</th><td>100</td><td>0</td><td>100</td><td>8</td><td>7</td></tr>
      <tr><th scope="row">Side panel</th><td>200</td><td>20</td><td>180</td><td>7</td><td>5</td></tr>
      <tr><th scope="row">Board</th><td>180</td><td>0</td><td>180</td><td>5</td><td>2</td></tr>
      <tr><th scope="row">Shelf</th><td>400</td><td>50</td><td>350</td><td>7</td><td>5</td></tr>
      <tr><th scope="row">Screw</th><td>2400</td><td>1000</td><td>1400</td><td>7</td><td>6</td></tr>
    </tbody>
  </table>
  <figcaption>Follow one row at a time. 100 bookcases require 200 side panels, but 20 are in stock, so 180 must be made. Those 180 require 180 boards – not 200, because the 20 side panels you already hold contain their boards already. It is the netting that saves you 20 boards, and that is an easy mistake to make by hand.</figcaption>
</figure>

## The answer, and why it surprises

Look at the last column. The boards have to be ordered in **week 2**.

<figure class="fig fig--rule">
  <p class="fig__claim">A delivery in week 8 is in practice decided in week 2.</p>
  <p class="fig__example"><b>The arithmetic:</b> 3 weeks for the boards, plus 2 weeks to make the side panels, plus 1 week of assembly. Six weeks in total.<br /><b>It is the longest path through the bill of materials that decides</b>, not the sum of all the parts. The screws have a one-week lead time and are ordered in week 6 – they are never the problem.<br /><b>The consequence:</b> if a rush order arrives in week 5, delivering in week 8 is physically impossible, however hard anyone pushes. The answer is in the bill of materials, not in willingness to try.<br /><b>And that is why MRP is more than a shopping list:</b> it tells you which promises you can actually make.</p>
</figure>

## Lot sizing

In the example we ordered the exact net requirement: 350 shelves, 1,400 screws. In
reality you rarely do.

<figure class="fig fig--compare">
  <p class="fig__title">Why you deviate from the requirement</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Order the exact requirement</p>
      <h4>Minimum inventory</h4>
      <ul>
        <li>No surplus capital tied up</li>
        <li>No parts left sitting</li>
        <li>But: many small orders</li>
        <li>And: full price per unit</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Order in lots</p>
      <h4>Fewer, larger orders</h4>
      <ul>
        <li>Screws come in boxes of 500, not 1,400 loose</li>
        <li>Discounts at higher volumes</li>
        <li>Fewer changeovers in production</li>
        <li>But: more stock, and more tied-up capital</li>
      </ul>
    </div>
  </div>
  <figcaption>Note what happens to the ordering pattern here: lot sizes mean orders no longer resemble consumption. That is exactly the mechanism behind the bullwhip effect, seen from inside the factory. MRP does not solve that problem – it is one of the sources of it.</figcaption>
</figure>

## From MRP to MRP II to ERP

The method grew in two clear steps, and the names confuse because the letters look
alike.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">Three generations</p>
  <ol>
    <li><span class="fig__box"><b>MRP – materials</b><small>Orlicky, 1960s and 70s. Answers what to order and when. Looks only at materials.</small></span></li>
    <li><span class="fig__box"><b>MRP II – manufacturing resources</b><small>Oliver Wight, 1983. Brings in capacity, machines, people and money. Manufacturing Resource Planning – same initials, bigger question.</small></span></li>
    <li><span class="fig__box"><b>ERP – the whole business</b><small>Planning becomes one module among many, alongside finance, purchasing, sales and HR.</small></span></li>
  </ol>
  <figcaption>It is worth noting that MRP did not go away. The calculation in the table above still runs, every night, inside any ERP system that manages production. It has simply acquired many layers of interface on top. What happens when the ERP has to talk to the warehouse system is covered in its own episode.</figcaption>
</figure>

## What the method cannot do

Finally the honest caveat, because MRP rests on two assumptions that are both
untrue.

<figure class="fig fig--matrix">
  <p class="fig__title">Two assumptions, and what they cost</p>
  <table>
    <thead><tr><th scope="col">Assumption</th><th scope="col">Reality</th></tr></thead>
    <tbody>
      <tr><th scope="row">Fixed lead time</th><td>Lead times vary with how busy things are. A workshop running full takes longer – but MRP uses the same number regardless.</td></tr>
      <tr><th scope="row">Unlimited capacity</th><td>Classic MRP never asks whether the machine has time free. It produces the plan and does not notice that it is impossible. That is precisely what MRP II was meant to fix.</td></tr>
    </tbody>
  </table>
  <figcaption>Add a third problem, which practitioners call <em>nervousness</em>: a small change to the production schedule can overturn hundreds of order dates further down the bill of materials. Move the delivery by one week and everything below moves with it. That is the same family as the bullwhip effect – a small movement at the top, large swings further down.</figcaption>
</figure>

## What is worth taking with you

That component requirements should be calculated, not guessed. Forecasts belong at
the outer edge of the chain, where the customer is.

That MRP needs three things, and that the third – correct stock figures – is what
usually fails.

That explosion simply means multiplying down the bill of materials, and netting
means subtracting what you hold.

That lead time offsetting means working backwards from the date the customer needs
the goods.

That the longest path through the bill of materials decides how early you must
start – six weeks in the example, meaning an order in week 2 for delivery in week 8.

And that the method assumes fixed lead times and unlimited capacity, and that both
are untrue.

*The worked example is constructed to demonstrate the method, and the figures were
chosen so they can be checked by hand. The historical account draws on Orlicky's
1975 book and on standard overview literature on MRP and MRP II.*
