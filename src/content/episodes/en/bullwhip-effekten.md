---
title: "Learn something new: The bullwhip effect – why small ripples in a shop become crises in the factory"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - bullwhip
  - inventory management
  - supply chain
  - demand
  - forecasting
  - grocery retail
topics:
  - What the effect is, and where the name comes from
  - The nappies that exposed it
  - The four causes
  - Safety margin on top of safety margin
  - Ordering by the pallet
  - The promotion that looks like demand
  - Ordering more than you need, because everyone else does
  - What actually dampens it
questions:
  - What is the bullwhip effect?
  - Why do the swings grow further up the chain?
  - What was the Procter & Gamble example?
  - Why do promotions amplify the effect?
  - What happened with toilet paper in 2020?
  - How can the effect be dampened?
  - What does this have to do with lean?
takeaways:
  - "The bullwhip effect is that orders swing more than sales, and the swing grows upstream."
  - "Procter & Gamble found that nappy orders swung more than babies could explain."
  - Lee, Padmanabhan and Whang identified four causes – and all four are rational choices.
  - Every tier adds its own safety margin, and the margins multiply.
  - Promotions create a demand peak that is purchases moved in time, not new consumption.
  - "In a shortage everyone orders more than they need, making the shortage worse."
  - What dampens the effect is shared information, not better guessing at each tier.
coverTheme: "Bullwhip-effekten"
image: /images/episoder/bullwhip-effekten.jpg
imageAlt: "Spørretimen cover: Bullwhip-effekten (The bullwhip effect) – Lær noe nytt (Learn something new). Host Jan Sindre Heltne in the studio."
description: >-
  Why a small change on a shop shelf becomes a large swing in the factory: the
  bullwhip effect explained, with the nappies that exposed it, the four causes,
  the toilet paper of 2020 – and what actually dampens it.
featured: false
popularityScore: 0
sources:
  - title: "Hau L. Lee, V. Padmanabhan and Seungjin Whang – Information Distortion in a Supply Chain: The Bullwhip Effect, Management Science 43(4), 1997"
    url: https://pubsonline.informs.org/doi/10.1287/mnsc.43.4.546
  - title: "Jay W. Forrester – Industrial Dynamics (1961), where the phenomenon was first described"
related:
  - en/lean-forklart
  - en/erp-wms-integrasjon
  - en/container-teu-feu
---

A shop sells a few more packs than usual one week. Not many – a few per cent.

Four tiers upstream, a factory is expanding capacity, or a supplier is sitting on
stock they cannot shift.

That is the **bullwhip effect**: orders swing more than sales, and the swing grows
with every tier upstream. Like a whip, where a small movement at the handle
becomes a crack at the tip.

## The nappies that exposed it

The name arrived in the 1990s, but the phenomenon was described by **Jay
Forrester** in *Industrial Dynamics* back in 1961. The breakthrough came with a
paper by **Hau Lee, V. Padmanabhan and Seungjin Whang** in *Management Science* in
1997, and it opens with an example that has stuck.

<figure class="fig fig--rule">
  <p class="fig__claim">Procter &amp; Gamble found that nappy orders from distributors swung more than consumption could explain.</p>
  <p class="fig__example"><b>Why it is such a good example:</b> nappy consumption is about as predictable as anything gets. The number of babies does not change from week to week, and a baby uses roughly the same number every day.<br /><b>Yet the orders swung sharply.</b> The variation did not come from the market. It was created inside the supply chain itself.<br /><b>From the same paper:</b> at Hewlett-Packard, resellers' orders to the printer division swung far more than customer demand – and the orders passed on to the integrated circuit division swung more still.</p>
</figure>

That last point is the heart of it. It is not merely that the swing exists. It
**grows** with every tier you move upstream.

## The four causes

The paper identifies four sources: **demand signal processing, rationing game,
order batching and price variations.** The most important thing about them is
surprising: none requires anyone to make a mistake. All four are rational choices
for the individual tier.

