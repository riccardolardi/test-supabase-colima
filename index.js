const path = require('path')
const dotenv = require('dotenv')
const { createClient } = require('@supabase/supabase-js')

dotenv.config({
  path: path.resolve(__dirname, './.env'),
  // debug: true,
})

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

async function main() {
  const { data, error } = await supabase.auth.admin.createUser({
    email: 'test@test.com',
    password: 'password',
    email_confirm: true,
  })
  if (data) console.info({ data })
  if (error) console.error(error)
}

main().catch((error) => console.error(error))
