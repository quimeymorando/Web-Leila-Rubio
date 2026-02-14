export default function Footer() {
    return (
        <footer className="py-8 bg-violet-950 text-violet-300 text-center text-sm">
            <div className="container mx-auto px-4">
                <p>© {new Date().getFullYear()} Leila Andrea Rubio. Todos los derechos reservados.</p>
                <p className="mt-2 text-violet-400/60 text-xs">Abogacía Holística & Biodecodificación Legal</p>
            </div>
        </footer>
    );
}
