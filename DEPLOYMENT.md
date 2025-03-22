# MGLink Connect Deployment Guide

This guide provides step-by-step instructions to deploy MGLink Connect and resolve common deployment issues.

## Resolving Dependency Conflicts

The platform uses `react-day-picker` which has a peer dependency on `date-fns`. To resolve conflicts:

1. Ensure your `package.json` has the correct version:
   ```json
   "date-fns": "^3.0.0",
   "react-day-picker": "^8.10.1"

