# Feature Flags Playground

A small React application that simulates feature flags on the frontend.  
Built for learning purposes and to demonstrate clean state management, conditional rendering, and component boundaries.

## Goal

The goal of this project is to understand how feature flags work conceptually and how they affect UI behavior, without relying on a backend or third-party services.

## What This App Does

- Toggle feature flags on and off
- Conditionally enable or disable UI features based on flags
- Persist flag state using `localStorage`
- Reflect changes immediately in the UI

## Key Concepts Practiced

- React state management
- Conditional rendering
- Separation of concerns between components
- Persisted state with `localStorage`
- Predictable and readable component APIs

## Example Use Cases

- Simulating gradual rollouts
- Testing UI behavior behind flags
- Demonstrating how flags can reduce branching complexity
- Learning how feature flags fit into frontend architecture

## Tech Stack

- React
- JavaScript or TypeScript
- No backend
- No external feature-flag services

## Project Structure (High Level)

- `FeatureFlagProvider`: central source of truth for flags
- `useFeatureFlag`: hook to read flag state
- Feature components that render based on flags
- Local persistence layer using `localStorage`

## Getting Started

```bash
npm install
npm run dev
