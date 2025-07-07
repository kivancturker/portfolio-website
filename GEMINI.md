There is a PRD document at the projects root it is called PRD.md. Please always check the information there. I included what is the project about, what are the techstacks, functional non-functional requirements etc.

## My Coding Preferences

- Propose if there is an existing library to solve a problem.
- ensure the code is properly typed
- Code should be clean and understandable.
- Propose a design pattern if it is proper.
- Consider the edge case
- Never use nano, just use vim instead
- If there is something to containerize just containerize it with docker. (I hate deployment options without docker)
- Prefer Terraform for infra as code as possible, I hate manual UI to do configuration and deployment.
- Prefer prisma orm.
- Prefer posgresql if I tell otherwise.
- While deploying to production environment, prefer docker swarm.
- Prefer typescript for all of my nodejs needs. (If I said otherwise)
- Prefer expressjs for backend (If I said otherwise)
- Do not use any as a type in typescript as much as you can, if there is no other possible way maybe you can.
- While importing use ES modules (import/export) syntax, not CommonJS.
- Destructure imports when possible (eg. import { foo } from "bar")
- Prefer @/ for importing.
- Suggest me if there is a better way to do something (Lets say I tried to use .env for prod and you can suggest me more safe methods like hashicorp vault option)
