import { Link } from 'react-router-dom'
import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { AuthShell } from '@/layouts/MobileShell'

export function LoginScreen() {
  return (
    <AuthShell>
      <div className="flex min-h-dvh flex-col px-6 py-12">
        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-full gradient-red">
              <span className="text-sm font-bold text-white">SK</span>
            </div>
            <div>
              <p className="text-label tracking-widest text-text-primary">SUPERMAL KARAWACI</p>
              <p className="text-caption text-text-secondary">Premium Membership</p>
            </div>
          </div>

          <h1 className="text-display text-text-primary">Welcome Back</h1>
          <p className="mt-2 text-body text-text-secondary">
            Sign in to access your rewards, vouchers, and exclusive offers
          </p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input label="Email or Phone" type="text" placeholder="Enter your email or phone" />
            <Input label="Password" type="password" placeholder="Enter your password" />

            <div className="flex justify-end">
              <button type="button" className="text-caption text-primary hover:underline">
                Forgot password?
              </button>
            </div>

            <Button type="submit" fullWidth size="lg">
              Sign In
            </Button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-divider" />
            <span className="text-caption text-text-disabled">or continue with</span>
            <div className="h-px flex-1 bg-divider" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="md">
              Google
            </Button>
            <Button variant="outline" size="md">
              Apple
            </Button>
          </div>
        </div>

        <p className="text-center text-caption text-text-secondary">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-medium text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </AuthShell>
  )
}

export function RegisterScreen() {
  return (
    <AuthShell>
      <div className="flex min-h-dvh flex-col px-6 py-12">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-display text-text-primary">Create Account</h1>
          <p className="mt-2 text-body text-text-secondary">
            Join Supermal Karawaci membership and start earning points
          </p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input label="Full Name" placeholder="Your full name" />
            <Input label="Email" type="email" placeholder="your@email.com" />
            <Input label="Phone Number" type="tel" placeholder="+62 812 3456 7890" />
            <Input label="Password" type="password" placeholder="Min. 8 characters" />

            <Button type="submit" fullWidth size="lg">
              Continue
            </Button>
          </form>
        </div>

        <p className="text-center text-caption text-text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </AuthShell>
  )
}

export function OtpScreen() {
  return (
    <AuthShell>
      <div className="flex min-h-dvh flex-col px-6 py-12">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-display text-text-primary">Verify OTP</h1>
          <p className="mt-2 text-body text-text-secondary">
            Enter the 6-digit code sent to your phone
          </p>

          <div className="mt-8 flex justify-center gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <input
                key={i}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="size-12 rounded-xl border border-border bg-surface-elevated text-center text-title text-text-primary focus:border-primary focus:outline-none"
                aria-label={`Digit ${i + 1}`}
              />
            ))}
          </div>

          <Button fullWidth size="lg" className="mt-8">
            Verify
          </Button>

          <p className="mt-4 text-center text-caption text-text-secondary">
            Didn&apos;t receive code?{' '}
            <button type="button" className="font-medium text-primary hover:underline">
              Resend
            </button>
          </p>
        </div>
      </div>
    </AuthShell>
  )
}
