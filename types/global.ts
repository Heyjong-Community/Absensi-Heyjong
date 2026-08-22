export type InitState = {
  success: boolean;
  error: string | null;
};

export const responseState: InitState = {
  success: false,
  error: null,
};
