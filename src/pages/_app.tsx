import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { cn } from "../utils/cn";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize a new QueryClient instance
const queryClient = new QueryClient({
   defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
   }
})

//control font import inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export default function App({ Component, pageProps }: AppProps) {
  return (

    // Wrap the application with QueryClientProvider to provide the query client to the app
    <QueryClientProvider client={queryClient}>
      <main
        className={cn(
          inter.className,
          "lg:py flex min-h-screen min-w-full flex-col items-center justify-between gap-10 py-10",
        )}
      >
        <Component {...pageProps} />
      </main>
      
    </QueryClientProvider>
  );
}
