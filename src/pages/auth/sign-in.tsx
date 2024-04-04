import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

export function SignIn() {
  return (
    <div>
      <Helmet title="Login" />

      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div></div>

            <Button type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
