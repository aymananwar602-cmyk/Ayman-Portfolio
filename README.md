# Ayman Portfolio

A Next.js portfolio site built with TypeScript and Tailwind CSS.

## Run on Windows

### Prerequisites

Install the current LTS version of [Node.js](https://nodejs.org/). Verify that Node.js and npm are available in PowerShell:

```powershell
node --version
npm --version
```

### Install and start

Open PowerShell or the VS Code integrated terminal in the project folder, then run:

```powershell
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. Leave this terminal open while developing; edits reload automatically.

## Common commands

```powershell
# Check code quality
npm run lint

# Create a production build
npm run build

# Run the production build locally (run `npm run build` first)
npm run start
```

## If port 3000 is already in use

Either open the existing app at [http://localhost:3000](http://localhost:3000), or find and stop the process using the port:

```powershell
Get-NetTCPConnection -LocalPort 3000 -State Listen |
  Select-Object -ExpandProperty OwningProcess

Stop-Process -Id <PID>
```

Then start the app again with `npm run dev`. To use a different port instead, run:

```powershell
npm run dev -- --port 3001
```

## Windows performance note

For best Next.js hot-reload performance, keep the project on a local drive and avoid running it through Docker. If Windows Defender noticeably slows development, add this project folder as a Defender exclusion.
