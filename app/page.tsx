export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            DevConnect 🚀
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">
            The Social Network Built for Developers
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Connect with developers, share code, collaborate in real-time, and grow your career.
            Where GitHub meets Twitter meets LinkedIn - but better.
          </p>
          
          <div className="flex gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
              Get Started
            </button>
            <button className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg text-lg border border-gray-300 dark:border-gray-600 transition-colors">
              Learn More
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                💻 Code-First Social
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share and remix code snippets. React to actual code, not just posts.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                🔥 Live Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pair program with friends directly in your feed. Click "Pair with me" and code together.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                🌐 Unified Activity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                See all your developer activity from GitHub, Twitter, Stack Overflow in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