<figure class="fig fig--matrix">
  <p class="fig__title">Four causes, and how they look in a retail chain</p>
  <table>
    <thead><tr><th scope="col">Cause</th><th scope="col">How it looks in a grocery chain</th></tr></thead>
    <tbody>
      <tr><th scope="row">Forecasting on forecasts</th><td>Each tier builds its forecast from the orders of the tier below – not from actual sales.</td></tr>
      <tr><th scope="row">Ordering in batches</th><td>You order whole pallets or whole lorries, not what you sold.</td></tr>
      <tr><th scope="row">Promotions</th><td>The price swings, and purchases move in time.</td></tr>
      <tr><th scope="row">Gaming a shortage</th><td>When something runs out, everyone orders more than they need in order to get enough.</td></tr>
    </tbody>
  </table>
  <figcaption>That all four are rational is why the effect is so hard to shake. You cannot remove it by asking people to stop being stupid. Every tier behaves sensibly given what it can see – the problem is that it cannot see enough.</figcaption>
</figure>

## Margin on margin

The first cause is the most underrated, and it can be calculated.

Every tier adds a safety margin to avoid running out. That is sensible. The
problem is that the tier above does not see the sales – it sees the *order*, which
already contains the margin. So it adds its own.

<figure class="fig fig--flow">
  <p class="fig__title">Ten per cent extra, four times over</p>
  <ol>
    <li><span class="fig__box"><b>The shop sells 100</b><small>Actual consumption. The only real number in the whole chain.</small></span></li>
    <li><span class="fig__box"><b>The shop orders 110</b><small>A little extra, in case it picks up.</small></span></li>
    <li><span class="fig__box"><b>The wholesaler orders 121</b><small>Sees 110, adds ten per cent.</small></span></li>
    <li><span class="fig__box"><b>The manufacturer plans 133</b><small>Sees 121, adds ten per cent.</small></span></li>
    <li><span class="fig__box"><b>The raw material supplier gets 146</b><small>Forty-six per cent above what was actually sold.</small></span></li>
  </ol>
  <figcaption>The arithmetic is 1.1 to the power of four, or 1.46. Nobody has done anything wrong. Every tier added a perfectly defensible margin. But the margins <em>multiply</em>, they do not add – which is why the amplification gets so strong with only a few tiers. And if sales drop again next week, the whole chain runs in reverse with the same force.</figcaption>
</figure>

## Ordering by the pallet

The second cause is physical, and it is built into the way goods move.

A shop selling four packs a day does not order four packs. It orders a case, or
waits until it can fill a pallet, because the freight costs the same whether the
lorry is full or half empty.

<figure class="fig fig--compare">
  <p class="fig__title">What the supplier sees</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">What happens in the shop</p>
      <h4>Steady sales</h4>
      <ul>
        <li>Four packs Monday</li>
        <li>Four packs Tuesday</li>
        <li>Four packs Wednesday</li>
        <li>Entirely predictable</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">What the supplier sees</p>
      <h4>Nothing, nothing, a whole pallet</h4>
      <ul>
        <li>Nothing for several days</li>
        <li>Then one large order</li>
        <li>Then nothing again</li>
        <li>Looks like violent variation</li>
      </ul>
    </div>
  </div>
  <figcaption>From the supplier's side this is indistinguishable from genuine swings in demand. And if many shops share an order day, all the batches land at once. The supplier then gets a peak that does not exist in reality – it was made by the calendar, not by customers.</figcaption>
</figure>

## The promotion that looks like demand

The third cause is the most recognisable in grocery retail, and it is
self-inflicted.

<figure class="fig fig--cycle">
  <p class="fig__title">The promotion cycle</p>
  <ol>
    <li><span class="fig__step">1</span><b>Promotion</b><small>The price drops. Sales shoot up.</small></li>
    <li><span class="fig__step">2</span><b>Customers stock up</b><small>People buy three packs instead of one, because it pays to.</small></li>
    <li><span class="fig__step">3</span><b>The shop fills up</b><small>And the chain orders heavily into the promotion.</small></li>
    <li><span class="fig__step">4</span><b>Afterwards: silence</b><small>Cupboards at home are full. Sales fall below normal.</small></li>
    <li><span class="fig__step">5</span><b>The forecast is confused</b><small>The next promotion is planned on figures that contain the last one.</small></li>
  </ol>
  <figcaption>The decisive point is that a promotion rarely creates new consumption. Nobody eats more crispbread because it was on offer – they buy what they would have bought anyway, earlier and cheaper. The peak is therefore <em>purchases moved in time</em>, not growth. But in the sales figures the two look identical, and that is where the forecast breaks.</figcaption>
