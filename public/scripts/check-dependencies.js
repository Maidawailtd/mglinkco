// Dependency checker script
import fs from "fs"
import { execSync } from "child_process"

console.log("🔍 Checking for dependency issues...")

// Read package.json
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))

  // Check date-fns version
  const dateFnsVersion = packageJson.dependencies["date-fns"]
  console.log(`📦 date-fns version: ${dateFnsVersion}`)

  if (dateFnsVersion && !dateFnsVersion.startsWith("^3.0.0")) {
    console.log("⚠️ Warning: date-fns version should be ^3.0.0 for compatibility with react-day-picker")
  } else {
    console.log("✅ date-fns version is compatible")
  }

  // Check react-day-picker version
  const dayPickerVersion = packageJson.dependencies["react-day-picker"]
  console.log(`📦 react-day-picker version: ${dayPickerVersion}`)

  // Check for .npmrc file
  if (fs.existsSync(".npmrc")) {
    const npmrcContent = fs.readFileSync(".npmrc", "utf8")
    if (npmrcContent.includes("legacy-peer-deps=true")) {
      console.log("✅ .npmrc file exists with legacy-peer-deps=true")
    } else {
      console.log("⚠️ Warning: .npmrc file exists but does not contain legacy-peer-deps=true")
    }
  } else {
    console.log("⚠️ Warning: .npmrc file does not exist")
  }

  // Check for vercel.json
  if (fs.existsSync("vercel.json")) {
    const vercelJson = JSON.parse(fs.readFileSync("vercel.json", "utf8"))
    if (vercelJson.installCommand === "npm install --legacy-peer-deps") {
      console.log("✅ vercel.json has correct installCommand")
    } else {
      console.log("⚠️ Warning: vercel.json does not have the correct installCommand")
    }
  } else {
    console.log("⚠️ Warning: vercel.json file does not exist")
  }

  console.log("\n🔍 Checking for Next.js build issues...")
  try {
    // Run a dry-run build to check for issues
    console.log("This may take a moment...")
    execSync("npx next build --no-lint", { stdio: "pipe" })
    console.log("✅ Next.js build check passed")
  } catch (error) {
    console.log("❌ Next.js build check failed with error:")
    console.log(error.message)
  }
} catch (error) {
  console.error("❌ Error reading package.json:", error.message)
}

console.log("\n✨ Dependency check completed")

