export default function Footer() {
  return (
    <footer className="mt-16 mb-16 flex justify-center">
      <p className="mt-8 text-neutral-600 items-center text-xl dark:text-neutral-300">
        © {new Date().getFullYear()} Isaacs Cloud LLC
      </p>
    </footer>
  )
}