---
title: "Learn something new: EOQ – how much to order at once, and why the answer is flat"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - EOQ
  - inventory management
  - order quantity
  - Ford Harris
  - purchasing
  - lean
topics:
  - The two costs pulling opposite ways
  - The 1913 formula, and the man who was forgotten
  - A worked example
  - The elegant property at the optimum
  - Why the curve is flat – and what that means
  - What the model assumes
  - The lean attack on the formula itself
  - The link to the bullwhip effect
questions:
  - What is EOQ?
  - Which two costs are being balanced?
  - What is the formula, and how is it used?
  - What happens if I get the order quantity wrong?
  - What does the model assume?
  - Why do lean practitioners want small batches when EOQ says large?
  - What does EOQ have to do with the bullwhip effect?
takeaways:
  - "EOQ balances the cost of ordering often against the cost of holding stock."
  - The formula is the square root of twice demand times order cost, divided by holding cost.
  - "At the optimum the two costs are exactly equal."
  - The curve is flat – being 25 per cent out costs only a few per cent.
  - "That means you do not need precise figures to make a good enough decision."
  - The model assumes steady demand and instant delivery. Neither is true.
  - "Lean does not dispute the answer, it attacks the input: cut the order cost and EOQ falls."
coverTheme: "EOQ"
image: /images/episoder/eoq-optimal-bestillingsmengde.jpg
imageAlt: "Spørretimen cover: EOQ – Lær noe nytt (Learn something new). Host Jan Sindre Heltne in the studio."
description: >-
  How much should you order at once? The EOQ formula explained with a worked
  example, the elegant property at the optimum, why the cost curve is so flat
  that precision barely matters – and what lean does to the whole calculation.
featured: false
popularityScore: 0
sources:
  - title: "Ford W. Harris – How Many Parts to Make at Once, Factory, The Magazine of Management 10 (1913)"
  - title: "Donald Erlenkotter – Ford Whitman Harris and the Economic Order Quantity Model, Operations Research 38(6), 1990"
    url: https://pubsonline.informs.org/doi/pdf/10.1287/opre.38.6.937
  - title: "Economic order quantity – overview article"
    url: https://en.wikipedia.org/wiki/Economic_order_quantity
related:
  - en/mrp-produksjonsplanlegging
  - en/bullwhip-effekten
  - en/lean-forklart
---

The MRP episode ended on a loose thread. The calculation there said you needed
1,400 screws – but in practice nobody orders 1,400 screws. You order a box, or ten
boxes, or a whole year's supply.

So how much should you order at once?

That question has an answer, and it is over a hundred years old.

## The two costs

The whole problem is that two costs pull in opposite directions.

<figure class="fig fig--compare">
  <p class="fig__title">Order often, or order a lot</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Small, frequent orders</p>
      <h4>Cheap stock, expensive ordering</h4>
      <ul>
        <li>Little capital tied up in goods</li>
        <li>Little space in use</li>
        <li>But: many orders a year</li>
        <li>Each order costs admin, freight and changeover</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Large, infrequent orders</p>
      <h4>Cheap ordering, expensive stock</h4>
      <ul>
        <li>Few orders a year</li>
        <li>Discounts and a full lorry</li>
        <li>But: a lot of capital tied up</li>
        <li>Space, shrinkage, insurance, obsolescence</li>
      </ul>
    </div>
  </div>
  <figcaption>Note that neither column is wrong. Both are sensible, and they are sensible for opposite reasons. When two costs behave like that – one falling as the other rises – there is a point where the sum is lowest. Finding that point is all EOQ is.</figcaption>
</figure>

## The 1913 formula

**Ford Whitman Harris** published the answer in 1913, in an article with the sober
title *How Many Parts to Make at Once*, in the magazine *Factory*. He was an
engineer, inventor and later a patent attorney – with no formal education beyond
high school.

The story has an odd kink. The formula became known as the **Wilson formula**,
after the consultant R. H. Wilson, who applied and analysed it thoroughly.
Harris's own article was lost, and was not rediscovered until 1988 – three quarters
of a century after it was written.

