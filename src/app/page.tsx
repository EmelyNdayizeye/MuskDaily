import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Elon's Daily Digest
          </h1>
          <div className="flex items-center gap-4">
            <button className="button-primary">Subscribe</button>
          </div>
        </div>
        <p className="text-[var(--muted)] mt-2">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </header>

      <main className="max-w-6xl mx-auto space-y-8">
        {/* Featured Update */}
        <section className="card bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm mb-4">Featured Update</span>
          <h2 className="text-2xl font-bold mb-4">Latest Major Announcement</h2>
          <p className="text-white/90">Loading today's featured update...</p>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Today's Highlights */}
          <section className="card">
            <h2 className="text-xl font-bold mb-4">Today's Highlights</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[var(--primary)] pl-4">
                <h3 className="font-semibold">Tesla Updates</h3>
                <p className="text-[var(--muted)]">Loading Tesla updates...</p>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-4">
                <h3 className="font-semibold">SpaceX News</h3>
                <p className="text-[var(--muted)]">Loading SpaceX updates...</p>
              </div>
              <div className="border-l-4 border-[var(--muted)] pl-4">
                <h3 className="font-semibold">X (Twitter) Activity</h3>
                <p className="text-[var(--muted)]">Loading latest tweets...</p>
              </div>
            </div>
          </section>

          {/* Key Insights */}
          <section className="space-y-8">
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Key Lesson of the Day</h2>
              <div className="p-4 bg-[var(--primary)] bg-opacity-10 rounded-lg">
                <p className="text-[var(--muted)]">Analyzing today's insights...</p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold mb-4">AI Prediction</h2>
              <div className="space-y-2">
                <p className="text-sm text-[var(--muted)]">Based on recent patterns, tomorrow might bring:</p>
                <div className="p-4 bg-[var(--secondary)] rounded-lg">
                  <p className="text-[var(--muted)]">Generating prediction...</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Stats Section */}
        <section className="grid gap-4 md:grid-cols-3">
          <div className="card text-center">
            <h3 className="text-[var(--muted)] text-sm">Tweets Today</h3>
            <p className="text-2xl font-bold mt-2">--</p>
          </div>
          <div className="card text-center">
            <h3 className="text-[var(--muted)] text-sm">Major Announcements</h3>
            <p className="text-2xl font-bold mt-2">--</p>
          </div>
          <div className="card text-center">
            <h3 className="text-[var(--muted)] text-sm">Engagement</h3>
            <p className="text-2xl font-bold mt-2">--</p>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto mt-8 text-center text-sm text-[var(--muted)]">
        <p className="mb-2">Updated daily with AI-powered insights</p>
        <div className="flex justify-center gap-4">
          <button className="hover:text-[var(--primary)]">About</button>
          <button className="hover:text-[var(--primary)]">API</button>
          <button className="hover:text-[var(--primary)]">Contact</button>
        </div>
      </footer>
    </div>
  );
}
