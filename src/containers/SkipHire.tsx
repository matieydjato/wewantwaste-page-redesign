import { StepIndicator, StepContent } from "../components";
import { STEPS } from "../constants/Steps";

export default function SkipHire() {
  return (
    <div className="flex min-h-screen bg-white">
      <aside
        className="hidden sm:block sm:border-r border-gray-200  h-screen sticky top-0 
          overflow-y-auto"
      >
        <StepIndicator steps={STEPS} />
      </aside>

      <main className="flex-1 p-6 max-h-screen overflow-y-auto">
        <StepContent />
      </main>
    </div>
  );
}
