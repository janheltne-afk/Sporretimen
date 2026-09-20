---
title: "Learn something new: Counting 160,000 items – the bachelor thesis on RFID"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - automatisering
tags:
  - RFID
  - stock counting
  - inventory control
  - UHF
  - SAP
  - ERP
  - LEAN
  - bachelor thesis
  - case study
topics:
  - The warehouse the thesis was about, in numbers
  - Why an annual stock count takes two to three months
  - What the 2019 pilot test actually showed
  - Why the same tag gets read seven to ten times
  - Metal, grounding and the chips that stopped answering
  - Active or passive – the two scenarios
  - What the thesis could not answer
  - What the conclusion said, and what it did not
questions:
  - How long does an annual stock count take in a large warehouse?
  - What did the pilot test of passive UHF RFID show?
  - Why must an RFID counting system filter out duplicate reads?
  - Why does an ordinary RFID tag stop working on metal?
  - What is the practical difference between active and passive RFID?
  - Why was active RFID ruled out?
  - What is the problem with counting multipacks?
  - What did the thesis conclude?
takeaways:
  - "The warehouse held 12,000 material numbers and up to 160,000 articles, with a stock value of up to 500 million kroner."
  - "The annual count took two to three months with two full-time equivalents – not because the work was poor, but because the method was manual."
  - "Around 80 per cent of the warehouse was safety stock. Much of what was counted had not moved in years."
  - "The pilot read passive UHF tags at six to eight metres through the racking – on cardboard, wood and plastic."
  - "The same tag was read seven to ten times per count. The system had to filter those reads down to one item."
  - "Tags stuck straight onto metal were grounded and stopped answering. That was the pilot's only real problem."
  - "Active RFID was ruled out on cost and battery replacement, not on capability."
  - "Multipacks could not be solved. Nobody tags every single screw."
  - "The conclusion was that it could pay off, with reservations – not that it would."
coverTheme: "RFID in practice"
image: /images/episoder/rfid-varetelling.jpg
imageAlt: "Spørretimen cover: RFID i praksis – Lær noe nytt (Learn something new). Host Jan Sindre Heltne in the studio."
description: >-
  An annual stock count that takes two to three months with two full-time
  equivalents. Can RFID cut it? This is my bachelor thesis from 2020 – the
  warehouse in numbers, what the pilot test actually showed, why tags on metal
  stopped answering, and what we could not answer.
featured: false
popularityScore: 0
sources:
  - title: "Jan Sindre Heltne and Stian Lunde – «Bruk av RFID-teknologi for effektivisering av varetellingen på lageret» (Using RFID technology to make warehouse stock counting more efficient). Bachelor thesis SCM600, BSc in Logistics and Supply Chain Management, Molde University College, 2 June 2020. Supervisor Bjørn Jæger. In Norwegian."
related:
  - en/rfid-forklart
  - en/lean-forklart
  - en/gs1-strekkoder
---

In the spring of 2020 I wrote my bachelor thesis together with **Stian Lunde** at
Molde University College. The subject was RFID, but the question was narrower
than that: could the technology do anything about the annual stock count in a
large warehouse?

The focus company was **ConocoPhillips**, and the warehouse was the supply base
at Tananger outside Stavanger, which serves the Ekofisk and Eldfisk fields. I
had taken my vocational certificate in logistics there before university, and
knew the warehouse from the inside – which is both the strength and the weakness
of a thesis like that. Our supervisor was Bjørn Jæger.

This episode is the walk-through of what we actually found. If you want the
technology explained from the ground up, that is [its own
episode](/en/episodes/rfid-forklart/) – this one is about one specific
warehouse, one specific problem, and what happened when somebody tried.

## The warehouse, in numbers

The numbers are half the answer to why this is hard.

