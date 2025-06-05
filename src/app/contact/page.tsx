"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 md:px-12 lg:px-24 py-20 w-[100vw]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Talk</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Whether you&apos;re ready to build or just exploring ideas, we’d love
          to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-muted/10 rounded-xl p-8 border border-muted shadow-sm space-y-6 mx-auto max-w-2xl"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write your message here..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition text-sm font-medium disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-600 text-sm font-medium">
            ✅ Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 text-sm font-medium">❌ {error}</p>
        )}
      </form>
    </div>
  );
}
