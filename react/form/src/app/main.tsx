import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserForm } from "../features/form/form";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserForm id="1" />
    </QueryClientProvider>
  </StrictMode>,
);