<figure class="fig fig--matrix">
  <p class="fig__title">The Tananger supply base, as it was in 2020</p>
  <table>
    <thead>
      <tr><th scope="col">Measure</th><th scope="col">Figure</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Material numbers</th><td>12,000 distinct</td></tr>
      <tr><th scope="row">Articles</th><td>up to 160,000</td></tr>
      <tr><th scope="row">Stock value</th><td>up to 500 million kroner</td></tr>
      <tr><th scope="row">Share held as safety stock</th><td>around 80 per cent</td></tr>
      <tr><th scope="row">Turnover</th><td>around 20 per cent</td></tr>
      <tr><th scope="row">Annual count</th><td>2–3 months, two full-time equivalents</td></tr>
    </tbody>
  </table>
  <figcaption>The last two rows belong together. When four fifths of the warehouse is critical components kept there so they can be shipped out the day something breaks offshore, you spend every year counting items that have not moved. Some suppliers have stopped making the part, so you buy a couple of spares and put them on the shelf. There they may sit for years.</figcaption>
</figure>

## The paper

What surprised me most when I had to describe the existing situation was how
little of the problem was about people.

The warehouse ran SAP. But the work out in the racking ran on paper: pick lists
printed on A4, locations and material numbers noted down with a pen, and then
entered into the system back at the office. Every order produced another sheet
that had to be filed.

<figure class="fig fig--rule">
  <p class="fig__claim">The errors did not come from carelessness. They came from the distance between the shelf and the keyboard.</p>
  <p class="fig__example"><b>What we found:</b> the warehouse had minimal errors – in the count, at goods receipt, on returns from offshore, on location changes. The staff we interviewed said corrections were rare, and that when one was needed they traced the cause rather than just fixing the number. The work was not done badly. But when a warehouse worker has several tasks to finish outside before returning to the office, the scope for human error grows – without anyone having done anything wrong.</p>
</figure>

That is an important distinction, and an easy one to lose when writing about
efficiency. We were not looking for someone doing a poor job. We were looking
for work that did not need doing.

## The pilot test

Here we were lucky. In the summer of 2019, half a year before we started, the
company had already run a pilot test on passive UHF tags. We were given access
to it, and could build on its findings instead of guessing.

The setup was simple and rather physical: an RFID read head was mounted on a
pallet so the forklift could raise it up through the racking and read the tags on
the goods. The warehouse has 24 racks. The worry beforehand was that items sit
tightly packed in the pallets, and that the reader would not get through.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">The pilot setup</p>
  <ol>
    <li><span class="fig__box"><b>The tags</b><small>Passive UHF tags attached to a wide variety of goods in the racking.</small></span></li>
    <li><span class="fig__box"><b>The read head on the pallet</b><small>Fixed in place, raised and lowered through the rack by forklift.</small></span></li>
    <li><span class="fig__box"><b>A counting system of its own</b><small>Had to be built from scratch. It registered tags against material number and location, and told the read head which location to count.</small></span></li>
    <li><span class="fig__box"><b>Filtering</b><small>Reduced the many reads of the same tag to one item, and showed "at shelf" against "in stock".</small></span></li>
  </ol>
  <figcaption>The third step is the point. The tags and the reader could be bought. The counting system did not exist and had to be written – even for a pilot meant to answer a single question. This is what tends to be underestimated in RFID projects.</figcaption>
</figure>

The result: the tags were read at **six to eight metres** on cardboard, wood and
plastic. That was more than enough to read through the racking, and in the test
every registered tag was found.

## The one read seven times

This is the detail I remember best, because it was not in any of the textbooks we
read first.

<figure class="fig fig--rule">
  <p class="fig__claim">A read head does not count items. It registers signals – and it registers the same signal over and over.</p>
  <p class="fig__example"><b>What it actually looks like:</b> as long as the read head is within range of a tag, it reads that tag again. In the pilot the same ID was read seven to ten times per count. Every tag has its own ID, so the counting system's job was to strip out the duplicates, so that one tag read ten times was booked as one item. Without that filtering the warehouse would have "grown" eightfold every time somebody counted.</p>
</figure>

It is a useful reminder of what the technology actually delivers. It does not
hand you a stock level. It hands you a stream of observations, and somebody has
to decide what they mean.

## The metal

The pilot had one real problem, and it was physics.

The chips supplied were *non-metal tags*. Stick one of those straight onto a
metal box and the chip is grounded, and then it cannot answer when the read head
tries to wake it. Goods in metal packaging were, in effect, invisible.

The fix suppliers use is a **flag tag** – a tag that sits slightly away from the
surface, so it never makes contact with the metal. We wrote it into the thesis as
a fallback.

And here I should be honest about a weakness: we assumed the combi tags we
recommended would work. That was precisely what had failed in the pilot. We
noted it as a reservation, but we did not test it.

