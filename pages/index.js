import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Random Character:</h1>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Twitter Name: {data.twitterName}</p>
      <p>Geohash: {data.geohash}</p>
    </div>
  );
}
