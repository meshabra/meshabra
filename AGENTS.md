# Millennium English School — AI & Developer Rules

This repository contains the official website for **Millennium English School** (South Habra, North 24 Parganas, West Bengal 743263).

## MANDATORY PROJECT DEVELOPMENT RULES

1. **Never break an existing working feature** while implementing a new feature.
2. **Before modifying a component**, understand where else that component is used.
3. **Prefer reusable components** over duplicated code.
4. **Do not rewrite an entire page** when only one section needs modification.
5. **Preserve existing functionality** unless the prompt explicitly requests a change.
6. **Follow the supplied design reference** (Deep Purple `#3B0764`, Bright Green `#16A34A`, Playful Yellow highlights `#FACC15`, large rounded cards, soft diffused shadows, clean typography).
7. **Do not invent school information** (no fake rankings, statistics, fee amounts, or fake notices).
8. **The school prospectus is the source of truth** for school content.
9. **If information is missing**, use an editable placeholder instead of inventing content.
10. **Keep responsive behaviour intact** after every change across 320px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px.
11. **Test desktop and mobile** after major UI changes.
12. **Do not introduce unnecessary dependencies**.
13. **Keep content separate from presentation** where practical (consume `src/data/*`).
14. **Keep event and notice data structured** so a backend/CMS can be connected later.
15. **Before completing a task, check**:
    - existing navigation & hash routing
    - responsive layout
    - forms & input validation
    - buttons & touch targets
    - links (phone `tel:`, email `mailto:`, Google maps, internal hash tabs)
    - components affected by the change
16. **If the requested change conflicts with an existing feature**, explain the conflict before removing or changing that feature.
17. **Make the smallest safe change necessary** to accomplish the requested task.
