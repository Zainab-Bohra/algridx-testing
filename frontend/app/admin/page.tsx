"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Edit3, FileText, Package, RefreshCw, LogOut, Layers, Layers2 } from "lucide-react";

const API_BASE = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export default function AdminDashboard() {
  const router = useRouter();
  const [, setAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "blogs">("products");
  
  const [products, setProducts] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  
  const [pForm, setPForm] = useState({ id: "", name: "", series: "", category: "", shortDescription: "", image: "", isAvailable: true });
  const [bForm, setBForm] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    author: "ALUGRIDX",
    readTime: "5 min read",
  });
  const [uploading] = useState(false);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bForm),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Blog Post Published!");
        setBForm({ title: "", category: "", excerpt: "", content: "", author: "ALUGRIDX", readTime: "5 min read" });
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
      const res = await fetch(`${API_BASE}/blogs/${id}`, { method: "DELETE" });
      if (res.ok) fetchBlogs();
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24 px-4 md:px-8 text-[#0A2540] relative overflow-hidden font-sans">
      {/* Dark Navy Blueprint Mesh Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A254005_1px,transparent_1px),linear-gradient(to_bottom,#0A254005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* TOP COMPONENT CONTROL HEAD */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white p-6 rounded-[2.5rem] border-2 border-[#0A2540] shadow-md">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-[#0A2540]">ALUGRIDX Management Unit</h1>
            <p className="text-slate-500 text-xs font-medium mt-0.5">Deploy or alter production matrix parameters for grilles, loops, and system logs.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-full sm:w-auto">
              <button 
                onClick={() => setActiveTab("products")} 
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex-1 sm:flex-none ${activeTab === "products" ? "bg-[#0A2540] text-white shadow-md" : "text-slate-600 hover:text-[#0A2540]"}`}
              >
                <Package size={14} /> <span>Products</span>
              </button>
              <button 
                onClick={() => setActiveTab("blogs")} 
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex-1 sm:flex-none ${activeTab === "blogs" ? "bg-[#0A2540] text-white shadow-md" : "text-slate-600 hover:text-[#0A2540]"}`}
              >
                <FileText size={14} /> <span>Blogs</span>
              </button>
            </div>
            <button 
              onClick={handleLogout} 
              className="flex items-center justify-center gap-2 border-2 border-red-200 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all w-full sm:w-auto ml-auto shadow-sm"
            >
              <LogOut size={14} /> <span>Disconnect</span>
            </button>
          </div>
        </div>

        {/* 📦 TAB 1: PRODUCTS MANAGER WORKSPACE */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form Frame */}
            <form onSubmit={handleProductSubmit} className="lg:col-span-5 bg-white border-2 border-[#0A2540] p-6 rounded-[2.2rem] shadow-md space-y-4">
              <h3 className="text-xs font-mono font-black text-[#3B82F6] uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
                <Layers size={15} /> <span>{pForm.id ? "Alter Specifications Node" : "Register Product Entry"}</span>
              </h3>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Product Name</label>
                <input type="text" value={pForm.name} onChange={e => setPForm({...pForm, name: e.target.value})} required className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs font-mono text-[#0A2540] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="e.g., Double Deflection Register" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Product System Code</label>
                <input type="text" value={pForm.series} onChange={e => setPForm({...pForm, series: e.target.value})} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs font-mono text-[#0A2540] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="e.g., SAD-Series / NRD-02" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Product Classification Matrix</label>
                <input type="text" value={pForm.category} onChange={e => setPForm({...pForm, category: e.target.value})} required className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs font-mono text-[#0A2540] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="e.g., Grilles-Registers / Louvers" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Framework Description Sheet</label>
                <textarea value={pForm.shortDescription} onChange={e => setPForm({...pForm, shortDescription: e.target.value})} required rows={4} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 font-medium focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="Input engineered tolerances and flow metrics..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#0A2540] hover:bg-[#2563EB] text-white font-mono text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-colors shadow-sm active:scale-95">
                {uploading ? "Parsing Matrix..." : pForm.id ? "Commit Data Parameters" : "Publish to Core Architecture"}
              </button>
              {pForm.id && (
                <button type="button" onClick={() => setPForm({ id: "", name: "", series: "", category: "", shortDescription: "", image: "", isAvailable: true })} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-mono text-xs font-bold uppercase py-2.5 rounded-xl transition-colors">
                  Abort Adjustments
                </button>
              )}
            </form>

            {/* List Rendition Matrix */}
            <div className="lg:col-span-7 bg-white border-2 border-[#0A2540] rounded-[2.2rem] shadow-md overflow-hidden">
              <div className="p-4 bg-slate-50 border-b-2 border-slate-100 flex justify-between items-center">
                <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#0A2540]">Active Components Catalogue</span>
                <button onClick={fetchProducts} className="text-slate-400 hover:text-[#3B82F6] transition-colors p-1"><RefreshCw size={14} /></button>
              </div>
              <div className="divide-y divide-slate-100 max-h-[550px] overflow-y-auto">
                {products.length === 0 ? (
                  <p className="p-8 text-center text-xs font-mono uppercase text-slate-400 font-bold">[ Zero Registered Components ]</p>
                ) : (
                  products.map((prod) => (
                    <div key={prod._id} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50 transition-colors">
                      <div className="flex gap-3.5 items-center">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center p-1 overflow-hidden shrink-0">
                          <img src={prod.image || prod.images?.[0]} alt="" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                        </div>
                        <div>
                          <h4 className="font-black text-[#0A2540] text-sm uppercase tracking-tight">{prod.name}</h4>
                          <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">{prod.series || "Custom"} Matrix • <span className="text-[#3B82F6]">{prod.category}</span></p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        <button 
                          onClick={() => toggleAvailability(prod._id, prod.isAvailable)} 
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase border transition-colors ${prod.isAvailable ? "bg-blue-50 border-blue-200 text-[#2563EB]" : "bg-red-50 border-red-200 text-red-600"}`}
                        >
                          {prod.isAvailable ? "Active" : "Locked"}
                        </button>
                        <button onClick={() => setPForm({ id: prod._id, name: prod.name, series: prod.series || "", category: prod.category, shortDescription: prod.shortDescription || prod.desc || "", image: prod.image || "", isAvailable: prod.isAvailable })} className="text-slate-400 hover:text-[#0A2540] hover:border-[#0A2540] p-2 border border-slate-200 rounded-lg bg-slate-50 transition-colors"><Edit3 size={14} /></button>
                        <button onClick={() => deleteProduct(prod._id)} className="text-slate-400 hover:text-red-600 hover:border-red-200 p-2 border border-slate-200 rounded-lg bg-slate-50 transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* 📝 TAB 2: BLOG REPOSITORY COMMAND */}
        {activeTab === "blogs" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <form onSubmit={handleBlogSubmit} className="lg:col-span-5 bg-white border-2 border-[#0A2540] p-6 rounded-[2.2rem] shadow-md space-y-4">
              <h3 className="text-xs font-mono font-black text-[#3B82F6] uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
                <Layers2 size={15} /> <span>Compile Press Entry</span>
              </h3>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Blog Dispatch Title</label>
                <input type="text" value={bForm.title} onChange={e => setBForm({...bForm, title: e.target.value})} required className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs font-mono text-[#0A2540] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="e.g., Thermal Efficiency Scaling" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Classification Group</label>
                <input type="text" value={bForm.category} onChange={e => setBForm({...bForm, category: e.target.value})} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs font-mono text-[#0A2540] focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="HVAC Engineering" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Estimated Read Metrics</label>
                <input type="text" value={bForm.readTime} onChange={e => setBForm({...bForm, readTime: e.target.value})} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs font-mono text-[#0A2540] focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="4 min read" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Abstract Excerpt</label>
                <textarea rows={2} value={bForm.excerpt} onChange={e => setBForm({...bForm, excerpt: e.target.value})} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 font-medium focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="Short conceptual summary node..." />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Author Identity</label>
                <input type="text" value={bForm.author} onChange={e => setBForm({...bForm, author: e.target.value})} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs font-mono text-[#0A2540] focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="ALUGRIDX Desk" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Core Body Content</label>
                <textarea value={bForm.content} onChange={e => setBForm({...bForm, content: e.target.value})} required rows={6} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 font-medium focus:outline-none focus:border-[#3B82F6] transition-colors" placeholder="Write complete structural article text block..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0A2540] hover:bg-[#2563EB] text-white font-mono text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-colors shadow-sm active:scale-95">
                Publish Document Matrix
              </button>
            </form>

            {/* Blog List Rendition */}
            <div className="lg:col-span-7 bg-white border-2 border-[#0A2540] rounded-[2.2rem] shadow-md overflow-hidden">
              <div className="p-4 bg-slate-50 border-b-2 border-slate-100 flex justify-between items-center">
                <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#0A2540]">Broadcasted Press Matrix</span>
                <button onClick={fetchBlogs} className="text-slate-400 hover:text-[#3B82F6] transition-colors p-1"><RefreshCw size={14} /></button>
              </div>
              <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
                {blogs.length === 0 ? (
                  <p className="p-8 text-center text-xs font-mono uppercase text-slate-400 font-bold">[ Zero Documents Broadcasted ]</p>
                ) : (
                  blogs.map((blog) => (
                    <div key={blog._id} className="p-4 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors">
                      <div className="max-w-[80%] space-y-0.5">
                        <h4 className="font-black text-[#0A2540] text-sm uppercase tracking-tight truncate">{blog.title}</h4>
                        <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">By {blog.author || "Admin"} • {new Date(blog.createdAt).toLocaleDateString()}</p>
                      </div>
                      <button onClick={() => deleteBlog(blog._id)} className="text-slate-400 hover:text-red-600 hover:border-red-200 p-2 border border-slate-200 rounded-lg bg-slate-50 transition-colors"><Trash2 size={14} /></button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}