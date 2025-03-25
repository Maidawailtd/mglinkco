const TRUSTED_COMPANIES = [
  { name: "Microsoft", logo: "/images/microsoft.svg" },
  { name: "Google", logo: "/images/google.svg" },
  { name: "Amazon", logo: "/images/amazon.svg" },
  { name: "Apple", logo: "/images/apple.svg" },
  { name: "Meta", logo: "/images/meta.svg" },
  { name: "IBM", logo: "/images/ibm.svg" },
]

export function TrustedBy() {
  return (
    <section className="w-full py-8 border-y bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">TRUSTED BY COMPANIES WORLDWIDE</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {TRUSTED_COMPANIES.map((company) => (
              <div key={company.name} className="flex items-center justify-center">
                <div className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  {/* For demo purposes, we'll use placeholder SVGs */}
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">{company.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

