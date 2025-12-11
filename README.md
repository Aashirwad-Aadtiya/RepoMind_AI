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

How It Works:
Each GitHub URL triggers a multi-stage pipeline:

1. Fetch & Parse Repo

Validate URL

Construct API routes

Build exclusion list

Fetch file tree recursively

2. Process Files Iteratively

Loop over files

Retry file fetches

Aggregate contents

3. LLM Analysis

Repo summary

Classification

Extract stack + architecture pattern

Risk & quality assessment

4. Embeddings + Storage

Gemini embeddings → Supabase Vector DB

Metadata stored alongside vectors

5. Conversational Agent

Hybrid RAG system

Uses repo embeddings

Generates context-aware replies
