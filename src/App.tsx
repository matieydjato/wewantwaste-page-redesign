import { SkipHireContextProvider } from "./providers";
import { SkipHire } from "./containers";

function App() {
  return (
    <SkipHireContextProvider>
      <SkipHire />
    </SkipHireContextProvider>
  );
}

export default App;
