
const countriesData: Record<string, { population: string; capital: string }> = {
    USA: { population: "331 million", capital: "Washington, D.C." },
    Canada: { population: "38 million", capital: "Ottawa" },
    pakistan: { population:"240.5 million", capital:" Islamabad"},
    india: { population:"1438 million", capital:" delhi"},
    Mexico: { population: "126 million", capital: "Mexico City" },
    // Add more countries as needed
};

export default function Country({ params }: { params: { country: string } }) {
    const { country } = params; // Access the dynamic route parameter
    const countryInfo = countriesData[country];

    if (!countryInfo) {
        return <h2>Country not found</h2>;
    }

    return (
        <>
            <h1>Country Details</h1>
            <h2>Name: {country}</h2>
            <h2>Population: {countryInfo.population}</h2>
            <h2>Capital: {countryInfo.capital}</h2>
        </>
    );
}
