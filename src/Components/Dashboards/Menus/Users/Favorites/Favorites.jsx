import { useEffect, useState } from "react";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const userEmail = "test@gmail.com";

    useEffect(() => {
        fetch(`http://localhost:5000/api/favorites?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setFavorites(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="p-6">
            <h1 className="text-xl font-bold mb-4">My Favorites</h1>

            {favorites.length === 0 ? (
                <p>No favorites yet</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    {favorites.map(fav => (
                        <div key={fav._id} className="bg-amber-100 p-4 rounded">
                            <h3 className="font-bold">{fav.biodata?.name}</h3>
                            <p>{fav.biodata?.profession}</p>
                            <p>{fav.biodata?.district}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;