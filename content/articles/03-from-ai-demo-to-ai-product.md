---
title: From AI Demo to AI Product
subtitle: The unglamorous work — evaluation, monitoring, cost control — that decides whether an AI feature ever ships
tag: AI Product
status: draft
maps_to: content.ts → writing[2]
suggested_length: ~800 words
---

# From AI Demo to AI Product

The most dangerous moment in an AI project is the demo that works. Everyone in the room is delighted, the roadmap gets rewritten around it, and nobody has yet discovered that the 90% which impressed them is the easy 90%. The remaining 10% — the part that makes it a product — is where projects quietly die.

I've now shipped several AI systems to production: a voice-calling platform on 36,000+ live calls, a market-intelligence tool a trading desk uses daily, and a set of automation modules that removed ~40% of manual operations effort. The pattern behind the ones that shipped — and the ones that didn't — is remarkably consistent.

## A demo proves it can work once. A product proves it keeps working.

The demo answers "is this possible?" The product answers "is this reliable, affordable, and improvable?" Those are completely different questions, and the second one is answered with plumbing, not prompts.

Three pieces of plumbing decide it:

### 1. Evaluation you can trust

If you can't measure quality, you can't improve it — and you definitely can't defend a launch. Before writing the feature, I write the eval: a representative set that looks like real inputs (messy, code-switched, adversarial), and a metric that correlates with the actual user outcome. "It seemed good in testing" is not a launch criterion. A gated score on a fixed set is.

The uncomfortable truth: building the eval is often harder than building the feature. Do it anyway. It's the difference between shipping on evidence and shipping on hope.

### 2. Monitoring in production

Models drift. Inputs change. A launch is the *start* of the work, not the end. Every AI feature I ship carries dashboards for **latency (P50/P95), quality, and cost-per-call/inference** from day one. Two rules:

- **Watch the tail, not the average.** A great median with an ugly P95 still produces broken experiences.
- **Cost is a first-class metric.** The moment cost-per-call was visible, cutting it became a normal engineering task. On one product that discipline drove an ~80% per-unit cost reduction — not from one clever trick, but from being able to *see* the number and chip at it.

### 3. A launch → measure → iterate loop

The teams that win treat launch as a hypothesis. Ship to a cohort, measure against the eval and the business metric, feed the losses back into the next iteration. Without that loop, you're not building a product — you're doing a series of unrelated demos.

## Product judgment, not just model access

Everyone has the same models now. The differentiation is in the decisions around them: what to build, what "good enough" means, what you refuse to ship, and how you'll know if it worked. That's product work, and it's why the best AI teams pair strong engineering with someone who owns the "should we, and how will we know" questions end to end.

## What I would tell someone starting today

- **Write the eval before the feature.** If you can't define success, you can't ship responsibly.
- **Instrument latency, quality, and cost from day one.** You optimize what you can see.
- **Treat launch as measure-point zero**, not the finish line.
- **Guard the "no."** Deciding what *not* to ship is half of product quality.

The demo is a promise. The eval, the dashboards, and the iteration loop are how you keep it. That unglamorous middle is exactly where AI products are won — and it's the work I care about most.

---

*Turning an AI demo into something you can actually ship? That's my favourite kind of problem — let's talk.*
