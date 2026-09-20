---
title: "Learn something new: RFID – chips with no battery, read at a distance"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - automatisering
tags:
  - RFID
  - EPC
  - NFC
  - logistics
  - tracking
  - goods receipt
  - inventory
topics:
  - The three parts of an RFID setup
  - How a chip with no battery manages to answer
  - The frequency bands, and why the choice decides everything
  - Passive, active and semi-passive tags
  - RFID against the barcode – what the difference actually is
  - Metal and liquid – the physics that sinks projects
  - Read rate, and why it never reaches a hundred per cent
  - RFID, NFC, BLE and UWB – which is which
  - What it is actually used for
  - Privacy and the criticism
  - Why the hype around 2005 did not come true
questions:
  - What is RFID, and how does it work?
  - How can a chip answer without having a battery?
  - What is the difference between LF, HF and UHF?
  - What is the difference between passive and active tags?
  - What separates RFID from a barcode?
  - Why does RFID work badly on metal and liquid?
  - Why do you never read all the tags?
  - What is the difference between RFID, NFC, Bluetooth and UWB?
  - Where is RFID used today, and where has it not caught on?
  - Is RFID a privacy problem?
takeaways:
  - A passive tag has no battery – it borrows energy from the reader and answers by reflecting the signal.
  - The choice of frequency decides the range, and it is the most important decision in an RFID project.
  - "RFID needs no line of sight, and that is the real difference from a barcode."
  - UHF is the band for logistics – but the frequency is not the same in Europe and the United States.
  - Metal reflects and liquid absorbs. The physics decides whether a project can succeed.
  - The read rate never reaches a hundred per cent. The solution has to cope with that.
  - NFC is a relative of RFID. Bluetooth and UWB are something else.
  - The hype around 2005 collapsed on tag price and read reliability, not on the idea.
coverTheme: "RFID"
image: /images/episoder/rfid-forklart.jpg
imageAlt: "Spørretimen cover: RFID – Lær noe nytt (Learn something new). Host Jan Sindre Heltne in the studio."
description: >-
  How can a chip with no battery be read several metres away? A walk through
  RFID – the three parts, the frequency bands, passive and active tags, how it
  differs from a barcode, why metal and liquid ruin things, and why the
  technology did not take over everything after all.
featured: false
popularityScore: 0
advisory:
  - juss
related:
  - en/rfid-varetelling
  - en/gs1-strekkoder
  - en/lean-forklart
---

What surprises people most about RFID is not that a chip can be read at a
distance. It is that the most common kind **has no battery at all** – and still
answers when it is asked.

This is a subject Jan Sindre wrote his
[bachelor thesis](/en/episodes/rfid-varetelling/) on. Here is the walk-through
of how it works, what it is good for, and where it tends to come apart.

## The three parts

An RFID setup is always three things. When a project fails, it is almost always
because the third one was forgotten.

<figure class="fig fig--flow">
  <p class="fig__title">The whole chain</p>
  <ol>
    <li><span class="fig__box"><b>The tag</b><small>A chip with a unique number and an antenna. Sits on the item, the pallet, the tool or the card.</small></span></li>
    <li><span class="fig__box"><b>The reader</b><small>Sends radio energy out through one or more antennas, and picks up the answer.</small></span></li>
    <li><span class="fig__box"><b>The system</b><small>What turns the number into something useful: goods receipt, stock levels, tracking.</small></span></li>
  </ol>
  <figcaption>The first two are hardware and can be bought. The third is integration, and that is where the money and the time go. A reader shouting numbers into the air with nothing receiving them has no value.</figcaption>
</figure>

## How a chip with no battery answers

This is the elegant part of the technology, and worth understanding before
reading on.

<figure class="fig fig--rule">
  <p class="fig__claim">The tag borrows energy from the reader, and answers by changing how it reflects the signal.</p>
  <p class="fig__example"><b>The principle is called backscatter:</b> the reader sends out a radio wave. The antenna on the tag harvests enough energy to wake the chip. The chip does not answer by transmitting anything itself – it has no power for that – but by switching its own reflectivity on and off in a pattern. The reader sees the change in its own signal, and reads the pattern as numbers. The tag is a blinking mirror, not a transmitter.</p>
</figure>

That is also why the range is asymmetric: the reader has to have enough power
to reach the tag *and* for the faint reflected answer to come back. Double the
distance and you need far more than double the power.

