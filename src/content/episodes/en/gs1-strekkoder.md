---
title: "Learn something new: GS1 – the barcode, the GTIN and the numbers behind every item"
format: laer-noe-nytt
status: publisert
publishDate: 2026-09-20T08:00:00+02:00
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - data-og-beslutninger
tags:
  - GS1
  - barcode
  - GTIN
  - EAN
  - SSCC
  - GLN
  - traceability
topics:
  - What GS1 is, and why it exists
  - How a GTIN is built up, digit by digit
  - The check digit – and how to work it out yourself
  - The country myth – what the first digits actually mean
  - The GTIN family – 8, 12, 13 and 14 digits
  - The keys beyond GTIN – GLN, SSCC and the others
  - The symbologies – EAN-13, ITF-14, GS1-128, DataMatrix
  - Application Identifiers – what makes the logistics label powerful
  - Sunrise 2027 and the move to 2D
  - The link to RFID
questions:
  - What is GS1, and what does the organisation do?
  - What do the numbers in a barcode mean?
  - How do you work out the check digit?
  - Can you tell which country an item was made in from its barcode?
  - What is the difference between GTIN-8, GTIN-12, GTIN-13 and GTIN-14?
  - What are GLN and SSCC?
  - Which barcode types exist, and where is each used?
  - What are Application Identifiers?
  - What is Sunrise 2027?
  - How do GS1 and RFID fit together?
takeaways:
  - GS1 allocates the company prefix. The business creates the item numbers itself.
  - The check digit is simple arithmetic, and you can work it out in your head.
  - "The prefix shows where the company is registered, not where the item was made."
  - The GTIN is the number. The barcode is only one of several ways to carry it.
  - GS1-128 and Application Identifiers are what make a logistics label machine-readable.
  - An SSCC identifies the individual pallet, a GLN identifies the place.
  - The aim of Sunrise 2027 is for the checkout to be able to read both 1D and 2D.
  - The number on an RFID tag is built on the same keys.
coverTheme: "GS1"
image: /images/episoder/gs1-strekkoder.jpg
imageAlt: "Spørretimen cover: GS1 – Lær noe nytt (Learn something new). Host Jan Sindre Heltne in the studio."
description: >-
  What do the numbers in a barcode mean? A walk through the GS1 standards – how
  a GTIN is built up, how the check digit is calculated, what the prefix
  actually says about country of origin, the keys beyond GTIN, and the move to
  2D codes towards 2027.
featured: false
popularityScore: 0
links:
  youtube: https://youtu.be/ZVob-10Iemw
  spotify: https://open.spotify.com/episode/6eeli2JrFLS0rdsj0zwkw8
sources:
  - title: "GS1 – GS1 General Specifications and the identification key standards"
    url: https://www.gs1.org/standards
  - title: "GS1 – Company Prefix and the prefix list for member organisations"
    url: https://www.gs1.org/standards/id-keys/company-prefix
  - title: "GS1 – 2D barcodes and Sunrise 2027"
    url: https://www.gs1.org/standards/2d-barcodes
related:
  - en/rfid-forklart
  - en/incoterms-2020
  - en/lean-forklart
---

The barcode is probably the most-used standard in the world, and almost nobody
knows how it is put together. It is scanned billions of times a day, and the
thirteen digits under the bars are not arbitrary – they are an addressing
system.

This episode goes through **GS1**, the organisation that looks after it, what
the numbers mean, and why what you believed about the first three digits is
probably wrong.

## Why it exists

The first barcode was scanned in a shop in 1974. The idea was older – a patent
on a barcode-like symbology was filed by **Norman Joseph Woodland** and
**Bernard Silver** as early as 1952 – but what was missing was an agreement
about what the numbers should mean.

That agreement is the whole point. A barcode is worthless if two companies can
use the same number on different items. Hence **GS1**: a global, not-for-profit
standards organisation with national member organisations, GS1 Norway among
them. The American UPC came first, the European EAN followed in 1977, and the
two organisations became GS1 in 2005.

## How the number is built up

