
import { useAuth } from "../hooks/useAuth";

import { Button } from "@/shared/components/atoms/Button";
import { FormLabel } from "@/shared/components/molecules/FormLabel";

export function LoginForm() {

  const { login,handleSubmit,error,email,setEmail,password,setPassword,loading } = useAuth();


  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Hoş geldiniz
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          StokMate yönetim paneline giriş yapın.
        </p>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <FormLabel
        label="Email"
        type="email"
        value={email}
        placeholder="email giriniz"
        onChange={(event) => setEmail(event.target.value)}
      />

      <FormLabel
        label="Şifre"
        type="password"
        value={password}
        placeholder="••••••••"
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button
        type="submit"
        loading={loading}
      >
        Giriş Yap
      </Button>
    </form>
  );
}