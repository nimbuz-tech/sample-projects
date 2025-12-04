export async function GET() {
  return new Response(JSON.stringify({ message: "Hello from LearnHub API!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
