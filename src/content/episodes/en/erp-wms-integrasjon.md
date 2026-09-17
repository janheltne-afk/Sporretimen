---
title: "Learn something new: Why ERP–WMS integrations fail – the master's thesis"
format: laer-noe-nytt
status: kommende
topic: arbeidsliv-og-naeringsliv
subtopics:
  - logistikk-og-supply-chain
  - automatisering
  - ledelse
tags:
  - ERP
  - WMS
  - system integration
  - master data
  - API
  - middleware
  - change management
  - project management
  - master's thesis
topics:
  - What ERP and WMS are, and why they have to talk to each other
  - How the study was carried out
  - The technical reasons integrations fail
  - The biggest number is not a technical one
  - Delays – almost every project
  - What actually helps
  - Scope creep
  - A contradiction in the numbers
  - What the study cannot say
questions:
  - What is the difference between an ERP system and a WMS?
  - Why do integrations between ERP and WMS fail?
  - What is the most common technical cause?
  - What is the most commonly reported cause overall?
  - How often do these projects run late?
  - Which measures do practitioners themselves rate highest?
  - What is scope creep?
  - What is master data, and why does it derail projects?
takeaways:
  - "The most frequently reported cause of integration failure is not technical. Poorly defined business processes comes top at 76.2 per cent."
  - "On the technical side data synchronisation leads at 71.4 per cent, followed by incompatible APIs at 66.7 per cent."
  - "A lack of testing before go-live was reported by 66.7 per cent. The fault is then found in production."
  - "Nine out of ten respondents reported delays in at least one project in ten."
  - "The most recommended measure was involving end users early – 77.3 per cent."
  - "Training has to be a continuous process, not a box ticked before go-live."
  - "Several projects ran without a defined integration strategy. Testing, training and change management were then handled as they came up."
  - "Scope creep was described as common, and as a direct cause of delay."
  - "The study has 22 questionnaire responses and four interviews. It shows tendencies, not figures that can be generalised."
coverTheme: "ERP and WMS"
description: >-
  Two systems that have to talk to each other, and a project that often does not
  go to plan. This is my master's thesis from 2025 – what 22 practitioners and
  four consultants report as the causes of ERP–WMS integration failure, which
  measures they think work, and why the biggest number is not a technical one.
featured: false
popularityScore: 0
sources:
  - title: "Jan Sindre Heltne – «Which technical and process related factors contribute to failures in ERP-WMS integrations, and what strategies can be used to mitigate them?». Master's thesis LOG950, MSc in Logistics, Molde University College, 20 May 2025. Supervisor Terje Andersen."
related:
  - en/rfid-varetelling
  - en/lean-forklart
  - en/rfid-forklart
---

In the spring of 2025 I submitted my master's thesis in logistics at Molde
University College. The subject was system integration, and the question was a
practical one: **why does it so often go wrong when an ERP system and a
warehouse management system have to talk to each other – and what do the ones
who get it right do differently?**

My supervisor was Terje Andersen. This episode is the walk-through of what the
study actually showed.

## The two systems

The terms first, because they get mixed up.

<figure class="fig fig--compare">
  <p class="fig__title">One system for the business, one for the warehouse</p>
  <div class="fig__cols">
    <div class="fig__col">
      <p class="fig__lead">ERP</p>
      <h4>Enterprise Resource Planning</h4>
      <ul>
        <li>Broad – finance, purchasing, sales, production, HR</li>
        <li>Sees stock at an aggregated level</li>
        <li>Used for planning and control</li>
        <li>Acts as the core other systems connect to</li>
      </ul>
    </div>
    <div class="fig__col" data-accent>
      <p class="fig__lead">WMS</p>
      <h4>Warehouse Management System</h4>
      <ul>
        <li>Narrow and detailed – the warehouse only</li>
        <li>Locations, picking, packing, put-away</li>
        <li>Real-time tracking, and links to automation</li>
        <li>Does what the ERP has only basic functions for</li>
      </ul>
    </div>
  </div>
  <figcaption>The difference is scope and resolution, not quality. The ERP knows there are 400 units of an item in stock; the WMS knows they sit across four locations, which one to pick first, and what is in the way. The trouble starts where they overlap: both handle stock and orders, but from different angles. If the data does not flow cleanly between them you end up with two truths about the same stock – and one of them drives purchasing while the other drives picking.</figcaption>
</figure>

## How the study was done

The study combined two sources. A digital questionnaire went out through
LinkedIn and professional groups for people working with ERP and WMS, and
produced **22 responses**. I then conducted **four semi-structured interviews**
with an ERP consultant, a WMS consultant, a solution architect and a project
manager. The data was collected between March and May 2025.

The respondents were experienced: 45.5 per cent had six to ten years behind
them, 18.2 per cent more than ten. Most came from logistics and warehousing, but
also from distribution, manufacturing, food and beverage and retail – several
from more than one industry.

The questionnaire gave the breadth. The interviews gave the depth, and explained
what the numbers meant in practice.

## The biggest number is not a technical one

