// Home page welcome header.
// Shows greeting based on time of day + current date.

"use client";

export function WelcomeHeader() {
  const now = new Date();
  const hour = now.getHours();

  let greeting: string;
  if (hour < 5) greeting = "Good evening";
  else if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="border-b pb-8">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        Energy & Hydrogen Market Intelligence
      </p>
      <h1 className="mt-2 text-3xl font-medium tracking-tight">
        {greeting}, Wooseop
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">{dateStr}</p>
    </header>
  );
}
