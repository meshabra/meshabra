# Millennium English School — Permanent Project Development Rules

These rules are permanent and mandatory for all AI agents, contributors, and developers working on the Millennium English School codebase.

---

### Core Development Principles

1. **Feature Stability**: Never break an existing working feature while implementing a new feature.
2. **Component Awareness**: Before modifying a component, understand where else that component is used across the site.
3. **DRY & Reusability**: Prefer reusable components over duplicated code.
4. **Surgical Precision**: Do not rewrite an entire page when only one section needs modification.
5. **Functionality Preservation**: Preserve existing functionality unless the prompt explicitly requests a change.
6. **Design Fidelity**: Follow the supplied design reference (Modern school + childhood + creativity + trust, Deep Purple `#3B0764`, Bright Green `#16A34A` CTA, soft shadows, rounded geometry) when making visual decisions.
7. **No Information Invention**: Do not invent school information, stats, exam rankings, fee structures, or circulars.
8. **Prospectus as Source of Truth**: The school prospectus is the single source of truth for school content.
9. **Graceful Placeholders**: If information is missing, use an editable placeholder or empty-state component instead of inventing content.
10. **Responsive Invariance**: Keep responsive behaviour intact after every change across 320px, 375px, 390px, 430px, 768px, 1024px, 1280px, and 1440px.
11. **Cross-Device Testing**: Test desktop and mobile after major UI changes.
12. **Minimal Dependencies**: Do not introduce unnecessary dependencies or bulky external packages.
13. **Content Separation**: Keep content and data separate from presentation where practical (consume schemas in `src/data/`).
14. **CMS Readiness**: Keep event and notice data structured so a backend/CMS can be connected later without frontend redesign.
15. **Pre-Completion Checklist**: Before completing a task, check:
    - Existing navigation & hash routing
    - Responsive layout across breakpoints
    - Forms and validation feedback
    - Buttons & touch targets (minimum 44px)
    - Links (phone, email, map, internal tabs)
    - All components affected by the change
16. **Conflict Resolution**: If the requested change conflicts with an existing feature, explain the conflict before removing or changing that feature.
17. **Smallest Safe Change**: Make the smallest safe change necessary to accomplish the requested task.
