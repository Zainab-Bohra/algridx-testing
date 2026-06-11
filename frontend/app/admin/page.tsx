"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Edit3, CheckCircle, XCircle, FileText, Package, RefreshCw, LogOut } from "lucide-react";

const API_BASE = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export default function AdminDashboard() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "blogs">("products");
  
  const [products, setProducts] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  
  // 🚀 डेटाबेस स्कीमा के हिसाब से बिल्कुल सही नाम सेट किए
  const [pForm, setPForm] = useState({ id: "", name: "", series: "", category: "", shortDescription: "", image: "", isAvailable: true });
const [bForm, setBForm] = useState({
  title: "",
  category: "",
  excerpt: "",
  content: "",
  author: "ALUGRIDX",
  readTime: "5 min read",
});
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
      fetchProducts();
      fetchBlogs();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  
  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE}/products`);
      if (res.ok) setProducts(await res.json());
    } catch (err) { console.error(err); }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API_BASE}/blogs`);
      if (res.ok) setBlogs(await res.json());
    } catch (err) { console.error(err); }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEdit = !!pForm.id;
    const url = isEdit ? `${API_BASE}/products/${pForm.id}` : `${API_BASE}/products`;
    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pForm),
      });
      
      const data = await res.json();

      if (res.ok) {
        alert(isEdit ? "Product Updated Successfully!" : "New Product Added Successfully!");
        setPForm({ id: "", name: "", series: "", category: "", shortDescription: "", image: "", isAvailable: true });
        fetchProducts();
      } else {
        alert("Server Error: " + (data.error || "Failed to save product"));
      }
    } catch (err) { 
      alert("Network Error: Cannot connect to server"); 
    }
  };

  const toggleAvailability = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isAvailable: !currentStatus }),
      });
      if (res.ok) fetchProducts();
    } catch (err) { console.error(err); }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, { method: "DELETE" });
      if (res.ok) fetchProducts();
    } catch (err) { console.error(err); }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch(`${API_BASE}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bForm),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Blog Post Published!");

      setBForm({
        title: "",
        category: "",
        excerpt: "",
        content: "",
        author: "ALUGRIDX",
        readTime: "5 min read",
      });

      fetchBlogs();
    } else {
      alert(data.message || "Failed to publish blog");
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};
const deleteBlog = async (id: string) => {
  if (!confirm("Are you sure you want to delete this blog?")) return;

  try {
    const res = await fetch(
      `${API_BASE}/blogs/${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      fetchBlogs();
    } else {
      alert("Failed to delete blog");
    }
  } catch (err) {
    console.error(err);
    alert("Server Error");
  }
};
  return (
    <div className="bg-[#0a1128] min-h-screen pt-32 pb-24 px-6 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#101f42] p-6 rounded-2xl border border-white/10 shadow-lg">
          <div>
            <h1 className="text-xl font-bold">ALUGRIDX Admin Panel</h1>
            <p className="text-slate-400 text-xs mt-0.5">Manage your website products and blogs</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <div className="flex bg-slate-950 p-1 rounded-xl border border-white/5 w-full sm:w-auto">
              <button onClick={() => setActiveTab("products")} className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all flex-1 sm:flex-none ${activeTab === "products" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950" : "text-slate-400 hover:text-white"}`}><Package size={14} /> Products</button>
              <button onClick={() => setActiveTab("blogs")} className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all flex-1 sm:flex-none ${activeTab === "blogs" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950" : "text-slate-400 hover:text-white"}`}><FileText size={14} /> Blogs</button>
            </div>
            <button onClick={handleLogout} className="flex items-center justify-center gap-2 bg-rose-600/20 hover:bg-rose-600 border border-rose-500/30 text-rose-400 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all w-full sm:w-auto"><LogOut size={14} /> Logout</button>
          </div>
        </div>

        {/* 📦 TAB 1: PRODUCTS MANAGER */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form */}
            <form onSubmit={handleProductSubmit} className="lg:col-span-5 bg-[#101f42] border border-white/10 p-6 rounded-2xl shadow-md space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2">{pForm.id ? "Edit Product Details" : "Add New Product"}</h3>
              
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Product Name</label>
                <input type="text" value={pForm.name} onChange={e => setPForm({...pForm, name: e.target.value})} required className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" placeholder="e.g., Ceiling Diffuser" />
              </div>
              
         
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Product Category</label>
                <input type="text" value={pForm.category} onChange={e => setPForm({...pForm, category: e.target.value})} required className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" placeholder="e.g., Diffusers / Grilles / Dampers" />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Upload Product Image</label>
                <div className="flex items-center gap-3 bg-slate-950 border border-white/5 p-2 rounded-xl">
                </div>
                {pForm.image && <p className="text-[10px] text-emerald-400 truncate mt-1">Selected: {pForm.image}</p>}
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Product Description</label>
                <textarea value={pForm.shortDescription} onChange={e => setPForm({...pForm, shortDescription: e.target.value})} required rows={4} className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500" placeholder="Write description here..."></textarea>
              </div>
              
              <button type="submit" disabled={uploading} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs py-3 rounded-xl transition-all disabled:opacity-40">
                {uploading ? "Uploading Image..." : pForm.id ? "Save Product Changes" : "Add Product to Website"}
              </button>
              {pForm.id && <button type="button" onClick={() => setPForm({ id: "", name: "", series: "", category: "", shortDescription: "", image: "", isAvailable: true })} className="w-full bg-white/5 text-slate-300 font-medium text-xs py-2 rounded-xl">Cancel Edit</button>}
            </form>

            {/* List */}
            <div className="lg:col-span-7 bg-[#101f42] border border-white/10 rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 bg-slate-950/40 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-xs font-bold text-slate-300">All Products</h3>
                <button onClick={fetchProducts} className="text-slate-500 hover:text-cyan-400"><RefreshCw size={14} /></button>
              </div>
              <div className="divide-y divide-white/5 max-h-[550px] overflow-y-auto">
                {products.length === 0 ? <p className="p-8 text-center text-xs text-slate-500">No products found.</p> : products.map((prod) => (
                  <div key={prod._id} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-white/[0.01]">
                    <div className="flex gap-3 items-center">
                      <div className="w-12 h-12 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center p-1 overflow-hidden shrink-0"><img src={prod.image} alt="" className="max-w-full max-h-full object-contain" /></div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{prod.name}</h4>
                        <p className="text-[11px] text-slate-400 font-medium">{prod.series} • <span className="text-cyan-400">{prod.category}</span></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <button onClick={() => toggleAvailability(prod._id, prod.isAvailable)} className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border ${prod.isAvailable ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-rose-500/10 border-rose-500/20 text-rose-400"}`}>{prod.isAvailable ? "Available" : "Unavailable"}</button>
                      <button onClick={() => setPForm({ id: prod._id, name: prod.name, series: prod.series, category: prod.category, shortDescription: prod.shortDescription, image: prod.image, isAvailable: prod.isAvailable })} className="text-slate-400 hover:text-cyan-400 p-1.5 border border-white/5 rounded-lg bg-slate-950"><Edit3 size={14} /></button>
                      <button onClick={() => deleteProduct(prod._id)} className="text-slate-400 hover:text-rose-500 p-1.5 border border-white/5 rounded-lg bg-slate-950"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 📝 TAB 2: BLOGS */}
        {activeTab === "blogs" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <form onSubmit={handleBlogSubmit} className="lg:col-span-5 bg-[#101f42] border border-white/10 p-6 rounded-2xl shadow-md space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2">Add New Blog Post</h3>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Blog Title *</label>
                <input type="text" value={bForm.title} onChange={e => setBForm({...bForm, title: e.target.value})} required className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" placeholder="Enter title" />
              </div>
              <div className="space-y-1">
  <label className="text-xs font-medium text-slate-300">
    Category
  </label>

  <input
    type="text"
    value={bForm.category}
    onChange={(e) =>
      setBForm({
        ...bForm,
        category: e.target.value,
      })
    }
    className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white"
    placeholder="HVAC Manufacturing"
  />
</div>
<div className="space-y-1">
  <label className="text-xs font-medium text-slate-300">
    Read Time
  </label>

  <input
    type="text"
    value={bForm.readTime}
    onChange={(e) =>
      setBForm({
        ...bForm,
        readTime: e.target.value,
      })
    }
    className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white"
    placeholder="5 min read"
  />
</div>

<div className="space-y-1">
  <label className="text-xs font-medium text-slate-300">
    Excerpt
  </label>

  <textarea
    rows={3}
    value={bForm.excerpt}
    onChange={(e) =>
      setBForm({
        ...bForm,
        excerpt: e.target.value,
      })
    }
    className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white"
    placeholder="Short blog summary..."
  />
</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Author Name</label>
                  <input type="text" value={bForm.author} onChange={e => setBForm({...bForm, author: e.target.value})} className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" placeholder="ALUGRIDX" />
                </div>
           
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Blog Content *</label>
                <textarea value={bForm.content} onChange={e => setBForm({...bForm, content: e.target.value})} required rows={8} className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500" placeholder="Write blog description here..."></textarea>
              </div>
              <button type="submit" disabled={uploading} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs py-3 rounded-xl transition-all">
                {uploading ? "Uploading Image..." : "Publish Blog Post"}
              </button>
            </form>

            {/* Blog List */}
            <div className="lg:col-span-7 bg-[#101f42] border border-white/10 rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 bg-slate-950/40 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-xs font-bold text-slate-300">All Blogs</h3>
                <button onClick={fetchBlogs} className="text-slate-500 hover:text-cyan-400"><RefreshCw size={14} /></button>
              </div>
              <div className="divide-y divide-white/5 max-h-[500px] overflow-y-auto">
                {blogs.length === 0 ? <p className="p-8 text-center text-xs text-slate-500">No blogs found.</p> : blogs.map((blog) => (
                  <div key={blog._id} className="p-4 flex justify-between items-center gap-4 hover:bg-white/[0.01]">
                    <div className="max-w-[80%] space-y-0.5">
                      <h4 className="font-bold text-white text-sm truncate">{blog.title}</h4>
                      <p className="text-[11px] text-slate-400">By {blog.author || "Admin"} • {new Date(blog.createdAt).toLocaleDateString()}</p>
                    </div>
                    <button onClick={() => deleteBlog(blog._id)} className="text-slate-400 hover:text-rose-500 p-2 border border-white/5 rounded-lg bg-slate-950"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}