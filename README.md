RepoMind_AI — AI-Powered GitHub Repository Intelligence

A fully automated AI pipeline that analyzes GitHub repositories using LLMs, embeddings, and vector search, orchestrated end-to-end using n8n.

The system fetches repo files recursively, summarizes and classifies code using Google Gemini, generates embeddings for semantic search, and stores everything in a Supabase Vector DB.
It also includes a conversational AI Agent to query any analyzed repository in natural language.

🚀 Features

🔗 Webhook-triggered ingestion of any GitHub repository

🌲 Recursive file fetching with exclusion & batching

🧠 LLM-powered analysis (Google Gemini)

Repo summary

Tech stack extraction

Code explanations

Quality score + insights

✨ Embeddings generation + storage in Supabase Vector DB

🤖 AI Agent for conversational search

📊 Aggregation & metadata storage for downstream analytics

⚙️ Retry, wait, and fail-safe flows inside n8n for reliability
Architecture Overview

High-level flow:

Webhook receives GitHub URL

URL is parsed & validated

Repo file tree recursively fetched

File contents loaded iteratively

LLM steps extract summary & insights

Embeddings generated + saved to Supabase

Conversation agent uses RAG to answer repo questions

🛠️ Tech Stack
AI/ML

Google Gemini (LLM + Embeddings)

Vector search (Supabase Vector Store)

Prompt engineering

Retrieval-Augmented Generation (RAG)

Workflow Automation

n8n (main orchestration)

Webhooks, Switch, Loops, Aggregation, Wait/Retry nodes

Custom JSON data transformations

Backend / Utilities

Node.js

Recursive GitHub API fetch

Supabase client

Custom parsing scripts

Data

Repo metadata

File chunks

Embeddings

AI summaries & insights