## The frequency bands

This is the most important decision in an RFID project, and it is often taken
without anyone understanding the consequence.

<figure class="fig fig--matrix">
  <p class="fig__title">Three bands, three uses</p>
  <table>
    <thead>
      <tr><th scope="col">Band</th><th scope="col">Range</th><th scope="col">Where it belongs</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">LF<br />approx. 125–134 kHz</th><td>Centimetres</td><td>Animal ear tags, car keys, access fobs. Copes with being near metal and liquid better than the others.</td></tr>
      <tr><th scope="row">HF<br />13.56 MHz</th><td>Up to about a metre</td><td>Cards, passports, library books, payment. NFC is a close relative in this band.</td></tr>
      <tr><th scope="row">UHF<br />approx. 860–960 MHz</th><td>Several metres</td><td>Logistics: goods receipt, stock counting, pallet reading, retail. Can read many tags quickly.</td></tr>
    </tbody>
  </table>
  <figcaption>UHF is the band for goods flows, and that is where the large gain lies. But note the spread: Europe uses around 865–868 MHz, the United States around 902–928 MHz. Equipment and tags bought for one market can perform noticeably worse in the other – worth knowing when the goods, the readers or the supplier cross a border.</figcaption>
</figure>

## Passive, active and semi-passive

<figure class="fig fig--compare">
  <p class="fig__title">With and without a battery of its own</p>
  <div class="fig__cols">
    <div class="fig__col" data-accent>
      <p class="fig__lead">Passive</p>
      <h4>No power source</h4>
      <ul>
        <li>Costs little – often cents per tag</li>
        <li>Can be stuck on as a label</li>
        <li>Lasts indefinitely in practice</li>
        <li>Shorter range, and requires a strong reader</li>
      </ul>
    </div>
    <div class="fig__col">
      <p class="fig__lead">Active</p>
      <h4>Its own battery</h4>
      <ul>
        <li>Costs far more per unit</li>
        <li>Transmits by itself, and can reach tens to hundreds of metres</li>
        <li>Can carry sensors – temperature, shock, humidity</li>
        <li>The battery runs out, and has to be planned for</li>
      </ul>
    </div>
  </div>
  <figcaption>There is a middle form too, semi-passive: the battery powers the chip and any sensors, but the answer is still sent as a reflection. The rule of thumb is simple enough – passive on goods, active on whatever is worth watching in its own right: containers, vehicles, expensive equipment.</figcaption>
</figure>

## RFID against the barcode

The most common misconception is that RFID is “a better barcode”. It is a
different kind of thing, with different strengths and different costs.

<figure class="fig fig--compare">
  <p class="fig__title">Two ways to identify an item</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Barcode</p>
      <h4>Cheap and certain</h4>
      <ul>
        <li>Needs line of sight and the right angle</li>
        <li>One at a time</li>
        <li>Costs almost nothing – it is printed</li>
        <li>If you read it, the answer is right</li>
        <li>Usually identifies the product type</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">RFID</p>
      <h4>Fast and unseen</h4>
      <ul>
        <li>Needs no line of sight – reads through packaging</li>
        <li>Many tags in one operation</li>
        <li>Costs per tag, every time</li>
        <li>If you miss some, you do not know which ones</li>
        <li>Can identify the individual item</li>
      </ul>
    </div>
  </div>
  <figcaption>Line of sight is the real difference. A pallet can be read without opening it, and a shop shelf can be counted with a handheld rather than one item at a time. The last bullet on the right matters too: it is the difference between knowing you have “twelve of this model” and knowing which twelve.</figcaption>
</figure>

The number sitting on the tag is usually built to the same standards as the
barcode. That is the subject of [the Learn something new episode on GS1 and
barcodes](/en/episodes/gs1-strekkoder/).

## The physics that sinks projects

Here is the single piece of information that saves the most time, and that
often arrives too late in a project.

<figure class="fig fig--rule">
  <p class="fig__claim">Metal reflects radio waves. Liquid absorbs them. Both ruin things for UHF.</p>
  <p class="fig__example"><b>What it means in practice:</b> a tag stuck straight onto a steel rack or a paint tin behaves completely differently from how it did on the test bench. There are tags made for metal, with a spacer or a ground plane of their own, but they cost more and have to be chosen deliberately. Liquid is worse: water absorbs energy in the UHF band, so a pallet of drinks shields the tags in the middle. It is also why LF is still used on animals – that band minds less about sitting on something that is mostly water.</p>
