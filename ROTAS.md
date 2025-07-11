```
SSR-> Server Side Rendering
CSR-> CLient Side Rendering

Static / SSG(Static Site Generation) <- Tenho o HTML pronto
Dynamic <- Não tenho nada pronto
ISR <- Incremental Static Regenaration

/ <- ISR -> Depois de 60s quero atualizar o conteúdo dela
/ <- ISR -> Depois que eu atualizar algum conteúdo ela atualiza

/page.tsx (Pública)
/post/[slug] (Pública)

/admin/post (Privado - Dynamic) - Ler(R) Lista de posts / (D) Delete
/admin/post/[id] (Privado - Dynamic) - Atualizar um post (U)
/admin/post/new (Privado - Dynamic) - Criar um post (C)

/admin/login (Privado - Dynamic) - Fazer o login do usuário
```
