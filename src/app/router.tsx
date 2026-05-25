import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MobileShell } from '@/layouts/MobileShell'
import { HomeScreen } from '@/features/home/HomeScreen'
import { RewardsScreen } from '@/features/rewards/RewardsScreen'
import { WalletScreen } from '@/features/wallet/WalletScreen'
import { LoyaltyScreen } from '@/features/loyalty/LoyaltyScreen'
import { DirectoryScreen } from '@/features/directory/DirectoryScreen'
import { ProfileScreen } from '@/features/profile/ProfileScreen'
import { ScanScreen } from '@/features/receipts/ScanScreen'
import { LoginScreen, RegisterScreen, OtpScreen } from '@/features/auth/AuthScreens'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileShell />}>
          <Route index element={<HomeScreen />} />
          <Route path="directory" element={<DirectoryScreen />} />
          <Route path="loyalty" element={<LoyaltyScreen />} />
          <Route path="rewards" element={<RewardsScreen />} />
          <Route path="wallet" element={<WalletScreen />} />
          <Route path="scan" element={<ScanScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
        </Route>

        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="otp" element={<OtpScreen />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
