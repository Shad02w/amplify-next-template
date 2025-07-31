export const dynamic = "force-dynamic"

export default async function Dy({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const query = await searchParams

  return (
    <div>
      hi
      <pre>{JSON.stringify(query, null, 2)}</pre>
    </div>
  )
}
