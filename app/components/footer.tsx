export default function Footer() {
  return (
    <footer className="mt-16 mb-16 flex justify-center">
      <p className="mt-8 items-center text-xl text-white">
        © {new Date().getFullYear()} Isaacs Cloud LLC
      </p>
    </footer>
  )
}