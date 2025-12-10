'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Project, projectStorage } from '@/lib/storage';
import ProjectForm from '@/components/admin/ProjectForm';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, LogOut } from 'lucide-react';

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        loadProjects();
      }
    });

    return () => unsubscribe();
  }, []);

  const loadProjects = async () => {
    const data = await projectStorage.getAll();
    setProjects(data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('Login failed. Check your credentials.');
      console.error(error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const handleAdd = async (data: Omit<Project, 'id'>) => {
    await projectStorage.add(data);
    loadProjects();
    setShowForm(false);
  };

  const handleEdit = async (data: Omit<Project, 'id'>) => {
    if (editingProject?.id) {
      await projectStorage.update(editingProject.id, data);
      loadProjects();
      setEditingProject(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await projectStorage.delete(id);
      loadProjects();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-primary text-xl">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="your-email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  if (showForm || editingProject) {
    return (
      <div className="min-h-screen bg-background">
        <SectionContainer>
          <ProjectForm
            initialData={editingProject || undefined}
            onSubmit={editingProject ? handleEdit : handleAdd}
            onCancel={() => {
              setShowForm(false);
              setEditingProject(null);
            }}
          />
        </SectionContainer>
      </div>
    );
  }

  const personalProjects = projects.filter(p => p.type === 'personal');
  const contributedProjects = projects.filter(p => p.type === 'contributed');

  return (
    <div className="min-h-screen bg-background">
      <SectionContainer>
        <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
          <SectionHeading>
            <SectionHeading.Part>Project </SectionHeading.Part>
            <SectionHeading.Part primary>Manager</SectionHeading.Part>
          </SectionHeading>
          <div className="flex gap-3">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
            >
              <Plus size={20} />
              Add Project
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut size={20} />
              Logout
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <a href="/" className="flex items-center gap-2 text-primary hover:text-cyan-300 transition-colors">
            <Eye size={20} />
            View Live Site
          </a>
        </div>

        {/* Personal Projects */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">
            Personal Projects ({personalProjects.length})
          </h3>
          {personalProjects.length === 0 ? (
            <p className="text-white/60">No personal projects yet. Add your first one!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {personalProjects.map((project) => (
                <Card key={project.id} className="p-4">
                  <div className="aspect-video mb-3 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-primary font-semibold mb-1">
                    {project.title}
                  </h4>
                  <p className="text-cyan-300 text-sm mb-2">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs rounded bg-primary/20 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setEditingProject(project)}
                      variant="outline"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1"
                    >
                      <Edit size={14} />
                      Edit
                    </Button>
                    <Button
                      onClick={() => project.id && handleDelete(project.id)}
                      variant="destructive"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1"
                    >
                      <Trash2 size={14} />
                      Delete
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Contributed Projects */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contributed Projects ({contributedProjects.length})
          </h3>
          {contributedProjects.length === 0 ? (
            <p className="text-white/60">No contributed projects yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contributedProjects.map((project) => (
                <Card key={project.id} className="p-4">
                  <div className="aspect-video mb-3 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-primary font-semibold mb-1">
                    {project.title}
                  </h4>
                  <p className="text-cyan-300 text-sm mb-2">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs rounded bg-primary/20 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setEditingProject(project)}
                      variant="outline"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1"
                    >
                      <Edit size={14} />
                      Edit
                    </Button>
                    <Button
                      onClick={() => project.id && handleDelete(project.id)}
                      variant="destructive"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1"
                    >
                      <Trash2 size={14} />
                      Delete
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </SectionContainer>
    </div>
  );
}
