export const WEIGHT_LEVEL = {
    0: '0.5',
    1: '1.0',
    2: '2.0',
} as const;

export type WeightLevel = keyof typeof WEIGHT_LEVEL;