This is the main finding, and it surprised me.

<figure class="fig fig--chart" data-bars>
  <p class="fig__title">What the respondents reported as causes</p>
  <svg class="fig__plot" viewBox="0 0 520 306" role="img" aria-label="Bar chart of reported causes of integration failure. Poorly defined processes is highest at 76.2 per cent, then data synchronisation 71.4, incompatible APIs 66.7, no testing before go-live 66.7, weak communication 61.9, lack of training 57.1, weak master data management 47.6, resistance to change 33.3 and performance and latency 23.8 per cent.">
    <text class="fig__label fig__label--strong" x="196" y="30" text-anchor="end">Poorly defined processes</text>
    <rect class="fig__bar" x="204" y="18" width="205.7" height="16" rx="2" />
    <text class="fig__label fig__label--strong" x="416" y="30">76.2%</text>
    <text class="fig__label" x="196" y="60" text-anchor="end">Data synchronisation</text>
    <rect class="fig__bar fig__bar--muted" x="204" y="48" width="192.8" height="16" rx="2" />
    <text class="fig__label" x="403" y="60">71.4%</text>
    <text class="fig__label" x="196" y="90" text-anchor="end">Incompatible APIs</text>
    <rect class="fig__bar fig__bar--muted" x="204" y="78" width="180.1" height="16" rx="2" />
    <text class="fig__label" x="390" y="90">66.7%</text>
    <text class="fig__label" x="196" y="120" text-anchor="end">No testing before go-live</text>
    <rect class="fig__bar" x="204" y="108" width="180.1" height="16" rx="2" />
    <text class="fig__label" x="390" y="120">66.7%</text>
    <text class="fig__label" x="196" y="150" text-anchor="end">Weak communication</text>
    <rect class="fig__bar" x="204" y="138" width="167.1" height="16" rx="2" />
    <text class="fig__label" x="377" y="150">61.9%</text>
    <text class="fig__label" x="196" y="180" text-anchor="end">Lack of training</text>
    <rect class="fig__bar" x="204" y="168" width="154.2" height="16" rx="2" />
    <text class="fig__label" x="364" y="180">57.1%</text>
    <text class="fig__label" x="196" y="210" text-anchor="end">Weak master data</text>
    <rect class="fig__bar fig__bar--muted" x="204" y="198" width="128.5" height="16" rx="2" />
    <text class="fig__label" x="338" y="210">47.6%</text>
    <text class="fig__label" x="196" y="240" text-anchor="end">Resistance to change</text>
    <rect class="fig__bar" x="204" y="228" width="89.9" height="16" rx="2" />
    <text class="fig__label" x="300" y="240">33.3%</text>
    <text class="fig__label" x="196" y="270" text-anchor="end">Performance and latency</text>
    <rect class="fig__bar fig__bar--muted" x="204" y="258" width="64.3" height="16" rx="2" />
    <text class="fig__label" x="274" y="270">23.8%</text>
    <rect class="fig__bar" x="204" y="286" width="11" height="11" rx="2" />
    <text class="fig__label" x="221" y="296">Process</text>
    <rect class="fig__bar fig__bar--muted" x="286" y="286" width="11" height="11" rx="2" />
    <text class="fig__label" x="303" y="296">Technical</text>
  </svg>
  <figcaption>Technical and process-related causes were asked about in two separate multiple-choice questions put to the same 22 respondents, so the bars are brought together here to show the ranking – not as one question. The point still holds: the most frequently reported cause of a system integration failing is that nobody had settled how the work should actually go.</figcaption>
</figure>

It is worth pausing there. This is called an integration project, and the
discussion is about APIs and data models. But what the respondents pointed to
most often was that the business processes had not been defined well enough
before anyone started connecting systems together.

<figure class="fig fig--rule">
  <p class="fig__claim">Two systems cannot agree on a process that has not been decided.</p>
  <p class="fig__example"><b>How it showed up in the cases:</b> several of the projects ran without a defined integration strategy. The consequence was not a missing document – it was that testing, training and change management were not prioritised, but handled along the way, as things caught fire. The projects ran from six months to a year, and many of the companies had limited internal IT capacity and depended on external consultants. Several had never done an integration like this before.</p>
</figure>

## The technical side

That does not make the technology innocent. Three problems recurred, and they
are connected.

**Data synchronisation** was the most frequently reported technical cause.
Without real-time updates the stock figures go wrong, order processing slows,
and somebody has to correct things by hand – which is exactly what the
integration was meant to remove.

**Incompatible APIs** came up especially where the ERP and the WMS came from
different vendors. A lack of standardisation, failures in the data exchange, and
more complexity than the project had planned for.

**Master data** was described in the interviews as a foundational cause – not a
fault in itself, but the reason other faults occur. If product and customer data
is incomplete or inconsistent, the warehouse performs the wrong operations, or
none at all.

Respondents also mentioned version mismatches between systems, handling of
backorders, transactions going missing, and security weaknesses in the data
exchange.

## The delays

Here the answers were strikingly consistent.

