interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold tracking-tight mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/30"
          >
            <summary className="cursor-pointer font-medium text-foreground list-none flex items-center justify-between gap-4">
              <span>{faq.question}</span>
              <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
