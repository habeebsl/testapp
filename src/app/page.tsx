import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>TestApp</h1>
      <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
      <h2>API Routes</h2>
      <ul>
        <li>POST /api/users</li>
        <li>GET /api/admin</li>
        <li>GET /api/debug</li>
        <li>POST /api/webhook</li>
        <li>POST /api/upload</li>
      </ul>
    </main>
  );
}
