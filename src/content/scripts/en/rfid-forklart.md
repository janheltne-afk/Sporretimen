---
episode: en/rfid-forklart
kind: sporsmal
transcriptSource: manuell
worktitle: "RFID explained"
subtitle: "Recording script – order, transitions and where the graphics go"
description: "Script for the Learn something new episode on RFID: how a chip with no battery answers, why the frequency choice decides everything, what metal and liquid do to read rates, and why the hype of the 2000s never arrived."
updated: 2026-10-02
---

*This is the script, written before recording. The text below is what gets said,
and the lines in italics are production cues – they are not read aloud. Once the
episode is recorded, this text is replaced by what was actually said.*

*Length: allow 17–19 minutes.*

*If it runs long: cut the section on NFC, BLE and UWB and say it is in the
article. Do not cut the physics section or the read rate – those two are what
separate this from a product brochure.*

*If you have an RFID tag or an access card lying around, hold it up in the
opening. It is a good prop, and it worked well in the barcode episode.*

## The opening

*(Hold up a tag if you have one. Start with the puzzle.)*

This one has no battery.

It sends nothing. It has no power source at all.

And yet a reader several metres away can pull a unique number out of it – through
packaging, without seeing it, and alongside a hundred others at the same time.

Today we are going to look at how that is possible, why the choice of frequency
decides more than anything else, and why the technology that was going to replace the
barcode twenty years ago – did not.

## The three parts

*(Graphic: tag, reader, system.)*

An RFID setup is always three things.

**The tag.** A chip with a unique number and an antenna. It sits on the item, the
pallet, the tool or the card.

**The reader.** It sends out radio energy through one or more antennas, and picks up
the answer.

**The system.** The thing that turns the number into something useful – goods
receipt, inventory, tracking.

*(The most important warning, and it comes early on purpose.)*

The first two are hardware, and they can be bought.

The third is integration. And that is where the money and the time go.

When an RFID project fails, it is almost always because the third part was forgotten.
A reader shouting numbers into the air with nothing to receive them has no value.

## How the chip answers

*(Graphic: backscatter. This is the elegant part of the technology – take your
time.)*

So back to the puzzle from the opening.

The reader sends out a radio wave. The antenna on the tag picks up enough energy from
that wave to wake the chip.

*(Here is the point.)*

But the chip does not answer by sending anything itself. It does not have the power to
do that.

It answers by switching its own reflection on and off in a pattern.

The reader sees the change in its own signal, and reads the pattern as numbers.

*(The image that makes it stick.)*

So the tag is a mirror that blinks. Not a transmitter.

The principle is called **backscatter**, and it is why the range is asymmetric: the
reader has to have enough power to reach the tag, **and** for that weak reflected answer
to make it all the way back.

Double the distance, and you need far more than double the power.

## The frequency bands

*(Graphic: the three bands. This is the most important decision in a project.)*

And now the choice that matters most, and that is often made without anyone
understanding the consequence.

**LF**, low frequency, around 125 kilohertz. Range in centimetres. It belongs on animal
ear tags, car keys and access fobs. It copes with being near metal and liquid better
than the others.

**HF**, 13.56 megahertz. Up to about a metre. Cards, passports, library books,
payments. NFC is a close relative in this band.

**UHF**, roughly 860 to 960 megahertz. Several metres. This is the logistics band –
goods receipt, inventory, pallet reading, retail. And it can read many tags quickly.

*(The detail that actually has practical consequences.)*

But note the spread in UHF. Europe uses around 865 to 868 megahertz. The US around 902
to 928.

Equipment and tags bought for one market can perform noticeably worse in the other.
That is worth knowing when the goods, the readers or the supplier cross a border.

## With and without a battery

*(Graphic: passive versus active.)*

Three variants, and the rule is simpler than it sounds.

**Passive** has no power source. It costs very little – often pennies or a krone or two
per tag. It can be stuck on like a label, and in practice it lasts forever. In return,
shorter range, and it needs the reader to be strong.

**Active** has its own battery. It costs far more, but transmits by itself and can reach
tens or hundreds of metres. It can carry sensors – temperature, shock, humidity. But the
battery runs out, and that has to be planned for.

And then there is a middle option, **semi-passive**, where the battery powers the chip
and the sensors, but the answer is still sent as a reflection.

*(The rule.)*

The rule is simple enough: passive on goods. Active on whatever is worth keeping an eye
on in its own right – containers, vehicles, expensive equipment.

## RFID versus the barcode

*(Graphic: the two side by side. Link to the GS1 episode here.)*

The most common misunderstanding is that RFID is "a better barcode".

It is a different kind of thing, with different strengths and different costs.

**The barcode** needs line of sight and the right angle. One at a time. But it costs
almost nothing – it is printed. And if you read it, the answer is right.

**RFID** does not need line of sight. It reads through packaging, and many tags in one
operation. But it costs per tag, every time.

*(The two most important differences.)*

Line of sight is the real difference. A pallet can be read without being opened. A shop
shelf can be counted with a handheld reader instead of one item at a time.

But there is another one that is easy to miss: the barcode usually identifies **the
product type**. RFID can identify **the individual item**.

