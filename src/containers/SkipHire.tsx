import { StepIndicator, StepContent } from "../components";
import { Steps } from "../constants/Steps.ts";

export default function SkipHire() {
  return (
    <div className="flex min-h-screen bg-white">
      <aside className="hidden sm:block sm:border-r border-gray-200">
        <StepIndicator steps={Steps} />
      </aside>

      <main className="flex-1 p-6">
        <StepContent />
      </main>
    </div>
  );
}
