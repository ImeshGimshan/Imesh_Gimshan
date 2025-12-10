'use client';

import { useState } from 'react';
import { Project } from '@/lib/storage';
import Card from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ProjectFormProps {
  initialData?: Project;
  onSubmit: (data: Omit<Project, 'id'>) => void;
  onCancel: () => void;
}

export default function ProjectForm({ initialData, onSubmit, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    subtitle: initialData?.subtitle || '',
    description: initialData?.description || '',
    image: initialData?.image || '',
    tags: initialData?.tags?.join(', ') || '',
    demoLink: initialData?.demoLink || '',
    githubLink: initialData?.githubLink || '',
    type: initialData?.type || 'personal' as 'personal' | 'contributed'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    });
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">
          {initialData ? 'Edit Project' : 'Add New Project'}
        </h2>
        <button
          onClick={onCancel}
          className="text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Title *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="Project Title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Subtitle
          </label>
          <input
            type="text"
            value={formData.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="e.g., (E-Commerce platform)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Description *
          </label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Brief project description"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Image Path *
          </label>
          <input
            type="text"
            required
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="/assets/projects/project-name.png"
          />
          <p className="text-xs text-white/50 mt-2">
            Upload your image to <code className="text-primary">/public/assets/projects/</code> folder first, then enter the path here.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Tags * (comma-separated)
          </label>
          <input
            type="text"
            required
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="React, TypeScript, Tailwind"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Demo Link
            </label>
            <input
              type="url"
              value={formData.demoLink}
              onChange={(e) => setFormData({ ...formData, demoLink: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="https://demo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              GitHub Link
            </label>
            <input
              type="url"
              value={formData.githubLink}
              onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="https://github.com/..."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Project Type *
          </label>
          <select
            required
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as 'personal' | 'contributed' })}
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
          >
            <option value="personal">Personal Project</option>
            <option value="contributed">Contributed Project</option>
          </select>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            type="submit"
            className="flex-1 bg-primary hover:bg-primary/90 text-white"
          >
            {initialData ? 'Update Project' : 'Add Project'}
          </Button>
          <Button
            type="button"
            onClick={onCancel}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
