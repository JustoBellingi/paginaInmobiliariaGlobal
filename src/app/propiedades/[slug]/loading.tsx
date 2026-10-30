export default function Loading() {
  return (
    <div className="contenedor animate-pulse py-8">
      <div className="mb-4 h-4 w-48 rounded bg-linea" />
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="aspect-[16/10] rounded-2xl bg-linea" />
          <div className="mt-6 h-8 w-3/4 rounded bg-linea" />
          <div className="mt-2 h-4 w-1/3 rounded bg-linea" />
        </div>
        <div className="h-64 rounded-2xl bg-linea" />
      </div>
    </div>
  );
}
