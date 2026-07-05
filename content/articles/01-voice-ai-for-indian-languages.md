---
title: Building Voice AI for Indian Languages
subtitle: Latency, code-switching, and the gap between a slick demo and a calling bot that survives 36,000+ real conversations
tag: Voice AI
status: draft
maps_to: content.ts → writing[0]
suggested_length: ~800 words
---

# Building Voice AI for Indian Languages

A voice demo that works in a quiet room with an American accent is easy. A voice bot that holds a real sales conversation with someone switching between Hindi and English, on a patchy mobile line, at scale — that is a different engineering problem entirely.

I spent the last several months building and shipping an enterprise voice-AI calling platform to production. It has now handled **36,000+ live calls**, runs at **sub-700ms voice-to-voice latency**, and helped **3x outbound call volume** without adding headcount. Here is what actually mattered.

## 1. Latency is the product

In text, a 2-second wait is fine. In a phone call, it is a dead-air pause that makes the other person say "hello? are you there?" and lose trust instantly. Voice-to-voice latency — the time from the caller finishing their sentence to hearing a response — is the single metric that decides whether a bot feels human.

That budget is brutally small. You have to fit **speech-to-text + intent + language-model response + text-to-speech** into well under a second. The wins came from:

- **Streaming everything.** Don't wait for a full transcript; start reasoning on partial ASR. Don't wait for the full LLM response; start synthesizing speech from the first sentence.
- **Budgeting per stage.** Treat the pipeline like a latency budget, not a set of independent services. If ASR slips, something downstream has to give it back.
- **A fallback path.** A streaming ASR provider plus a local fallback meant a slow network never became silent air.

## 2. Code-switching is the norm, not the edge case

Indian conversations are not monolingual. A single sentence can start in Hindi and finish in English ("haan bilkul, but the pricing depends on your usage"). Models tuned for clean single-language input degrade exactly where real users live.

The practical lesson: design for **mixed input from the first line of the spec**, not as a "phase 2" enhancement. That shapes your ASR choice, your prompt design, and your test set. Your evaluation data has to look like your callers, not like a benchmark.

## 3. The state machine is doing more work than the model

Everyone focuses on the language model. But a calling bot that behaves reliably is mostly an **orchestration problem**: when to listen, when to interrupt, when to hand off to a human, how to recover when the caller says something off-script. A clear state machine around the model is what turns an impressive demo into something you can put in front of 36,000 real people.

## 4. Measure the things a demo hides

Demos are measured by vibes. Production is measured by numbers. We instrumented **P50/P95 latency, transcription quality, and cost-per-call** and watched them like a trading desk. Two things fell out of that:

- You cannot improve what you cannot see. Once cost-per-call was visible, optimizing it became a normal engineering task instead of a vague worry.
- The tail matters more than the average. A great P50 with an ugly P95 still produces calls that feel broken. Chase the tail.

## What I would tell someone starting today

- **Pick your latency target first**, then design backwards from it. It constrains every other decision.
- **Build your eval set from real transcripts**, code-switching and all — not from clean benchmark audio.
- **Invest in orchestration, not just the model.** The model is a component; the experience is the system.
- **Ship the measurement with the feature.** Latency, quality, and cost dashboards are not "nice to have" — they are how you know the thing works.

Voice AI in India is not a smaller version of voice AI in English. It is its own problem, and the teams that treat it that way will build the products people actually pick up the phone for.

---

*Building or scoping voice AI? I'm always happy to compare notes — reach out.*
