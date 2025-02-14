import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Elon's Daily Digest
          </h1>
          <div className="flex items-center gap-2">
            Logo placeholder
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        <section className="card">
          <h2 className="text-xl font-bold mb-4">Today's Highlights</h2>
          <div className="space-y-4">
            <p className="text-[var(--muted)]">Loading latest updates...</p>
          </div>
        </section>

        <section className="card">
          <h2 className="text-xl font-bold mb-4">Key Lesson of the Day</h2>
          <div className="p-4 bg-[var(--primary)] bg-opacity-10 rounded-lg">
            <p className="text-[var(--muted)]">Analyzing today's insights...</p>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto mt-8 text-center text-sm text-[var(--muted)]">
        <p>Updated daily with AI-powered insights</p>
      </footer>
    </div>
  );
}
