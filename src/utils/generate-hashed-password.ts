import { hashPassword } from "@/lib/login/password-hashing";

(async () => {
  const minhaSenha = ""; // sempre apagar a senha daqui
  const hashedPassword64 = await hashPassword(minhaSenha);

  console.log({ hashedPassword64 });
})();
