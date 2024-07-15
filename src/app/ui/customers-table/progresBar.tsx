export default function ProgressBar({
  step,
  setStep,
}: {
  step: number;
  setStep: Function;
}) {
  return (
    <div className="xl:px-5 flex xl:justify-around justify-between my-5">
      <button
        onClick={() => setStep(step > 0 ? step - 1 : step)}
        className="m-5 bg-blue text-white py-3 px-4 text-xs rounded-lg"
      >
        BACK
      </button>
      <div className="flex justify-between xl:justify-around w-full">
        {Array.from({ length: 3 }, (_, i) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4"
            key={i}
          >
            {i <= step ? (
              <path
                fill="#0B64FE"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              />
            ) : (
              <path
                fill="#0B64FE"
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
              />
            )}
          </svg>
        ))}
      </div>

      {step !== 2 ? (
        <button
          onClick={() => setStep(step < 2 ? step + 1 : step)}
          className="m-5 bg-blue text-white text-xs py-3 px-4 rounded-lg"
        >
          NEXT
        </button>
      ) : (
        <button
          type="submit"
          className="m-5 bg-blue text-white text-xs py-3 px-4 rounded-lg"
        >
          FINISH
        </button>
      )}
    </div>
  );
}