The central concept is the **GTIN** – Global Trade Item Number. That is the
number. The barcode is only one of several ways to carry it.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">7001234567898, taken apart</p>
  <ol>
    <li><span class="fig__box"><b>700 — GS1 prefix</b><small>Says which GS1 organisation allocated the prefix. 700–709 belong to GS1 Norway.</small></span></li>
    <li><span class="fig__box"><b>…1234 — company prefix</b><small>Allocated to the business by GS1. The prefix is shorter for a business that needs many item numbers, and longer for one that needs few.</small></span></li>
    <li><span class="fig__box"><b>…56789 — item reference</b><small>This the business decides entirely on its own. GS1 has no involvement in which item gets which number.</small></span></li>
    <li><span class="fig__box"><b>8 — check digit</b><small>Calculated from the twelve preceding digits. Catches most scanning and typing errors.</small></span></li>
  </ol>
  <figcaption>Note how the lengths of the company prefix and the item reference vary inversely: a short company prefix leaves room for many items, a long one for few. That is why you cannot read out of the code where one ends and the other begins – only whoever allocated the prefix knows.</figcaption>
</figure>

## The check digit

You can work this out yourself, and it is worth being able to: it exposes a
mistyped code in seconds.

<figure class="fig fig--rule">
  <p class="fig__claim">Multiply the digits alternately by 3 and 1 from the right, add them up, and see how far it is to the next ten.</p>
  <p class="fig__example"><b>700123456789 →</b> from the right: 9×3 + 8×1 + 7×3 + 6×1 + 5×3 + 4×1 + 3×3 + 2×1 + 1×3 + 0×1 + 0×3 + 7×1 = 27+8+21+6+15+4+9+2+3+0+0+7 = <b>102</b>. The next ten is 110, and the difference is <b>8</b>. The full code becomes <b>7001234567898</b>. If the sum already lands on a ten, the check digit is 0.</p>
</figure>

The same rule applies to all the GS1 keys, whatever their length – you always
start with weight 3 on the rightmost digit of the body, and alternate inwards.

## The country myth

This is the widespread misunderstanding, and it turns up in purchasing, in
marketing and in consumer debate at regular intervals.

<figure class="fig fig--rule">
  <p class="fig__claim">The prefix shows which GS1 organisation the company is registered with. It says nothing about where the item was made.</p>
  <p class="fig__example"><b>Why it goes wrong:</b> a Norwegian company with a prefix in the 700 series can have its goods made in China, Poland or Italy – the code is the same. And a foreign company can sell an item made in Norway under its own prefix. GS1 states this explicitly itself: the prefix does not identify country of origin. To know where something was made, look at the origin marking, not at the barcode.</p>
</figure>

Some prefixes do mean something other than a member organisation. **978 and
979** are books – that is where the ISBN sits inside the GTIN. **977** is
periodicals. And series such as **02** and **20–29** are set aside for internal
use within a shop or chain, typically for items weighed at the till. If you meet
a code like that, it is only valid inside the business that created it.

## The GTIN family

<figure class="fig fig--matrix">
  <p class="fig__title">Four lengths, four uses</p>
  <table>
    <thead>
      <tr><th scope="col">Key</th><th scope="col">Digits</th><th scope="col">Used on</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">GTIN-13</th><td>13</td><td>The standard in Europe. The code you see on nearly everything in a shop. Carried by EAN-13.</td></tr>
      <tr><th scope="row">GTIN-12</th><td>12</td><td>The American UPC form. Still common in North America.</td></tr>
      <tr><th scope="row">GTIN-8</th><td>8</td><td>Small packs with no room for a full code – chewing gum, cosmetics.</td></tr>
      <tr><th scope="row">GTIN-14</th><td>14</td><td>Outer packaging and cases. The first digit indicates which packaging level it is.</td></tr>
    </tbody>
  </table>
  <figcaption>All four are the same kind of key, and systems often store them padded to fourteen digits with leading zeros. Worth knowing when two systems cannot find each other's items: often it is only the padding that differs.</figcaption>
</figure>

## The keys beyond GTIN

A GTIN identifies an item. GS1 has keys for the other things you need to point
at, and the first two here are the ones actually used most in logistics.

<figure class="fig fig--matrix">
  <p class="fig__title">The keys you will meet</p>
  <table>
    <thead>
      <tr><th scope="col">Key</th><th scope="col">Identifies</th><th scope="col">Typical use</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">GLN</th><td>A place or a party</td><td>Warehouse, shop, department, legal entity. Used in EDI messages to say who and where.</td></tr>
      <tr><th scope="row">SSCC</th><td>One particular shipping unit</td><td>Eighteen digits on the pallet label. Every pallet is unique, even if the contents are identical.</td></tr>
      <tr><th scope="row">GRAI</th><td>Returnable transport item</td><td>Pallets, crates, cages – packaging that comes back.</td></tr>
      <tr><th scope="row">GIAI</th><td>An individual asset</td><td>Tools, machines, IT equipment to be followed over time.</td></tr>
    </tbody>
  </table>
  <figcaption>The SSCC is what makes tracing possible in practice. A GTIN says “this is a carton of milk”, while an SSCC says “this is exactly this pallet, dispatched on this day, from this warehouse” – and the latter is what you need when something has to be recalled.</figcaption>
