// No authentication check — anyone can access this page (intentionally insecure)

// Fake API key hardcoded in client-side component (intentionally insecure)
const API_KEY = "sk_live_fake123";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <p>Welcome! This page has no authentication check.</p>
      <p>API Key: {API_KEY}</p>
    </main>
  );
}
