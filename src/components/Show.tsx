import React, { type ReactNode } from "react";

interface ShowProps {
  ifCondition: boolean;
  fallback?: ReactNode;
  children: ReactNode;
}

const Show: React.FC<ShowProps> = React.memo(
  ({ ifCondition, fallback = null, children }) =>
    ifCondition ? <>{children}</> : <>{fallback}</>
);

export default Show;
