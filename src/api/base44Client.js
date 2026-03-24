/**
 * Minimal base44 API client.
 * Sends email sign-up data to the /api/signup serverless route.
 */
const base44 = {
  entities: {
    EmailSignup: {
      /**
       * @param {{ email: string, name?: string, notes?: string }} data
       */
      create: async (data) => {
        const res = await fetch("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          throw new Error("Failed to submit sign-up");
        }
        return res.json();
      },
    },
  },
};

export { base44 };
