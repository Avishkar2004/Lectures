import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <div>
      <h1>Avishkar Kakde</h1>
      <Component {...pageProps} />
    </div>
  )
}
