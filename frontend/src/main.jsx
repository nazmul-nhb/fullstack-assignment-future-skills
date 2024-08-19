import "./index.css";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<Toaster />
		</QueryClientProvider>
	</StrictMode>
);
