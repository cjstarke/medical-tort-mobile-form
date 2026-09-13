import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/herniamesh1')
  }, [router])

  return (
    <div>
      <Head>
        <title>Redirecting to Hernia Mesh Free Claim Review</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div>
        Redirecting...
      </div>
    </div>
  )
}