</figure>

## The symbologies

Barcode is not one thing. Which pattern is used depends on where the code is to
be read and how much it has to carry.

<figure class="fig fig--matrix">
  <p class="fig__title">Which code where</p>
  <table>
    <thead>
      <tr><th scope="col">Symbology</th><th scope="col">Carries</th><th scope="col">Where it is used</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">EAN-13 / UPC-A</th><td>A GTIN and nothing else</td><td>The retail checkout. Built to be read fast and reliably, and for no more than that.</td></tr>
      <tr><th scope="row">EAN-8 / UPC-E</th><td>A short GTIN</td><td>Small packs.</td></tr>
      <tr><th scope="row">ITF-14</th><td>A GTIN-14</td><td>Corrugated board and cases, where the print is coarse and the bars have to be robust.</td></tr>
      <tr><th scope="row">GS1-128</th><td>Several pieces of data at once</td><td>The logistics label on the pallet: SSCC, GTIN, batch, date, quantity.</td></tr>
      <tr><th scope="row">GS1 DataBar</th><td>A GTIN plus a little more</td><td>Fresh food and coupons, where date and weight have to fit in a small space.</td></tr>
      <tr><th scope="row">GS1 DataMatrix</th><td>A great deal, on a very small area</td><td>Medicines and medical devices, where serial number and expiry date are required.</td></tr>
      <tr><th scope="row">QR with GS1 Digital Link</th><td>All of the above, plus a web address</td><td>What is now arriving on consumer packaging.</td></tr>
    </tbody>
  </table>
  <figcaption>Note the first row. EAN-13 can only carry the item number – no date, no batch, no serial. That is why a recall cannot be managed from the shop checkout alone, and why logistics needs GS1-128.</figcaption>
</figure>

## Application Identifiers

This is the mechanism that makes a GS1-128 label machine-readable without any
prior agreement, and it is simpler than it looks.

<figure class="fig fig--rule">
  <p class="fig__claim">Each field is introduced by a code in brackets saying what the next number means.</p>
  <p class="fig__example"><b>(01) 07001234567898 (10) A4472 (17) 271231</b> reads as: the item is GTIN 07001234567898, batch A4472, best before 31 December 2027. <b>(00)</b> is the SSCC, <b>(21)</b> is a serial number, <b>(37)</b> is a quantity. The brackets are printed for the human eye – in the barcode itself there is a separator character instead.</p>
</figure>

It is this construction that lets a receiver scan an unknown supplier's pallet
label and understand it immediately. The date format is worth noting: six
digits, YYMMDD.

## Sunrise 2027

GS1 is now running a global move from 1D to 2D. The aim is for retail
checkouts to be able to read both traditional barcodes and GS1-approved 2D
codes by the end of 2027 – in practice GS1 DataMatrix and QR with GS1 Digital
Link.

The point is capacity. A 2D code can carry batch, expiry date and serial number
alongside the item number, and can at the same time be a link to product
information. That makes recalls that hit the individual batch rather than the
whole product line, and shelf-life management at the till.

The transition is set up as coexistence, not as a switch: the recommendation is
to add the 2D code alongside the existing one, and the old codes are to remain
usable after 2027. Worth having in mind when someone presents the date as a
deadline.

## The link to RFID

The number on an RFID tag is not a different kind of identity – it is usually
the same key in another format. In the EPC standards the tag number is built on
the GTIN, with a serial number added, so that each individual object gets its
own identity rather than only its product type.

That is the practical bridge between the two: the barcode says what something
is, and RFID can also say which one of them it is. More on the technology
itself in [the Learn something new episode on
RFID](/en/episodes/rfid-forklart/).

## What is worth taking with you

That the barcode is an agreement, not a technology – and that the agreement is
the valuable part. That the first digits do not tell you where the item was
made. That the GTIN is the number and the symbology only the wrapping around
it. That the SSCC is what makes tracing possible. And that the check digit is
something you can work out in your head, the next time a number looks
suspicious.

*GS1, GTIN and the other standard names belong to GS1. This episode explains
how the standards work and does not reproduce the text of the specifications.
For binding detail, GS1's own publications apply.*
