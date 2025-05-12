"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const LoadMore = ({ limitInt }: { limitInt: number }) => {
  const searchParams = useSearchParams();
  const limit = searchParams.get("limit") || limitInt;
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/profile/trips?limit=${Number(limit) + limitInt}`);
      }}
    >
      Load more
    </button>
  );
};

export default LoadMore;