</figure>

## The read rate never reaches a hundred per cent

An RFID setup is probability, not certainty. A tag can lie in a shadow, face
the wrong way relative to the antenna, or be drowned out by the other tags
answering at the same moment.

So the question is never “are we reading everything?”, but “what do we do when
we did not?”. Good solutions read the same consignment several times from
several angles, compare against what was expected, and flag the discrepancy –
rather than pretending the count is complete. An installation built on the
assumption of a hundred per cent read rate gives wrong answers without warning,
and that is worse than not measuring.

## RFID, NFC, BLE and UWB

The four get mixed up constantly, including by people selling them.

<figure class="fig fig--matrix">
  <p class="fig__title">Which is which</p>
  <table>
    <thead>
      <tr><th scope="col">Technology</th><th scope="col">In short</th><th scope="col">Typical use</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">RFID (UHF)</th><td>Passive tags read at several metres, many at once</td><td>Goods receipt, stock counting, retail</td></tr>
      <tr><th scope="row">NFC</th><td>A close relative in the HF band, with two-way communication over a couple of centimetres</td><td>Payment by phone, access cards, the tag you scan on a poster</td></tr>
      <tr><th scope="row">BLE</th><td>Bluetooth with low power draw. Its own transmitter and its own battery.</td><td>Indoor equipment tracking, sensors, phone connections</td></tr>
      <tr><th scope="row">UWB</th><td>Wideband that measures distance by time of flight, not signal strength</td><td>Position to the decimetre – where “nearby” is not good enough</td></tr>
    </tbody>
  </table>
  <figcaption>The practical dividing line: RFID and NFC tell you that something <i>is here</i>. BLE and UWB tell you <i>where</i> it is, but need a battery in every unit. If you have a thousand items to count, RFID is the answer. If you need to find one trolley in a hall, it probably is not.</figcaption>
</figure>

## What it is actually used for

What has worked best is retail with many variants and a high need for inventory
accuracy – apparel above all, where the same model comes in many sizes and
colours, and where knowing what is actually in the shop is worth money.

Beyond that: goods receipt without opening the pallet, equipment and tool
tracking, textile handling in hotels and hospitals, libraries, animal
identification, access control, road tolls, ski passes and race timing.

Where it has *not* caught on is just as instructive: groceries with a low
margin per unit, where the tag cost eats the gain, and anything that is too
much metal or too much liquid.

## Privacy

A tag answers whoever asks, and it does not know who is asking. That is the
nature of the technology, and it is the starting point for the objections.

The concern has two parts. One is that a tag left on an item after purchase can
in principle be read by others later. The standards for passive UHF have
mechanisms for disabling a tag permanently, but they have to actually be used.
The other is that repeated readings of the same number over time become a
pattern – and a pattern that can be tied to a person is something other than a
stock number.

That is exactly where the assessment lies: as long as the number only follows a
pallet, it is goods data. If it can be linked to a person – an access card, a
customer relationship, a vehicle – you are in data protection territory, and
the use has to be assessed before it goes live, not afterwards.

## Why the hype did not come true

Around the middle of the 2000s, RFID was described as the thing that would
replace the barcode within a few years. Large retail chains required their
suppliers to tag pallets, and the industry talked about the “five-cent tag” as
the precondition for it paying off.

It did not turn out that way, and the reasons are worth knowing: tags cost more
for longer than expected, read rates in real environments were worse than in
the demo, and the gain often landed with a different party in the chain from
the one paying for the tags. The technology was not wrong. The arithmetic and
the expectations were.

What has happened since is quieter and more solid: tags have got cheaper,
readers better, standards mature – and the use has found the places where the
arithmetic works, instead of everywhere at once.

## What is worth taking with you

That the technology is elegant, but that the project stands or falls on the
integration. That the choice of frequency decides more than anything else. That
metal and liquid have to be settled early, with a test in the actual
environment and not on a bench. And that a read rate below a hundred per cent
is not a fault to be hidden, but a condition the solution has to handle.

*The content is a technical walk-through, not a recommendation about equipment
or suppliers. The data protection assessment of any specific solution has to be
made in the context it will be used in.*
