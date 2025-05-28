"use client";

export default function ContactPage() {
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
      <div className="bg-muted/10 rounded-xl p-8 border border-muted shadow-sm space-y-6 mx-auto max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows={5}
            className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition text-sm font-medium">
          Send Message
        </button>
      </div>
    </div>
  );
}