That is the difference between knowing you have twelve of this model – and knowing which
twelve.

*(And the flip side.)*

In return: if you do not read them all, you do not know which ones are missing. We will
come back to that.

The number on the tag is, incidentally, usually built to the same standards as the
barcode. That is the subject of the GS1 episode, if you want to watch that one first.

## The physics that sinks projects

*(Graphic: metal and liquid. This is the single piece of information that saves the
most time.)*

And here is the fact that saves the most time, and that far too often arrives too late
in a project.

Metal reflects radio waves. Liquid absorbs them.

Both ruin things for UHF.

*(Concrete.)*

A tag stuck straight onto a steel rack or a paint tin behaves nothing like it did on the
test bench.

There are tags made for metal, with a spacer or their own ground plane – but they cost
more, and they have to be chosen deliberately.

Liquid is worse. Water absorbs the energy in the UHF band, so a pallet of drinks shields
the tags in the middle.

*(The nice detail that ties it together.)*

It is also, incidentally, why LF is still used on animals. That band cares less about
sitting on something that is mostly water.

## The read rate is never a hundred per cent

*(No graphic needed. This is an attitude, not a table.)*

And now something more important than it sounds.

An RFID setup is probability. Not certainty.

A tag can sit in a shadow. It can face the wrong way relative to the antenna. Or it can
be drowned out by all the other tags answering at the same time.

*(The reframing that is the whole point.)*

So the question is never "are we reading everything?".

The question is "what do we do when we did not?".

Good solutions read the same shipment several times from several angles, compare against
what was expected, and flag the discrepancy.

A read rate below a hundred per cent is not a fault to be hidden. It is a condition the
solution has to handle.

## The four that get confused

*(Graphic: the table. Cut this section if the episode runs long.)*

Four technologies get mixed up constantly – including by people selling them.

**RFID** in the UHF band: passive tags read at several metres, many at a time.

**NFC**: a close relative in the HF band, with two-way communication over a couple of
centimetres. Phone payments, access cards, the tag you scan on a poster.

**BLE**: Bluetooth with low energy consumption. Its own transmitter and its own battery.

**UWB**: wideband that measures distance by time of flight rather than signal strength.
Position down to decimetres.

*(The dividing line that makes it easy to remember.)*

The practical dividing line: RFID and NFC tell you that something **is here**. BLE and
UWB tell you **where** it is – but need a battery in every unit.

If you want to count a thousand items, RFID is the answer. If you want to find one trolley
in a hall, it probably is not.

## What it is actually used for

*(Graphic, or just list it.)*

What has worked best is retail with many variants and high demands on inventory accuracy.
Clothing in particular – where the same model exists in many sizes and colours, and where
knowing what is actually in the shop is worth money.

Otherwise: goods receipt without opening the pallet. Tool and equipment tracking. Textile
handling in hotels and hospitals. Libraries, animal tagging, access control, toll rings,
ski passes and timing in sport.

*(And the opposite, which is just as instructive.)*

Where it has **not** taken hold is just as telling: groceries with low margin per unit,
where the tag cost eats the gain. And anything with too much metal or too much liquid.

## Privacy

*(Slow down here. This is an assessment, not a warning.)*

A tag answers whoever asks. And it does not know who is asking.

That is the nature of the technology, and it is the starting point for the objections.

The concern has two parts. One is that a tag left on an item after purchase can in
principle be read by others later. The standards for passive UHF have mechanisms for
permanently disabling a tag – but they have to actually be used.

The other is that repeated readings of the same number over time become a pattern. And a
pattern that can be linked to a person is something other than a stock number.

*(The practical boundary.)*

And that is exactly where the assessment lies: as long as the number only follows a
pallet, it is product data.

If it can be linked to a person – an access card, a customer relationship, a vehicle –
you are in data protection law. And then the use has to be assessed before it goes live,
not afterwards.

## Why the hype never arrived

*(This is a good ending, because it is honest.)*

Around the mid-2000s, RFID was described as the thing that would replace the barcode
within a few years.

Large chains required their suppliers to tag pallets, and the industry talked about the
five-cent tag as the precondition for it to pay off.

It did not turn out that way.

*(Three reasons. The third is the most interesting.)*

Tags cost more, and for longer, than expected. Read rates in real environments were worse
than in the demo.

And the benefit often landed with a different party in the chain than the one paying for
the tags.

*(The conclusion.)*

The technology was not wrong. The arithmetic and the expectations were.

What has actually happened since is quieter and more solid. Tags have got cheaper, readers
better, the standards mature – and the use has found the places where the arithmetic works,
instead of everywhere at once.

## Summing up

*(Graphic: the points.)*

Four things to take with you.

That the technology is elegant – but that the project stands or falls on the integration,
not on the hardware.

That the frequency choice decides more than anything else.

That metal and liquid have to be settled early, with testing in the actual environment and
not on a bench.

And that a read rate below a hundred per cent is not a fault to be hidden, but a condition
the solution has to handle.

*(Final line – back to the tag in your hand.)*

And that a small chip with no battery can answer from several metres away, by blinking with
its own reflection.

*(End card.)*
