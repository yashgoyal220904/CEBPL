"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Lock, 
  Search, 
  RefreshCw, 
  Download, 
  MessageSquare, 
  Mail, 
  Phone, 
  Inbox, 
  Database, 
  Eye, 
  CheckCircle2, 
  X,
  FileText,
  User
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Submission {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  company?: string;
  service?: string;
  message?: string;
  type: "contact" | "quote";
}

export default function AdminDashboard() {
  const [passwordInput, setPasswordInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isDbProduction, setIsDbProduction] = useState(false);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "contact" | "quote">("all");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  // Local storage for read/contacted status
  const [contactedIds, setContactedIds] = useState<number[]>([]);

  useEffect(() => {
    // Check if password exists in sessionStorage to persist login during the session
    const savedPassword = sessionStorage.getItem("admin_session_pwd");
    if (savedPassword) {
      verifySession(savedPassword);
    }
  }, []);

  // Filter logic
  useEffect(() => {
    let result = submissions;

    // Filter by type
    if (typeFilter !== "all") {
      result = result.filter(sub => sub.type === typeFilter);
    }

    // Filter by search term
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(sub => 
        sub.name.toLowerCase().includes(term) ||
        sub.email.toLowerCase().includes(term) ||
        sub.phone.includes(term) ||
        (sub.company && sub.company.toLowerCase().includes(term)) ||
        (sub.subject && sub.subject.toLowerCase().includes(term)) ||
        (sub.message && sub.message.toLowerCase().includes(term))
      );
    }

    setFilteredSubmissions(result);
  }, [submissions, searchTerm, typeFilter]);

  // Load local contacted IDs
  useEffect(() => {
    const savedContacted = localStorage.getItem("admin_contacted_ids");
    if (savedContacted) {
      try {
        setContactedIds(JSON.parse(savedContacted));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const verifySession = async (pwd: string) => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/admin/submissions", {
        headers: {
          "Authorization": pwd
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions || []);
        setIsDbProduction(!data.isMock);
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_session_pwd", pwd);
      } else {
        sessionStorage.removeItem("admin_session_pwd");
        if (response.status === 401) {
          setLoginError("Invalid password. Please try again.");
        } else {
          setLoginError("Server error. Please verify configuration.");
        }
      }
    } catch (err) {
      console.error(err);
      setLoginError("Failed to connect to authentication server.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    if (!passwordInput) return;
    verifySession(passwordInput);
  };

  const handleRefresh = async () => {
    const pwd = sessionStorage.getItem("admin_session_pwd");
    if (!pwd) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/submissions", {
        headers: {
          "Authorization": pwd
        }
      });
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions || []);
      } else {
        setErrorMsg("Failed to refresh records.");
      }
    } catch (err) {
      console.error("Refresh error:", err);
      setErrorMsg("Network error trying to refresh.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleContacted = (id: number) => {
    let updated;
    if (contactedIds.includes(id)) {
      updated = contactedIds.filter(cid => cid !== id);
    } else {
      updated = [...contactedIds, id];
    }
    setContactedIds(updated);
    localStorage.setItem("admin_contacted_ids", JSON.stringify(updated));
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_session_pwd");
    setIsAuthenticated(false);
    setPasswordInput("");
    setSubmissions([]);
  };

  const exportToCSV = () => {
    if (filteredSubmissions.length === 0) return;

    const headers = ["ID", "Date", "Type", "Name", "Email", "Phone", "Subject", "Company", "Service", "Message"];
    const rows = filteredSubmissions.map(sub => [
      sub.id,
      new Date(sub.created_at).toLocaleString(),
      sub.type.toUpperCase(),
      `"${sub.name.replace(/"/g, '""')}"`,
      sub.email,
      `"${sub.phone}"`,
      `"${(sub.subject || "").replace(/"/g, '""')}"`,
      `"${(sub.company || "").replace(/"/g, '""')}"`,
      `"${(sub.service || "").replace(/"/g, '""')}"`,
      `"${(sub.message || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `CEBPL_submissions_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper to format WhatsApp message
  const getWhatsAppLink = (phone: string, name: string) => {
    // Normalize phone number (strip whitespace, ensure code is prefix)
    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    const message = `Hello ${name}, thank you for contacting Chaurasiya Electricals & Buildwell Pvt Ltd (CEBPL). We received your inquiry and wanted to connect with you.`;
    return `https://wa.me/${cleanPhone.startsWith("+") ? cleanPhone.slice(1) : cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {!isAuthenticated ? (
          /* LOGIN PANEL */
          <div className="max-w-md mx-auto my-12 p-8 bg-brand-dark-card border border-brand-dark-border rounded-2xl shadow-xl space-y-6 glow-blue relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full filter blur-xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/5 rounded-full filter blur-xl pointer-events-none"></div>

            <div className="text-center space-y-2 relative z-10">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto mb-2">
                <Lock size={22} />
              </div>
              <h1 className="text-2xl font-bold font-display text-white">CEBPL Admin Console</h1>
              <p className="text-gray-400 text-xs leading-relaxed">
                Enter your administrative password to review quotation requests and contact forms.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 relative z-10">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Admin Password
                </label>
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition duration-200"
                />
                {loginError && (
                  <p className="text-red-500 text-xs font-semibold mt-1">{loginError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-500 hover:to-brand-blue text-white py-3 rounded-lg font-bold text-sm cursor-pointer shadow-lg hover:shadow-brand-blue/20 transition-all duration-200 flex justify-center items-center gap-2"
              >
                {isLoading ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <span>Access Dashboard</span>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* DASHBOARD VIEW */
          <div className="space-y-8">
            {/* Header Title Grid */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-brand-dark-border pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-extrabold font-display text-white">Submissions Desk</h1>
                  <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold border ${
                    isDbProduction 
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  }`}>
                    <Database size={10} />
                    {isDbProduction ? "Supabase Live" : "Simulated Mode"}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  Manage incoming customer inquiries, RFQs, and tender bids for Chaurasiya Electricals.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={handleRefresh}
                  disabled={isLoading}
                  className="bg-brand-dark-card border border-brand-dark-border hover:border-brand-blue/30 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition"
                >
                  <RefreshCw size={14} className={isLoading ? "animate-spin" : ""} />
                  Refresh
                </button>
                <button
                  onClick={exportToCSV}
                  disabled={filteredSubmissions.length === 0}
                  className="bg-brand-dark-card border border-brand-dark-border hover:border-brand-gold/30 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Download size={14} />
                  Export CSV
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-950/20 hover:bg-red-950/40 border border-red-500/20 hover:border-red-500/40 text-red-400 px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition"
                >
                  Log Out
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-brand-dark-card border border-brand-dark-border rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full filter blur-lg pointer-events-none"></div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Total Received</p>
                <p className="text-3xl font-extrabold font-display text-white mt-1.5">{submissions.length}</p>
                <p className="text-[10px] text-gray-400 mt-2">Active portal entries</p>
              </div>
              <div className="bg-brand-dark-card border border-brand-dark-border rounded-xl p-5 relative overflow-hidden border-l-2 border-l-brand-blue">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full filter blur-lg pointer-events-none"></div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Contact Inquiries</p>
                <p className="text-3xl font-extrabold font-display text-brand-blue mt-1.5">
                  {submissions.filter(s => s.type === "contact").length}
                </p>
                <p className="text-[10px] text-gray-400 mt-2">General and bid requests</p>
              </div>
              <div className="bg-brand-dark-card border border-brand-dark-border rounded-xl p-5 relative overflow-hidden border-l-2 border-l-brand-gold">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full filter blur-lg pointer-events-none"></div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Quotation Requests</p>
                <p className="text-3xl font-extrabold font-display text-brand-gold mt-1.5">
                  {submissions.filter(s => s.type === "quote").length}
                </p>
                <p className="text-[10px] text-gray-400 mt-2">Service-specific RFQs</p>
              </div>
            </div>

            {/* Controls panel: Search + filter buttons */}
            <div className="bg-brand-dark-card border border-brand-dark-border rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:max-w-md">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, email, phone, keyword..."
                  className="w-full bg-brand-dark border border-brand-dark-border rounded-lg pl-9 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue text-xs transition duration-200"
                />
              </div>

              <div className="flex gap-1.5 shrink-0 self-end md:self-center">
                <button
                  onClick={() => setTypeFilter("all")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                    typeFilter === "all"
                      ? "bg-white text-brand-dark border-white"
                      : "bg-brand-dark border-brand-dark-border text-gray-400 hover:text-white"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setTypeFilter("contact")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                    typeFilter === "contact"
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-brand-dark border-brand-dark-border text-gray-400 hover:text-white"
                  }`}
                >
                  Inquiries
                </button>
                <button
                  onClick={() => setTypeFilter("quote")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                    typeFilter === "quote"
                      ? "bg-brand-gold text-brand-dark border-brand-gold"
                      : "bg-brand-dark border-brand-dark-border text-gray-400 hover:text-white"
                  }`}
                >
                  Quotes
                </button>
              </div>
            </div>

            {/* List and Table of Submissions */}
            {errorMsg && (
              <p className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-xs font-semibold">
                {errorMsg}
              </p>
            )}

            {filteredSubmissions.length === 0 ? (
              <div className="bg-brand-dark-card border border-brand-dark-border rounded-xl p-12 text-center space-y-3">
                <Inbox size={32} className="text-gray-600 mx-auto" />
                <p className="text-gray-400 text-sm font-semibold">No submissions found</p>
                <p className="text-gray-600 text-xs">
                  {submissions.length === 0 ? "You haven't received any form submissions yet." : "Try resetting your filter parameters."}
                </p>
              </div>
            ) : (
              <div className="bg-brand-dark-card border border-brand-dark-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-brand-dark-border text-gray-400 uppercase tracking-wider font-semibold text-[10px] bg-brand-dark/40">
                        <th className="py-4 px-5">Status</th>
                        <th className="py-4 px-4">Date</th>
                        <th className="py-4 px-4">Source</th>
                        <th className="py-4 px-4">Customer Details</th>
                        <th className="py-4 px-4">Company & Service</th>
                        <th className="py-4 px-4">Subject</th>
                        <th className="py-4 px-5 text-right">Quick Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-dark-border/40">
                      {filteredSubmissions.map((sub) => {
                        const isContacted = contactedIds.includes(sub.id);
                        return (
                          <tr 
                            key={sub.id}
                            className={`hover:bg-brand-dark/20 transition-colors ${
                              isContacted ? "opacity-60" : ""
                            }`}
                          >
                            <td className="py-4 px-5">
                              <button
                                onClick={() => toggleContacted(sub.id)}
                                title={isContacted ? "Mark as New" : "Mark as Contacted"}
                                className={`w-5 h-5 rounded-md border flex items-center justify-center cursor-pointer transition ${
                                  isContacted 
                                    ? "bg-brand-blue/20 border-brand-blue text-brand-blue" 
                                    : "border-brand-dark-border hover:border-gray-500 text-transparent hover:text-gray-600"
                                }`}
                              >
                                <CheckCircle2 size={12} className={isContacted ? "" : "hover:text-gray-500"} />
                              </button>
                            </td>
                            <td className="py-4 px-4 text-gray-400 font-mono">
                              {new Date(sub.created_at).toLocaleDateString()}
                              <span className="block text-[10px] text-gray-600">
                                {new Date(sub.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold border ${
                                sub.type === "quote" 
                                  ? "bg-brand-gold/10 text-brand-gold border-brand-gold/20" 
                                  : "bg-brand-blue/10 text-brand-blue border-brand-blue/20"
                              }`}>
                                {sub.type === "quote" ? "RFQ Quote" : "Contact"}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <p className="font-bold text-white flex items-center gap-1">
                                <User size={10} className="text-gray-500" />
                                {sub.name}
                              </p>
                              <a href={`mailto:${sub.email}`} className="text-gray-400 hover:text-brand-blue block mt-0.5">
                                {sub.email}
                              </a>
                            </td>
                            <td className="py-4 px-4">
                              {sub.type === "quote" ? (
                                <>
                                  <p className="font-semibold text-gray-300">{sub.company || "Individual Client"}</p>
                                  <p className="text-gray-500 mt-0.5 font-mono text-[10px]">{sub.service || "Unspecified"}</p>
                                </>
                              ) : (
                                <p className="text-gray-500 font-mono text-[10px]">-</p>
                              )}
                            </td>
                            <td className="py-4 px-4 max-w-xs truncate text-gray-300" title={sub.subject}>
                              {sub.subject || "No Subject"}
                            </td>
                            <td className="py-4 px-5 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => setSelectedSubmission(sub)}
                                  className="w-8 h-8 rounded-lg bg-brand-dark border border-brand-dark-border hover:border-brand-blue/30 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transition"
                                  title="View Message Details"
                                >
                                  <Eye size={14} />
                                </button>
                                <a
                                  href={`mailto:${sub.email}?subject=RE: ${encodeURIComponent(sub.subject || "Your Quote Inquiry")}`}
                                  className="w-8 h-8 rounded-lg bg-brand-dark border border-brand-dark-border hover:border-brand-blue/30 flex items-center justify-center text-gray-400 hover:text-brand-blue transition"
                                  title="Email Client"
                                >
                                  <Mail size={14} />
                                </a>
                                <a
                                  href={getWhatsAppLink(sub.phone, sub.name)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 rounded-lg bg-brand-dark border border-brand-dark-border hover:border-emerald-500/30 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition"
                                  title="Chat on WhatsApp"
                                >
                                  <MessageSquare size={14} />
                                </a>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* EXPANDED MESSAGE MODAL */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative space-y-6 shadow-2xl"
          >
            <button
              onClick={() => setSelectedSubmission(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-white cursor-pointer transition"
            >
              <X size={20} />
            </button>

            <div className="space-y-1.5">
              <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${
                selectedSubmission.type === "quote" 
                  ? "bg-brand-gold/10 text-brand-gold border-brand-gold/20" 
                  : "bg-brand-blue/10 text-brand-blue border-brand-blue/20"
              }`}>
                {selectedSubmission.type === "quote" ? "Quotation Request" : "General Inquiry"}
              </span>
              <h2 className="text-xl font-bold font-display text-white">{selectedSubmission.subject || "No Subject"}</h2>
              <p className="text-[10px] text-gray-500 font-mono">
                Received on: {new Date(selectedSubmission.created_at).toLocaleString()}
              </p>
            </div>

            <hr className="border-brand-dark-border" />

            {/* Client profile grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1 bg-brand-dark/40 border border-brand-dark-border/40 p-3 rounded-lg">
                <p className="text-gray-500 font-semibold uppercase text-[9px] tracking-wider">Client Name</p>
                <p className="font-bold text-white">{selectedSubmission.name}</p>
              </div>
              <div className="space-y-1 bg-brand-dark/40 border border-brand-dark-border/40 p-3 rounded-lg">
                <p className="text-gray-500 font-semibold uppercase text-[9px] tracking-wider">Phone / WhatsApp</p>
                <p className="font-bold text-white flex items-center gap-1.5">
                  <Phone size={11} className="text-brand-gold" />
                  {selectedSubmission.phone}
                </p>
              </div>
              <div className="space-y-1 bg-brand-dark/40 border border-brand-dark-border/40 p-3 rounded-lg">
                <p className="text-gray-500 font-semibold uppercase text-[9px] tracking-wider">Email Address</p>
                <a href={`mailto:${selectedSubmission.email}`} className="font-bold text-brand-blue hover:underline flex items-center gap-1.5">
                  <Mail size={11} className="text-brand-blue" />
                  {selectedSubmission.email}
                </a>
              </div>
              {selectedSubmission.type === "quote" && (
                <div className="space-y-1 bg-brand-dark/40 border border-brand-dark-border/40 p-3 rounded-lg">
                  <p className="text-gray-500 font-semibold uppercase text-[9px] tracking-wider">Company / Service Scope</p>
                  <p className="font-bold text-white">
                    {selectedSubmission.company || "Individual"} 
                    <span className="block text-[10px] font-mono text-brand-gold font-normal mt-0.5">
                      ({selectedSubmission.service || "General"})
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* Message Detail Block */}
            <div className="space-y-2">
              <p className="text-gray-500 font-semibold uppercase text-[9px] tracking-wider flex items-center gap-1">
                <FileText size={11} />
                Message / Scope Details
              </p>
              <div className="bg-brand-dark/60 border border-brand-dark-border rounded-xl p-4 text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                {selectedSubmission.message || "No message body provided."}
              </div>
            </div>

            {/* Action buttons footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
              <button
                onClick={() => {
                  toggleContacted(selectedSubmission.id);
                  setSelectedSubmission(null);
                }}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold cursor-pointer border transition ${
                  contactedIds.includes(selectedSubmission.id)
                    ? "bg-brand-dark hover:bg-brand-dark-border border-brand-dark-border text-gray-400"
                    : "bg-brand-blue hover:bg-blue-600 text-white border-brand-blue"
                }`}
              >
                {contactedIds.includes(selectedSubmission.id) ? "Mark as Uncontacted" : "Mark as Contacted"}
              </button>

              <div className="flex gap-2 w-full sm:w-auto shrink-0">
                <a
                  href={`mailto:${selectedSubmission.email}?subject=RE: ${encodeURIComponent(selectedSubmission.subject || "Your Quote Inquiry")}`}
                  className="flex-grow sm:flex-grow-0 bg-brand-dark hover:bg-brand-dark-border border border-brand-dark-border hover:border-brand-blue/30 text-white px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  <Mail size={12} />
                  Send Email
                </a>
                <a
                  href={getWhatsAppLink(selectedSubmission.phone, selectedSubmission.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow sm:flex-grow-0 bg-brand-dark hover:bg-brand-dark-border border border-brand-dark-border hover:border-emerald-500/30 text-white px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  <MessageSquare size={12} className="text-emerald-400" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}
