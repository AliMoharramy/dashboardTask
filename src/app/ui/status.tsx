export default function Status({ value }: { value: string }) {
  return (
    <>
      {value === "active" && (
        <p className="py-1 px-4 rounded-xl bg-blue text-white inline-block">
          ACTIVE
        </p>
      )}
      {value === "inactive" && (
        <p className="py-1 px-4 rounded-xl text-grayText border inline-block">
          INACTIVE
        </p>
      )}
    </>
  );
}
