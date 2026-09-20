---
title: "Learn something new: TEU, FEU and the container – the dimensions that run world trade"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - container
  - TEU
  - FEU
  - ISO 6346
  - shipping
  - standardisation
topics:
  - What a TEU actually is, and why it is not a container
  - FEU, and why the 40-footer is the common one
  - The height that is not in the name
  - The other types – reefer, open top, flat rack, tank
  - The number on the side, and what each part means
  - The size and type code
  - Filling up on weight or on volume
  - Why the standard mattered more than the box
questions:
  - What does TEU mean?
  - What is the difference between TEU and FEU?
  - How big is a 20-foot container?
  - What is a high cube?
  - What do the letters and numbers on the side of a container mean?
  - What is the difference between cubing out and weighing out?
  - Why is the container so important?
takeaways:
  - "A TEU is a unit of measure, not a container. It is a 20-footer converted into a counting unit."
  - A 40-footer is 2 TEU, and is called an FEU. Most containers in circulation are 40-footers.
  - "A high cube is a foot taller than standard, and still counts as the same number of TEU."
  - "The number on the side follows ISO 6346: owner code, equipment identifier, serial number and check digit."
  - You run out of volume or of weight – rarely both at once.
  - The valuable thing was never the box, but that everyone agreed on the dimensions.
coverTheme: "Containeren"
image: /images/episoder/container-teu-feu.jpg
imageAlt: "Spørretimen cover: Containeren (The container) – Lær noe nytt (Learn something new). Host Jan Sindre Heltne in the studio."
description: >-
  TEU, FEU and the container standards explained: what the unit actually counts,
  why the 40-footer dominates, what the number on the side means, and why the
  standardisation mattered more than the box itself.
featured: false
popularityScore: 0
sources:
  - title: "BIC – Container Identification Number (ISO 6346)"
    url: https://www.bic-code.org/identification-number/
  - title: "BIC – Container Size and Type Code"
    url: https://www.bic-code.org/size-type-code/
  - title: "ISO 6346:2022 – Freight containers: Coding, identification and marking"
    url: https://www.iso.org/standard/83558.html
related:
  - en/gs1-strekkoder
  - en/sjoruter-suez-panama-arktis
  - en/incoterms-2020
---

You have heard the figure: a ship carries 24,000 TEU. But a TEU is not a
container, and a ship of 24,000 TEU does not have 24,000 containers on board.

This episode is about the units, about what is actually written on the side of a
container, and about why the standardisation mattered far more than the box
itself.

## A TEU is a counting unit

<figure class="fig fig--rule">
  <p class="fig__claim">TEU stands for twenty-foot equivalent unit – a 20-foot container converted into a counting unit.</p>
  <p class="fig__example"><b>Why it is needed:</b> containers come in several lengths. To state capacity you need one common unit rather than a list.<br /><b>What it means in practice:</b> a 20-footer is 1 TEU. A 40-footer is 2 TEU.<br /><b>The trap:</b> "24,000 TEU" is not a number of containers. If half the slots are filled with 40-footers, the number of boxes is far lower than the figure suggests.</p>
</figure>

**FEU** is the same logic for the 40-footer – forty-foot equivalent unit. 1 FEU is
2 TEU. In practice FEU is used mostly in pricing, while TEU is used for capacity.

And here is what surprises people: even though everything is counted in 20-foot
units, the 40-footer is the common container. You do not pay double for double the
length, because much of the cost attaches to handling one unit – one lift, one
slot, one document.

## The height that is not in the name

The names give length. They say nothing about height, and that is where a
practical trap lies.

<figure class="fig fig--matrix">
  <p class="fig__title">The common types</p>
  <table>
    <thead><tr><th scope="col">Type</th><th scope="col">What it is</th><th scope="col">TEU</th></tr></thead>
    <tbody>
      <tr><th scope="row">20' standard</th><td>The base unit. Heavy cargo that does not take much space.</td><td>1</td></tr>
      <tr><th scope="row">40' standard</th><td>Double the length, same height.</td><td>2</td></tr>
      <tr><th scope="row">40' high cube</th><td>As above, but a foot taller. More volume, same floor area.</td><td>2</td></tr>
      <tr><th scope="row">45' high cube</th><td>Longer again. Used a fair amount in Europe.</td><td>2 (usually counted so)</td></tr>
    </tbody>
  </table>
  <figcaption>Note the right-hand column. A high cube gives more volume but still counts as two TEU. That is one reason TEU figures are a coarse measure: two ships with the same TEU capacity can carry different amounts of goods, depending on what kinds of boxes are actually there.</figcaption>