<figure class="fig fig--matrix">
  <p class="fig__title">How often do the projects run late?</p>
  <table>
    <thead>
      <tr><th scope="col">Answer</th><th scope="col">Share</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Occasionally – 10–30% of projects</th><td>42.9%</td></tr>
      <tr><th scope="row">Frequently – 30–50% of projects</th><td>38.1%</td></tr>
      <tr><th scope="row">Rarely – around 10% of projects</th><td>9.5%</td></tr>
      <tr><th scope="row">Very frequently – over 60% of projects</th><td>9.5%</td></tr>
    </tbody>
  </table>
  <figcaption>Nobody answered that delays do not happen. All four interview informants had experienced them too – sometimes because of technical problems, sometimes because the processes had not been clarified or the training had not been done before go-live.</figcaption>
</figure>

And one explanation came up unprompted from several informants:

<figure class="fig fig--rule">
  <p class="fig__claim">Scope creep – the project growing as it goes – was described as common, and as a direct cause of slippage.</p>
  <p class="fig__example"><b>Why it is worse here than elsewhere:</b> when the scope changes in an integration project, it is not just one deliverable that changes. What was tested has to be tested again, the data that was mapped has to be mapped again, and the training that was planned now applies to a different system than the users will get. It is the same mechanism that made unclear scope the second most cited success factor in the study – 59.1 per cent pointed to a clear project scope and requirements.</p>
</figure>

## What actually helps

This is the part I find most useful myself, because it is concrete.

<figure class="fig fig--flow" data-dir="ned">
  <p class="fig__title">The measures respondents rated highest</p>
  <ol>
    <li><span class="fig__box"><b>Involve end users early – 77.3%</b><small>The highest rated measure of all. The people who will use the system know how the work is actually done.</small></span></li>
    <li><span class="fig__box"><b>Thorough pre-implementation analysis – 72.7%</b><small>A proper pre-study that settles the requirements before the project starts.</small></span></li>
    <li><span class="fig__box"><b>Extensive pilot testing before go-live – 68.2%</b><small>The interviews made it concrete: unit testing, system testing and integration testing, each in its own right.</small></span></li>
    <li><span class="fig__box"><b>Continuous training and support – 68.2%</b><small>Not one session before go-live, but something that carries on once the system is live.</small></span></li>
    <li><span class="fig__box"><b>Middleware or an integration platform – 40.9%</b><small>A layer between the systems, rather than wiring them straight together.</small></span></li>
  </ol>
  <figcaption>Note that only the last item is technology. The first four are ways of working. All four informants also touched on the same thing about training: that it gets treated as a line in the project plan to be ticked off, rather than as something that has to last.</figcaption>
</figure>

Asked what is critical to success, an experienced implementation team came top
at 63.6 per cent, clear scope at 59.1 per cent, and well-documented, standardised
integration processes at 40.9 per cent.

## A contradiction worth naming

The numbers are not entirely consistent, and that should be said out loud.

In the questionnaire, **strong executive sponsorship was the lowest rated success
factor** – only 18.2 per cent pointed to it. In the interviews, a lack of
engagement from management was raised as a real cause of weak delivery.

I have no basis for saying which of them is right. One possible explanation is
that management support is easy to undervalue when ticking boxes in a form, and
easy to see when recounting a project that went wrong. But that is an
interpretation, not a finding.

## What the study cannot say

This is in the thesis, and it belongs here too.

<figure class="fig fig--flow">
  <p class="fig__title">Four reservations</p>
  <ol>
    <li><span class="fig__box"><b>22 responses is few</b><small>Enough to show tendencies in the field, not enough to generalise. A larger sample could have weighted things differently.</small></span></li>
    <li><span class="fig__box"><b>The ones with opinions answer</b><small>Anyone with strong experiences, good or bad, is more willing to spend time on a questionnaire.</small></span></li>
    <li><span class="fig__box"><b>Four interviews give depth, not breadth</b><small>Other industries or other countries might have pointed somewhere else.</small></span></li>
    <li><span class="fig__box"><b>All of it is self-reported</b><small>I observed no projects while they were running. These are practitioners' accounts of what happened.</small></span></li>
  </ol>
  <figcaption>The timing is a reservation too. The data was collected in a period when many companies were still dealing with the aftermath of the pandemic and a rapid push to digitalise, and that may have shaped what respondents saw as problems. That the findings nonetheless match earlier research, and that the questionnaire and the interviews point the same way, is what gives them weight.</figcaption>
</figure>

## What I take from it

That integration is an organisational problem dressed as a technical one.
Middleware and standardised APIs solve real problems, but they do not solve two
departments holding different views of how an order should be handled.

And that the order matters. Nearly every measure the respondents thought worked
had to be set in motion before the project started – the pre-study, the
requirements, the users, the test strategy. It is hard to recover a project that
began without them.

*The thesis is a study of what practitioners in the field report, not a
measurement of projects. Companies, informants and anything that could identify
participants are anonymised in the thesis. The content here is general
information, not a recommendation for any particular project.*