<figure class="fig fig--rule">
  <p class="fig__claim">EOQ is the square root of twice demand times order cost, divided by holding cost.</p>
  <p class="fig__example"><b>D</b> is annual demand, in units.<br /><b>S</b> is what it costs to place one order – admin, freight, machine changeover. Note: per order, not per unit.<br /><b>H</b> is what it costs to hold one unit for one year – cost of capital, space, shrinkage, insurance.<br /><b>And so:</b> EOQ = √(2DS / H)</p>
</figure>

It is worth pausing at the square root, because it tells you something: double the
demand and you do not double the batch. You multiply it by 1.41.

## A worked example

Take the screws from the bookcase factory.

<figure class="fig fig--flow">
  <p class="fig__title">From three numbers to one answer</p>
  <ol>
    <li><span class="fig__box"><b>Demand: 100,000 screws a year</b><small>D. Taken from the production schedule.</small></span></li>
    <li><span class="fig__box"><b>Order cost: 500 kroner</b><small>S. It costs the same whether you order 100 or 100,000.</small></span></li>
    <li><span class="fig__box"><b>Holding cost: 1 krone per screw per year</b><small>H. Capital, space and risk.</small></span></li>
    <li><span class="fig__box"><b>EOQ = √(2 × 100,000 × 500 / 1) = 10,000</b><small>Order 10,000 screws at a time, that is ten times a year.</small></span></li>
  </ol>
  <figcaption>Note how little is needed. Three numbers, one square root. The hard part of EOQ is not the mathematics – it is working out what the order cost and holding cost actually are in your own business, and those figures are rarely sitting ready in any system.</figcaption>
</figure>

## The elegant part

Work out what the two costs come to at 10,000, and something neat happens.

<figure class="fig fig--rule">
  <p class="fig__claim">At the optimum, ordering cost and holding cost are exactly equal.</p>
  <p class="fig__example"><b>Ordering cost:</b> 100,000 / 10,000 = 10 orders, times 500 kroner = <b>5,000 kroner.</b><br /><b>Holding cost:</b> average stock is half the batch, that is 5,000 screws, times 1 krone = <b>5,000 kroner.</b><br /><b>Total: 10,000 kroner a year.</b><br /><b>And this is no coincidence:</b> it always holds. If the two costs differ, you are not at the optimum – which gives you a quick way to check an answer without running the formula again.</p>
</figure>

## The curve is flat

Here comes the most useful insight in the episode, and it is nearly always left
out when EOQ is taught.

<figure class="fig fig--matrix">
  <p class="fig__title">What it costs to be wrong</p>
  <table>
    <thead><tr><th scope="col">Batch</th><th scope="col">Ordering</th><th scope="col">Holding</th><th scope="col">Total</th><th scope="col">vs optimum</th></tr></thead>
    <tbody>
      <tr><th scope="row">2,500</th><td>20,000</td><td>1,250</td><td>21,250</td><td>+112%</td></tr>
      <tr><th scope="row">5,000</th><td>10,000</td><td>2,500</td><td>12,500</td><td>+25%</td></tr>
      <tr><th scope="row">7,500</th><td>6,667</td><td>3,750</td><td>10,417</td><td>+4.2%</td></tr>
      <tr><th scope="row">10,000</th><td>5,000</td><td>5,000</td><td>10,000</td><td>optimum</td></tr>
      <tr><th scope="row">12,500</th><td>4,000</td><td>6,250</td><td>10,250</td><td>+2.5%</td></tr>
      <tr><th scope="row">15,000</th><td>3,333</td><td>7,500</td><td>10,833</td><td>+8.3%</td></tr>
      <tr><th scope="row">20,000</th><td>2,500</td><td>10,000</td><td>12,500</td><td>+25%</td></tr>
    </tbody>
  </table>
  <figcaption>Look at the three middle rows. Being 25 per cent out in either direction costs you between 2.5 and 4.2 per cent. The curve is flat around the bottom, and that has a practical consequence people rarely draw: you do <em>not</em> need precise figures for holding cost and order cost. A rough estimate gives you a decision that is good enough. It only really hurts when you are out by a factor of four – 2,500 against 10,000.</figcaption>