</figure>

Alongside the dry boxes there are separate types for cargo that does not suit a
closed case: the **reefer** with its own refrigeration unit, the **open top** for
cargo that has to be lifted in from above, the **flat rack** for anything too wide
or too tall, and the **tank** for liquids. All of them use the same outer
dimensions at the corners, and that is the whole point – they can be handled by
the same equipment.

## The number on the side

Every container has a unique number, and it is built to a standard: ISO 6346.
Eleven characters, each part with a job.

<figure class="fig fig--flow">
  <p class="fig__title">The four parts</p>
  <ol>
    <li><span class="fig__box"><b>Owner code – three letters</b><small>Identifies the owner or principal operator. The codes are registered with BIC, which has maintained the register since 1970.</small></span></li>
    <li><span class="fig__box"><b>Equipment identifier – one letter</b><small>U for freight containers, J for detachable related equipment, Z for trailers and chassis.</small></span></li>
    <li><span class="fig__box"><b>Serial number – six digits</b><small>The owner chooses it.</small></span></li>
    <li><span class="fig__box"><b>Check digit – one digit</b><small>Calculated from the ten preceding characters, and catches misreadings and typing errors.</small></span></li>
  </ol>
  <figcaption>If this reminds you of the GS1 episode, that is no accident. The principle is exactly the same: an issuer hands out a prefix, the owner fills in the rest, and a check digit at the end lets systems catch typing errors. The calculation for containers differs from the GS1 one and is specified in ISO 6346 – BIC provides a calculator for it.</figcaption>
</figure>

Below the number there is usually a **size and type code** of four characters. The
first says something about the length, the second about the height, and the last
two about what kind of container it is. That is the code a terminal system reads
to know whether the box is a dry 40-foot high cube or a reefer.

## Weight or volume

This is the most practical part of the episode, and it applies to anyone who has
ever booked a container.

<figure class="fig fig--compare">
  <p class="fig__title">Two ways to run out</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Cube out</p>
      <h4>Full on volume</h4>
      <ul>
        <li>The container is full but well under the weight limit</li>
        <li>Typically light and bulky: cushions, packaging, plastics</li>
        <li>Height pays here – a high cube gives more for the same lift</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Weigh out</p>
      <h4>Full on weight</h4>
      <ul>
        <li>The weight limit is reached with the container half empty</li>
        <li>Typically heavy and compact: liquids, metal, stone, machine parts</li>
        <li>Here the 20-footer is often the right choice</li>
      </ul>
    </div>
  </div>
  <figcaption>This explains why heavy cargo often goes in 20-footers while light cargo goes in 40-footers: the length is no use to you if you hit the weight limit first anyway. An experienced forwarder knows which of the two binds before the container is booked.</figcaption>
</figure>

Weight limits are not only a question of what the container can take. They also
depend on what the cranes, the chassis and the road network at both ends can take
– and road weight is a national rule, not an international one.

## Why the standard mattered more than the box

Finally the real point, which is the same as in the barcode episode.

<figure class="fig fig--compare">
  <p class="fig__title">Before and after</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Break bulk</p>
      <h4>Everything handled separately</h4>
      <ul>
        <li>Sacks, crates and barrels loaded one at a time</li>
        <li>Many hands per tonne</li>
        <li>Long time alongside in port</li>
        <li>Pilferage and damage on the way</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Container</p>
      <h4>Everything handled alike</h4>
      <ul>
        <li>One box, one lift, whatever is inside</li>
        <li>The same corner castings the world over</li>
        <li>Ship, train and lorry use the same unit</li>
        <li>Sealed from sender to receiver</li>
      </ul>
    </div>
  </div>
  <figcaption>A steel box is not an invention anyone can patent. The valuable thing was the agreement: that the corners sit in exactly the same place on every container in the world, so that any spreader fits. Without that agreement a container is just an expensive crate.</figcaption>
</figure>

## What is worth taking with you

That a TEU is a counting unit and not a container, and that a TEU figure therefore
says less than it appears to.

That the 40-footer is the common one, and that the price is not double a
20-footer.

That a high cube gives volume, not more TEU.

That the number on the side is an owner code, a serial number and a check digit –
the same idea as in the barcode.

And that you run out of either space or weight, and that this decides which box
you should book.

*The container standards are maintained by ISO, and the owner codes by BIC. This
episode explains how the system is built and does not reproduce the standard text.
For binding detail, ISO 6346 and the related standards apply.*
