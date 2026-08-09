'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function signUp() {
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setMessage(error.message)
      return
    }

    setMessage('تم إنشاء الحساب. تحقق من بريدك الإلكتروني إذا طُلب منك التأكيد.')
  }

  async function signIn() {
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setMessage(error.message)
      return
    }

    window.location.href = '/'
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-black text-white flex items-center justify-center p-6"
    >
      <div className="w-full max-w-md border border-gray-800 rounded-3xl p-7">
        <div className="text-yellow-500 text-sm text-center mb-3">
          QR LIBYA
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">
          تسجيل الدخول
        </h1>

        <p className="text-gray-400 text-center mb-8">
          ادخل إلى حسابك أو أنشئ حسابًا جديدًا
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-4 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-4 py-4 outline-none"
          />

          <button
            onClick={signIn}
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-bold py-4 rounded-2xl"
          >
            {loading ? 'جاري التنفيذ...' : 'تسجيل الدخول'}
          </button>

          <button
            onClick={signUp}
            disabled={loading}
            className="w-full border border-gray-700 font-bold py-4 rounded-2xl"
          >
            إنشاء حساب جديد
          </button>

          {message && (
            <div className="text-sm text-center text-gray-300 mt-4">
              {message}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