</figure>

This is worth saying aloud, because it inverts a common objection. "We do not know
what our holding cost really is" is not a reason to avoid EOQ. It is a reason to
use an estimate and move on.

## What the model assumes

The formula is this simple because it assumes a lot away. The assumptions are
worth knowing, because they tell you where the model does not fit.

<figure class="fig fig--matrix">
  <p class="fig__title">Four assumptions</p>
  <table>
    <thead><tr><th scope="col">Assumption</th><th scope="col">When it breaks</th></tr></thead>
    <tbody>
      <tr><th scope="row">Steady, known demand</th><td>Seasonal goods, promotions, trends. Anything that swings.</td></tr>
      <tr><th scope="row">Instant delivery</th><td>Lead times exist. They are handled with a reorder point, not by EOQ.</td></tr>
      <tr><th scope="row">Fixed unit price</th><td>Quantity discounts make the curve jagged, and the optimum can jump.</td></tr>
      <tr><th scope="row">No limit on space or capital</th><td>The warehouse has a wall, and the budget has an edge.</td></tr>
    </tbody>
  </table>
  <figcaption>It is easy to dismiss the model because of these. But remember the flat curve: even when the assumptions are badly broken, EOQ usually gives a batch closer to right than the gut feeling of whoever is placing the order. The model is a direction, not an answer.</figcaption>
</figure>

## The lean attack

Here it gets interesting, and this is where EOQ meets Toyota.

EOQ takes the order cost as a fact and finds the best batch given it. The lean
tradition does something quite different: it refuses to accept the number, and
attacks it.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">What happens to EOQ when the order cost is cut</p>
  <ol>
    <li><span class="fig__box"><b>S = 500 kr → EOQ = 10,000</b><small>Ten orders a year. Total cost 10,000 kroner.</small></span></li>
    <li><span class="fig__box"><b>S = 125 kr → EOQ = 5,000</b><small>Twenty orders. Total cost 5,000 kroner.</small></span></li>
    <li><span class="fig__box"><b>S = 50 kr → EOQ = 3,162</b><small>Over thirty orders. Total cost 3,162 kroner.</small></span></li>
    <li><span class="fig__box"><b>S = 5 kr → EOQ = 1,000</b><small>A hundred orders a year, and the cost down to a tenth.</small></span></li>
  </ol>
  <figcaption>Cutting from 500 to 50 kroner makes EOQ fall by 68 per cent. This is the whole point of changeover work in lean: spend a day getting a machine changeover from four hours down to ten minutes, and you have not merely saved those hours – you have moved the optimum, and made small batches economic. Lean and EOQ do not disagree. Lean changes one of the inputs, and lets the formula give a new answer.</figcaption>
</figure>

## And the link to bullwhip

Finally, a reminder that every optimisation has a price somewhere else.

Large batches are exactly what the bullwhip episode identified as cause number
two: when you order in boxes and pallets rather than to consumption, the supplier
sees swings that do not exist. EOQ gives you the cheapest batch **for you**,
measured on your two costs.

That calculation does not contain what the batch costs the tier above. And that is
precisely why smaller, more frequent deliveries show up as a remedy for bullwhip –
it is the same trade-off, seen from the chain rather than from the warehouse.

## What is worth taking with you

That EOQ balances order cost against holding cost, and that both are real.

That the formula is the square root of twice demand times order cost, divided by
holding cost.

That the two costs are equal at the optimum, and that this is a quick check.

That the curve is flat: being 25 per cent out costs a few per cent, so rough
estimates will do.

That the model assumes steady demand and instant delivery, and that neither holds.

And that lean does not dispute the formula – it cuts the order cost, and lets the
answer shrink by itself.

*The figures in the example were chosen to give round answers, and were computed in
advance so they can be checked by hand. The historical account draws on Harris's
1913 article and on Erlenkotter's review in Operations Research from 1990.*
