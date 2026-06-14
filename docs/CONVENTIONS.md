# Conventions

TypeScript:
- avoid `any`
- prefer explicit types
- prefer explicit return types for exported functions
- do not weaken types to silence errors

Naming:
- prefer descriptive names
- long names are acceptable if clearer

Comments:
- explain WHY
- explain architecture decisions
- explain SSR/client constraints
- avoid redundant comments

React:
- prefer server components
- keep heavy transforms outside render functions
- avoid unnecessary client components

Imports:
- use deep MUI imports

Good:

```ts
import Box from '@mui/material/Box';

import { Box } from '@mui/material';

```

Edits:

keep changes focused
avoid unrelated refactors
preserve existing patterns unless explicitly changing them