import { useLayoutEffect, useEffect } from "react";

export const useCustomLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;
