---
episode: en/gs1-strekkoder
kind: transkribert
transcriptSource: redigert
worktitle: "GS1 Numbers & Barcodes: How They Actually Work"
subtitle: "The English recording, cleaned up for reading – including the parts that were improvised on camera"
description: "Transcript of the English GS1 episode: why the standard exists, how a GTIN is built up, the check digit worked out live, the country myth, the GTIN family, the keys beyond GTIN, the symbologies, Sunrise 2027 and the link to RFID."
updated: 2026-09-25
---

*This is a machine transcription that has been structured and cleaned for
readability. Spoken repetitions and filler have been removed, and the technical
terms have been corrected against the standards – the transcription heard "get
in" for GTIN, "EIN 13" for EAN-13 and "EF14" for ITF-14. The substance is as it
was said.*

*The recording contains a few things that are not in the written article: the
barcodes are read off actual products held up to the camera, and there are
additional examples on ISBN and on batch-level recall.*

## Why the system exists

The barcode is probably the most widely used standard in the world. It is scanned
billions of times a day, and you have probably walked past several of them already
today without giving it a thought. Almost nobody knows how it is put together.

The first barcode was scanned in a shop in 1974, but the idea was much older. Back
in 1952, Norman Joseph Woodland and Bernard Silver took out a patent on a
barcode-like symbology. So the technology existed for more than twenty years before
it was put to use.

What was missing was not the technology. It was the agreement about what the
numbers should mean.

A barcode is completely worthless if two companies can use the same number on
different items. Then you do not have an identification system – you just have
noise. That is why GS1 exists: a global non-profit standards organisation with
national member organisations, GS1 Norway among them. The American UPC came first,
the European EAN followed in 1977, and the two merged into GS1 in 2005.

If you are going to hold on to one sentence from the whole episode, it is that the
barcode is an agreement, not a technology – and the agreement is the valuable part.

## How the number is built up

The central concept is the GTIN, the Global Trade Item Number. The distinction
worth keeping is that the GTIN is the number. The barcode is only one of several
ways of carrying it. You can have it written out as a number series, you can have
it in a barcode, you can have it another way.

Take 7001234567898.

**700** is the GS1 prefix, and it says which GS1 organisation allocated it.
Norway has 700 to 709.

Then the company prefix, and then the item reference.

*[Holding up a product from the fridge]* Here we have 73, then 80 and 10 – those
four digits are the company number. And behind that we have four more, 06 8980,
which is the item number rather than the company number. So you can split a barcode
into its parts, and the last digit is the check digit.

The item reference is the interesting part. That is the business's decision
entirely. GS1 has no involvement in which item gets which number. GS1 hands out the
address; the company furnishes the house.

The final check digit, 8, is calculated from the twelve digits in front of it.
Which also means you cannot see from the code where the company prefix ends and the
item reference begins. Only whoever allocated the prefix knows that.

## The check digit

This is the one thing in the episode you can do yourself, in your head, standing in
a shop. It is worth knowing, because it exposes a mistyped code in seconds.

The rule is: multiply the digits alternately by three and one from the right, add
them up, and see how far it is to the next ten.

Take 700123456789. From the right: 9 × 3 is 27. 8 × 1 is 8. 7 × 3 is 21. And so on,
working inwards. The sum comes out at 102. The next ten is 110. The difference is
eight, so the full code is 7001234567898.

If the sum already lands on a ten, the check digit is zero.

The same rule applies to every GS1 key, whatever its length. You always start with
weight three on the rightmost digit of the body, and alternate inwards.

## The country myth

This is a misconception that surfaces in purchasing, in marketing and in consumer
debate at regular intervals. People think that if it starts with 70, the item is
Norwegian.

It only means that the company holding the item is registered with the GS1
organisation for Norway. The goods can be produced in Italy, in Poland, or
anywhere else.

A Norwegian company with a prefix in the 700 series can have its goods made in
China, in Poland or in Italy – the code is the same either way. And in reverse, a
foreign company can sell an item made in Norway under its own prefix. GS1 states
this explicitly itself: the prefix does not identify country of origin. If you want
to know where something was made, look at the origin marking, not at the barcode.

There are, however, some prefixes that mean something other than a member
organisation. **978 and 979 are books** – that is where the ISBN sits inside the
GTIN.

Every time you buy a book you can see an ISBN somewhere in the front pages or at
the back. That is a unique number for that specific book. Once it is registered you
have to hand in a copy to the national library and have it registered there, and
then you have your own number for that book in order to be able to sell it.

## The GTIN family

**GTIN-13** is the standard in Europe. It is the code you see on nearly everything
in a shop, carried by EAN-13.

**GTIN-12** is the American UPC form, still common in North America.

**GTIN-8** is used on small packs where there simply is no room for a full barcode
– chewing gum, cosmetics.

