import { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import { AppContext, AppContextType } from "./lib/contextLib";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Amplify } from "aws-amplify";
import config from "./config.ts";

const queryClient = new QueryClient();
const router = createRouter({ routeTree, context: { queryClient } }); // Create a new router instance

declare module "@tanstack/react-router" {
  // Register the router instance
  interface Register {
    router: typeof router;
  }
}

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
  },
  API: {
    endpoints: [
      {
        name: "LinkSharingApp",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

// Functional component that uses the `useState` hook
function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider
          value={{ isAuthenticated, userHasAuthenticated } as AppContextType}
        >
          <RouterProvider router={router} />
        </AppContext.Provider>
      </QueryClientProvider>
    </StrictMode>
  );
}

// Render the App component
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