</figure>

## Gaming a shortage

The fourth cause is the one that makes crises worse, and it is the most human.

When something is about to run out and the supplier starts allocating what exists,
it pays to order more than you need. If you only get half of what you ask for, you
ask for twice as much.

<figure class="fig fig--rule">
  <p class="fig__claim">The toilet paper of 2020 is the textbook case, and it was not about anyone running out of paper.</p>
  <p class="fig__example"><b>What actually changed:</b> people were at home around the clock instead of at work and school. Consumption shifted from bulk packs in workplaces to ordinary packs in shops. Total consumption changed little.<br /><b>What set off the crack:</b> empty shelves were filmed and shared. People bought two packs instead of one. Shops ordered extra. Chains ordered extra on top.<br /><b>Why it is bullwhip and not merely panic:</b> every tier was reacting to the <em>orders</em> from the tier below, not to consumption. And those orders already contained everyone else's fear.<br /><b>And the other side:</b> when it settled, the chains were left with stock they could not shift, because customers had full cupboards.</p>
</figure>

The same pattern repeated with semiconductors in the years that followed: carmakers
cut orders when the pandemic began, and when demand recovered they found themselves
at the back of the queue – and then ordered more than they needed to secure supply.

## What actually dampens it

Here is the most important insight, and it runs against instinct.

<figure class="fig fig--compare">
  <p class="fig__title">Two ways to meet the problem</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Works badly</p>
      <h4>Guess better at each tier</h4>
      <ul>
        <li>A better forecasting model for each party</li>
        <li>Larger safety stock to absorb the swing</li>
        <li>Sharper buyers</li>
        <li>The problem: everyone is still guessing from the wrong number</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Works</p>
      <h4>Share the real number</h4>
      <ul>
        <li>Point-of-sale data shared upstream</li>
        <li>Everyone plans against actual sales, not against orders</li>
        <li>Smaller, more frequent deliveries instead of large batches</li>
        <li>Steady prices rather than large promotions</li>
        <li>Allocation based on historical sales, so over-ordering does not pay</li>
      </ul>
    </div>
  </div>
  <figcaption>The point is that bullwhip is not a forecasting problem. It is an <em>information</em> problem. As long as each tier only sees the order from the tier below, it is planning against a number that is already distorted – and then it does not matter how good the model is. Walmart is the best-known example of the opposite: sharing checkout data upstream with suppliers, so that everyone sees the same thing.</figcaption>
</figure>

## The link to lean

Finally, a nuance worth carrying, because the two subjects are closely tied.

Lean removes inventory deliberately, so that problems become visible. The bullwhip
effect is precisely a problem that becomes more painful once the buffers are gone:
without stock, a false peak propagates immediately through the whole chain.

That is not an argument against lean. But it explains why lean and shared
information have to arrive together. Remove the inventory without sharing the
figures, and you have removed the shock absorber while keeping the bumps.

## What is worth taking with you

That the bullwhip effect is orders swinging more than sales, and the swing growing
with every tier upstream.

That Procter & Gamble found it in nappies – the most predictable product there is.

That all four causes are rational, which is why the effect is so persistent.

That safety margins multiply rather than add.

That a promotion peak is purchases moved in time, not new demand.

And that the answer is not to guess better, but to share the real number.

*This account draws on Lee, Padmanabhan and Whang's paper in Management Science
from 1997, which is the source of the Procter & Gamble and Hewlett-Packard
examples and of the four causes. The ten per cent calculation is an illustration,
not figures from a particular chain.*
