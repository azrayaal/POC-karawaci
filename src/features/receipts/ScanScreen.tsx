import { Camera, Upload } from 'lucide-react'
import { AppHeader } from '@/components/organisms/AppHeader'
import { Button } from '@/components/atoms/Button'

export function ScanScreen() {
  return (
    <div className="pb-6">
      <AppHeader title="SCAN RECEIPT" showNavMenu />

      <div className="flex flex-col px-4 pt-4">
        <h1 className="text-display text-text-primary">Earn Points</h1>
        <p className="mt-2 text-body text-text-secondary">
          Scan or upload your receipt from participating tenants
        </p>

        <div className="mt-8 flex aspect-[3/4] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface-elevated">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary-muted">
            <Camera className="size-8 text-primary" />
          </div>
          <p className="mt-4 text-subtitle text-text-primary">Position receipt in frame</p>
          <p className="mt-1 text-caption text-text-secondary">Ensure store name and total are visible</p>
        </div>

        <div className="mt-6 space-y-3">
          <Button fullWidth size="lg">
            <Camera className="size-5" />
            Open Camera
          </Button>
          <Button fullWidth size="lg" variant="outline">
            <Upload className="size-5" />
            Upload from Gallery
          </Button>
        </div>
      </div>
    </div>
  )
}
