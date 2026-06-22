"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Full Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Juan Dela Cruz"
          value={formData.name}
          onChange={handleChange}
          className="h-10"
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Email Address <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="juan@example.com"
          value={formData.email}
          onChange={handleChange}
          className="h-10"
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Subject <span className="text-destructive">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="h-10 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 md:text-sm"
          disabled={status === "submitting"}
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="branch-update">Branch Information Update</option>
          <option value="content-suggestion">Content Suggestion</option>
          <option value="technical-issue">Technical Issue / Bug Report</option>
          <option value="partnership">Partnership / Advertising</option>
          <option value="correction">Data Correction</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Please describe your inquiry in detail..."
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 md:text-sm"
          disabled={status === "submitting"}
        />
      </div>

      {status === "success" && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-800">
          Thank you for your message! We have received your inquiry and will
          respond within 24-48 business hours.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-800">
          Something went wrong. Please try again or email us directly at
          support@ltotrackeronline.ph.
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
        size="lg"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
