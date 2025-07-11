export const trimObjectValues = (obj: any) =>
    Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            key,
            typeof value === "string"
                ? value.replace(/\s+/g, " ").replace(/\s+,/g, ",").trim()
                : value,
        ])
    );
