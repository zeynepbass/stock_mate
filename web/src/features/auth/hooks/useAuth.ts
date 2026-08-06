import { useAuthStore } from "../store/auth.store";
import { toast } from "sonner";
import { authRepository } from "../repositories/auth.repository";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function useAuth() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("//");
  }
  const user = useAuthStore((state) => state.user);

  const accessToken = useAuthStore((state) => state.accessToken);

  const refreshToken = useAuthStore((state) => state.refreshToken);

  const expiresAt = useAuthStore((state) => state.expiresAt);
  const handleLogin = useAuthStore((state) => state.login);

  const login = async (...args: Parameters<typeof login>) => {
    await handleLogin(...args);

    toast.success("Başarıyla giriş yaptınız.");
  };

  const logout = useAuthStore((state) => state.logout);
  const [email, setEmail] = useState("test@ornek.com");
  const [password, setPassword] = useState("Test1234!");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const session = await authRepository.login({
        email,
        password,
      });

      login(
        session.user,
        session.accessToken,
        session.refreshToken,
        session.expiresAt
      );

      navigate("/urunler");
    } catch {
      setError("Email veya şifre hatalı.");
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    accessToken,
    refreshToken,
    expiresAt,
    handleSubmit,
    login,error,email,setEmail,password,setPassword,loading,
    handleLogout,
    isOpen,
    setIsOpen,
  };
}
