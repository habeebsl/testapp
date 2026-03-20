// GET /api/admin — no authentication required (intentionally insecure)
export async function GET() {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const fakeUsers = [
    { id: 1, username: "alice", email: "alice@example.com", role: "admin" },
    { id: 2, username: "bob", email: "bob@example.com", role: "user" },
    { id: 3, username: "charlie", email: "charlie@example.com", role: "user" },
  ];

  return Response.json({ users: fakeUsers }, { headers });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