## The two scenarios

The choice was between active and passive RFID, and it was not capability that
decided it.

<figure class="fig fig--compare">
  <p class="fig__title">Active or passive, for this warehouse</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">Scenario 1</p>
      <h4>Active RFID</h4>
      <ul>
        <li>Battery in the tag, range of several hundred metres</li>
        <li>Would in practice give a live stock level at all times</li>
        <li>More expensive chips – and the warehouse holds up to 150,000 articles</li>
        <li>Every battery has to be replaced after a few years</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">Scenario 2</p>
      <h4>Passive UHF</h4>
      <ul>
        <li>No battery – the tag is woken by the reader's radio waves</li>
        <li>Smaller, cheaper, and a long service life</li>
        <li>Six to eight metres is enough inside a rack</li>
        <li>Applied much the way a barcode label is today</li>
      </ul>
    </div>
  </div>
  <figcaption>Active RFID fell on the arithmetic, not on performance. A warehouse with 150,000 articles is 150,000 batteries that will one day need changing, and at that point the labour costs more than the chips. The last bullet on the right was an argument in itself: goods are already labelled with barcodes, so the labelling step already exists in the process.</figcaption>
</figure>

We landed on passive UHF – the same type as in the pilot – and recommended that
the shelf locations get tags of their own too. A read head does not know where it
is. It only knows what answered. With location tags on the shelves you can say
that *this* item was closest to *that* shelf, and then you can find something
put back in the wrong place without searching half a warehouse.

## What we could not answer

This is the part I would give the most weight if I were writing the thesis
today, because it decides whether the arithmetic holds.

<figure class="fig fig--flow">
  <p class="fig__title">Three open questions</p>
  <ol>
    <li><span class="fig__box"><b>The labelling job</b><small>Every article has to be tagged before you can count with RFID. We could not estimate how long it takes to tag one rack, and therefore not what the one-off cost actually is.</small></span></li>
    <li><span class="fig__box"><b>Multipacks</b><small>A box of 100 parts is booked as 100 units in SAP, but goes onto the shelf with the parts still in the box. Nobody tags every single screw.</small></span></li>
    <li><span class="fig__box"><b>Power and network</b><small>The solution depends on both. An outage needs backup power and local storage – otherwise the count stops.</small></span></li>
  </ol>
  <figcaption>The middle point is the most interesting, because better technology does not make it go away. One option we sketched was to mark the tag with a note that the contents must be counted by hand, or to treat an unopened pack as whole and only count the one that has been opened. Both are working routines, not technology.</figcaption>
</figure>

## What the conclusion said

And just as importantly: what it did not say.

<figure class="fig fig--rule">
  <p class="fig__claim">The conclusion was conditional. That it could pay off, and that the company could consider investing – not that the gain had been calculated.</p>
  <p class="fig__example"><b>The concrete estimate:</b> the count as it stood, two people for two to three months, could be replaced by one person driving a forklift from rack to rack. The time freed up was the main argument – not because counting is valuable in itself, but because staff can then spend the time catching errors early. During our visit an alert employee stopped an active order that was no longer needed. That is the kind of intervention that pays for itself, and it requires somebody to have the time.</p>
</figure>

The precondition we were clearest about was the ERP side: SAP has to be able to
read and update the information on the tags continuously, or the rest does not
work. It is the same point as in the RFID episode – the reader and the tag are
the easy part.

## What the thesis taught me

About RFID: that physics decides, and that it decides early. Metal and liquid
are not details you solve at the end.

About method: that knowing a company from the inside gives you access and
understanding, and at the same time a bias you have to write about openly. We had
both worked there. It was in the thesis, and it should have been.

And about timing: the thesis was written in the spring of 2020, when the
universities closed. It came together over video calls, without an open library,
and with an industry that was hard to reach in the middle of a pandemic. That we
were allowed to visit Stavanger at all was more than we could have expected.

*The thesis was written together with Stian Lunde, and is his work as much as
mine. It is a case study of one warehouse at one point in time – the figures and
routines describe the situation in 2020, and say nothing about how the warehouse
is run today. Nor is it a recommendation to buy anything: the assessment applied
to one specific warehouse, with the reservations set out in the thesis.*
