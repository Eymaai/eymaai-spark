import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/site/SiteLayout";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="min-h-[60vh] grid place-items-center px-4">
        <div className="text-center max-w-md">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">404</p>
          <h1 className="font-display text-5xl mt-3">Page not found</h1>
          <p className="mt-3 text-ink-muted">The page you're looking for doesn't exist or has moved.</p>
          <Link to="/" className="inline-flex mt-7 items-center rounded-full bg-forest text-cream px-6 py-3 text-sm hover:bg-forest-light transition-colors">
            Take me home
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <SiteLayout>
      <div className="min-h-[60vh] grid place-items-center px-4">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl">This page didn't load</h1>
          <p className="mt-3 text-ink-muted text-sm">Something went wrong on our end.</p>
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="mt-6 inline-flex items-center rounded-full bg-forest text-cream px-6 py-3 text-sm hover:bg-forest-light transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </SiteLayout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EYMA AI — Training the intelligence of tomorrow" },
      { name: "description", content: "EYMA AI delivers expert RLHF data, prompt engineering, red-teaming and Indic language data to leading AI labs. Based in Delhi, India." },
      { name: "author", content: "EYMA AI" },
      { property: "og:title", content: "EYMA AI — Training the intelligence of tomorrow" },
      { property: "og:description", content: "Expert human feedback that makes AI more accurate, safer, and smarter." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}
