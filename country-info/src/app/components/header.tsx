import Link from "next/link";
export default function Header() {
    return (
        <header style={{ backgroundColor: 'navy', height: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <h1 style={{ margin: '0' }}>formation of countries</h1>
            <nav style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <h3>Home</h3>
              <h3>Country list</h3>
              <h3>about</h3>
            </nav>
        </header>
    );
}
