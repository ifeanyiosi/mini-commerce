// components/product/ProductFeatures.tsx
"use client";

export default function ProductFeatures() {
  const features = [
    {
      iconColor: "text-primary",
      bg: "bg-primary/10",
      title: "Premium Quality",
      subtitle: "Guaranteed excellence",
      path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      iconColor: "text-secondary",
      bg: "bg-secondary/10",
      title: "Fast Delivery",
      subtitle: "2-3 business days",
      path: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      iconColor: "text-accent",
      bg: "bg-accent/10",
      title: "Easy Returns",
      subtitle: "30-day policy",
      path: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
    {
      iconColor: "text-primary",
      bg: "bg-primary/10",
      title: "Secure Payment",
      subtitle: "SSL encrypted",
      path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-4 bg-card border border-border/20 rounded-xl hover:bg-muted/50 transition"
        >
          <div
            className={`w-10 h-10 ${feature.bg} rounded-lg flex items-center justify-center`}
          >
            <svg
              className={`w-6 h-6 ${feature.iconColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={feature.path}
              />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-foreground">{feature.title}</div>
            <div className="text-sm text-muted-foreground">
              {feature.subtitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
