"use client";

import { useState } from "react";

const API_URL =
process.env.NEXT_PUBLIC_API_URL;

export default function BlogAdmin() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    readTime: "",
  });

  const submitBlog = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const res = await fetch(
      `${API_URL}/api/blogs`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (res.ok) {
      alert("Blog Added");

      setForm({
        title: "",
        slug: "",
        category: "",
        excerpt: "",
        content: "",
        readTime: "",
      });
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Add Blog
      </h1>

      <form
        onSubmit={submitBlog}
        className="space-y-4"
      >
        <input
          placeholder="Title"
          className="w-full border p-3"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <input
          placeholder="Slug"
          className="w-full border p-3"
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
        />

        <input
          placeholder="Category"
          className="w-full border p-3"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        />

        <input
          placeholder="Read Time"
          className="w-full border p-3"
          value={form.readTime}
          onChange={(e) =>
            setForm({
              ...form,
              readTime: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Excerpt"
          rows={3}
          className="w-full border p-3"
          value={form.excerpt}
          onChange={(e) =>
            setForm({
              ...form,
              excerpt: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Full Blog Content"
          rows={15}
          className="w-full border p-3"
          value={form.content}
          onChange={(e) =>
            setForm({
              ...form,
              content: e.target.value,
            })
          }
        />

        <button
          className="bg-cyan-500 px-6 py-3 text-white rounded"
        >
          Save Blog
        </button>
      </form>
    </div>
  );
}