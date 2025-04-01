export const ErrorHandler = (error: unknown) => {
  if (error instanceof Error) {
    console.error("Error fetching data:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
};

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.log("Error fetching data:", response.statusText);
      return null;
    }

    return response.json();
  } catch (error: unknown) {
    ErrorHandler(error);
    return null;
  }
};
