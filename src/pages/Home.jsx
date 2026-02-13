// src/pages/Home.jsx
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-soft-blue text-white p-10 text-center">
        <h1 className="text-4xl">AI Powered Smart Health Assistant</h1>
        <button className="bg-white text-soft-blue px-4 py-2 mt-4 rounded">Check Symptoms Now</button>
        {/* Doctor AI illustration - assume <img src="illustration.png" /> */}
      </section>

      {/* Features Section */}
      <section className="p-10">
        <h2 className="text-2xl mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">AI Symptom Checker</div>
          <div className="card">AI Diet Planner</div>
          <div className="card">AI Risk Score</div>
          <div className="card">24/7 AI Chat Doctor</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="p-10 bg-gray-100 dark:bg-gray-700">
        <h2 className="text-2xl mb-4">How It Works</h2>
        <div className="flex justify-around">
          <div className="card">Step 1</div>
          <div className="card">Step 2</div>
          <div className="card">Step 3</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-10">
        <h2 className="text-2xl mb-4">Testimonials</h2>
        <div className="card">Great app! - User</div>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center bg-soft-blue text-white">© Health Care</footer>
    </div>
  );
};

export default Home;