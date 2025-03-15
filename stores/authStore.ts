// src/stores/authStore.ts
import { create } from 'zustand'; // Correct import for Zustand v4+
import api from '../services/api';

interface AuthState {
  token: string | null;
  user: any | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/auth/login", { email, password });

      // Vérification du statut HTTP
      if (response.status === 200 && response.data.success) {
        const { token } = response.data.data;

        // Vérifier si un token est présent
        if (token) {
          set({ token, loading: false });
          localStorage.setItem("token", token);
        } else {
          set({ error: "Token manquant. Veuillez réessayer.", loading: false });
        }
      } else {
        // Si l'API retourne un succès false ou un statut autre que 200
        set({ error: response.data.message || "Email ou mot de passe incorrect", loading: false });
      }
    } catch (error: any) {
      // Gestion des erreurs réseau ou serveur
      set({
        error: error.response?.data?.message || "Erreur du serveur. Veuillez vérifier votre connexion.",
        loading: false,
      });
    }
  },

  register: async (email, password, role) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post('/auth/register', { email, password, role });
      if (response.status === 200 && response.data.success) {
        const { token } = response.data.data;
        if (token) {
          set({ token, user: response.data.user, loading: false });
          localStorage.setItem("token", token);
        } else {
          set({ error: "Erreur inattendue lors du set du token", loading: false });
        }
      } else {
        set({ error: response.data.message || "Erreur lors de l'enregistrement", loading: false });
      }
    } catch (error: any) {
      set({ error: error.response?.data?.message || "Erreur lors de l'enregistrement", loading: false });
    }
        
  },

  logout: () => {
    set({ token: null, user: null });
    localStorage.removeItem('token');
  },
}));

export default useAuthStore;