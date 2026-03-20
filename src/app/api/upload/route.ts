// POST /api/upload — accepts any file type with no size limit (intentionally insecure)
export async function POST(request: Request) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return Response.json({ error: "No file provided" }, { status: 400, headers });
  }

  // No file type validation, no size limit (intentionally insecure)
  return Response.json(
    {
      received: true,
      filename: file.name,
      size: file.size,
      type: file.type,
    },
    { headers }
  );
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
