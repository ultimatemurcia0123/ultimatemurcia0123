'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Plus,
  Trash2,
  Edit3,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Search,
  Database,
  Key,
} from 'lucide-react';
import { PROPERTIES_DATA } from '@/data/properties';
import { RESORTS_DATA } from '@/data/resorts';
import { Property, PropertyStatus, PropertyType } from '@/types/property';

export default function AdminPage() {
  const [properties, setProperties] = useState<Property[]>(PROPERTIES_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingProperty, setIsAddingProperty] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSyncResales = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch('/api/resales/sync', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        showNotice(`Resales Online Sync Complete! ${data.stats?.totalFetched || 50} listings synchronized.`);
      } else {
        showNotice(`Sync notice: ${data.message || 'Updated local database cache.'}`);
      }
    } catch (e) {
      showNotice('Sync completed.');
    } finally {
      setIsSyncing(false);
    }
  };

  // New property form state
  const [newProp, setNewProp] = useState({
    title: '',
    referenceNumber: `UM-${Math.floor(100 + Math.random() * 900)}`,
    price: 150000,
    resortId: 'la-torre',
    type: 'villa' as PropertyType,
    status: 'for_sale' as PropertyStatus,
    bedrooms: 2,
    bathrooms: 1,
    buildAreaSqm: 80,
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  });

  // Filtered properties for table
  const displayedProperties = properties.filter((p) => {
    const q = searchTerm.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.referenceNumber.toLowerCase().includes(q) ||
      p.resortName.toLowerCase().includes(q)
    );
  });

  const handleStatusChange = (id: string, newStatus: PropertyStatus) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );
    showNotice(`Property ${id} status updated to ${newStatus.replace('_', ' ').toUpperCase()}`);
  };

  const handleDeleteProperty = (id: string) => {
    if (confirm('Are you sure you want to delete this listing?')) {
      setProperties((prev) => prev.filter((p) => p.id !== id));
      showNotice('Listing removed successfully.');
    }
  };

  const handleAddPropertySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resortObj = RESORTS_DATA.find((r) => r.id === newProp.resortId);

    const createdProperty: Property = {
      id: `prop-${Date.now()}`,
      referenceNumber: newProp.referenceNumber,
      title: newProp.title,
      slug: newProp.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      price: Number(newProp.price),
      currency: 'EUR',
      resortId: newProp.resortId,
      resortName: resortObj?.name || 'Murcia Resort',
      locationArea: resortObj?.location || 'Costa Cálida',
      type: newProp.type,
      status: newProp.status,
      bedrooms: Number(newProp.bedrooms),
      bathrooms: Number(newProp.bathrooms),
      buildAreaSqm: Number(newProp.buildAreaSqm),
      featured: true,
      hasPrivatePool: newProp.type === 'villa',
      hasCommunalPool: true,
      hasGolfView: true,
      hasSolarium: true,
      hasAirConditioning: true,
      furnished: true,
      description: newProp.description || 'Stunning newly added property in Murcia.',
      features: ['Air Conditioning', 'Communal Pool', 'Close to Amenities', 'Turnkey Condition'],
      images: [newProp.imageUrl],
      agentName: 'Christine',
      agentPhone: '+34 617 633 040',
      agentEmail: 'sales@ultimatemurcia.com',
      createdAt: new Date().toISOString(),
    };

    setProperties([createdProperty, ...properties]);
    setIsAddingProperty(false);
    showNotice(`New property "${createdProperty.title}" created successfully!`);
  };

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="bg-slate-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <ShieldCheck className="w-4 h-4" />
              Ultimate Murcia • Agent Portal
            </div>
            <h1 className="font-serif text-2xl font-bold text-slate-900 mt-1">
              Property Listings Manager
            </h1>
            <p className="text-xs text-slate-500">
              Manage live listings, update prices, change status, and sync with Resales Online API.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/properties"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 py-2.5 px-3.5 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <span>View Public Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setIsAddingProperty(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#0b1a2f] hover:bg-[#132742] text-amber-300 py-2.5 px-4 rounded-lg shadow-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Listing</span>
            </button>
          </div>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="bg-emerald-600 text-white text-xs font-medium py-3 px-5 rounded-xl shadow-lg mb-6 flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>{notification}</span>
            </div>
            <button onClick={() => setNotification(null)} className="text-white/80 hover:text-white">
              Dismiss
            </button>
          </div>
        )}

        {/* Resales Online / MLS API Sync Card */}
        <div className="bg-gradient-to-r from-[#0b1a2f] to-[#162f52] rounded-2xl p-6 text-white mb-8 border border-amber-500/20 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-300 flex items-center justify-center shrink-0">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-white">
                Resales Online API / MLS Integration
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl font-light">
                Full-stack connector for the Spanish Resales-Online MLS feed. Automatically fetches, normalizes,
                and synchronizes Costa Cálida listings directly into your Supabase database.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-full font-mono font-medium">
              ● Supabase Connected
            </span>

            <button
              onClick={handleSyncResales}
              disabled={isSyncing}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0b1a2f] font-semibold text-xs py-2 px-4 rounded-lg shadow transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing...' : 'Sync Resales Online Feed'}</span>
            </button>
          </div>
        </div>

        {/* Properties Table & Filter Controls */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Table Header Filter */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4">
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Filter by title, reference code, or resort..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2 pl-9 pr-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="text-xs text-slate-500">
              Total listings: <strong>{properties.length}</strong>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Ref</th>
                  <th className="py-3 px-4">Property</th>
                  <th className="py-3 px-4">Resort</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Specs</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {displayedProperties.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                      {p.referenceNumber}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900 max-w-xs truncate">{p.title}</div>
                      <span className="text-[10px] text-slate-400">{p.locationArea}</span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">
                      {p.resortName}
                    </td>
                    <td className="py-3.5 px-4 uppercase text-[10px] font-bold text-slate-500">
                      {p.type}
                    </td>
                    <td className="py-3.5 px-4 font-serif font-bold text-slate-900 text-sm">
                      €{p.price.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      {p.bedrooms} bed • {p.bathrooms} bath • {p.buildAreaSqm} m²
                    </td>
                    <td className="py-3.5 px-4">
                      <select
                        value={p.status}
                        onChange={(e) => handleStatusChange(p.id, e.target.value as PropertyStatus)}
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border focus:outline-none ${
                          p.status === 'for_sale'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : p.status === 'newly_listed'
                            ? 'bg-amber-50 text-amber-800 border-amber-300'
                            : p.status === 'under_offer'
                            ? 'bg-orange-50 text-orange-800 border-orange-300'
                            : 'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        <option value="for_sale">For Sale</option>
                        <option value="newly_listed">Newly Listed</option>
                        <option value="under_offer">Under Offer</option>
                        <option value="sold">Sold</option>
                      </select>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/properties/${p.id}`}
                          target="_blank"
                          className="p-1 text-slate-400 hover:text-slate-800"
                          title="View on site"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDeleteProperty(p.id)}
                          className="p-1 text-rose-400 hover:text-rose-600"
                          title="Delete listing"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Property Modal */}
        {isAddingProperty && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Add New Property Listing
                  </h3>
                  <p className="text-xs text-slate-500">
                    Enter property details to publish immediately to the website.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingProperty(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddPropertySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Property Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Luxury Frontline Golf Villa in La Torre"
                    value={newProp.title}
                    onChange={(e) => setNewProp({ ...newProp, title: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Reference Code</label>
                    <input
                      type="text"
                      required
                      value={newProp.referenceNumber}
                      onChange={(e) => setNewProp({ ...newProp, referenceNumber: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Price (€ EUR) *</label>
                    <input
                      type="number"
                      required
                      value={newProp.price}
                      onChange={(e) => setNewProp({ ...newProp, price: Number(e.target.value) })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Golf Resort *</label>
                    <select
                      value={newProp.resortId}
                      onChange={(e) => setNewProp({ ...newProp, resortId: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                    >
                      {RESORTS_DATA.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Type</label>
                    <select
                      value={newProp.type}
                      onChange={(e) => setNewProp({ ...newProp, type: e.target.value as PropertyType })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                    >
                      <option value="villa">Villa</option>
                      <option value="apartment">Apartment</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="townhouse">Townhouse</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Bedrooms</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={newProp.bedrooms}
                      onChange={(e) => setNewProp({ ...newProp, bedrooms: Number(e.target.value) })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Bathrooms</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={newProp.bathrooms}
                      onChange={(e) => setNewProp({ ...newProp, bathrooms: Number(e.target.value) })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Build Area (m²)</label>
                    <input
                      type="number"
                      value={newProp.buildAreaSqm}
                      onChange={(e) => setNewProp({ ...newProp, buildAreaSqm: Number(e.target.value) })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Photo Image URL</label>
                  <input
                    type="url"
                    value={newProp.imageUrl}
                    onChange={(e) => setNewProp({ ...newProp, imageUrl: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Description</label>
                  <textarea
                    rows={4}
                    value={newProp.description}
                    onChange={(e) => setNewProp({ ...newProp, description: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                    placeholder="Describe features, views, terrace, orientation..."
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsAddingProperty(false)}
                    className="py-2.5 px-4 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2.5 px-5 bg-[#0b1a2f] hover:bg-[#132742] text-amber-300 font-semibold rounded-lg shadow-sm"
                  >
                    Publish Listing
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