*[Holding up a bottle]* It is actually a little strange that this one does not have
a full 13-digit number, but it has eight. It is an ordinary water bottle, and it
has eight instead of thirteen. This one here has thirteen, and this one also has
thirteen. So thirteen is the most common, but in some cases you get eight.

**GTIN-14** is usually for logistics. It is outer packaging and cases, and there
the first digit indicates which packaging level it is.

And then a practical point worth taking with you: all four are the same kind of
key, and systems often store them padded to fourteen digits with leading zeros. It
is worth knowing that when two systems cannot find each other's items, it is often
not the item that is missing – it is only the padding that differs.

## The keys beyond GTIN

The GTIN identifies an item, but you need to point at other things too: a place, a
pallet, a machine. GS1 has its own keys for that.

**GLN** identifies a place or a party – a warehouse, a shop, a department, a legal
entity. It is used in EDI messages to say who and where.

**SSCC** identifies one specific shipping unit. Eighteen digits on the pallet
label. Every pallet is unique, even when the contents are identical. That is in
order to tell them apart.

**GRAI** is returnable transport packaging – pallets, crates, cages. Things that
come back.

**GIAI** is an individual asset – tools, machines, IT equipment to be followed over
time.

Of these, the SSCC is the one that makes tracing possible in practice, and the
difference is worth stating plainly. A GTIN says "this is a carton of milk". An
SSCC says "this is exactly this pallet, dispatched on this day, from this
warehouse". The traceability is a great deal clearer.

## The symbologies

A barcode is not one thing. Which pattern is used depends on where the code is
going to be read, and how much it has to carry.

**EAN-13** is the retail checkout, built to be read fast and reliably, and for no
more than that.

**ITF-14** is corrugated board and cases, where the print is coarse and the bars
have to be robust.

**GS1-128** is the logistics label on the pallet. It carries several pieces of data
at once.

**GS1 DataMatrix** is medicines and medical devices, where a serial number and an
expiry date are required and the surface is small.

But look at the first row again. EAN-13 carries the item number and nothing else.
No date, no batch, no serial. It only says that this item is this item, and nothing
more.

That is why a recall cannot be run from the checkout alone. If you get a pallet of
these water bottles and you have two different batches on the same pallet, and
something is wrong with one of them, you cannot tell which items to throw away and
which to keep. So you have to throw away all of them, and that is a waste. That is
why traceability is worth having.

## Application Identifiers

The mechanism that makes a GS1-128 label machine-readable, without the parties
having agreed anything in advance, is simpler than it looks. Each field is
introduced by a code in brackets saying what the next number means.

Take this one: 01, then a long number. 10, then a code. 17, then six digits. It
reads as: the item is this GTIN, then the batch, then the best-before date, and so
on. It is a specific way of setting up numbers – a logic that says the numbers in
this barcode mean this.

## Sunrise 2027

GS1 is now running a global transition from 1D to 2D. The aim is that by the end of
2027, retail checkouts should be able to read both traditional barcodes and
GS1-approved 2D codes – in practice GS1 DataMatrix and QR with GS1 Digital Link.

The point is capacity. A 2D code can carry batch, expiry date and serial number in
addition to the item number, and it can at the same time be a link to product
information. That gives you two things: recalls that hit the individual batch
rather than the whole product line, and shelf-life management right at the till.

And here is a clarification worth including, because the date is often
misrepresented. The transition is designed as coexistence, not as a switchover. The
recommendation is to put the 2D code alongside the existing one, and the old codes
will still be usable after 2027. So if someone presents 2027 as a deadline – it is
not a deadline. It is a recommendation and a target.

## The link to RFID

Finally, the bridge over to something many people assume is a different world
altogether. The number on an RFID tag is not a different kind of identity. It is
usually the same key in a different form. In the EPC standards the tag number is
built on the GTIN with a serial number added, so that each individual object gets
its own identity rather than only its product type.

That is the practical difference between the two. The barcode says what something
is. RFID can also say which one of them it is.

There is more on the technology itself in the separate episode on RFID. I have also
written a bachelor's thesis on RFID, so we will speak more about that.

## What is worth taking with you

That the barcode is an agreement, not a technology, and that the agreement is the
valuable part – that everyone keeps their side of it.

That the first digits do not tell you where the item was made.

That the GTIN is the number, and the symbology merely the packaging around it.

That the SSCC is what makes tracing possible.

And that the check digit is something you can work out in your head, the next time
a number looks suspicious.

If you take two things from this episode: GS1 allocates the company prefix, but the
business creates the item numbers itself.

All of this is based on GS1's own standards and specifications. And one
clarification: GS1, GTIN and the other standard names belong to GS1. I explain how
the standards work and do not reproduce the specification text. For binding detail,
GS1's own publications apply.

So next time you are standing at a checkout looking at thirteen digits under a set
of bars, you know that the first three say where the company is registered, that the
middle part is the business's own choice, and that the last one you can work out
yourself.
