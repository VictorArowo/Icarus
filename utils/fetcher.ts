export default async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: localStorage.getItem("token")!,
    },
  });
  return await res.json();
};
